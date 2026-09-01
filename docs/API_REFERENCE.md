# 🔌 REST API Reference — Premia Carwash

Base API Path: `/api`

---

## 1. Doorstep Bookings (`/api/bookings`)

### `POST /api/bookings`
Submit a new doorstep carwash, commercial, or home cleaning booking. Triggers automated 2-email dispatch (`premiacarwash@gmail.com` + customer email).
- **Auth Required**: No (Guest & Registered booking allowed)
- **Request Body**:
  ```json
  {
    "category": "Car Wash",
    "subType": "sedan",
    "service": "Foam Wash & Detailing",
    "date": "2026-09-02",
    "timeSlot": "10:00 AM - 12:00 PM",
    "contactName": "Sultan Kumar",
    "contactPhone": "8882670676",
    "contactEmail": "premiacarwash@gmail.com",
    "city": "Delhi NCR",
    "address": "Sector 62, Building A, Suite 402, Noida",
    "specialInstructions": "Please handle leather seats with extra care."
  }
  ```
- **Response**: `201 Created`
  ```json
  {
    "success": true,
    "message": "Booking confirmed! Confirmation email dispatched.",
    "booking": {
      "_id": "bk_65e1a...",
      "status": "confirmed",
      "createdAt": "2026-09-01T20:00:00.000Z"
    }
  }
  ```

### `GET /api/bookings`
Get all bookings for logged-in user or all system bookings if caller is admin.
- **Auth Required**: Yes
- **Response**: `200 OK`

### `PATCH /api/bookings/:id/status`
Update status badge of a booking (`pending`, `confirmed`, `in-progress`, `completed`, `cancelled`).
- **Auth Required**: Yes (Admin role required)
- **Request Body**: `{ "status": "completed" }`
- **Response**: `200 OK`

### `DELETE /api/bookings/:id`
Delete a booking record from MongoDB database.
- **Auth Required**: Yes (Admin role required)
- **Response**: `200 OK`

---

## 2. Franchise Inquiries (`/api/inquiries`)

### `POST /api/inquiries`
Submit a franchise partner inquiry form.
- **Request Body**:
  ```json
  {
    "name": "Rohan Singh",
    "phone": "8882670676",
    "email": "premiacarwash@gmail.com",
    "city": "Gurgaon",
    "state": "Haryana",
    "investmentBudget": "₹10 Lakhs - ₹20 Lakhs",
    "currentOccupation": "Entrepreneur",
    "message": "Interested in opening a Premia Carwash franchise in Gurgaon Sector 54."
  }
  ```
- **Response**: `201 Created`

---

## 3. Contact Queries (`/api/contacts`)

### `POST /api/contacts`
Submit a general inquiry or customer support message.
- **Request Body**:
  ```json
  {
    "name": "Amit Sharma",
    "email": "amit@example.com",
    "phone": "9876543210",
    "subject": "Corporate Fleet Washing",
    "message": "Need monthly washing contract for 15 office cabs."
  }
  ```
- **Response**: `201 Created`

---

## 4. Authentication (`/api/auth`)

### `POST /api/auth/register`
Register new customer account.
- **Request Body**: `{ "name": "...", "email": "...", "phone": "...", "password": "..." }`

### `POST /api/auth/login`
Authenticate user or admin.
- **Request Body**: `{ "email": "premiacarwash@gmail.com", "password": "..." }`

---

&copy; 2025 Premia Carwash • Official Support: `premiacarwash@gmail.com`.
