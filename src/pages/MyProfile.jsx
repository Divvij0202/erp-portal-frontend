import React from 'react';
import AppLayout from '../components/ui/AppLayout';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Shield, BookOpen, Clock } from 'lucide-react';

export default function MyProfile() {
  const { userData, currentUser } = useAuth();
  
  if (!userData) return null;

  return (
    <AppLayout title="My Academic Profile">
      <div className="max-w-3xl space-y-6 animate-fade-in">
        
        {/* Header Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-surface-200 overflow-hidden relative">
          <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-400"></div>
          <div className="px-6 sm:px-10 pb-8 relative">
            <div className="w-24 h-24 rounded-full bg-white p-2 absolute -top-12 border border-surface-200 shadow-sm">
              <div className="w-full h-full rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-600">
                  {userData.name ? userData.name.charAt(0).toUpperCase() : 'S'}
                </span>
              </div>
            </div>
            
            <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-surface-900">{userData.name || 'Student Name'}</h2>
                <div className="flex items-center gap-2 mt-1 text-surface-500">
                  <Mail className="w-4 h-4" />
                  <span>{userData.email}</span>
                </div>
              </div>
              <Badge variant="success" className="w-max">Active Enrollment</Badge>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold text-surface-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-600" /> Account Status
              </h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-surface-100">
                <span className="text-surface-500 font-medium">Role</span>
                <Badge variant="neutral" className="capitalize">{userData.role || 'Student'}</Badge>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-surface-100">
                <span className="text-surface-500 font-medium">System ID</span>
                <span className="text-surface-900 font-mono text-xs bg-surface-100 px-2 py-1 rounded">{currentUser?.uid.substring(0, 8)}</span>
              </div>
              <div className="flex justify-between items-center py-2 text-sm">
                <span className="text-surface-500 font-medium">Joined</span>
                <span className="text-surface-900">
                  {userData.createdAt?.toDate ? new Date(userData.createdAt.toDate()).toLocaleDateString() : 'N/A'}
                </span>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold text-surface-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" /> Academic Standing
              </h3>
            </CardHeader>
            <CardBody className="space-y-4">
               <div className="flex justify-between items-center py-2 border-b border-surface-100">
                <span className="text-surface-500 font-medium">Current Program</span>
                <span className="text-surface-900 font-medium">Computer Science</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-surface-100">
                <span className="text-surface-500 font-medium">Term</span>
                <span className="text-surface-900 font-medium">Fall 2026</span>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-surface-600 flex items-center gap-1"><Clock className="w-4 h-4 text-surface-400"/> Degree Progress</span>
                  <span className="text-primary-600">45%</span>
                </div>
                <div className="w-full h-2 bg-surface-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 rounded-full w-[45%]"></div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

      </div>
    </AppLayout>
  );
}
