import { z } from 'zod';

export const createBookingSchema = z.object({
  service: z.string().min(1, 'Service is required'),
  category: z.string().min(1, 'Category is required'),
  subType: z.string().optional(),
  vehicleType: z.string().optional(),
  date: z.string().min(1, 'Date is required'),
  timeSlot: z.string().min(1, 'Time slot is required'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().optional(),
  specialInstructions: z.string().optional(),
  contactName: z.string().min(2, 'Contact name is required'),
  contactEmail: z.string().email('Invalid email address'),
  contactPhone: z.string().min(10, 'Valid phone number is required'),
  amount: z.number().positive('Amount must be positive').optional(),
});
