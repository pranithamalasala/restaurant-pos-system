<div align="center">

# 🍽️ DINE DESK
### *Enterprise-Grade MERN Stack Restaurant Point-of-Sale Platform*

[![Frontend Deployment](https://img.shields.io/badge/Frontend-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://dinedesk-pos.netlify.app)
[![Backend Deployment](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://restaurant-pos-system-pranitha.onrender.com)
[![Database](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[**🌐 Explore Live Demo**](https://dinedesk-pos.netlify.app) • [**⚡ API Documentation**](#-api-architecture--endpoints) • [**📑 Project Setup**](#-quick-start)

---

</div>

## 📌 Executive Summary

**Dine Desk** is a modern, full-stack Restaurant Point of Sale (POS) and operational management system designed to handle fast-paced floor environments. Built with high performance and reactive UI paradigms in mind, it provides waitstaff, cashiers, and administrators with zero-latency table allocation, real-time ticket tracking, dynamic role-based access control (RBAC), and integrated billing engine logic.

Designed using a **Decoupled Monorepo Architecture**, the project features automated CI/CD pipelines, automated keep-alive background pinging, and custom CORS origin matching across cloud services.

---

## 📸 Interactive System Interface

> *Cyber-aesthetic dashboard interface featuring custom glassmorphism, instant search filtering, and state-driven table status management.*

| Authentication & Role Access | Operational Live Dashboard |
| :---: | :---: |
| Secure JWT login with isolated role routing | Real-time ticket management & sales analytics |

---

## 🏗️ System Architecture & Workflow

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                             CLIENT LAYER (VITE + REACT)                     │
│  ┌─────────────────────────┐  ┌──────────────────────┐  ┌────────────────┐  │
│  │   Auth & RBAC Guards    │  │  Redux Toolkit Store │  │ Tailwind + UI  │  │
│  └────────────┬────────────┘  └──────────┬───────────┘  └───────┬────────┘  │
└───────────────┼──────────────────────────┼──────────────────────┼───────────┘
                │                          │                      │
                └──────────────────────────┼──────────────────────┘
                                           │ HTTPS / REST (JSON)
                                           ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            BACKEND SERVICES (NODE/EXPRESS)                  │
│  ┌─────────────────────────┐  ┌──────────────────────┐  ┌────────────────┐  │
│  │   CORS Security Guard   │  │  JWT Token Verifier  │  │ Controller Logic│ │
│  └────────────┬────────────┘  └──────────┬───────────┘  └───────┬────────┘  │
└───────────────┼──────────────────────────┼──────────────────────┼───────────┘
                │                          │                      │
                └──────────────────────────┼──────────────────────┘
                                           │ Mongoose ODM
                                           ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                             DATA LAYER (MONGODB ATLAS)                      │
│        [ User Schemas ]    [ Active Orders ]    [ Table Reservations ]      │
└─────────────────────────────────────────────────────────────────────────────┘
🔥 Key Engineering Highlights⚡ Operational Efficiency & UXRole-Based Workflows (RBAC): Tailored dashboard navigation for Waitstaff (order entry, table maps), Cashiers (billing, checkout settlement), and Admins (system-wide menu & operational tracking).State Management & Caching: Powered by Redux Toolkit and React Query for predictive caching, continuous state synchronization, and smooth UI state updates across client views.Responsive Dark-Themed Dashboard: Designed with visual feedback indicators, live timers, and card views built for POS hardware and mobile interface flexibility.🛡️ Production & Security EngineeringStateless Authentication: Enforces secure JWT verification with HTTP-Only cookie storage and custom route middleware.Resilient Infrastructure: Backend integration with automated background keep-alive ping mechanisms, mitigating server cold-starts for 100% live resume showcase readiness.Monorepo Build Routing: Configured single-page app (SPA) fallback routing via server-side redirect rules (netlify.toml) across decoupled frontend-backend directory structures.💻 Tech Stack & ToolingDomainTechnologyHighlightsFrontend PlatformReact.js (v18), ViteFast Module Replacement (HMR) & Optimized BundlingState & FetchingRedux Toolkit, React QueryDynamic UI Caching & Global State StorageStyling & VisualsTailwind CSS, RechartsCyber-Aesthetic Cards & Visual AnalyticsBackend RuntimeNode.js, Express.jsRESTful API Endpoints & Custom MiddlewareDatabase & ODMMongoDB Atlas, MongooseSchematized NoSQL Documents & Query OptimizationsSecurity ArchitectureJWT, bcrypt.js, CORSStrict Origin Restrictions & Hashed CredentialsDeployment & CloudNetlify, Render, Cron-Job.orgAutomated CI/CD Pipelines & 24/7 Keep-Alive🔌 API Architecture & Endpoints🔐 Auth & Identity ManagementHTTPPOST /api/user/register       - Register new system operator
POST /api/user/login          - Authenticate operator & return session token
📋 Orders & Ticket PipelineHTTPGET  /api/order               - Fetch list of active orders
POST /api/order               - Dispatch new table order ticket
PUT  /api/order/:id           - Update preparation status (In-Progress / Ready)
🪑 Floor & Table AllocationsHTTPGET  /api/table               - Query real-time table capacity & occupancy
POST /api/table               - Assign seating status to active reservations
💳 Settlements & BillingHTTPPOST /api/payment/create      - Initialize order billing calculation
POST /api/payment/verify      - Confirm payment transaction & clear table status
📁 Repository StructurePlaintextrestaurant-pos-system/
├── pos-backend/                # Express Server Application
│   ├── config/                 # Database & environment configurations
│   ├── controllers/            # Core business logic & API handling
│   ├── middlewares/            # JWT verification & global error handlers
│   ├── models/                 # Mongoose schemas (User, Order, Table)
│   ├── routes/                 # Endpoint routing modules
│   └── app.js                  # Express middleware initialization
│
├── pos-frontend/               # React Client SPA
│   ├── src/
│   │   ├── components/         # Reusable dashboard UI modules
│   │   ├── pages/              # Auth, Table Allocation, Checkout views
│   │   ├── store/              # Redux slices & state logic
│   │   └── api/                # Axios instance configuration
│   └── vite.config.js          # Vite build settings
│
├── netlify.toml                # Monorepo build directives & SPA redirects
├── DEPLOYMENT.md               # Infrastructure setup guide
└── README.md
🚀 Quick Start (Local Development)1️⃣ Clone WorkspaceBashgit clone [https://github.com/pranithamalasala/restaurant-pos-system.git](https://github.com/pranithamalasala/restaurant-pos-system.git)
cd restaurant-pos-system
2️⃣ Configure & Launch BackendBashcd pos-backend
npm install
Create a .env file in pos-backend/:Code snippetPORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
ALLOWED_ORIGINS=http://localhost:5173,[https://dinedesk-pos.netlify.app](https://dinedesk-pos.netlify.app)
Start the local server:Bashnpm run dev
# Server listening on http://localhost:5000
3️⃣ Configure & Launch FrontendIn a secondary terminal tab:Bashcd pos-frontend
npm install
Create a .env file in pos-frontend/:Code snippetVITE_BACKEND_URL=http://localhost:5000
Start the local Vite dev server:Bashnpm run dev
# React Client running on http://localhost:5173
🗺️ Engineering Roadmap[ ] Kitchen Display System (KDS): Multi-screen WebSockets integration for real-time kitchen ticket synchronization.[ ] Multi-Branch Analytics: Centralized manager view for multi-location inventory and sales auditing.[ ] Offline-First Support: ServiceWorker caching for uninterrupted order-taking during internet service dropouts.👩‍💻 Author & ContactMalasala Jasmitha Sri PranithaSoftware Engineering Intern | Full-Stack & AI Systems BuilderLive Application: dinedesk-pos.netlify.appGitHub: @pranithamalasalaCrafted with precision for modern hospitality management.
