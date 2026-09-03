import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

const isGmail = env.SMTP_HOST?.includes('gmail') || env.SMTP_USER?.includes('gmail');

const transporter = nodemailer.createTransport(
  isGmail
    ? {
        service: 'gmail',
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PASS ? env.SMTP_PASS.replace(/\s+/g, '') : '',
        },
      }
    : {
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        secure: env.SMTP_PORT == 465,
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PASS ? env.SMTP_PASS.replace(/\s+/g, '') : '',
        },
      }
);

export const sendEmail = async (to, subject, html) => {
  try {
    const cleanTo = String(to).trim();
    if (!cleanTo || !cleanTo.includes('@')) {
      logger.error(`Invalid recipient email: ${to}`);
      return false;
    }

    const info = await transporter.sendMail({
      from: `"Premia Carwash" <${env.SMTP_USER}>`,
      to: cleanTo,
      replyTo: env.ADMIN_EMAIL || env.SMTP_USER,
      subject,
      html,
    });
    logger.info(`Email successfully dispatched to ${cleanTo}: ${info.messageId}`);
    return true;
  } catch (error) {
    logger.error(`Error sending email to ${to}: ${error.message}`);
    return false;
  }
};
