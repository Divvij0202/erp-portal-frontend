import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, orderBy, limit, getDocs, where } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

import AppLayout from '../../components/ui/AppLayout';
import StatCard from '../../components/ui/StatCard';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';
import { Calendar, PenTool, Award, Bell, Clock, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { TableSkeleton } from '../../components/ui/Skeleton';

export default function StudentDashboard() {
  const { userData, currentUser } = useAuth();
  const firstName = userData?.name || 'Student';

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    attendancePct: 100,
    pendingAsgCount: 0,
    unreadNotices: 0,
    gpa: 4.0
  });
  
  const [announcements, setAnnouncements] = useState([]);
  const [upcomingDeadlines, setUpcomingDeadlines] = useState([]);
  const [todaysClasses, setTodaysClasses] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    const fetchDashboardData = async () => {
      try {
        // 1. Fetch latest announcements
        const annSnap = await getDocs(query(collection(db, 'announcements'), orderBy('timestamp', 'desc'), limit(3)));
        const annList = annSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        
        // 2. Fetch Assignments & Submissions to calculate pending
        const asgSnap = await getDocs(query(collection(db, 'assignments'), orderBy('timestamp', 'desc')));
        const asgList = asgSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        
        const subSnap = await getDocs(query(collection(db, 'submissions'), where('studentId', '==', currentUser.uid)));
        const subMap = new Set(subSnap.docs.map(d => d.data().assignmentId));
        
        const pending = asgList.filter(a => !subMap.has(a.id));
        
        // 3. Fetch Attendance
        const attSnap = await getDocs(query(collection(db, 'attendance'), where('studentId', '==', currentUser.uid)));
        let presentCount = 0;
        attSnap.docs.forEach(d => { if (d.data().status === 'Present') presentCount++; });
        const attPct = attSnap.size > 0 ? ((presentCount / attSnap.size) * 100).toFixed(1) : 100;

        // 4. Fetch Today's Classes
        const daysMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const todayStr = daysMap[new Date().getDay()];
        
        const ttSnap = await getDocs(query(collection(db, 'timetable'), where('day', '==', todayStr)));
        const classesList = ttSnap.docs.map(d => ({ id: d.id, ...d.data() }))
          .sort((a, b) => a.startTime.localeCompare(b.startTime));

        // Note: For a real GPA calculation, we'd average final grades. We'll leave it simple for now or calculate from submissions.
        // Let's calculate an average score from graded submissions.
        let totalScore = 0;
        let gradedCount = 0;
        subSnap.docs.forEach(d => {
          const g = d.data().grade;
          if (g !== undefined && g !== null) { totalScore += (g/100)*4; gradedCount++; } // Crude 4.0 scale map
        });
        const calcGpa = gradedCount > 0 ? (totalScore / gradedCount).toFixed(1) : 4.0;

        setAnnouncements(annList);
        setUpcomingDeadlines(pending.slice(0, 4));
        setTodaysClasses(classesList);
        setStats({
          attendancePct: attPct,
          pendingAsgCount: pending.length,
          unreadNotices: annList.length, // Rough approximation
          gpa: calcGpa
        });

      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [currentUser]);

  return (
    <AppLayout title="Student Dashboard">
      <div className="space-y-6 animate-fade-in pb-12">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden shadow-lg">
          <h2 className="text-2xl font-bold mb-1">Hello, {firstName}! 👋</h2>
          <p className="text-white/80 text-sm">Here's your live academic overview.</p>
        </div>
        
        {loading ? (
          <TableSkeleton columns={4} rows={1} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Overall Attendance" value={`${stats.attendancePct}%`} change="Live sync" changeType={stats.attendancePct >= 75 ? "up" : "down"} icon={Calendar} iconBg="bg-emerald-50" iconColor="text-emerald-600" />
            <StatCard label="Pending Assignments" value={stats.pendingAsgCount} change="Action required" changeType={stats.pendingAsgCount > 0 ? "down" : "up"} icon={PenTool} iconBg="bg-amber-50" iconColor="text-amber-600" />
            <StatCard label="Est. Performance" value={stats.gpa} change="From graded work" changeType="up" icon={Award} iconBg="bg-primary-50" iconColor="text-primary-600" />
            <StatCard label="Recent Notices" value={stats.unreadNotices} change="Check board" changeType="neutral" icon={Bell} iconBg="bg-blue-50" iconColor="text-blue-600" />
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
           
           {/* Left Column: Schedule & Deadlines */}
           <div className="lg:col-span-2 space-y-6">
             {/* Today's Schedule */}
             <Card>
               <CardHeader className="flex justify-between items-center">
                 <h3 className="text-lg font-bold text-surface-900 flex items-center gap-2"><Clock className="w-5 h-5 text-indigo-500"/> Today's Schedule</h3>
                 <span className="text-xs font-bold text-surface-500 uppercase tracking-wider">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
               </CardHeader>
               <CardBody className="p-0">
                 {loading ? <div className="p-6"><TableSkeleton columns={1} rows={3} /></div> : todaysClasses.length === 0 ? (
                   <div className="text-sm text-surface-500 py-12 text-center bg-surface-50">No classes scheduled for today. Enjoy your day!</div>
                 ) : (
                   <div className="divide-y divide-surface-100">
                     {todaysClasses.map(c => (
                       <div key={c.id} className="p-4 sm:px-6 hover:bg-surface-50 transition-colors flex items-center gap-4">
                         <div className="flex-shrink-0 w-14 text-center">
                           <div className="text-sm font-bold text-surface-900">{c.startTime}</div>
                           <div className="text-xs text-surface-500">{c.endTime}</div>
                         </div>
                         <div className="w-1 h-12 bg-indigo-500 rounded-full"></div>
                         <div className="flex-1 min-w-0 pr-4">
                           <h4 className="font-bold text-surface-900 truncate">{c.courseName}</h4>
                           <div className="flex items-center gap-3 mt-1">
                             <p className="text-xs text-surface-500 font-medium truncate">{c.courseCode} • {c.instructor}</p>
                           </div>
                         </div>
                         <div className="flex-shrink-0 text-right">
                           <div className="inline-flex items-center gap-1 text-xs font-bold text-surface-600 bg-surface-100 px-2 py-1 rounded-md">
                             <MapPin className="w-3 h-3" /> {c.room}
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 )}
               </CardBody>
             </Card>

             {/* Upcoming Deadlines */}
             <Card>
               <CardHeader className="flex justify-between items-center">
                 <h3 className="text-lg font-bold text-surface-900 flex items-center gap-2"><PenTool className="w-5 h-5 text-amber-500"/> Pending Assignments</h3>
                 <Link to="/assignments" className="text-sm text-primary-600 font-medium hover:underline flex items-center gap-1">View All <ChevronRight className="w-4 h-4"/></Link>
               </CardHeader>
               <CardBody className="p-0">
                 {loading ? <div className="p-6"><TableSkeleton columns={1} rows={2} /></div> : upcomingDeadlines.length === 0 ? (
                   <div className="text-sm text-surface-500 py-8 text-center bg-surface-50">You're all caught up! No pending deadlines.</div>
                 ) : (
                   <div className="divide-y divide-surface-100">
                     {upcomingDeadlines.map(a => (
                       <Link key={a.id} to="/assignments" className="block p-4 sm:px-6 hover:bg-surface-50 transition-colors group">
                         <div className="flex justify-between items-start mb-1">
                           <h4 className="font-bold text-surface-900 group-hover:text-primary-600 transition-colors pr-4 truncate">{a.title}</h4>
                           <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md flex-shrink-0 whitespace-nowrap">Due: {a.dueDate}</span>
                         </div>
                         <p className="text-xs text-surface-500 font-medium">{a.courseCode} • Max Marks: {a.maxMarks || 100}</p>
                       </Link>
                     ))}
                   </div>
                 )}
               </CardBody>
             </Card>
           </div>

           {/* Right Column: Announcements */}
           <div className="space-y-6">
             <Card className="h-full border-t-4 border-t-blue-500">
               <CardHeader>
                 <h3 className="text-lg font-bold text-surface-900 flex items-center gap-2"><Bell className="w-5 h-5 text-blue-500"/> Notice Board</h3>
               </CardHeader>
               <CardBody className="p-0">
                 {loading ? <div className="p-6"><TableSkeleton columns={1} rows={3} /></div> : announcements.length === 0 ? (
                   <div className="text-sm text-surface-500 py-12 text-center bg-surface-50">No recent announcements.</div>
                 ) : (
                   <div className="divide-y divide-surface-100">
                     {announcements.map(ann => (
                       <Link key={ann.id} to="/announcements" className="block p-5 hover:bg-surface-50 transition-colors group">
                         <div className="flex justify-between items-start mb-2">
                           <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ann.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                             {ann.category}
                           </span>
                           <span className="text-[10px] text-surface-400 font-medium">{ann.date}</span>
                         </div>
                         <h4 className="font-bold text-surface-900 text-sm mb-1.5 group-hover:text-primary-600 transition-colors line-clamp-2">{ann.title}</h4>
                         <p className="text-xs text-surface-500 line-clamp-2">{ann.content}</p>
                       </Link>
                     ))}
                   </div>
                 )}
                 <div className="p-4 border-t border-surface-100 text-center">
                   <Link to="/announcements" className="text-sm font-semibold text-primary-600 hover:text-primary-700">View Notice Board</Link>
                 </div>
               </CardBody>
             </Card>
           </div>

        </div>
      </div>
    </AppLayout>
  );
}
