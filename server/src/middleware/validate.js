import { ApiError } from '../utils/ApiError.js';

export const validate = (schema) => (req, res, next) => {
  try {
    const parsed = schema.parse(req.body);
    req.body = parsed; // Replace with sanitized parsed data
    next();
  } catch (err) {
    const issues = err.issues || err.errors || [];
    const message = issues.map((e) => `${e.path.join('.')}: ${e.message}`).join(' | ') || 'Validation error';
    next(new ApiError(400, message));
  }
};
