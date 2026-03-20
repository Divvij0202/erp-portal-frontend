import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AppLayout from '../ui/AppLayout';
import { ShieldAlert } from 'lucide-react';

function ProtectedRoute({ allowedRoles }) {
  const { currentUser, userRole, loading } = useAuth();

  // If AuthContext is still loading role/user, return null so we don't flash unauthorized
  if (loading) return null;

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  // Check if role is allowed
  if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
    return (
      <AppLayout title="Access Denied">
        <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <ShieldAlert className="w-10 h-10 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-surface-900 mb-2">Unauthorized Access</h2>
          <p className="text-surface-500 max-w-md text-center">
            You do not have the required permissions ({allowedRoles.join(' or ')}) to view this page.
            If you believe this is an error, please contact the administrator.
          </p>
        </div>
      </AppLayout>
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;
