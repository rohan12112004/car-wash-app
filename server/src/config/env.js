import dotenv from 'dotenv';
dotenv.config();

const DEFAULT_MONGO_URI = 'mongodb://premia:premia@ac-sn4tqeu-shard-00-00.pdxrz5f.mongodb.net:27017,ac-sn4tqeu-shard-00-01.pdxrz5f.mongodb.net:27017,ac-sn4tqeu-shard-00-02.pdxrz5f.mongodb.net:27017/carwash?ssl=true&replicaSet=atlas-9zwc9v-shard-0&authSource=admin&retryWrites=true&w=majority';

export const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || DEFAULT_MONGO_URI,
  NODE_ENV: process.env.NODE_ENV || 'production',
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'dev_jwt_access_secret_key_123456789_sparklewash',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'dev_jwt_refresh_secret_key_123456789_sparklewash',
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
  SMTP_PORT: process.env.SMTP_PORT || 587,
  SMTP_USER: process.env.SMTP_USER || 'premiacarwash@gmail.com',
  SMTP_PASS: process.env.SMTP_PASS || 'lyrw fxdw pjqs adbl',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'premiacarwash@gmail.com',
  FRONTEND_URL: process.env.FRONTEND_URL || 'https://car-wash-app-chi.vercel.app',
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy',
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret',
};

// Safe validation without process.exit(1) to avoid killing serverless functions
const requiredEnvVars = ['MONGO_URI', 'JWT_ACCESS_SECRET', 'JWT_REFRESH_SECRET'];
requiredEnvVars.forEach((envVar) => {
  if (!env[envVar]) {
    console.warn(`[Config Warning] Environment variable not set: ${envVar}`);
  }
});
