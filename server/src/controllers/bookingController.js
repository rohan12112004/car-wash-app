import mongoose from 'mongoose';
import { Booking } from '../models/Booking.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { sendBookingEmail } from '../services/emailService.js';
import { env } from '../config/env.js';

export const createBooking = asyncHandler(async (req, res) => {
  const payload = {
    ...req.body,
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
  }

  res.status(200).json({ success: true, message: 'Booking status updated successfully' });
});

export const deleteBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id)) {
    await Booking.findByIdAndDelete(id);
  }

  res.status(200).json({ success: true, message: 'Booking deleted successfully' });
});

export const getAllBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({}).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: bookings });
});
