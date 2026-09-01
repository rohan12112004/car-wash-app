# 🚗 Premia Carwash — Full Stack MERN Application

Welcome to the **Premia Carwash** repository! Founded in **2025** by **Sultan**, Premia Carwash is India's leading doorstep vehicle washing, car detailing, commercial fleet care, and home cleaning brand.

---

## 🔐 Secret Admin Operations Portal (`/admin-portal-secure`)

To protect customer data and business operations, the admin portal is hidden from public site footers and navigation links.

- **Secret Route**: `/admin-portal-secure`
- **Live Local Access**: [http://localhost:5173/admin-portal-secure](http://localhost:5173/admin-portal-secure)

### 📊 Admin Portal Features
1. **Real-time Status Updates**: Change booking states on the fly with live status badges (`Pending ⏳`, `Confirmed ✅`, `In-Progress 🔄`, `Completed 🎉`, `Cancelled ❌`).
2. **Instant Delete Operations**: Remove spam or duplicate booking/contact records with confirmation modals.
3. **Multi-Filter & Search Bar**: Search customer bookings by name, email, phone, city, or service package.
4. **1-Click Data Export**: Export live customer records directly to Microsoft Excel (`.xlsx`) or `.csv` files for offline records and technician scheduling.

---

## ⚡ Quick Documentation Index

All technical guides and setup instructions are located in the [`/docs`](./docs) folder:

- 📖 [Main Documentation](./docs/README.md) — Tech stack, key features, and monorepo structure
- ⚙️ [Local Setup Guide](./docs/SETUP.md) — Environment variables, local dev, and troubleshooting
- 🏗️ [System Architecture](./docs/ARCHITECTURE.md) — Layered architecture, secret admin routing, data flows
- 📧 [Email & SMTP Setup](./docs/EMAIL_SETUP.md) — Gmail App Password setup & 2-email automated dispatch
- 💳 [Razorpay Integration](./docs/PAYMENT_SETUP.md) — Payment gateway setup & verification
- 🌐 [Vercel Deployment Guide](./docs/DEPLOYMENT_VERCEL.md) — Frontend production deployment
- 🐧 [VPS Deployment Guide](./docs/DEPLOYMENT_HOSTINGER.md) — Full stack VPS deployment
- 🔌 [API Reference](./docs/API_REFERENCE.md) — REST API endpoints & payload schemas
- 🚀 [Future Features Roadmap](./docs/FUTURE_FEATURES.md) — Phase 2 & Phase 3 roadmap

---

## 📦 How to Push to Your GitHub Repository

If Git is installed on your computer, run these commands in your terminal:

```bash
cd car-wash-app

# 1. Initialize Git repository
git init

# 2. Add all files to staging
git add .

# 3. Commit changes
git commit -m "Initial commit: Premia Carwash Full Stack MERN Application"

# 4. Link your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

*(Note: If `git` is not recognized, install Git from [git-scm.com](https://git-scm.com/) and run the commands above).*

---

## 📞 Business Information

- **Brand Name**: PREMIA CARWASH
- **Founder & CEO**: Sultan (Founded 2025)
- **Official Phone / WhatsApp**: `+91 8882670676`
- **Official Email**: `premiacarwash@gmail.com`
- **Secret Private Admin Portal Path**: `/admin-portal-secure`

---

&copy; 2025 Premia Carwash. All rights reserved. Founder: Sultan • Support: premiacarwash@gmail.com.
