import React from 'react';
import AppLayout from '../../components/ui/AppLayout';
import StatCard from '../../components/ui/StatCard';
import { Users, GraduationCap, ShieldCheck, Activity } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <AppLayout title="Admin Dashboard">
      <div className="space-y-6 animate-fade-in">
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-1">System Overview</h2>
          <p className="text-white/70 text-sm">Monitor all platform activity and users.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Users" value="1,420" change="+5% this week" changeType="up" icon={Users} />
          <StatCard label="Active Students" value="1,245" change="+12 this month" changeType="up" icon={GraduationCap} />
          <StatCard label="Staff Members" value="86" change="Stable" changeType="neutral" icon={ShieldCheck} iconBg="bg-blue-50" iconColor="text-blue-600" />
          <StatCard label="System Health" value="100%" change="All systems operational" changeType="neutral" icon={Activity} iconBg="bg-emerald-50" iconColor="text-emerald-600" />
        </div>
      </div>
    </AppLayout>
  );
}
