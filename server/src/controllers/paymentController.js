import { Payment } from '../models/Payment.js';
import { Booking } from '../models/Booking.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { createRazorpayOrder, verifyRazorpaySignature } from '../services/paymentService.js';
import { sendPaymentEmail } from '../services/emailService.js';
import { env } from '../config/env.js';

/**
 * @desc    Create Razorpay Order
 * @route   POST /api/payments/create-order
 * @access  Private
 * @what    Creates an order ID with Razorpay.
 * @how     Calls Razorpay API, creates local pending Payment record.
 * @why     Required step before opening Razorpay checkout on frontend.
 * @future  Handle split payments.
 */
export const createOrder = asyncHandler(async (req, res) => {
  const { bookingId, amount } = req.body;
  
  const booking = await Booking.findById(bookingId);
  if (!booking) throw new ApiError(404, 'Booking not found');

  const order = await createRazorpayOrder(amount, bookingId.toString());
  
  const payment = await Payment.create({
    booking: bookingId,
    user: req.user._id,
    razorpayOrderId: order.id,
    amount: amount,
  });

  res.status(200).json({ success: true, data: { orderId: order.id, amount, currency: order.currency } });
});

/**
 * @desc    Verify Payment
 * @route   POST /api/payments/verify
 * @access  Private
 * @what    Verifies signature from Razorpay after checkout.
 * @how     Hashes keys, compares signature, updates Payment and Booking status.
 * @why     Ensure payment wasn't tampered with.
 * @future  Add robust webhook handling to catch drop-offs.
 */
export const verifyPayment = asyncHandler(async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

  const isValid = verifyRazorpaySignature(razorpayOrderId, razorpayPaymentId, razorpaySignature);
  
  if (!isValid) {
    throw new ApiError(400, 'Invalid payment signature');
  }

  const payment = await Payment.findOneAndUpdate(
    { razorpayOrderId },
    { razorpayPaymentId, razorpaySignature, status: 'paid' },
    { new: true }
  );

  if (payment) {
    await Booking.findByIdAndUpdate(payment.booking, { paymentStatus: 'paid', paymentId: payment._id });
    await sendPaymentEmail(payment, req.user.email, env.ADMIN_EMAIL);
  }

  res.status(200).json({ success: true, message: 'Payment verified successfully' });
});

/**
 * @desc    Get payment by booking
 * @route   GET /api/payments/booking/:bookingId
 * @access  Private
 */
export const getPaymentByBooking = asyncHandler(async (req, res) => {
  const payment = await Payment.findOne({ booking: req.params.bookingId });
  res.status(200).json({ success: true, data: payment });
});
