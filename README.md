# 🏋️ GearUp - Sports & Outdoor Gear Rental Platform

GearUp is a modern, responsive, and role-based sports & outdoor equipment rental platform built with **Next.js**. Users can browse rental gear, place rental orders, complete secure online payments, and manage rentals through dedicated dashboards. The application supports **Customer**, **Provider**, and **Admin** roles with protected routes and dynamic user interfaces.

---

# 🚀 Live Demo

* **Frontend:** https://gear-up-rentals.vercel.app
* **Backend API:** https://l2-a4-gear-up-five.vercel.app
* **API Documentation:** `API_INTEGRATION.md`

---

# 👤 Demo Credentials

### Admin

```text
Email: admin1@gmail.com
Password: Admin1
```

---

# ✨ Key Features

## 🌍 Public Features

* Browse all available sports and outdoor gear
* Responsive gear listing with optimized images
* Advanced search and filtering
* Category, Brand, Price & Availability filters
* Detailed gear information page
* Mobile-first responsive design
* Loading skeletons
* Custom error pages

---

## 👤 Customer Features

* User Registration & Login
* JWT Authentication
* Protected Customer Dashboard
* Browse and rent equipment
* Interactive rental checkout
* Stripe Checkout Integration
* Payment Success & Cancel pages
* Rental history
* Payment history
* Leave reviews after returning gear

---

## 🏪 Provider Features

* Protected Provider Dashboard
* Dashboard overview cards
* Add new gear
* Update existing gear
* Delete gear
* Manage own inventory
* View incoming rental orders
* Update rental status
* Toast notifications for successful actions

---

## 👑 Admin Features

* Protected Admin Dashboard
* Platform overview
* User management
* Search users
* User pagination
* Suspend/Activate users
* View all gear listings
* View all rental orders

---

# 🔐 Authentication & Authorization

* JWT Authentication
* Secure Cookie-based Token Handling
* Role-based Route Protection
* Next.js Middleware
* Dynamic Navigation based on User Role

---

# 💳 Payment

* Stripe Checkout Integration
* Secure Payment Flow
* Payment Success Page
* Payment Cancel Page

---

# 📂 Project Structure

```text
src/
│
├── app/
│   ├── (public)
│   ├── (auth)
│   ├── dashboard/
│   │   ├── customer/
│   │   ├── provider/
│   │   └── admin/
│   ├── payment/
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
│
├── components/
├── services/
├── hooks/
├── providers/
├── lib/
├── types/
├── utils/
├── constants/
└── middleware.ts
```

---

# 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Hook Form
* Zod
* Sonner
* Lucide React
* next/image

### Backend

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL
* JWT Authentication
* Stripe

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/md-abu-naim/L2A5-GearUp.git
```

## Move into Project

```bash
cd gearup-frontend
```

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Update the API URL for production when deploying.

---

# ▶️ Run Development Server

```bash
npm run dev
```

Application will run at:

```text
http://localhost:3000
```

---

# 🏗️ Build Production

```bash
npm run build
```

---

# 🚀 Start Production Server

```bash
npm start
```

---

# 📋 Application Flow

## Customer Flow

```text
Register/Login
      ↓
Browse Gear
      ↓
View Gear Details
      ↓
Select Rental Date
      ↓
Checkout
      ↓
Stripe Payment
      ↓
Payment Success
      ↓
Track Rental
      ↓
Leave Review
```

---

## Provider Flow

```text
Login
     ↓
Dashboard
     ↓
Manage Inventory
     ↓
Add/Edit/Delete Gear
     ↓
Receive Orders
     ↓
Confirm Order
     ↓
Mark Picked Up
     ↓
Mark Returned
```

---

## Admin Flow

```text
Login
     ↓
Dashboard
     ↓
View Statistics
     ↓
Manage Users
     ↓
Suspend/Activate Users
     ↓
Inspect Gear
     ↓
Inspect Rental Orders
```

---

# 🎯 Assignment Requirements Covered

* Responsive UI
* Role-based Authentication
* Protected Routes
* Middleware
* CRUD Operations
* API Integration
* Form Validation (Zod + React Hook Form)
* Error Handling
* Loading Skeletons
* Payment Integration
* Responsive Design
* Search & Filtering
* User Search & Pagination
* Toast Notifications

---

# 📄 API Integration

A complete API mapping is available in:

```text
API_INTEGRATION.md
```

---

# 📜 License

This project was developed for the **Programming Hero Level-2 Assignment 5** using my own backend API and is intended for educational and portfolio purposes.
