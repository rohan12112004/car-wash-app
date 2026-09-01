import express from 'express';
import {
  createBooking,
  getUserBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
  getAllBookings,
} from '../controllers/bookingController.js';
import { protect } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { createBookingSchema } from '../validators/bookingValidators.js';

const router = express.Router();

// Static routes MUST come before parameter routes (/:id)
router.get('/all', getAllBookings);
router.post('/', validate(createBookingSchema), createBooking);

// Parameter routes
router.get('/', protect, getUserBookings);
router.get('/:id', protect, getBookingById);
router.patch('/:id/status', updateBookingStatus);
router.delete('/:id', deleteBooking);

export default router;
