# CampusFlow ERP - Enterprise Educational Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="Status" />
</p>

## 📖 Project Overview
CampusFlow ERP is a world-class, production-ready Enterprise Resource Planning (ERP) platform designed specifically for modern educational institutions. Built with a premium, Notion/Linear-inspired UI, it handles the entire academic lifecycle from user management and complex timetable scheduling to real-time attendance tracking and asynchronous grading workflows.

Unlike standard mockups, CampusFlow operates entirely on structured, relational data leveraging Firebase's real-time capabilities to ensure instant synchronization across all users without manual refreshing.

### ✨ Key Features (Real-World Workflows)

**🛡️ Role-Based Access Control (RBAC)**
Secure, isolated dashboards meticulously tailored for **Admins**, **Staff**, and **Students**. Routes and data access are strictly protected at the component and database level.

**🏛️ Academic Structure & User Management**
- Manage complex hierarchies: Departments → Courses → Sections → Students.
- Instructors are assigned dynamically to courses and sections.

**📅 Dynamic Timetable System**
- Full weekly grid visualization.
- Admins/Staff map course slots to physical times; Students receive a personalized, filtered view based on their exact enrollments.

**✅ Session-Based Attendance**
- Moving beyond simple toggles, Staff create specific session instances (Date/Time/Course).
- Instant percentage aggregates and low-attendance visual warnings (e.g., < 75%) flag at-risk students immediately.

**📊 Evaluation & Gradebook Pipeline**
- Staff can define assignments with strict rubrics and deadlines.
- Students submit links/files directly to the portal.
- Gradebook acts as a centralized ledger, breaking down marks per assignment and providing cumulative course grades.

**📩 Requests & Approval Workflows**
- Students submit structured requests (Leave of Absence, Grade Review, Inquiries).
- Admins/Staff process a unified queue with approval/rejection states and feedback comments.

**📣 Targeted Announcements**
- Broadcast vital information system-wide, or target granularly by **Role** (Students only), **Course**, or even specific **Sections**.

**📈 Analytics & Reporting Dashboard**
- Live Recharts-powered analytics for attendance trends.
- PDF and CSV export capabilities for institutional data portability.
- Comprehensive tracking over the current academic year settings.

**🕵️ Audit Logs**
- Every critical admin/staff action (updating grades, changing settings, deleting records) is logged permanently to ensure institutional accountability.

---

## 💻 Tech Stack
- **Frontend Core**: React 18, React Router DOM v6
- **Styling**: Tailwind CSS (Premium aesthetic with custom `surface` color palettes, dark mode support)
- **Backend / Database**: Firebase v10 (Firestore Database, Firebase Authentication)
- **Data Visualization**: Recharts
- **Icons**: Lucide React
- **Exporting Modules**: jsPDF, PapaParse
- **State/Feedback**: React Hot Toast

---

## 🚀 Setup & Installation (Local Development)

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd erp-portal-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Note: This project uses `craco` to override config for Tailwind setup)*

3. **Firebase Configuration:**
   - Create a project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Authentication** (Email/Password) and **Firestore Database**.
   - Copy your config keys into a `.env` file at the root:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

4. **Start the development server:**
   ```bash
   npm start
   ```

---

## 🌐 Production Deployment (100% Free Tier)

This ERP was built from the ground up to operate securely and cleanly on Firebase's free **Spark Plan**. 

**Deploy via Firebase CLI:**
1. Log in to Firebase:
   ```bash
   npx firebase-tools login
   ```
2. Initialize Firebase Hosting:
   ```bash
   npx firebase-tools init hosting
   ```
   - *Select your project.*
   - *Set public directory to `build`.*
   - *Configure as a single-page app (Rewrite all URLs to `/index.html`: Yes).*
3. Build the production application:
   ```bash
   npm run build
   ```
4. Deploy globally to CDN:
   ```bash
   npx firebase-tools deploy --only hosting
   ```
   *Your live application will be served at `https://<your-project-id>.web.app`.*

---

## 🗂️ Folder Structure
```text
src/
├── components/          # Reusable UI elements (Buttons, Layouts, Cards, Modals)
├── contexts/            # Global React Contexts (AuthContext)
├── pages/               # Primary Page Views
│   ├── dashboards/      # Role-specific landing dashboards
│   ├── AcademicStructure.jsx
│   ├── Announcements.jsx
│   ├── Assignments.jsx
│   ├── Attendance.jsx
│   ├── Requests.jsx
│   ├── Settings.jsx
│   ├── StudentRecords.jsx
│   ├── Timetable.jsx
│   └── ...
├── utils/               # Helper scripts (auditLogger.js)
├── App.js               # Route Configuration & Protection Matrix
└── firebase.js          # Direct Firebase initialization
```

---
*Built autonomously by Antigravity—engineered for scale, speed, and real-world utility.*
