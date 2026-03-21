# CampusFlow ERP

CampusFlow is an Enterprise Resource Planning (ERP) platform built for modern educational institutions. It handles the entire academic lifecycle—from user management and academic structure to real-time attendance, assignments, and announcements.

## ✨ Features
- **Role-Based Access**: Specialized, secure dashboards for Admins, Staff, and Students.
- **Academic Structure & Timetables**: Manage departments, courses, sections, and personalized weekly schedules.
- **Attendance & Grades**: Track session-based attendance and manage assignments dynamically.
- **Approval Workflows**: Built-in system for handling new user registrations and student requests.

## 💻 Tech Stack
- **Frontend**: React 18, React Router v6, Tailwind CSS
- **Backend**: Firebase v10 (Auth, Firestore DB, Storage)
- **UI & Tools**: Recharts, Lucide React, React Hot Toast, jsPDF

## 🚀 Quick Setup

1. **Clone & Install**
   ```bash
   git clone <repo-url>
   cd erp-portal-frontend
   npm install
   ```

2. **Firebase Config**
   Set up a Firebase project and create a `.env` file in the root directory:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

3. **Run Locally**
   ```bash
   npm start
   ```

## 🌐 Deployment
CampusFlow is designed to run securely on Firebase's free Spark Plan. 
To deploy:
1. Build your app: `npm run build`
2. Initialize Firebase hosting: `npx firebase-tools init hosting` (set public directory to `build`)
3. Deploy: `npx firebase deploy --only hosting`
