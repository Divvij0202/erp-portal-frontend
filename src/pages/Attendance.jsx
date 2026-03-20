import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, setDoc, onSnapshot, query, where, getDocs, serverTimestamp, orderBy } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { logAction } from '../utils/auditLogger';
import toast from 'react-hot-toast';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { TableSkeleton } from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import { CalendarCheck, Save, Users, AlertCircle, BookOpen, Clock } from 'lucide-react';

export default function Attendance() {
  const { userRole, currentUser } = useAuth();
  
  if (userRole === 'student') return <StudentAttendance userId={currentUser.uid} />;
  return <StaffAttendance />;
}

// ----------------------------------------------------------------------
// STAFF VIEW (Mark Attendance)
// ----------------------------------------------------------------------
function StaffAttendance() {
  const { currentUser } = useAuth();
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [sections, setSections] = useState([]);
  const [loadingConfig, setLoadingConfig] = useState(true);

  // Session state
  const [courseId, setCourseId] = useState('');
  const [sectionId, setSectionId] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'));
  const [time, setTime] = useState('09:00');

  const [attendanceData, setAttendanceData] = useState({}); // { studentId: 'present' | 'absent' }
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Fetch courses and sections for dropdowns
    onSnapshot(collection(db, 'courses'), snap => setCourses(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    onSnapshot(collection(db, 'sections'), snap => setSections(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    setLoadingConfig(false);
  }, []);

  useEffect(() => {
    const fetchStudentsAndSession = async () => {
      if (!courseId || !sectionId) {
        setStudents([]);
        return;
      }
      setLoadingStudents(true);
      try {
        // Fetch students (ideally filtered by sectionId, but for now fetch all students)
        const qUsers = query(collection(db, 'users'), where('role', '==', 'student'));
        const usersSnap = await getDocs(qUsers);
        const studentList = usersSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        setStudents(studentList);

        // Fetch existing attendance for this specific session
        const qAtt = query(collection(db, 'attendance'), 
          where('courseId', '==', courseId),
          where('sectionId', '==', sectionId),
          where('date', '==', date)
        );
        const attSnap = await getDocs(qAtt);
        
        const currentAtt = {};
        studentList.forEach(s => { currentAtt[s.id] = 'present'; }); // default UX
        
        attSnap.docs.forEach(d => {
          const data = d.data();
          if (data.studentId) currentAtt[data.studentId] = data.status;
        });
        setAttendanceData(currentAtt);
      } catch (error) { toast.error('Failed to load students'); }
      finally { setLoadingStudents(false); }
    };

    fetchStudentsAndSession();
  }, [courseId, sectionId, date]);

  const toggleStatus = (studentId) => {
    setAttendanceData(prev => ({ ...prev, [studentId]: prev[studentId] === 'present' ? 'absent' : 'present' }));
  };

  const markAll = (status) => {
    const newAtt = {};
    students.forEach(s => { newAtt[s.id] = status; });
    setAttendanceData(newAtt);
  };

  const handleSave = async () => {
    if (!courseId || !sectionId) return toast.error('Select a course and section first');
    setSaving(true);
    try {
      const c = courses.find(c => c.id === courseId);
      const batchPromises = Object.entries(attendanceData).map(([studentId, status]) => {
        const docId = `${studentId}_${courseId}_${sectionId}_${date}`;
        return setDoc(doc(db, 'attendance', docId), {
          studentId, courseId, sectionId,
          courseCode: c?.code || 'Unknown',
          date, time, status,
          recordedBy: currentUser.uid,
          timestamp: serverTimestamp()
        }, { merge: true });
      });

      await Promise.all(batchPromises);
      await logAction('MARKED_ATTENDANCE', 'attendance', `${courseId}_${date}`, { count: Object.keys(attendanceData).length, courseCode: c?.code });
      toast.success('Session attendance saved!');
    } catch (error) { toast.error('Failed to save attendance'); }
    finally { setSaving(false); }
  };

  return (
    <AppLayout title="Mark Attendance">
      <div className="space-y-6 animate-fade-in max-w-5xl">
        
        <Card className="border-t-4 border-t-primary-500">
          <CardHeader><h3 className="font-bold text-surface-900">Define Session Configuration</h3></CardHeader>
          <CardBody className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1 ml-1 flex items-center gap-1"><BookOpen className="w-4 h-4"/> Course</label>
              <select value={courseId} onChange={e=>setCourseId(e.target.value)} className="w-full bg-surface-50 border border-surface-300 rounded-xl px-4 py-2 text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none">
                <option value="">Select Course</option>
                {courses.map(c => <option key={c.id} value={c.id}>{c.code}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1 ml-1">Section</label>
              <select value={sectionId} onChange={e=>setSectionId(e.target.value)} className="w-full bg-surface-50 border border-surface-300 rounded-xl px-4 py-2 text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none">
                <option value="">Select Section</option>
                {sections.filter(s => s.courseId === courseId).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1 ml-1 flex items-center gap-1"><CalendarCheck className="w-4 h-4"/> Date</label>
              <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full bg-surface-50 border border-surface-300 rounded-xl px-4 py-2 appearance-none outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1 ml-1 flex items-center gap-1"><Clock className="w-4 h-4"/> Time</label>
              <input type="time" value={time} onChange={e=>setTime(e.target.value)} className="w-full bg-surface-50 border border-surface-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
          </CardBody>
        </Card>

        {!courseId || !sectionId ? (
          <EmptyState icon={Users} title="Ready to Mark Attendance" description="Select a Course and Section above to load the student list." />
        ) : loadingStudents ? (
          <TableSkeleton columns={3} rows={6} />
        ) : students.length === 0 ? (
          <EmptyState icon={Users} title="No students found" description="There are no students associated with this query." />
        ) : (
          <Card>
            <div className="flex justify-between items-center p-4 border-b border-surface-200 bg-surface-50">
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" onClick={() => markAll('present')}>Mark All Present</Button>
                <Button variant="ghost" className="text-red-600 hover:bg-red-50" size="sm" onClick={() => markAll('absent')}>Mark All Absent</Button>
              </div>
              <Button onClick={handleSave} loading={saving} icon={Save}>Save Session</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-surface-200 bg-white">
                    <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase">Student Name</th>
                    <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-surface-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-surface-900">{student.name || 'Unnamed Student'}</div>
                        <div className="text-sm text-surface-500 font-mono">{student.email}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => toggleStatus(student.id)}
                          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all w-28 ${
                            attendanceData[student.id] === 'present' 
                              ? 'bg-emerald-100 text-emerald-700 shadow-inner' 
                              : 'bg-red-100 text-red-700 shadow-inner'
                          }`}
                        >
                          {attendanceData[student.id] === 'present' ? 'Present' : 'Absent'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}

// ----------------------------------------------------------------------
// STUDENT VIEW (View Attendance & Alerts)
// ----------------------------------------------------------------------
function StudentAttendance({ userId }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'attendance'), where('studentId', '==', userId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      data.sort((a, b) => new Date(`${b.date}T${b.time || '00:00'}`) - new Date(`${a.date}T${a.time || '00:00'}`));
      setRecords(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [userId]);

  const totalClasses = records.length;
  const classesAttended = records.filter(r => r.status === 'present').length;
  const percentage = totalClasses === 0 ? 100 : Math.round((classesAttended / totalClasses) * 100);

  // Group by Course for Analytics
  const courseStats = records.reduce((acc, curr) => {
    const code = curr.courseCode || 'Unknown';
    if (!acc[code]) acc[code] = { total: 0, present: 0 };
    acc[code].total += 1;
    if (curr.status === 'present') acc[code].present += 1;
    return acc;
  }, {});

  return (
    <AppLayout title="My Attendance">
      <div className="space-y-6 animate-fade-in max-w-5xl">
        
        {/* Global Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-primary-50 border-none">
            <CardBody className="text-center">
              <p className="text-sm text-primary-600 font-bold uppercase tracking-wider mb-1">Overall Attendance</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className={`text-4xl font-black ${percentage < 75 ? 'text-red-600' : 'text-primary-700'}`}>{percentage}%</span>
              </div>
            </CardBody>
          </Card>
          <Card className="bg-emerald-50 border-none">
            <CardBody className="text-center">
              <p className="text-sm text-emerald-600 font-bold uppercase tracking-wider mb-1">Present</p>
              <p className="text-4xl font-black text-emerald-700">{classesAttended}</p>
            </CardBody>
          </Card>
          <Card className="bg-red-50 border-none">
            <CardBody className="text-center">
              <p className="text-sm text-red-600 font-bold uppercase tracking-wider mb-1">Absent</p>
              <p className="text-4xl font-black text-red-700">{totalClasses - classesAttended}</p>
            </CardBody>
          </Card>
        </div>

        {percentage < 75 && totalClasses > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl flex items-start gap-3 animate-pulse-soft">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-red-800 font-bold">Attendance Warning</h4>
              <p className="text-red-700 text-sm mt-1">Your overall attendance has fallen below 75%. This may affect your eligibility for upcoming evaluations.</p>
            </div>
          </div>
        )}

        {/* Course-wise Breakdown */}
        {Object.keys(courseStats).length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(courseStats).map(([code, stats]) => {
              const p = Math.round((stats.present / stats.total) * 100);
              return (
                <Card key={code} className={`border-l-4 ${p < 75 ? 'border-l-red-500' : 'border-l-emerald-500'}`}>
                  <CardBody className="p-4">
                    <h4 className="font-bold text-surface-900">{code}</h4>
                    <p className="text-2xl font-black mt-2">{p}% <span className="text-xs font-semibold text-surface-500">({stats.present}/{stats.total})</span></p>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        )}

        {/* Detailed History */}
        <Card>
          <CardHeader><h3 className="font-semibold text-surface-900 flex items-center gap-2"><Clock className="w-5 h-5" /> Recent Sessions</h3></CardHeader>
          {loading ? <TableSkeleton columns={3} rows={4} /> : records.length === 0 ? (
            <EmptyState icon={AlertCircle} title="No records found" description="Your attendance has not been marked yet." />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-surface-100 bg-surface-50">
                    <th className="px-6 py-3 text-xs font-bold text-surface-500 uppercase">Session Info</th>
                    <th className="px-6 py-3 text-xs font-bold text-surface-500 uppercase">Date & Time</th>
                    <th className="px-6 py-3 text-xs font-bold text-surface-500 uppercase text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {records.map((r, i) => (
                    <tr key={i} className="hover:bg-surface-50">
                      <td className="px-6 py-4">
                        <span className="font-bold text-surface-900">{r.courseCode}</span>
                        {r.sectionId && <span className="text-surface-500 text-xs ml-2">Session</span>}
                      </td>
                      <td className="px-6 py-4 font-medium text-surface-700">{r.date} <span className="text-surface-400 font-normal ml-1 text-sm">{r.time}</span></td>
                      <td className="px-6 py-4 text-right">
                        <Badge variant={r.status === 'present' ? 'success' : 'danger'}>{r.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </AppLayout>
  );
}
