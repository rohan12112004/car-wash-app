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
  const orderIdDisplay = booking.orderId || 'Pending Allocation';

  // Format date nicely (e.g., "September 21, 2026")
  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr || 'To be confirmed';
      return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch { return dateStr || 'To be confirmed'; }
  };

  const formattedDate = formatDate(booking.date);
  const vehicleType = booking.vehicleType ? booking.vehicleType.charAt(0).toUpperCase() + booking.vehicleType.slice(1) : 'Standard';
  const amount = Number(booking.amount) || 499;
  const amountFormatted = `₹${amount.toFixed(2)}`;
  const serviceName = `${booking.service}${booking.vehicleType ? ' - ' + vehicleType : ''}`;

  // 1. Invoice-style Email to Customer
  const userHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8;padding:20px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);max-width:600px;width:100%;">

  <!-- Header -->
  <tr>
    <td style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #eee;">
      <h1 style="margin:0;font-size:28px;color:#1B3A5C;font-weight:bold;letter-spacing:1px;">Premia Carwash</h1>
      <p style="margin:6px 0 0;font-size:14px;color:#999;font-weight:400;">Order Confirmation</p>
    </td>
  </tr>

  <!-- Order Reference -->
  <tr>
    <td style="padding:28px 40px 20px;">
      <table role="presentation" cellpadding="0" cellspacing="0" style="border-left:4px solid #1B3A5C;padding-left:16px;">
        <tr><td>
          <p style="margin:0 0 6px;font-size:14px;color:#333;"><strong style="color:#1B3A5C;">Order Reference:</strong> ${orderIdDisplay}</p>
          <p style="margin:0;font-size:14px;color:#333;"><strong style="color:#1B3A5C;">Order Date:</strong> ${formattedDate}</p>
        </td></tr>
      </table>
    </td>
  </tr>

  <!-- Customer Details Section -->
  <tr>
    <td style="padding:10px 40px 0;">
      <h2 style="margin:0 0 8px;font-size:18px;color:#1B3A5C;font-weight:bold;">Customer Details</h2>
      <hr style="border:none;border-top:3px solid #1B3A5C;margin:0 0 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#333;">
        <tr><td style="padding:6px 0;"><strong style="color:#333;">Name</strong></td></tr>
        <tr><td style="padding:0 0 12px;color:#555;">${booking.contactName}</td></tr>
        <tr><td style="padding:6px 0;"><strong style="color:#333;">Email</strong></td></tr>
        <tr><td style="padding:0 0 12px;"><a href="mailto:${booking.contactEmail}" style="color:#2B5C8A;text-decoration:none;">${booking.contactEmail}</a></td></tr>
        <tr><td style="padding:6px 0;"><strong style="color:#333;">Mobile Number</strong></td></tr>
        <tr><td style="padding:0 0 12px;color:#555;">${booking.contactPhone}</td></tr>
        <tr><td style="padding:6px 0;"><strong style="color:#333;">Service Address</strong></td></tr>
        <tr><td style="padding:0 0 12px;color:#555;">${booking.address}${booking.city ? ', ' + booking.city : ''}</td></tr>
      </table>
    </td>
  </tr>

  <!-- Service Details Section -->
  <tr>
    <td style="padding:20px 40px 0;">
      <h2 style="margin:0 0 8px;font-size:18px;color:#1B3A5C;font-weight:bold;">Service Details</h2>
      <hr style="border:none;border-top:3px solid #1B3A5C;margin:0 0 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
        <!-- Table Header -->
        <tr style="color:#555;">
          <td style="padding:10px 8px;font-weight:bold;width:30%;">Service Name</td>
          <td style="padding:10px 8px;font-weight:bold;text-align:center;width:20%;">Vehicle Category</td>
          <td style="padding:10px 8px;font-weight:bold;text-align:center;width:16%;">Price</td>
          <td style="padding:10px 8px;font-weight:bold;text-align:center;width:14%;">Quantity</td>
          <td style="padding:10px 8px;font-weight:bold;text-align:right;width:20%;">Total</td>
        </tr>
        <tr><td colspan="5" style="border-bottom:3px solid #1B3A5C;"></td></tr>
        <!-- Service Row -->
        <tr style="color:#333;">
          <td style="padding:14px 8px;font-size:14px;">${serviceName}</td>
          <td style="padding:14px 8px;text-align:center;font-size:14px;">${vehicleType}</td>
          <td style="padding:14px 8px;text-align:center;font-size:14px;">${amountFormatted}</td>
          <td style="padding:14px 8px;text-align:center;font-size:14px;">1</td>
          <td style="padding:14px 8px;text-align:right;font-size:14px;font-weight:bold;color:#1B3A5C;">${amountFormatted}</td>
        </tr>
        <tr><td colspan="5" style="border-bottom:1px solid #e5e7eb;"></td></tr>
      </table>
    </td>
  </tr>

  <!-- Totals -->
  <tr>
    <td style="padding:16px 40px 8px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
        <tr>
          <td style="text-align:right;padding:6px 8px;color:#555;">Subtotal:</td>
          <td style="text-align:right;padding:6px 8px;width:120px;color:#333;">${amountFormatted}</td>
        </tr>
        <tr>
          <td style="text-align:right;padding:8px 8px;font-weight:bold;font-size:16px;color:#1B3A5C;">Grand Total:</td>
          <td style="text-align:right;padding:8px 8px;width:120px;font-weight:bold;font-size:16px;color:#1B3A5C;">${amountFormatted}</td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Time Slot Info -->
  <tr>
    <td style="padding:16px 40px 6px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f7ff;border-radius:8px;padding:14px 16px;">
        <tr><td style="padding:8px 16px;font-size:13px;color:#1B3A5C;">
          <strong>Appointment Slot:</strong> ${formattedDate} (${booking.timeSlot})<br>
          <span style="font-size:12px;color:#666;">Our professional technician will arrive within 20 mins of your slot start time.</span>
        </td></tr>
      </table>
    </td>
  </tr>

  <!-- Tracking Info -->
  <tr>
    <td style="padding:16px 40px 8px;text-align:center;">
      <p style="margin:0;font-size:13px;color:#555;">
        Track your order using Order ID <strong style="color:#1B3A5C;">${orderIdDisplay}</strong> on our website or call <strong>+91 8882670676</strong>.
      </p>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="padding:20px 40px;text-align:center;border-top:1px solid #eee;background-color:#f9fafb;">
      <p style="margin:0;font-size:12px;color:#999;">&copy; ${new Date().getFullYear()} Premia Carwash (+91 8882670676). All rights reserved.</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;

  // 2. Email to Company Inbox (Admin Notification — kept with wrapLayout)
  const adminDetails = `
    <div style="background: #f0fdf4; border: 2px solid #22c55e; padding: 18px; border-radius: 10px; margin: 16px 0;">
      <div style="background: #0B3D2E; color: #ffffff; padding: 8px 14px; border-radius: 6px; margin-bottom: 14px; display: inline-block;">
        <span style="font-size: 11px; letter-spacing: 1px; text-transform: uppercase; display: block; opacity: 0.85;">Tracking Order ID</span>
        <span style="font-size: 18px; font-weight: bold; letter-spacing: 1.5px;">${orderIdDisplay}</span>
      </div>
      <p style="margin: 4px 0;"><strong>Service Package:</strong> ${booking.service}</p>
      <p style="margin: 4px 0;"><strong>Vehicle Category:</strong> ${vehicleType}</p>
      <p style="margin: 4px 0;"><strong>Appointment Date:</strong> ${formattedDate}</p>
      <p style="margin: 4px 0;"><strong>Time Slot:</strong> ${booking.timeSlot}</p>
      <p style="margin: 4px 0;"><strong>Doorstep Address:</strong> ${booking.address}, ${booking.city || ''}</p>
      <p style="margin: 4px 0;"><strong>Customer Phone:</strong> ${booking.contactPhone}</p>
      <p style="margin: 4px 0;"><strong>Estimated Amount:</strong> ${amountFormatted}</p>
    </div>
  `;
  const adminHtml = wrapLayout(`
    <h3 style="color: #0B3D2E;">🚨 New Doorstep Booking Received!</h3>
    <p>A new customer booking has been placed with Order ID: <strong style="color: #0B3D2E; font-size: 16px;">${orderIdDisplay}</strong></p>
    ${adminDetails}
    <p><strong>Customer Name:</strong> ${booking.contactName} (${booking.contactEmail})</p>
  `);
  
  // Dispatch both emails in parallel via Promise.allSettled
  const dispatches = [];
  const customerEmail = booking.contactEmail?.trim();
  if (customerEmail) {
    dispatches.push(sendEmail(customerEmail, `Premia Carwash — Order Confirmation [${orderIdDisplay}]`, userHtml));
  }
  if (adminEmail?.trim()) {
    dispatches.push(sendEmail(adminEmail.trim(), `🚨 New Booking Received [${orderIdDisplay}] — Premia Carwash`, adminHtml));
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
