# Deployment Guide

## What was fixed
1. **CORS** — Backend now reads `ALLOWED_ORIGINS` from env instead of hardcoding `localhost`
2. **Missing `VITE_BACKEND_URL`** — Frontend `.env` created; all API calls now work
3. **Double slash** — `/api/payment//verify-payment` → `/api/payment/verify-payment`
4. **`.env` trailing newline** — Backend `.env` properly terminated

---

## Local Development

### Backend
```bash
cd pos-backend
npm install
npm run dev       # runs on http://localhost:5000
```

### Frontend
```bash
cd pos-frontend
npm install
npm run dev       # runs on http://localhost:5173
```

---

## Deploying to Production

### Backend (Railway / Render / EC2 etc.)
Set these environment variables on your hosting platform:
```
PORT=5000
MONGODB_URI=<your mongodb atlas uri>
JWT_SECRET=<strong secret>
ALLOWED_ORIGINS=https://your-frontend.vercel.app
RAZORPAY_KEY_ID=<your key>
RAZORPAY_KEY_SECRET=<your secret>
RAZORPAY_WEBHOOK_SECRET=<your webhook secret>
```

### Frontend (Vercel / Netlify)
Set this environment variable on your hosting platform:
```
VITE_BACKEND_URL=https://your-backend-url.com
```
Then build with:
```bash
npm run build
```

> ⚠️ Do NOT commit `.env` files to Git. Add them to `.gitignore`.
