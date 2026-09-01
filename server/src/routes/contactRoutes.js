import express from 'express';
import { createContact, getAllContacts } from '../controllers/contactController.js';
import { validate } from '../middleware/validate.js';
import { createContactSchema } from '../validators/contactValidators.js';

const router = express.Router();

router.post('/', validate(createContactSchema), createContact);
router.get('/', getAllContacts);

export default router;
