import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, query, getDocs, where, orderBy, limit, getCountFromServer } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';

import AppLayout from '../../components/ui/AppLayout';
import StatCard from '../../components/ui/StatCard';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';
import { BookOpen, CheckCircle, Clock, Users, ArrowRight, ClipboardList } from 'lucide-react';
import { TableSkeleton } from '../../components/ui/Skeleton';

export default function StaffDashboard() {
  const { userData } = useAuth();
  const firstName = userData?.name || 'Educator';

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeAssignments: 0,
    ungradedSubmissions: 0,
    coursesCount: 0
  });
  const [recentSubmissions, setRecentSubmissions] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // 1. Fetch Counts optimally (Students, Assignments, Courses)
        const [studentsSnap, asgSnap, coursesSnap] = await Promise.all([
          getCountFromServer(query(collection(db, 'users'), where('role', '==', 'student'))),
          getCountFromServer(collection(db, 'assignments')),
          getCountFromServer(collection(db, 'courses'))
        ]);
        
        // 2. Fetch Submissions (look for ungraded)
        // Since we can't easily query "doesn't exist" or "null" in firestore directly without complex indexing, 
        // fetching the most recent and filtering is okay for small sets, but ideally we query where grade == null.
        // We will fetch recent submissions to populate the list and count.
        const subSnap = await getDocs(query(collection(db, 'submissions'), orderBy('timestamp', 'desc')));
        let ungraded = 0;
        const recentSubs = [];
        
        subSnap.docs.forEach(d => {
          const data = d.data();
          if (data.grade === undefined || data.grade === null || data.grade === '') {
            ungraded++;
            if (recentSubs.length < 4) recentSubs.push({ id: d.id, ...data });
          }
        });

        setStats({
          totalStudents: studentsSnap.data().count,
          activeAssignments: asgSnap.data().count,
          ungradedSubmissions: ungraded,
          coursesCount: coursesSnap.data().count
        });
        
        setRecentSubmissions(recentSubs);

      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <AppLayout title="Staff Dashboard">
      <div className="space-y-6 animate-fade-in pb-12">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden shadow-lg">
          <h2 className="text-2xl font-bold mb-1">Welcome, {firstName}!</h2>
          <p className="text-white/80 text-sm">Here is your live teaching module overview.</p>
        </div>
        
        {loading ? (
          <TableSkeleton columns={4} rows={1} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Enrolled Students" value={stats.totalStudents} change="System wide" changeType="neutral" icon={Users} iconBg="bg-indigo-50" iconColor="text-indigo-600" />
            <StatCard label="Active Assignments" value={stats.activeAssignments} change="Created" changeType="up" icon={BookOpen} iconBg="bg-blue-50" iconColor="text-blue-600" />
            <StatCard label="Ungraded Submissions" value={stats.ungradedSubmissions} change={stats.ungradedSubmissions > 0 ? "Action required" : "All caught up"} changeType={stats.ungradedSubmissions > 0 ? "down" : "up"} icon={Clock} iconBg="bg-amber-50" iconColor="text-amber-600" />
            <StatCard label="Active Courses" value={stats.coursesCount} change="In database" changeType="neutral" icon={ClipboardList} iconBg="bg-emerald-50" iconColor="text-emerald-600" />
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
           
           {/* Left Column: Quick Actions */}
           <div className="lg:col-span-2 space-y-6">
             <Card>
               <CardHeader><h3 className="text-lg font-bold text-surface-900">Module Deep Links</h3></CardHeader>
               <CardBody>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link to="/attendance" className="block focus:outline-none">
                      <div className="rounded-xl border border-surface-200 p-4 hover:border-emerald-500 hover:shadow-md transition-all group h-full bg-white">
                        <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-surface-900 mb-1">Mark Attendance</h4>
                        <p className="text-sm text-surface-500">Record daily register for your assigned classes</p>
                      </div>
                    </Link>
                    <Link to="/assignments" className="block focus:outline-none">
                      <div className="rounded-xl border border-surface-200 p-4 hover:border-amber-500 hover:shadow-md transition-all group h-full bg-white">
                        <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-surface-900 mb-1">Grade Assignments</h4>
                        <p className="text-sm text-surface-500">Review student work and publish rubrics</p>
                      </div>
                    </Link>
                  </div>
               </CardBody>
             </Card>

             <Card>
               <CardHeader className="flex justify-between items-center">
                 <h3 className="text-lg font-bold text-surface-900 flex items-center gap-2"><Clock className="w-5 h-5 text-amber-500"/> Submissions Needing Grading</h3>
                 <Link to="/assignments" className="text-sm text-primary-600 font-medium hover:underline flex items-center gap-1">Open Gradebook <ChevronRight className="w-4 h-4"/></Link>
               </CardHeader>
               <CardBody className="p-0">
                 {loading ? <div className="p-6"><TableSkeleton columns={1} rows={2} /></div> : recentSubmissions.length === 0 ? (
                   <div className="text-sm text-surface-500 py-10 text-center bg-surface-50">Excellent! You have completely cleared your grading queue.</div>
                 ) : (
                   <div className="divide-y divide-surface-100">
                     {recentSubmissions.map(sub => (
                       <div key={sub.id} className="p-4 sm:px-6 hover:bg-surface-50 transition-colors flex items-center justify-between gap-4">
                         <div>
                           <h4 className="font-bold text-surface-900 truncate">{sub.assignmentTitle}</h4>
                           <p className="text-xs text-surface-500 mt-1 font-medium">Submitted by: {sub.studentEmail}</p>
                         </div>
                         <Link to="/assignments" className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 hover:bg-amber-100 rounded-lg text-xs font-bold transition-colors">
                           Assess <ArrowRight className="w-3 h-3" />
                         </Link>
                       </div>
                     ))}
                   </div>
                 )}
               </CardBody>
             </Card>
           </div>

           {/* Right Column */}
           <div className="space-y-6">
             <Card className="h-full border-t-4 border-t-emerald-500 bg-emerald-50/30">
               <CardHeader>
                 <h3 className="text-lg font-bold text-surface-900">Educator Bulletin</h3>
               </CardHeader>
               <CardBody>
                 <div className="text-sm text-surface-600 space-y-4">
                   <p>Remember to submit mid-semester grades before the comprehensive examination period begins.</p>
                   <p>Chamber consultation hours should be updated in the system for this semester.</p>
                 </div>
                 <div className="mt-8 pt-6 border-t border-surface-200">
                   <Link to="/academic-structure" className="w-full justify-center inline-flex items-center gap-2 px-4 py-2 border border-surface-300 rounded-xl text-sm font-bold text-surface-700 hover:bg-surface-100 transition-colors">
                     View Academic Structure <ArrowRight className="w-4 h-4"/>
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
