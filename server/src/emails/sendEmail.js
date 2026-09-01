import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

/**
 * Setup Gmail App Password for Nodemailer:
 * 1. Go to your Google Account (Manage your Google Account).
 * 2. Go to Security on the left panel.
 * 3. Under "Signing in to Google", ensure 2-Step Verification is turned ON.
 * 4. Search for "App passwords" in the top search bar.
 * 5. Select App "Mail" and Device "Other (Custom name)", enter "CarWashApp".
 * 6. Click Generate. A 16-character password will be displayed.
 * 7. Copy and paste it as SMTP_PASS in your .env file without spaces.
 * 8. Set SMTP_USER as your gmail address.
 */

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_PORT == 465,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

export const sendEmail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Car Wash Services" <${env.SMTP_USER}>`,
      to,
      subject,
      html,
    });
    logger.info(`Email sent: ${info.messageId}`);
    return true;
  } catch (error) {
    logger.error(`Error sending email: ${error.message}`);
    return false;
  }
};
