# 🍽️ Dine Desk — Full-Stack Restaurant POS System

> Streamline Orders. Simplify Payments. Elevate Dining.

A full-featured, real-time Point of Sale system built with the MERN stack—designed to streamline order management, table allocations, real-time billing, and automated staff workflows in a modern, cyber-aesthetic dashboard interface.

---

## 🚀 Live Demo

- **Frontend Application (Netlify):** [https://dinedesk-pos.netlify.app](https://dinedesk-pos.netlify.app)
- **Backend API Server (Render):** `https://restaurant-pos-system-pranitha.onrender.com`

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| 🍽️ **Order Management** | Real-time order creation, status tracking, and kitchen workflow updates. |
| 🪑 **Table Reservations** | Visual table allocation, seating management, and dynamic status tracking. |
| 🔐 **Role-Based Auth** | Secure JWT authentication with customized views for Admins, Cashiers, and Waitstaff. |
| 💸 **Payment Processing** | Seamless payment gateway integration and instant checkout settlement. |
| 🧾 **Billing & Invoicing** | Automated bill calculations with breakdown of taxes and service items. |
| 📊 **Analytics Dashboard** | Live sales visualizers, popular items tracking, and operational metrics. |

---

## 🏗️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React.js, Vite, Redux Toolkit, Tailwind CSS, Recharts |
| **Backend** | Node.js, Express.js, RESTful APIs, WebSockets |
| **Database** | MongoDB (Mongoose ORM) |
| **Authentication** | JSON Web Tokens (JWT), HTTP-Only Cookies, bcrypt |
| **Hosting & CI/CD** | **Frontend:** Netlify (Automated Monorepo Builds)<br>**Backend:** Render (Keep-Alive Cron Ping Integration) |

---

## 📁 Project Structure

```text
restaurant-pos-system/
├── pos-backend/
│   ├── config/            # DB configuration & app settings
│   ├── controllers/       # Route handlers & business logic
│   ├── middlewares/       # Auth verification & global error handling
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express API endpoints
│   ├── app.js             # Express app setup & CORS middleware
│   └── package.json
├── pos-frontend/
│   ├── public/            # Static assets & favicon
│   ├── src/
│   │   ├── components/    # UI elements & cards
│   │   ├── pages/         # Auth, Orders, Tables, Dashboard views
│   │   ├── store/         # Redux slices & state logic
│   │   └── api/           # API fetchers & axios config
│   ├── vite.config.js
│   └── package.json
├── netlify.toml           # Monorepo build routing & single-page redirects
├── DEPLOYMENT.md
└── README.md
