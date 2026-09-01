import Razorpay from 'razorpay';
import crypto from 'crypto';
import { env } from '../config/env.js';

let razorpayInstance;
if (env.RAZORPAY_KEY_ID && env.RAZORPAY_KEY_SECRET) {
  razorpayInstance = new Razorpay({
    key_id: env.RAZORPAY_KEY_ID,
    key_secret: env.RAZORPAY_KEY_SECRET,
  });
}

export const createRazorpayOrder = async (amount, receipt) => {
  if (!razorpayInstance) throw new Error('Razorpay not configured');
  
  const options = {
    amount: Math.round(amount * 100), // amount in paise
    currency: 'INR',
    receipt: receipt,
  };
  
  return await razorpayInstance.orders.create(options);
};

export const verifyRazorpaySignature = (orderId, paymentId, signature) => {
  const text = `${orderId}|${paymentId}`;
  const expectedSignature = crypto
    .createHmac('sha256', env.RAZORPAY_KEY_SECRET)
    .update(text)
    .digest('hex');
    
  return expectedSignature === signature;
};
