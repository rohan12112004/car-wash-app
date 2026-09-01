import { Inquiry } from '../models/Inquiry.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { sendFranchiseInquiryEmail } from '../services/emailService.js';
import { env } from '../config/env.js';

export const createInquiry = asyncHandler(async (req, res) => {
  const inquiry = await Inquiry.create(req.body);
  await sendFranchiseInquiryEmail(inquiry, env.ADMIN_EMAIL);
  res.status(201).json({ success: true, data: inquiry });
});

export const getAllInquiries = asyncHandler(async (req, res) => {
  const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: inquiries });
});

export const updateInquiryStatus = asyncHandler(async (req, res) => {
  const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  if (!inquiry) throw new ApiError(404, 'Inquiry not found');
  res.status(200).json({ success: true, data: inquiry });
});

export const deleteInquiry = asyncHandler(async (req, res) => {
  const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
  if (!inquiry) throw new ApiError(404, 'Inquiry not found');
  res.status(200).json({ success: true, message: 'Inquiry deleted successfully' });
});
