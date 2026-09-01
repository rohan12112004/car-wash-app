# Razorpay Payment Setup

This application integrates Razorpay to handle online payments securely.

## 1. Create a Razorpay Account

1. Go to [Razorpay](https://razorpay.com/) and sign up.
2. Complete the KYC process if you intend to go live immediately. For testing, you can operate in **Test Mode** without complete KYC.

## 2. Get API Keys

1. Log in to the Razorpay Dashboard.
2. In the top right corner, ensure the toggle is set to **Test Mode**.
3. Go to **Settings** > **API Keys**.
4. Click **Generate Test Key**.
5. You will get a `Key Id` and `Key Secret`. Keep the secret safe!

## 3. Environment Variables Configuration

Add the keys to your environment files.

**Backend (`/server/.env`):**
```env
RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXX
RAZORPAY_KEY_SECRET=YYYYYYYYYYYYYYYYYYYYYYYY
RAZORPAY_WEBHOOK_SECRET=your_custom_secret_string # (See Step 5)
```

**Frontend (`/client/.env`):**
```env
VITE_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXX
```
*(The frontend only needs the Key ID to initialize the checkout modal. Never expose the Key Secret to the frontend).*

## 4. Payment Flow Diagram

```text
[CLIENT]                      [SERVER]                        [RAZORPAY]
   |                             |                                |
   |--- 1. POST /api/payments -->|                                |
   |       (cart details)        |--- 2. Create Order API ------->|
   |                             |<-- 3. Returns order_id --------|
   |<-- 4. returns order_id -----|                                |
   |                             |                                |
   |--- 5. Opens Razorpay Modal  |                                |
   |--- 6. User enters card info -------------------------------->|
   |                                                              |
   |<---------------------- 7. Payment Success -------------------|
   |    (returns payment_id, order_id, signature)                 |
   |                                                              |
   |--- 8. POST /api/payments/verify ---------------------------->|
   |       (sends IDs and signature)                              |
   |                             |--- 9. Verifies signature       |
   |                             |--- 10. Updates DB status       |
   |<-- 11. Success Response ----|                                |
```

## 5. Webhook Setup (Crucial for Reliability)

Sometimes users close the browser right after paying but before step 8 completes. Webhooks ensure your server still marks the booking as paid.

1. In Razorpay Dashboard, go to **Settings** > **Webhooks**.
2. Click **Add New Webhook**.
3. **Webhook URL**: `https://your-production-api-url.com/api/payments/webhook` (For local testing, use a service like ngrok to expose your localhost to the internet: `ngrok http 5000`).
4. **Secret**: Enter a complex string (e.g., `my_super_secret_webhook_123`). This must match `RAZORPAY_WEBHOOK_SECRET` in your `/server/.env`.
5. **Active Events**: Check `payment.captured` and `payment.failed`.
6. Save.

## 6. Test Card Details

While in Test Mode, you can use Razorpay's dummy cards to simulate payments:

- **Card Number**: `41111111111111111` (Visa) or `5555555555555555` (Mastercard)
- **Expiry**: Any future date (e.g., `12/26`)
- **CVV**: Any 3 digits (e.g., `123`)
- **OTP**: Razorpay will show a simulator screen where you can select Success or Failure.

## 7. Switching to Live Mode

1. Complete Razorpay KYC.
2. Toggle Dashboard to **Live Mode**.
3. Generate Live API Keys (`rzp_live_...`).
4. Update Vercel/VPS production environment variables with the Live keys.
5. Create Live webhooks in the Razorpay dashboard.
