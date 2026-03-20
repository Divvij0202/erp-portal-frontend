import React from 'react';
import AppLayout from '../../components/ui/AppLayout';
import StatCard from '../../components/ui/StatCard';
import Card, { CardBody } from '../../components/ui/Card';
import { Calendar, PenTool, Award, Bell } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function StudentDashboard() {
  const { userData } = useAuth();
  const firstName = userData?.name || 'Student';

  return (
    <AppLayout title="Student Dashboard">
      <div className="space-y-6 animate-fade-in">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-1">Hello, {firstName}! 👋</h2>
          <p className="text-white/70 text-sm">Here's your academic overview for today.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Overall Attendance" value="92%" change="Looking good" changeType="up" icon={Calendar} iconBg="bg-emerald-50" iconColor="text-emerald-600" />
          <StatCard label="Pending Assignments" value="2" change="Due very soon" changeType="up" icon={PenTool} iconBg="bg-amber-50" iconColor="text-amber-600" />
          <StatCard label="Current GPA" value="3.8" change="+0.1 from last term" changeType="up" icon={Award} iconBg="bg-primary-50" iconColor="text-primary-600" />
          <StatCard label="Unread Notices" value="1" change="Review announcements" changeType="neutral" icon={Bell} iconBg="bg-blue-50" iconColor="text-blue-600" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
           <Card>
             <CardBody>
               <h3 className="text-lg font-semibold text-surface-900 mb-4">Upcoming Deadlines</h3>
               <div className="text-sm text-surface-500 py-8 text-center bg-surface-50 rounded-lg">No pending deadlines this week!</div>
             </CardBody>
           </Card>
           <Card>
             <CardBody>
               <h3 className="text-lg font-semibold text-surface-900 mb-4">Recent Announcements</h3>
               <div className="text-sm text-surface-500 py-8 text-center bg-surface-50 rounded-lg">No new announcements.</div>
             </CardBody>
           </Card>
        </div>
      </div>
    </AppLayout>
  );
}
