import express from 'express';
import { createOrder, verifyPayment, getPaymentByBooking } from '../controllers/paymentController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/create-order', protect, createOrder);
router.post('/verify', protect, verifyPayment);
router.get('/booking/:bookingId', protect, getPaymentByBooking);

export default router;
