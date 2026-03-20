import React from 'react';
import AppLayout from '../../components/ui/AppLayout';
import StatCard from '../../components/ui/StatCard';
import Card, { CardBody } from '../../components/ui/Card';
import { BookOpen, CheckCircle, Clock, Users } from 'lucide-react';

export default function StaffDashboard() {
  return (
    <AppLayout title="Staff Dashboard">
      <div className="space-y-6 animate-fade-in">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-1">Welcome, Educator</h2>
          <p className="text-white/70 text-sm">Manage your classes, assignments, and students.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="My Students" value="142" change="Across 4 classes" changeType="neutral" icon={Users} />
          <StatCard label="Active Assignments" value="3" change="2 due this week" changeType="up" icon={BookOpen} iconBg="bg-blue-50" iconColor="text-blue-600" />
          <StatCard label="Submissions to Grade" value="28" change="Action required" changeType="up" icon={Clock} iconBg="bg-amber-50" iconColor="text-amber-600" />
          <StatCard label="Attendance Marked" value="95%" change="This week" changeType="up" icon={CheckCircle} iconBg="bg-emerald-50" iconColor="text-emerald-600" />
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-surface-900 mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <Card hover className="cursor-pointer">
               <CardBody className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                   <CheckCircle className="w-6 h-6" />
                 </div>
                 <div><h4 className="font-semibold text-surface-900">Mark Attendance</h4></div>
               </CardBody>
             </Card>
             <Card hover className="cursor-pointer">
               <CardBody className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                   <BookOpen className="w-6 h-6" />
                 </div>
                 <div><h4 className="font-semibold text-surface-900">Grade Assignments</h4></div>
               </CardBody>
             </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
