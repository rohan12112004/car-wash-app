# 📧 Automated Email & SMTP Setup Guide — Premia Carwash

Premia Carwash uses **Nodemailer** with Gmail SMTP to handle automated 2-email dispatch upon booking registration, user signups, franchise lead submissions, and contact queries.

---

## 📩 Automated 2-Email Dispatch Flow

When a customer submits a doorstep booking form:
1. **Email #1 to Premia Inbox (`premiacarwash@gmail.com`)**: Dispatches a full notification containing customer name, phone number, vehicle type, selected service package, appointment date, time slot, and full doorstep address.
2. **Email #2 to Customer (`contactEmail`)**: Dispatches an instant confirmation summary with booking details and customer support contact (`+91 8882670676`).

---

## 🔑 Gmail App Password Setup (Step-by-Step)

Standard Gmail account passwords cannot be used directly for SMTP authentication due to Google security policies. You must generate a **16-character App Password**.

### Step 1: Enable 2-Step Verification
1. Log in to **`premiacarwash@gmail.com`** on [Google Account Security](https://myaccount.google.com/security).
2. Under "How you sign in to Google", ensure **2-Step Verification** is turned **ON**.

### Step 2: Generate App Password
1. In the Google Account search bar at the top, type **"App passwords"** and click on it.
2. Enter an app name (e.g. `Premia Carwash Backend`).
3. Click **Create**. Google will display a 16-character code (e.g. `abcd efgh ijkl mnop`).
4. Copy the 16 characters (remove spaces).

### Step 3: Configure Server `.env` File
In your `server/.env` file, paste your credentials:

```env
# Email Configuration (Nodemailer via Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=premiacarwash@gmail.com
SMTP_PASS=abcdefghijklmnop   # Replace with your 16-character Gmail App Password

# Company Inbox for Admin Notifications
ADMIN_EMAIL=premiacarwash@gmail.com
```

---

## 🛠️ Testing Automated Email Dispatch Locally

1. Start your local Express server:
   ```bash
   cd server
   npm start
   ```
2. Complete a test booking at [http://localhost:5173/book](http://localhost:5173/book).
3. Check **`premiacarwash@gmail.com`** and the test customer inbox for automated confirmations.

---

## 🌟 Production Email Providers (Optional Upgrade)

For high-volume production scale (over 500 emails/day), you can swap Gmail SMTP for SendGrid, Resend, or Amazon SES by updating the `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` in your production environment variables.

---

&copy; 2025 Premia Carwash • Official Email: `premiacarwash@gmail.com` • Phone: `+91 8882670676`.
