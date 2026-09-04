import express from 'express';
import {
  createBooking,
  getUserBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
  getAllBookings,
  trackBooking,
} from '../controllers/bookingController.js';
import { protect } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { createBookingSchema } from '../validators/bookingValidators.js';

const router = express.Router();

// Static routes & tracking route (MUST come before /:id)
router.get('/all', getAllBookings);
router.get('/track/:query', trackBooking);
router.post('/', validate(createBookingSchema), createBooking);

// Parameter routes
router.get('/', protect, getUserBookings);
router.get('/:id', protect, getBookingById);
router.patch('/:id/status', updateBookingStatus);
router.delete('/:id', deleteBooking);

export default router;
