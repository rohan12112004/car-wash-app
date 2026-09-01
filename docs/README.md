# Premia Carwash — Full Stack MERN Application Documentation

Welcome to the **Premia Carwash** repository! Founded in **2025** by **Sultan**, Premia Carwash is India's top doorstep car wash, vehicle detailing, commercial cleaning, and home sanitization brand.

---

## 📌 Brand & Project Overview

| Attribute | Details |
|---|---|
| **Brand Name** | PREMIA CARWASH |
| **Founding Year** | 2025 |
| **Founder & CEO** | Sultan |
| **Official Phone / WhatsApp** | `+91 8882670676` |
| **Official Email** | `premiacarwash@gmail.com` |
| **Secret Admin Portal Route** | `/admin-portal-secure` |

This application provides a luxury doorstep booking experience for customers and a central operations portal for administrators. Customers can browse specialized packages (Hatchback, Sedan, SUV, Luxury/Premium), select custom appointment dates and time slots, submit doorstep location details, and receive automated email confirmations.

---

## 🔐 Secret Admin Operations Portal (`/admin-portal-secure`)

To protect customer data and business operations, the admin portal is hidden from public site footers and navigation links.

- **Secret Route**: `/admin-portal-secure`
- **Live Local Access**: [http://localhost:5173/admin-portal-secure](http://localhost:5173/admin-portal-secure)

### 📊 Admin Portal Capabilities
1. **Real-time Status Badges & Updates**: Modify booking status with live visual badges (`Pending ⏳`, `Confirmed ✅`, `In-Progress 🔄`, `Completed 🎉`, `Cancelled ❌`).
2. **Instant Delete Operations**: Remove spam or duplicate booking/contact records with confirmation modals.
3. **Multi-Filter & Search Bar**: Search customer bookings by name, email, phone, city, or service package.
4. **1-Click Data Export**: Export live customer records directly to Microsoft Excel (`.xlsx`) or `.csv` files for offline records and technician scheduling.

---

## 🛠️ Technology Stack

| Layer | Technology | Usage |
|---|---|---|
| **Frontend** | React 18 (Vite 8) | Component architecture & fast HMR |
| | React Router v6 | Code-split lazy routing |
| | Tailwind CSS v4 | Custom `@theme` design tokens & styling |
| | Framer Motion | Smooth scroll reveals & page transitions |
| | Lucide React | Modern vector icon system |
| | Canvas Confetti | Celebration effects on booking completion |
| | SheetJS (XLSX) & CSV | 1-click admin data export (.xlsx & .csv) |
| **Backend** | Node.js + Express | RESTful API server & Serverless functions |
| | MongoDB Atlas + Mongoose | Data persistence & schema validation |
| | JWT (Access & Refresh) | Dual-token authentication & cookies |
| | bcryptjs | Password hashing (12 rounds) |
| | Nodemailer (Gmail SMTP) | Automated 2-email dispatch (Admin + User) |
| | express-rate-limit, Helmet, CORS | Security & Rate limiting |

---

## 🚀 Key Features

- **Multi-Step Filtered Booking Wizard**:
  1. Main Category (*Car Wash*, *Commercial*, *Home Care*)
  2. Sub-Type / Scope (*Hatchback*, *Sedan*, *SUV*, *Luxury/Premium*)
  3. Strictly Filtered Service Selection (shows ONLY matching category packages)
  4. Timezone-fixed Date & Time Slot selection
  5. Mandatory Contact & Doorstep Address Details
  6. Booking Confirmation & Confetti
- **Automated Dual-Email Dispatch**:
  - **Company Inbox Notification**: Dispatched to `premiacarwash@gmail.com`.
  - **Customer Confirmation**: Dispatched to user's email address.
- **Admin Control Operations Portal (`/admin-portal-secure`)**:
  - Status updates with checkmark badges (`Pending ⏳`, `Confirmed ✅`, `In-Progress 🔄`, `Completed 🎉`, `Cancelled ❌`).
  - Delete queries with instant confirmation.
  - Search & City filtering.
  - **1-Click Data Export** to Excel (`.xlsx`) and CSV (`.csv`).
- **Floating WhatsApp Contact Toggle**: Fixed on every page linking directly to `https://wa.me/918882670676`.

---

## 📂 Documentation Directory

Explore the complete step-by-step guides in the `/docs` folder:

- ⚙️ [SETUP.md](./SETUP.md) — Local development, MongoDB, and Environment setup
- 🏗️ [ARCHITECTURE.md](./ARCHITECTURE.md) — Monorepo design, data flow, and secret admin paths
- 📧 [EMAIL_SETUP.md](./EMAIL_SETUP.md) — Gmail App Password setup for automated email dispatch
- 💳 [PAYMENT_SETUP.md](./PAYMENT_SETUP.md) — Razorpay integration & webhook setup
- 🌐 [DEPLOYMENT_VERCEL.md](./DEPLOYMENT_VERCEL.md) — Vercel deployment guide
- 🐧 [DEPLOYMENT_HOSTINGER.md](./DEPLOYMENT_HOSTINGER.md) — Hostinger VPS setup
- 🔌 [API_REFERENCE.md](./API_REFERENCE.md) — REST API endpoints & payload schemas
- 🚀 [FUTURE_FEATURES.md](./FUTURE_FEATURES.md) — Phase 2 & Phase 3 feature roadmap

---

&copy; 2025 Premia Carwash. All rights reserved. Founder: Sultan • Phone: +91 8882670676.
