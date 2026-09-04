import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, required: true, default: 250000301 },
});

export const Counter = mongoose.model('Counter', counterSchema);
