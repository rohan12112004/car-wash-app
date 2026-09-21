import { z } from 'zod';

export const createBookingSchema = z.object({
  service: z.string().trim().min(1, 'Service is required'),
  category: z.string().trim().min(1, 'Category is required'),
  subType: z.string().trim().optional(),
  vehicleType: z.string().trim().optional(),
  date: z.string().trim().min(1, 'Date is required'),
  timeSlot: z.string().trim().min(1, 'Time slot is required'),
  address: z.string().trim().min(5, 'Address must be at least 5 characters'),
  city: z.string().trim().optional(),
  specialInstructions: z.string().trim().optional(),
  contactName: z.string().trim().min(2, 'Contact name is required'),
  contactEmail: z.string().trim().email('Invalid email address'),
  contactPhone: z.string().trim().min(10, 'Valid phone number is required'),
  amount: z.coerce.number().positive('Amount must be positive').optional(),
});
