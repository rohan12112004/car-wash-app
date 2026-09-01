import { z } from 'zod';

export const createInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Invalid email address'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  investmentBudget: z.string().min(1, 'Investment budget is required'),
  currentOccupation: z.string().min(1, 'Current occupation is required'),
  message: z.string().optional(),
});
