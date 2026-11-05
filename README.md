<div align="center">

# 🍽️ Dine Desk
### Full-Stack MERN Restaurant Point-of-Sale Platform

[![Frontend](https://img.shields.io/badge/Frontend-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://dinedesk-pos.netlify.app)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://restaurant-pos-system-pranitha.onrender.com)
[![Database](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[**🌐 Live Demo**](https://dinedesk-pos.netlify.app) • [**⚡ API Endpoints**](#-api-endpoints) • [**🚀 Quick Start**](#-quick-start)

</div>

---

## 📌 Overview

**Dine Desk** is a full-stack Restaurant Point of Sale (POS) and operations management system built for fast-paced restaurant floors. It gives waitstaff, cashiers, and administrators table allocation, live order tracking, role-based access control (RBAC), and an integrated billing flow.

The project uses a **decoupled monorepo** structure (separate frontend and backend), deployed to cloud services with custom CORS origin matching and a background keep-alive ping to avoid server cold starts.

---

## 🏗️ Architecture

```text
┌──────────────────────────────────────────────────────────┐
│                 CLIENT (React + Vite)                    │
│   Auth & RBAC Guards │ Redux Toolkit │ Tailwind CSS UI   │
└────────────────────────────┬─────────────────────────────┘
                             │ HTTPS / REST (JSON)
                             ▼
┌──────────────────────────────────────────────────────────┐
│               BACKEND (Node.js + Express)                │
│  CORS Guard │ JWT Verification │ Controllers & Routes    │
└────────────────────────────┬─────────────────────────────┘
                             │ Mongoose ODM
                             ▼
┌──────────────────────────────────────────────────────────┐
│                DATABASE (MongoDB Atlas)                  │
│       Users │ Orders │ Tables / Reservations             │
└──────────────────────────────────────────────────────────┘
```

---

## ✨ Key Features

### Operations & UX
- **Role-based workflows (RBAC):**
  - **Waitstaff** – order entry and table maps
  - **Cashiers** – billing and checkout settlement
  - **Admins** – menu management and system-wide tracking
- **State management & caching:** Redux Toolkit and React Query keep client views in sync with the server.
- **Responsive dark-themed dashboard:** Visual status indicators, live timers, and card layouts that work on POS hardware and mobile.

### Security & Infrastructure
- **Stateless authentication:** JWT verification with HTTP-only cookies and custom route middleware.
- **Password hashing:** Credentials hashed with bcrypt.js.
- **Strict CORS:** Allowed origins controlled through environment configuration.
- **Keep-alive pings:** A scheduled background ping (Cron-Job.org) reduces cold starts on the hosted backend.
- **SPA fallback routing:** Configured through `netlify.toml` for the decoupled frontend/backend layout.

---

## 💻 Tech Stack

| Area | Technology | Purpose |
|------|-----------|---------|
| Frontend | React 18, Vite | Fast HMR and optimized builds |
| State & Data Fetching | Redux Toolkit, React Query | Global state and caching |
| Styling & Charts | Tailwind CSS, Recharts | UI styling and visual analytics |
| Backend | Node.js, Express.js | REST API and custom middleware |
| Database | MongoDB Atlas, Mongoose | Schema-based NoSQL storage |
| Security | JWT, bcrypt.js, CORS | Auth, hashing, origin restrictions |
| Deployment | Netlify, Render, Cron-Job.org | Hosting and keep-alive |

---

## 🔌 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Authenticate and start a session |

### 📋 Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/order` | Fetch active orders |
| POST | `/api/order` | Create a new table order |
| PUT | `/api/order/:id` | Update order status (In-Progress / Ready) |

### 🪑 Tables
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/table` | Get table capacity and occupancy |
| POST | `/api/table` | Assign seating status to a reservation |

### 💳 Payments
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payment/create` | Initialize billing for an order |
| POST | `/api/payment/verify` | Confirm payment and free the table |

---

## 📁 Repository Structure

```text
restaurant-pos-system/
├── pos-backend/              # Express server
│   ├── config/               # Database & environment config
│   ├── controllers/          # Business logic
│   ├── middlewares/          # JWT verification & error handlers
│   ├── models/               # Mongoose schemas (User, Order, Table)
│   ├── routes/               # Route modules
│   └── app.js                # Express setup
│
├── pos-frontend/             # React SPA
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Auth, Tables, Checkout views
│   │   ├── store/            # Redux slices
│   │   └── api/              # Axios configuration
│   └── vite.config.js        # Vite settings
│
├── netlify.toml              # Build directives & SPA redirects
├── DEPLOYMENT.md             # Deployment guide
└── README.md
```

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/pranithamalasala/restaurant-pos-system.git
cd restaurant-pos-system
```

### 2. Set up the backend
```bash
cd pos-backend
npm install
```

Create a `.env` file in `pos-backend/`:
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
ALLOWED_ORIGINS=http://localhost:5173,https://dinedesk-pos.netlify.app
```

Start the server:
```bash
npm run dev
```

### 3. Set up the frontend
In a second terminal:
```bash
cd pos-frontend
npm install
```

Create a `.env` file in `pos-frontend/`:
```env
VITE_BACKEND_URL=http://localhost:5000
```

Start the dev server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🗺️ Roadmap

- [ ] **Kitchen Display System (KDS):** Real-time kitchen ticket sync using WebSockets
- [ ] **Multi-branch analytics:** Central manager view for inventory and sales across locations
- [ ] **Offline-first support:** Service Worker caching for order-taking during connectivity drops

---

## 👩‍💻 Author

**Malasala Jasmitha Sri Pranitha**
Software Engineering Intern | Full-Stack & AI Systems Builder

- Live app: [dinedesk-pos.netlify.app](https://dinedesk-pos.netlify.app)
- GitHub: [@pranithamalasala](https://github.com/pranithamalasala)

---

<div align="center">

*Built for modern hospitality management.*

</div>
