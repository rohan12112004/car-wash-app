# Future Features Roadmap

This document outlines the planned roadmap for features beyond the initial release.

## Phase 2: Enhanced Customer Experience

| Feature | Description | Implementation Strategy | Complexity |
|---|---|---|---|
| **Live Chat** | Provide instant support to customers. | Integrate **Tawk.to** widget. Just inject the JS snippet in `client/index.html` body. No backend needed. | Small |
| **SMS/WhatsApp Notifications** | Alerts for booking status alongside email. | Integrate **Twilio** or **MSG91** (India) / **WhatsApp Business API** in `/server/services/notificationService.js`. Update Booking Controller to trigger SMS. | Medium |
| **Blog & Content CMS** | SEO-focused articles about car care. | Use headless CMS like **Sanity.io** or **Strapi**. Fetch data in frontend and display in new `/client/src/pages/Blog` route. | Medium |
| **i18n (Multi-language)** | English + Regional (e.g., Hindi) toggle. | Use `react-i18next`. Wrap app in provider, replace hardcoded strings with translation keys. Requires updating all UI components. | Large |
| **Dark Mode Toggle** | UI theme switching. | Utilize Tailwind's `dark:` classes. Store preference in localStorage and use a React Context provider to toggle the class on `<html>` tag. | Medium |
| **Customer Reviews** | Verified reviews with before/after photos. | New Mongoose model `Review`. Needs AWS S3/Cloudinary setup for image uploads in Node.js. Display in frontend Service pages. | Large |
| **Loyalty Program** | Points earned per wash. | Add `loyaltyPoints` field to User model. Add logic in Booking/Payment controller to award/redeem points. | Medium |

## Phase 3: Operations & Scale

| Feature | Description | Implementation Strategy | Complexity |
|---|---|---|---|
| **Mobile Application** | Native app for iOS/Android. | Build separate repository using **React Native** (Expo) consuming the exact same Node.js API endpoints. | Large |
| **Technician App/Portal** | Portal for staff to see assigned jobs. | Create new role `ROLE_TECHNICIAN`. Create specific API routes and frontend views for technicians to mark jobs as 'in-progress'/'completed'. | Large |
| **GPS Tracking (Live)** | Track mobile van for at-home washes. | Requires technician app sending periodic location pings. Store in Redis/MongoDB, stream to client via **Socket.io**. | Large |
| **Automated Invoicing (GST)** | Legal tax invoices generated as PDFs. | Use `puppeteer` or `pdfkit` in Node.js backend to generate PDF upon successful payment. Email attachment via Nodemailer. | Medium |
| **Analytics Dashboard** | Charts for revenue, popular services. | Implement **Chart.js** or **Recharts** in frontend Admin Dashboard. Build complex aggregation pipelines in MongoDB to serve data. | Medium |
| **AI Chatbot** | Support bot trained on FAQ. | Integrate **OpenAI API** in backend. Create chat UI in frontend. | Large |
