# 🏗️ Premia Carwash — System Architecture

This document details the software architecture, data flow, security model, and directory structure of the **Premia Carwash** full-stack application.

---

## 🔑 Key Branding & Security Paths

- **Official Brand Name**: PREMIA CARWASH
- **Founding Year**: 2025 (Founder: Sultan)
- **Official Phone / WhatsApp**: `+91 8882670676`
- **Official Email**: `premiacarwash@gmail.com`
- **Secret Private Admin Portal Path**: `/admin-portal-secure` (Hidden from public footers for security; protected by `AdminRoute` guard).

---

## 📂 Directory Structure Overview

### `/client` (React + Vite + Tailwind v4)

```text
client/
├── public/
│   └── images/          # Local high-res assets (logo.jpeg, vehicle & cleaning photos)
├── src/
│   ├── components/
│   │   ├── admin/       # Admin table cards & status checkmarks
│   │   ├── animations/  # Framer motion fade-ins & gradient blobs
│   │   ├── auth/        # LoginForm, RegisterForm, AdminRoute, ProtectedRoute
│   │   ├── booking/     # BookingWizard, StepIndicator, DateTimePicker
│   │   ├── common/      # Button, ServiceCard, FAQAccordion, WhatsAppFloat
│   │   ├── layout/      # Navbar, Footer, PageWrapper, MobileBottomBar
│   │   └── services/    # CategoryHub, ServiceDetailTemplate
│   ├── data/
│   │   ├── companyInfo.js   # Single source of truth for company details
│   │   └── servicesData.js  # Single source of truth for services & pricing
│   ├── pages/           # All 20+ routes (HomePage, AboutPage, AdminDashboardPage...)
│   ├── services/        # Axios API client (api.js)
│   ├── App.jsx          # Root layout & route wrapper
│   ├── main.jsx         # React 18 createRoot entry
│   └── router.jsx       # Lazy-loaded route definitions
```

### `/server` (Node.js + Express + Mongoose)

```text
server/
├── src/
│   ├── config/          # DB connection & Environment variables
│   ├── controllers/     # Controllers (bookingController, inquiryController, authController)
│   ├── emails/          # Nodemailer SMTP transport & HTML templates
│   ├── middleware/      # Auth JWT verification, Error handling, Rate limiting
│   ├── models/          # Mongoose Schemas (User, Booking, Inquiry, Contact)
│   ├── routes/          # API Route mounting (/api/bookings, /api/inquiries, etc.)
│   ├── services/        # emailService.js (Automated 2-email dispatch)
│   └── server.js        # Express application entry point
```

---

## 🔄 Automated Data & Email Flow

```text
[CUSTOMER FRONTEND]
1. Customer submits Booking Form at /book
2. Frontend validates required fields & formats timezone-safe date string

[AXIOS NETWORK REQUEST]
3. HTTP POST /api/bookings payload -> { contactName, contactPhone, contactEmail, vehicleType, service, date, timeSlot, address, city }

[EXPRESS BACKEND SERVER]
4. /routes/bookingRoutes.js receives payload
5. /controllers/bookingController.js creates Mongoose Booking document
6. /services/emailService.js triggers Nodemailer parallel dispatch:
   ├── Email #1 -> Company Inbox (premiacarwash@gmail.com) with full dispatch details
   └── Email #2 -> Customer Email (contactEmail) with booking confirmation summary
7. Server responds 201 Created

[FRONTEND UX]
8. Client receives 201 -> triggers Canvas Confetti & renders Success Confirmation View
```

---

## 🛡️ Security & Secret Admin Routing

- **Secret Admin Path**: Public pages do not expose admin links in footers. Navigating to `/admin` returns a 404. The secret admin route is `/admin-portal-secure`.
- **Admin Guard (`AdminRoute.jsx`)**: Checks user role (`admin`). Unauthenticated or non-admin users are redirected automatically.
- **Single Source of Truth**: All company branding, phone numbers, email addresses, and founder information pull directly from `client/src/data/companyInfo.js`.

---

&copy; 2025 Premia Carwash • Founder: Sultan • Official Support: `premiacarwash@gmail.com`.
