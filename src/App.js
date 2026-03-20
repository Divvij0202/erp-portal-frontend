// App.js — Performance-optimized with lazy loading + Lenis smooth scroll
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Lenis from 'lenis';

// Eagerly load auth pages (critical path)
import Login from './pages/Login';
import Signup from './pages/Signup';

// Lazy-load all other pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Finance = lazy(() => import('./pages/Finance'));
const StudentRecords = lazy(() => import('./pages/StudentRecords'));
const StaffDirectory = lazy(() => import('./pages/StaffDirectory'));
const Reports = lazy(() => import('./pages/Reports'));
const AddStudent = lazy(() => import('./pages/AddStudent'));
const Settings = lazy(() => import('./pages/Settings'));
const UserManagement = lazy(() => import('./pages/UserManagement'));
const MyProfile = lazy(() => import('./pages/MyProfile'));
const Announcements = lazy(() => import('./pages/Announcements'));
const Attendance = lazy(() => import('./pages/Attendance'));
const Assignments = lazy(() => import('./pages/Assignments'));
const AcademicStructure = lazy(() => import('./pages/AcademicStructure'));
const AuditLogs = lazy(() => import('./pages/AuditLogs'));
const Timetable = lazy(() => import('./pages/Timetable'));
const Requests = lazy(() => import('./pages/Requests'));

// Suspense fallback — minimal route-level loading indicator
function RouteLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-3 animate-fade-in">
        <div className="w-8 h-8 rounded-xl animate-pulse-soft" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }} />
        <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Loading module...</p>
      </div>
    </div>
  );
}

function AppContent() {
  const { currentUser, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Remove the initial HTML loader once React mounts
  useEffect(() => {
    const loader = document.getElementById('initial-loader');
    if (loader) loader.remove();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)' }}>
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center animate-pulse-soft" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Loading CampusFlow...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return isLogin ? (
      <Login goToSignup={() => setIsLogin(false)} />
    ) : (
      <Signup goToLogin={() => setIsLogin(true)} />
    );
  }

  return (
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Admin Only */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/users" element={<UserManagement />} />
          <Route path="/academic-structure" element={<AcademicStructure />} />
          <Route path="/audit-logs" element={<AuditLogs />} />
        </Route>

        {/* Admin + Staff */}
        <Route element={<ProtectedRoute allowedRoles={['admin', 'staff']} />}>
          <Route path="/finance" element={<Finance />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/students" element={<StudentRecords />} />
        </Route>

        {/* Student Only */}
        <Route element={<ProtectedRoute allowedRoles={['student']} />}>
          <Route path="/my-profile" element={<MyProfile />} />
        </Route>

        {/* Everyone */}
        <Route element={<ProtectedRoute allowedRoles={['admin', 'staff', 'student']} />}>
          <Route path="/staff" element={<StaffDirectory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/requests" element={<Requests />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
