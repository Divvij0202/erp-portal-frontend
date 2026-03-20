// App.js — Main application with RBAC routing
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Finance from './pages/Finance';
import StudentRecords from './pages/StudentRecords';
import StaffDirectory from './pages/StaffDirectory';
import Reports from './pages/Reports';
import AddStudent from './pages/AddStudent';
import Settings from './pages/Settings';
import UserManagement from './pages/UserManagement';
import MyProfile from './pages/MyProfile';
import Announcements from './pages/Announcements';
import Attendance from './pages/Attendance';
import Assignments from './pages/Assignments';
import AcademicStructure from './pages/AcademicStructure';
import AuditLogs from './pages/AuditLogs';
import Timetable from './pages/Timetable';
import Requests from './pages/Requests';

function AppContent() {
  const { currentUser, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  // Auth loading spinner
  if (loading) {
    return (
      <div className="min-h-screen bg-surface-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center animate-pulse-soft">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <p className="text-sm text-surface-500 font-medium">Loading ERP Portal...</p>
        </div>
      </div>
    );
  }

  // Not authenticated — show auth pages
  if (!currentUser) {
    return isLogin ? (
      <Login goToSignup={() => setIsLogin(false)} />
    ) : (
      <Signup goToLogin={() => setIsLogin(true)} />
    );
  }

  // Authenticated — show app with protected role-based routes
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Admin Only Routes */}
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/users" element={<UserManagement />} />
        <Route path="/academic-structure" element={<AcademicStructure />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
      </Route>

      {/* Admin and Staff Routes */}
      <Route element={<ProtectedRoute allowedRoles={['admin', 'staff']} />}>
        <Route path="/finance" element={<Finance />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/students" element={<StudentRecords />} />
      </Route>

      {/* Student Only Routes */}
      <Route element={<ProtectedRoute allowedRoles={['student']} />}>
        <Route path="/my-profile" element={<MyProfile />} />
      </Route>

      {/* Everyone's Routes (Admin, Staff, Student) */}
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
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
