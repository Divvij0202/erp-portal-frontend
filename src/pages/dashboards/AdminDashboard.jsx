import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, query, getDocs, orderBy, limit, getCountFromServer, where } from 'firebase/firestore';

import AppLayout from '../../components/ui/AppLayout';
import StatCard from '../../components/ui/StatCard';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';
import { Users, GraduationCap, ShieldCheck, Activity, Terminal, ArrowRight } from 'lucide-react';
import { TableSkeleton } from '../../components/ui/Skeleton';

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    students: 0,
    staff: 0,
    admins: 0
  });
  const [recentLogs, setRecentLogs] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        // 1. Fetch Users counts optimally via aggregations
        const [totalSnap, studentsSnap, staffSnap, adminsSnap] = await Promise.all([
          getCountFromServer(collection(db, 'users')),
          getCountFromServer(query(collection(db, 'users'), where('role', '==', 'student'))),
          getCountFromServer(query(collection(db, 'users'), where('role', '==', 'staff'))),
          getCountFromServer(query(collection(db, 'users'), where('role', '==', 'admin')))
        ]);

        // 2. Fetch latest Audit Logs
        const logsSnap = await getDocs(query(collection(db, 'audit_logs'), orderBy('timestamp', 'desc'), limit(5)));
        const logs = logsSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        setStats({
          totalUsers: totalSnap.data().count,
          students: studentsSnap.data().count,
          staff: staffSnap.data().count,
          admins: adminsSnap.data().count
        });
        setRecentLogs(logs);

      } catch (err) {
        console.error("Admin dashboard error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <AppLayout title="Admin Dashboard">
      <div className="space-y-6 animate-fade-in pb-12">
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden shadow-lg">
          <h2 className="text-2xl font-bold mb-1">System Overview ⚡</h2>
          <p className="text-white/80 text-sm">Real-time statistics covering all user roles and system activity.</p>
        </div>
        
        {loading ? (
          <TableSkeleton columns={4} rows={1} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Total Users" value={stats.totalUsers} change="Registered accounts" changeType="neutral" icon={Users} />
            <StatCard label="Active Students" value={stats.students} change="Enrolled" changeType="up" icon={GraduationCap} />
            <StatCard label="Staff & Educators" value={stats.staff} change="Active faculty" changeType="neutral" icon={ShieldCheck} iconBg="bg-blue-50" iconColor="text-blue-600" />
            <StatCard label="Administrators" value={stats.admins} change="SysAdmins" changeType="neutral" icon={Activity} iconBg="bg-emerald-50" iconColor="text-emerald-600" />
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
           
           {/* Left Column: Audit Logs */}
           <div className="lg:col-span-2 space-y-6">
             <Card>
               <CardHeader className="flex justify-between items-center border-b border-surface-100">
                 <h3 className="text-lg font-bold text-surface-900 flex items-center gap-2"><Terminal className="w-5 h-5 text-gray-500"/> Live System Activity</h3>
                 <Link to="/audit-logs" className="text-xs font-bold text-primary-600 uppercase tracking-wider hover:underline">View All</Link>
               </CardHeader>
               <CardBody className="p-0">
                 {loading ? <div className="p-6"><TableSkeleton columns={1} rows={3} /></div> : recentLogs.length === 0 ? (
                   <div className="text-sm text-surface-500 py-12 text-center bg-surface-50">No recent system activity recorded.</div>
                 ) : (
                   <div className="divide-y divide-surface-100">
                     {recentLogs.map(log => (
                       <div key={log.id} className="p-4 sm:px-6 hover:bg-surface-50 transition-colors">
                         <div className="flex justify-between items-start mb-1">
                           <div className="flex items-center gap-2">
                             <span className="text-[10px] font-bold tracking-widest uppercase bg-surface-200 text-surface-700 px-2 py-0.5 rounded">
                               {log.action}
                             </span>
                             <span className="text-sm font-semibold text-surface-900">{log.userEmail || 'System'}</span>
                           </div>
                           <span className="text-xs text-surface-500 shrink-0">
                             {log.timestamp?.toDate ? log.timestamp.toDate().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Just now'}
                           </span>
                         </div>
                         <p className="text-xs text-surface-500 mt-1">
                           Target: <code className="bg-surface-100 px-1 rounded font-mono break-all">{log.resourceType}/{log.resourceId}</code>
                           {log.details && log.details.changes && ` • ${log.details.changes}`}
                         </p>
                       </div>
                     ))}
                   </div>
                 )}
               </CardBody>
             </Card>
           </div>

           {/* Right Column: Quick Links */}
           <div className="space-y-6">
             <Card className="h-full border-t-4 border-t-primary-500">
               <CardHeader><h3 className="text-lg font-bold text-surface-900">Admin Actions</h3></CardHeader>
               <CardBody>
                 <div className="flex flex-col gap-3">
                   <Link to="/users" className="w-full flex items-center justify-between p-4 rounded-xl border border-surface-200 hover:border-primary-500 hover:bg-primary-50 transition-colors group">
                     <div>
                       <h4 className="font-bold text-surface-900 group-hover:text-primary-700">Manage Users</h4>
                       <p className="text-xs text-surface-500">Change roles, block or add users</p>
                     </div>
                     <ArrowRight className="w-4 h-4 text-surface-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                   </Link>
                   
                   <Link to="/academic-structure" className="w-full flex items-center justify-between p-4 rounded-xl border border-surface-200 hover:border-primary-500 hover:bg-primary-50 transition-colors group">
                     <div>
                       <h4 className="font-bold text-surface-900 group-hover:text-primary-700">Academic Setup</h4>
                       <p className="text-xs text-surface-500">Departments, Semesters, Fees</p>
                     </div>
                     <ArrowRight className="w-4 h-4 text-surface-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                   </Link>

                   <Link to="/settings" className="w-full flex items-center justify-between p-4 rounded-xl border border-surface-200 hover:border-amber-500 hover:bg-amber-50 transition-colors group">
                     <div>
                       <h4 className="font-bold text-surface-900 group-hover:text-amber-700">Seed Demo Data</h4>
                       <p className="text-xs text-surface-500">Inject sample BITS Pilani timetable</p>
                     </div>
                     <DatabaseIcon className="w-4 h-4 text-surface-400 group-hover:text-amber-600 transition-colors" />
                   </Link>
                 </div>
               </CardBody>
             </Card>
           </div>

        </div>
      </div>
    </AppLayout>
  );
}

// Inline fallback for missing lucide icon:
const DatabaseIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
