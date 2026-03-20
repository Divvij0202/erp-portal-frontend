import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Papa from 'papaparse';
import toast from 'react-hot-toast';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardHeader, CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { TableSkeleton } from '../components/ui/Skeleton';
import { Download, FileText, Users, BookOpen, Building2, CheckCircle, XCircle } from 'lucide-react';

const CHART_COLORS = ['#10b981', '#f59e0b', '#ef4444', '#6366f1', '#8b5cf6', '#06b6d4'];

export default function Reports() {
  const [stats, setStats] = useState({
    users: [],
    courses: [],
    departments: [],
    attendance: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEverything = async () => {
      try {
        const [usersSnap, coursesSnap, deptsSnap, attendanceSnap] = await Promise.all([
          getDocs(collection(db, 'users')),
          getDocs(collection(db, 'courses')),
          getDocs(collection(db, 'departments')),
          getDocs(collection(db, 'attendance'))
        ]);

        setStats({
          users: usersSnap.docs.map(d => d.data()),
          courses: coursesSnap.docs.map(d => d.data()),
          departments: deptsSnap.docs.map(d => d.data()),
          attendance: attendanceSnap.docs.map(d => d.data())
        });
      } catch (err) {
        toast.error("Failed to load analytics data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchEverything();
  }, []);

  // Compute Metrics
  const studentsCount = stats.users.filter(u => u.role === 'student').length;
  const staffCount = stats.users.filter(u => u.role === 'staff').length;
  const adminCount = stats.users.filter(u => u.role === 'admin').length;
  
  const roleData = [
    { name: 'Students', value: studentsCount },
    { name: 'Staff', value: staffCount },
    { name: 'Admins', value: adminCount }
  ].filter(d => d.value > 0);

  // Compute Attendance Overview
  let totalPresent = 0;
  let totalAbsent = 0;
  
  // Group attendance by date for trend
  const attendanceByDate = {};
  stats.attendance.forEach(record => {
    Object.values(record.students || {}).forEach(status => {
      if (status === 'present') totalPresent++;
      else if (status === 'absent') totalAbsent++;
    });

    const dateStr = record.date;
    if (dateStr) {
      if (!attendanceByDate[dateStr]) attendanceByDate[dateStr] = { date: dateStr, present: 0, absent: 0 };
      Object.values(record.students || {}).forEach(status => {
        if (status === 'present') attendanceByDate[dateStr].present++;
        else if (status === 'absent') attendanceByDate[dateStr].absent++;
      });
    }
  });

  const attendanceTrendData = Object.values(attendanceByDate)
    .sort((a,b) => new Date(a.date) - new Date(b.date))
    .slice(-14); // Last 14 logged dates

  const overallAttendanceRatio = [
    { name: 'Present', value: totalPresent },
    { name: 'Absent', value: totalAbsent }
  ];

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('ERP System Analytics Overview', 14, 15);
    
    doc.autoTable({
      startY: 25,
      head: [['Metric', 'Value']],
      body: [
        ['Total Students', studentsCount],
        ['Total Staff', staffCount],
        ['Total Courses', stats.courses.length],
        ['Total Departments', stats.departments.length],
        ['Total Attendance Records (Present)', totalPresent],
        ['Total Attendance Records (Absent)', totalAbsent]
      ],
      theme: 'grid'
    });
    
    doc.save('erp-analytics.pdf');
    toast.success('Analytics exported to PDF');
  };

  const exportToCSV = () => {
    const csvData = [
      { Metric: 'Students', Value: studentsCount },
      { Metric: 'Staff', Value: staffCount },
      { Metric: 'Courses', Value: stats.courses.length },
      { Metric: 'Departments', Value: stats.departments.length }
    ];
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'erp-analytics.csv';
    link.click();
    toast.success('Basic metrics exported to CSV');
  };

  const StatCard = ({ title, value, icon: Icon, colorClass }) => (
    <Card className="border-l-4" style={{ borderColor: colorClass }}>
      <CardBody className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-surface-50" style={{ color: colorClass }}>
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <p className="text-sm font-semibold text-surface-500 uppercase tracking-widest">{title}</p>
          <p className="text-3xl font-black text-surface-900">{value}</p>
        </div>
      </CardBody>
    </Card>
  );

  return (
    <AppLayout title="System Analytics">
      <div className="max-w-7xl space-y-6 animate-fade-in">
        
        <div className="flex justify-between items-center bg-surface-50 p-4 rounded-xl border border-surface-200 shadow-sm">
          <div>
            <h2 className="text-lg font-bold text-surface-900">Real-time Metrics</h2>
            <p className="text-sm text-surface-500">Live overview of institution data</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" icon={FileText} onClick={exportToPDF}>Export PDF</Button>
            <Button variant="secondary" icon={Download} onClick={exportToCSV}>Export CSV</Button>
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1,2,3,4].map(i => <div key={i} className="h-24 bg-surface-100 animate-pulse rounded-2xl" />)}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-80 bg-surface-100 animate-pulse rounded-2xl" />
              <div className="h-80 bg-surface-100 animate-pulse rounded-2xl" />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Students" value={studentsCount} icon={Users} colorClass="#6366f1" />
              <StatCard title="Faculty & Staff" value={staffCount} icon={Users} colorClass="#10b981" />
              <StatCard title="Active Courses" value={stats.courses.length} icon={BookOpen} colorClass="#f59e0b" />
              <StatCard title="Departments" value={stats.departments.length} icon={Building2} colorClass="#8b5cf6" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* User Distribution */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <h3 className="font-bold text-surface-900">User Distribution</h3>
                </CardHeader>
                <CardBody>
                  {roleData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={roleData} cx="50%" cy="50%" innerRadius={60} outerRadius={90}
                          paddingAngle={5} dataKey="value" stroke="none"
                        >
                          {roleData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                        <Legend verticalAlign="bottom" height={36}/>
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-[300px] flex items-center justify-center text-surface-400">No data</div>
                  )}
                </CardBody>
              </Card>

              {/* Overall Attendance */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <h3 className="font-bold text-surface-900">Recent Attendance Trends (Timeline)</h3>
                </CardHeader>
                <CardBody>
                  {attendanceTrendData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={attendanceTrendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                        <Legend />
                        <Line type="monotone" dataKey="present" name="Classes Attended" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="absent" name="Classes Missed" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-[300px] flex flex-col items-center justify-center bg-surface-50 rounded-xl border border-dashed border-surface-200 text-surface-400">
                      <p className="font-semibold text-surface-500">No attendance data yet</p>
                      <p className="text-sm text-surface-400">Once sessions are marked, trends will appear here.</p>
                    </div>
                  )}
                </CardBody>
              </Card>

              {/* Overall Attendance Ratio */}
              {totalPresent + totalAbsent > 0 && (
                <Card className="lg:col-span-3 border-t-4 border-t-amber-500">
                  <CardHeader>
                    <h3 className="font-bold text-surface-900">Global Attendance Ratio (All-time)</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-6">
                      <div className="w-64 h-64">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={overallAttendanceRatio} cx="50%" cy="50%" innerRadius={0} outerRadius={100}
                                dataKey="value" stroke="none" labelLine={false}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                                  const RADIAN = Math.PI / 180;
                                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                  return percent > 0 ? (
                                    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="font-bold text-lg drop-shadow-md">
                                      {`${(percent * 100).toFixed(0)}%`}
                                    </text>
                                  ) : null;
                                }}
                              >
                                <Cell key="present" fill="#10b981" />
                                <Cell key="absent" fill="#ef4444" />
                              </Pie>
                              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                            </PieChart>
                          </ResponsiveContainer>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                          <CheckCircle className="w-10 h-10 text-emerald-500" />
                          <div>
                            <p className="text-sm text-emerald-600 font-bold uppercase tracking-widest">Total Present Marks</p>
                            <p className="text-4xl font-black text-emerald-700">{totalPresent}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 bg-red-50 p-4 rounded-xl border border-red-100">
                          <XCircle className="w-10 h-10 text-red-500" />
                          <div>
                            <p className="text-sm text-red-600 font-bold uppercase tracking-widest">Total Absent Marks</p>
                            <p className="text-4xl font-black text-red-700">{totalAbsent}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}