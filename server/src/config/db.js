import mongoose from 'mongoose';
import { env } from './env.js';
import { logger } from '../utils/logger.js';

const FALLBACK_DIRECT_URI = 'mongodb://premia:premia@ac-sn4tqeu-shard-00-00.pdxrz5f.mongodb.net:27017,ac-sn4tqeu-shard-00-01.pdxrz5f.mongodb.net:27017,ac-sn4tqeu-shard-00-02.pdxrz5f.mongodb.net:27017/carwash?ssl=true&replicaSet=atlas-9zwc9v-shard-0&authSource=admin&retryWrites=true&w=majority';

export const connectDB = async () => {
  // If already connected, return existing connection immediately
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  // Primary connection attempt
  try {
    const conn = await mongoose.connect(env.MONGO_URI, {
      serverSelectionTimeoutMS: 6000,
    });
    logger.info(`MongoDB Connected Successfully: ${conn.connection.host}`);
    return conn;
  } catch (primaryErr) {
    logger.warn(`Primary MongoDB connection failed (${primaryErr.message}). Retrying with direct replica set URI...`);
    try {
      const fallbackConn = await mongoose.connect(FALLBACK_DIRECT_URI, {
        serverSelectionTimeoutMS: 8000,
      });
      logger.info(`MongoDB Connected via Direct Fallback: ${fallbackConn.connection.host}`);
      return fallbackConn;
    } catch (fallbackErr) {
      logger.error(`All MongoDB connection attempts failed: ${fallbackErr.message}`);
      throw fallbackErr;
    }
  }
};
