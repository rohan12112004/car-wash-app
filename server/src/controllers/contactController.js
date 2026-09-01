import { Contact } from '../models/Contact.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendContactEmail } from '../services/emailService.js';
import { env } from '../config/env.js';

/**
 * @desc    Submit contact form
 * @route   POST /api/contacts
 * @access  Public
 * @what    Saves a contact message and emails admin.
 * @how     Creates record, sends email.
 * @why     Customer support.
 * @future  Rate limiting and spam detection.
 */
export const createContact = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);
  await sendContactEmail(contact, env.ADMIN_EMAIL);
  res.status(201).json({ success: true, data: contact });
});

/**
 * @desc    Get all contact messages
 * @route   GET /api/contacts
 * @access  Private/Admin
 * @what    Retrieves contact messages.
 * @how     Queries Contact collection.
 * @why     Admin support dashboard.
 * @future  Reply directly from dashboard.
 */
export const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: contacts });
});
