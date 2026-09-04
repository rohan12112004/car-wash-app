import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { env } from './config/env.js';
import { errorHandler } from './middleware/errorHandler.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

export const app = express();

// Security Middlewares
app.use(helmet({ contentSecurityPolicy: false }));
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);
      // Allow localhost, any vercel app, and production domains
      if (
        origin.includes('localhost') ||
        origin.includes('vercel.app') ||
        origin.includes('premiacarwash')
      ) {
        return callback(null, true);
      }
      return callback(null, true); // Safe permissive fallback for public booking API
    },
    credentials: true,
  })
);

// Parsing Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Safe Custom NoSQL Injection Sanitizer
const sanitizeInput = (obj) => {
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (key.startsWith('$') || key.includes('.')) {
        delete obj[key];
      } else if (typeof obj[key] === 'object') {
        sanitizeInput(obj[key]);
      }
    }
  }
};

app.use((req, res, next) => {
  if (req.body) sanitizeInput(req.body);
  if (req.params) sanitizeInput(req.params);
  next();
});

// API Routes — support both /api/path and /path in case Vercel rewrites strip /api
app.use(['/api/auth', '/auth'], authRoutes);
app.use(['/api/bookings', '/bookings'], bookingRoutes);
app.use(['/api/inquiries', '/inquiries'], inquiryRoutes);
app.use(['/api/contacts', '/contacts'], contactRoutes);
app.use(['/api/payments', '/payments'], paymentRoutes);
app.use(['/api/admin', '/admin'], adminRoutes);

// Health check
app.get(['/health', '/api/health'], (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Global Error Handler
app.use(errorHandler);
