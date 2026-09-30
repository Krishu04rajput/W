# ❄️ Winter Arc — Class 10 98% Mission

A local-first 90-day Class 10 CBSE study planner built with Next.js and designed for GitHub + Vercel.

## Features
- 90-day day-wise study plan starting 1 October 2026
- Automatic daily To-Do generation
- 6-hour weekday/Saturday workload and Sunday test-day workload
- Maths, Science, SST, English and Hindi rotation
- Learn → Practice → Test → Analyse → Repeat workflow
- Spaced-revision reminders inside daily tasks
- Sunday testing + error classification
- Score tracker
- Streak tracker
- LocalStorage: no database/account required
- Mobile/iPad-friendly UI
- PWA manifest for Add to Home Screen

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel
1. Create a GitHub repository.
2. Upload this project.
3. Import the repository into Vercel.
4. Framework preset: Next.js.
5. Deploy.

No environment variables are required.

## Notifications
The app can request browser notification permission. Browser notifications are limited by the platform/browser lifecycle. For reliable push notifications when the app is completely closed, add a push service such as Firebase Cloud Messaging or a web-push backend later.

## Data
Progress is stored in browser LocalStorage on the device/browser. Clearing site data resets it.
