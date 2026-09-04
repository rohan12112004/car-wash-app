import { sendEmail } from '../emails/sendEmail.js';
import { env } from '../config/env.js';

// Helper to wrap content in a branded Premia Carwash layout
const wrapLayout = (content) => `
  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden;">
    <div style="background: linear-gradient(90deg, #0B3D2E, #22C55E); padding: 24px; text-align: center; color: white;">
      <h2 style="margin: 0; font-size: 24px; letter-spacing: 1px;">Premia Carwash</h2>
      <p style="margin: 4px 0 0; font-size: 12px; opacity: 0.9;">Founded 2025 by Sultan and Nitin Mukesh • Premier Doorstep Cleaning</p>
    </div>
    <div style="padding: 24px; background-color: #ffffff;">
      ${content}
    </div>
    <div style="background-color: #f8f9fa; padding: 16px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #eee;">
      &copy; ${new Date().getFullYear()} Premia Carwash (+91 8882670676). All rights reserved.
    </div>
  </div>
`;

export const sendRegistrationEmail = async (user, adminEmail) => {
  const userHtml = wrapLayout(`
    <h3>Welcome to Premia Carwash, ${user.name}!</h3>
    <p>Thank you for creating your account with Premia Carwash.</p>
    <p>You can now book our premium doorstep carwash, ceramic polish, and deep sanitization services directly from your dashboard.</p>
  `);
  const adminHtml = wrapLayout(`
    <h3>New User Registration Alert</h3>
    <p>A new customer account has been registered:</p>
    <ul>
      <li><strong>Name:</strong> ${user.name}</li>
      <li><strong>Email:</strong> ${user.email}</li>
      <li><strong>Phone:</strong> ${user.phone || 'N/A'}</li>
    </ul>
  `);
  
  const dispatches = [sendEmail(user.email, 'Welcome to Premia Carwash', userHtml)];
  if (adminEmail) dispatches.push(sendEmail(adminEmail, 'New User Registration Alert', adminHtml));
  await Promise.allSettled(dispatches);
};

export const sendLoginAlertEmail = async (adminEmail, user) => {
  if (!adminEmail) return;
  const adminHtml = wrapLayout(`
    <h3>User Login Alert</h3>
    <p>User ${user.name} (${user.email}) just logged into Premia Carwash portal.</p>
  `);
  await sendEmail(adminEmail, 'User Login Alert — Premia Carwash', adminHtml);
};

export const sendBookingEmail = async (booking, adminEmail) => {
  const details = `
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px; border-radius: 8px; margin: 16px 0;">
      <p style="margin: 4px 0;"><strong>Service Package:</strong> ${booking.service}</p>
      <p style="margin: 4px 0;"><strong>Vehicle Category:</strong> ${booking.vehicleType || 'Standard'}</p>
      <p style="margin: 4px 0;"><strong>Appointment Date:</strong> ${booking.date}</p>
      <p style="margin: 4px 0;"><strong>Time Slot:</strong> ${booking.timeSlot}</p>
      <p style="margin: 4px 0;"><strong>Doorstep Address:</strong> ${booking.address}, ${booking.city || ''}</p>
      <p style="margin: 4px 0;"><strong>Customer Phone:</strong> ${booking.contactPhone}</p>
      <p style="margin: 4px 0;"><strong>Estimated Amount:</strong> ₹${booking.amount || 499}</p>
    </div>
  `;

  // 1. Email to Customer
  const userHtml = wrapLayout(`
    <h3 style="color: #0B3D2E;">Doorstep Booking Confirmed!</h3>
    <p>Dear ${booking.contactName},</p>
    <p>Thank you for booking with <strong>Premia Carwash</strong>. Your doorstep service request has been confirmed. Our detailing team will arrive within 20 mins of your slot start time.</p>
    ${details}
    <p>Need to modify your appointment? Call us anytime at <strong>+91 8882670676</strong>.</p>
  `);

  // 2. Email to Company Inbox (Admin Notification)
  const adminHtml = wrapLayout(`
    <h3 style="color: #0B3D2E;">🚨 New Doorstep Booking Received!</h3>
    <p>A new customer booking has been placed:</p>
    ${details}
    <p><strong>Customer Name:</strong> ${booking.contactName} (${booking.contactEmail})</p>
  `);
  
  // Dispatch both emails in parallel via Promise.allSettled
  const dispatches = [];
  const customerEmail = booking.contactEmail?.trim();
  if (customerEmail) {
    dispatches.push(sendEmail(customerEmail, 'Premia Carwash — Booking Confirmation', userHtml));
  }
  if (adminEmail?.trim()) {
    dispatches.push(sendEmail(adminEmail.trim(), '🚨 New Booking Received — Premia Carwash', adminHtml));
  }

  await Promise.allSettled(dispatches);
};

export const sendPaymentEmail = async (payment, userEmail, adminEmail) => {
  const details = `
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px; border-radius: 8px; margin: 16px 0;">
      <p style="margin: 4px 0;"><strong>Payment Amount:</strong> ₹${payment.amount}</p>
      <p style="margin: 4px 0;"><strong>Transaction ID:</strong> ${payment.razorpayPaymentId || payment._id}</p>
      <p style="margin: 4px 0;"><strong>Payment Status:</strong> Successful (Paid)</p>
    </div>
  `;
  const userHtml = wrapLayout(`
    <h3 style="color: #0B3D2E;">Payment Received — Premia Carwash</h3>
    <p>Dear Customer,</p>
    <p>We have successfully received your payment for Premia Carwash services.</p>
    ${details}
    <p>Thank you for choosing Premia Carwash!</p>
  `);
  const adminHtml = wrapLayout(`
    <h3 style="color: #0B3D2E;">💰 Payment Received Alert</h3>
    <p>A customer payment has been confirmed:</p>
    ${details}
    <p><strong>Customer:</strong> ${userEmail}</p>
  `);

  const dispatches = [];
  if (userEmail) dispatches.push(sendEmail(userEmail, 'Premia Carwash — Payment Receipt', userHtml));
  if (adminEmail) dispatches.push(sendEmail(adminEmail, '💰 New Payment Received — Premia Carwash', adminHtml));
  await Promise.allSettled(dispatches);
};

export const sendFranchiseInquiryEmail = async (inquiry, adminEmail) => {
  if (!adminEmail) return;
  const adminHtml = wrapLayout(`
    <h3 style="color: #0B3D2E;">💼 New Franchise Partner Application</h3>
    <p>A new franchise inquiry has been submitted for Premia Carwash:</p>
    <ul>
      <li><strong>Applicant Name:</strong> ${inquiry.name}</li>
      <li><strong>Email:</strong> ${inquiry.email}</li>
      <li><strong>Phone:</strong> ${inquiry.phone}</li>
      <li><strong>Proposed City/State:</strong> ${inquiry.city}, ${inquiry.state}</li>
      <li><strong>Investment Budget:</strong> ${inquiry.investmentBudget}</li>
      <li><strong>Occupation:</strong> ${inquiry.currentOccupation}</li>
    </ul>
  `);
  await sendEmail(adminEmail, '💼 New Franchise Inquiry — Premia Carwash', adminHtml);
};

export const sendContactEmail = async (contact, adminEmail) => {
  if (!adminEmail) return;
  const adminHtml = wrapLayout(`
    <h3 style="color: #0B3D2E;">📩 New Contact Inquiry</h3>
    <p>A new message was submitted via website contact form:</p>
    <ul>
      <li><strong>Name:</strong> ${contact.name}</li>
      <li><strong>Email:</strong> ${contact.email}</li>
      <li><strong>Phone:</strong> ${contact.phone || 'N/A'}</li>
      <li><strong>Subject:</strong> ${contact.subject || 'General Inquiry'}</li>
      <li><strong>Message:</strong> ${contact.message}</li>
    </ul>
  `);
  await sendEmail(adminEmail, `📩 Contact Inquiry: ${contact.subject || 'New Message'}`, adminHtml);
};
