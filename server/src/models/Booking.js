import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    orderId: { type: String, unique: true, sparse: true, index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    service: { type: String, required: true },
    category: { type: String, required: true },
    subType: { type: String },
    vehicleType: { type: String },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    city: { type: String },
    address: { type: String, required: true },
    specialInstructions: { type: String },
    contactName: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'],
      default: 'pending',
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },
    paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
    amount: { type: Number, default: 499 },
  },
  { timestamps: true }
);

export const Booking = mongoose.model('Booking', bookingSchema);
