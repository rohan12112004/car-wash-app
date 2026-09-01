# ⚙️ Premia Carwash — Complete Local Setup Guide

This guide will walk you through setting up the **Premia Carwash** MERN application for local development, database configuration, and automated email setup.

---

## 📌 Business & Configuration Summary

- **Company Name**: PREMIA CARWASH
- **Founder & CEO**: Sultan (Founded 2025)
- **Official Phone / WhatsApp**: `+91 8882670676`
- **Official Email**: `premiacarwash@gmail.com`
- **Secret Private Admin Portal Path**: `/admin-portal-secure`

---

## 🛠️ Prerequisites

Ensure you have the following installed:
1. **Node.js (v18 or higher)**: Download from [nodejs.org](https://nodejs.org/).
2. **MongoDB Atlas Account**: Or local MongoDB (`mongodb://127.0.0.1:27017/carwash`).
3. **Gmail Account**: `premiacarwash@gmail.com` (for automated Nodemailer dispatch).
4. **Git**: For version control.

---

## 🚀 Step 1: Install Dependencies

### Client (React + Vite 8)
```bash
cd client
npm install
```

### Server (Express + Mongoose)
```bash
cd ../server
npm install
```

---

## 🔑 Step 2: Configure Environment Variables

### Server `.env` File (`/server/.env`)
Create `/server/.env` with the following variables:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# MongoDB Atlas or Local Connection
MONGODB_URI=mongodb://127.0.0.1:27017/carwash

# JWT Secret Keys
JWT_ACCESS_SECRET=dev_jwt_access_secret_key_123456789_premia
JWT_REFRESH_SECRET=dev_jwt_refresh_secret_key_123456789_premia
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Automated Email Dispatch (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=premiacarwash@gmail.com
SMTP_PASS=your_16_character_gmail_app_password

# Admin Notification Inbox
ADMIN_EMAIL=premiacarwash@gmail.com
```

### Client `.env` File (`/client/.env`)
Create `/client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 💻 Step 3: Run Development Servers

Open two terminal windows:

**Terminal 1 (Backend - Port 5000)**
```bash
cd server
npm start
```

**Terminal 2 (Frontend - Port 5173)**
```bash
cd client
npm run dev
```

Open your browser at **[http://localhost:5173/](http://localhost:5173/)**.
Secret Admin Portal is available at **[http://localhost:5173/admin-portal-secure](http://localhost:5173/admin-portal-secure)**.

---

## 🔍 Troubleshooting

### 1. `EAUTH` Invalid Gmail Credentials
- Follow [EMAIL_SETUP.md](./EMAIL_SETUP.md) to generate a 16-character **Gmail App Password** for `premiacarwash@gmail.com`.
- Standard Gmail login passwords will not work.

### 2. Port Conflict (`Port 5173 in use`)
- Kill stale Node processes using `taskkill /F /IM node.exe` (Windows) or `pkill -f node` (Mac/Linux).

---

&copy; 2025 Premia Carwash • Founder: Sultan • Phone: `+91 8882670676`.
