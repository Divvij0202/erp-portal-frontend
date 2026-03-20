// Home.js — Dashboard router based on user role
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AdminDashboard from './dashboards/AdminDashboard';
import StaffDashboard from './dashboards/StaffDashboard';
import StudentDashboard from './dashboards/StudentDashboard';

function Home() {
  const { userRole, loading } = useAuth();

  if (loading) return null;

  switch (userRole) {
    case 'admin':
      return <AdminDashboard />;
    case 'staff':
      return <StaffDashboard />;
    case 'student':
    default:
      return <StudentDashboard />;
  }
}

export default Home;