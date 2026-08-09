# API Integration

This document maps the frontend pages/components to the backend API endpoints used in the GearUp frontend application.

## Base API URL

**Development**

```text
http://localhost:5000/api
```

**Production**

```text
https://https://l2-a4-gear-up-five.vercel.app/api
```

---

# Authentication

| Frontend Route   | Method      | Backend Endpoint | Purpose                                  |
| ---------------- | ----------- | ---------------- | ---------------------------------------- |
| `/register` | POST        | `/auth/register` | Register a new Customer or Provider      |
| `/login`    | POST        | `/auth/login`    | Authenticate user and receive JWT tokens |
| Logout           | POST/Client | -                | Remove authentication tokens             |

---

# Public

## Home

| Frontend Route | Method | Backend Endpoint | Purpose               |
| -------------- | ------ | ---------------- | --------------------- |
| `/`            | GET    | `/gear`          | Display featured gear |
| `/`            | GET    | `/categories`          | Display Categories |

---

## Gear Listing

| Frontend Route | Method | Backend Endpoint                                                   | Purpose               |
| -------------- | ------ | ------------------------------------------------------------------ | --------------------- |
| `/gears`        | GET    | `/gear`                                                            | Fetch all gear        |
| `/gears`        | GET    | `/categories`                                                      | Fetch gear categories |
| `/gears`        | GET    | `/gear?search=&category=&brand=&minPrice=&maxPrice=&availability=` | Search & Filter gear  |

---

## Gear Details

| Frontend Route | Method | Backend Endpoint | Purpose                   |
| -------------- | ------ | ---------------- | ------------------------- |
| `/gears/[id]`   | GET    | `/gear/:id`      | Fetch single gear details |

---

# Customer

## Customer Dashboard

| Frontend Route        | Method | Backend Endpoint | Purpose                       |
| --------------------- | ------ | ---------------- | ----------------------------- |
| `/dashboard` | GET    | `/rentals`       | Fetch customer rental history |
| `/dashboard` | GET    | `/payments`      | Fetch payment history         |

---

## Payment

| Frontend Route                        | Method | Backend Endpoint   | Purpose                        |
| ------------------------------------- | ------ | ------------------ | ------------------------------ |
| `/dashboard/my-retals/[id]` | POST   | `/payments/create` | Create Stripe Checkout Session |
| `/payment/success`                    | GET    | -                  | Display successful payment UI  |
| `/payment/cancel`                     | GET    | -                  | Display cancelled payment UI   |

---

## Reviews

| Frontend Route        | Method | Backend Endpoint | Purpose                           |
| --------------------- | ------ | ---------------- | --------------------------------- |
| `/dashboard/my-rentals/[id]` | POST   | `/reviews`       | Submit a review after gear return |

---

# Provider

## Provider Dashboard

| Frontend Route        | Method | Backend Endpoint | Purpose                       |
| --------------------- | ------ | ---------------- | ----------------------------- |
| `/provider-dashboard` | GET    | `/provider/rentals` | Fetch provider dashboard data |

---

## My Gear Lists

| Frontend Route                       | Method | Backend Endpoint     | Purpose                  |
| ------------------------------------ | ------ | -------------------- | ------------------------ |
| `/provider-dashboard/gear`           | GET    | `/provider/gear`     | Fetch provider gear list |
| `/provider-dashboard/gear/new`       | POST   | `/provider/gear`     | Add new gear             |
| `/provider-dashboard/gear/[id]/edit` | PATCH  | `/provider/gear/:id` | Update gear information  |
| Gear Delete Action                   | DELETE | `/provider/gear/:id` | Remove gear              |

---

## Rentals Management

| Frontend Route               | Method | Backend Endpoint       | Purpose                      |
| ---------------------------- | ------ | ---------------------- | ---------------------------- |
| `/provider-dashboard/rentals` | GET    | `/provider/rentals`     | Fetch incoming rental orders |
| `/provider-dashboard/rentals` | PATCH  | `/provider/rentals/:id` | Update rental status         |

---

# Admin

## Dashboard

| Frontend Route     | Method | Backend Endpoint | Purpose                  |
| ------------------ | ------ | ---------------- | ------------------------ |
| `/admin-dashboard` | GET    | `/admin/users`   | Fetch dashboard overview |

---

## User Management

| Frontend Route           | Method | Backend Endpoint   | Purpose                  |
| ------------------------ | ------ | ------------------ | ------------------------ |
| `/admin-dashboard/users` | GET    | `/admin/users`     | Fetch all users          |
| `/admin-dashboard/users` | PATCH  | `/admin/users/:id` | Suspend or activate user |

---

## Content Moderation

| Frontend Route            | Method | Backend Endpoint | Purpose                |
| ------------------------- | ------ | ---------------- | ---------------------- |
| `/admin-dashboard/gear`   | GET    | `/gear`          | View all gear listings |
| `/admin-dashboard/orders` | GET    | `/rentals`       | View all rental orders |

---

# Error Handling

* API errors are displayed using toast notifications.
* Form validation errors are shown using React Hook Form and Zod.
* Global errors are handled with `error.tsx`.
* Loading states are handled with `loading.tsx`.
* Unknown routes are handled with `not-found.tsx`.

---

# Technologies Used

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* React Hook Form
* Zod
* JWT Authentication
* Next.js Middleware
* Stripe Checkout