import mongoose from 'mongoose';
import { Booking } from '../models/Booking.js';
import { Counter } from '../models/Counter.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { sendBookingEmail } from '../services/emailService.js';
import { env } from '../config/env.js';

// Atomic sequential Order ID generator starting from pcw-250000301
export const getNextOrderId = async () => {
  const existing = await Counter.findById('bookingOrderId');
  if (!existing) {
    // Check if there is an existing booking with a pcw- id
    const lastBooking = await Booking.findOne({ orderId: { $regex: /^pcw-/i } }).sort({ orderId: -1 });
    let startSeq = 250000301;
    if (lastBooking && lastBooking.orderId) {
      const match = lastBooking.orderId.match(/\d+/);
      if (match) {
        startSeq = Math.max(startSeq, parseInt(match[0], 10) + 1);
      }
    }
    await Counter.create({ _id: 'bookingOrderId', seq: startSeq });
    return `pcw-${startSeq}`;
  }

  const counter = await Counter.findByIdAndUpdate(
    'bookingOrderId',
    { $inc: { seq: 1 } },
    { new: true }
  );
  return `pcw-${counter.seq}`;
};

export const createBooking = asyncHandler(async (req, res) => {
  const orderId = await getNextOrderId();

  const payload = {
    ...req.body,
    orderId,
    user: req.user?._id || undefined,
  };

  const booking = await Booking.create(payload);

  // Send automated email notifications asynchronously
  try {
    await sendBookingEmail(booking, env.ADMIN_EMAIL);
  } catch (err) {
    console.error('Email dispatch notification log:', err.message);
  }

  res.status(201).json({ success: true, data: booking });
});

export const trackBooking = asyncHandler(async (req, res) => {
  const { query } = req.params;
  if (!query || !query.trim()) {
    throw new ApiError(400, 'Please provide an Order ID or Phone Number to track.');
  }

  const cleanQuery = query.trim();

  // 1. Search by Order ID (case-insensitive, e.g. pcw-250000301)
  let booking = await Booking.findOne({
    orderId: { $regex: new RegExp(`^${cleanQuery}$`, 'i') }
  });

  // 2. Search by exact MongoDB ObjectId
  if (!booking && mongoose.Types.ObjectId.isValid(cleanQuery)) {
    booking = await Booking.findById(cleanQuery);
  }

  // 3. Search by Phone Number
  if (!booking) {
    booking = await Booking.findOne({ contactPhone: cleanQuery }).sort({ createdAt: -1 });
  }

  if (!booking) {
    throw new ApiError(404, `No booking found for "${cleanQuery}". Please check your Order ID and try again.`);
  }

  res.status(200).json({ success: true, data: booking });
});

export const getUserBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user?._id }).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: bookings });
});

export const getBookingById = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new ApiError(404, 'Booking not found');
  }

  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    throw new ApiError(404, 'Booking not found');
  }

  res.status(200).json({ success: true, data: booking });
});

export const updateBookingStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (mongoose.Types.ObjectId.isValid(id)) {
    await Booking.findByIdAndUpdate(id, { status }, { new: true, runValidators: true });
  } else {
    // Also allow updating status by orderId!
    await Booking.findOneAndUpdate({ orderId: id }, { status }, { new: true, runValidators: true });
  }

  res.status(200).json({ success: true, message: 'Booking status updated successfully' });
});

export const deleteBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id)) {
    await Booking.findByIdAndDelete(id);
  } else {
    await Booking.findOneAndDelete({ orderId: id });
  }

  res.status(200).json({ success: true, message: 'Booking deleted successfully' });
});

export const getAllBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({}).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: bookings });
});
