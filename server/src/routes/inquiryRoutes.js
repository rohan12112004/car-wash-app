import express from 'express';
import {
  createInquiry,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from '../controllers/inquiryController.js';
import { validate } from '../middleware/validate.js';
import { createInquirySchema } from '../validators/inquiryValidators.js';
import { generalFormLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', generalFormLimiter, validate(createInquirySchema), createInquiry);
router.get('/', getAllInquiries);
router.patch('/:id', updateInquiryStatus);
router.delete('/:id', deleteInquiry);

export default router;
