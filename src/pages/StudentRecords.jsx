import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc, query, where, onSnapshot } from 'firebase/firestore';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardHeader, CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import Modal from '../components/ui/Modal';
import { TableSkeleton } from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import { Search, Download, FileText, UserPlus, Pencil, Trash2, ArrowUpDown, GraduationCap, LineChart, BookOpen, Calculator } from 'lucide-react';

export default function StudentRecords() {
  const { userRole, currentUser } = useAuth();
  if (userRole === 'student') return <StudentGradebook userId={currentUser.uid} />;
  return <StaffStudentView />;
}

// ----------------------------------------------------------------------
// STAFF/ADMIN VIEW (Directory + Gradebook)
// ----------------------------------------------------------------------
function StaffStudentView() {
  const [activeTab, setActiveTab] = useState('directory'); // 'directory' | 'gradebook'

  return (
    <AppLayout title="Student Hub & Grades">
      <div className="max-w-6xl space-y-6 animate-fade-in">
        <div className="flex border-b border-surface-200">
          <button onClick={() => setActiveTab('directory')} className={`px-4 py-3 font-semibold text-sm transition-colors border-b-2 flex items-center gap-2 ${activeTab === 'directory' ? 'border-primary-600 text-primary-700' : 'border-transparent text-surface-500 hover:text-surface-700 hover:border-surface-300'}`}>
            <UserPlus className="w-4 h-4" /> Student Directory
          </button>
          <button onClick={() => setActiveTab('gradebook')} className={`px-4 py-3 font-semibold text-sm transition-colors border-b-2 flex items-center gap-2 ${activeTab === 'gradebook' ? 'border-primary-600 text-primary-700' : 'border-transparent text-surface-500 hover:text-surface-700 hover:border-surface-300'}`}>
            <LineChart className="w-4 h-4" /> Course Gradebook
          </button>
        </div>
        {activeTab === 'directory' ? <StudentDirectory /> : <StaffGradebook />}
      </div>
    </AppLayout>
  );
}

function StudentDirectory() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [deleteModal, setDeleteModal] = useState({ open: false, student: null });
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Note: To make it realistic, we fetch from 'users' where role='student'
    const fetchStudents = async () => {
      try {
        const qUsers = query(collection(db, 'users'), where('role', '==', 'student'));
        const data = await getDocs(qUsers);
        setStudents(data.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (err) { toast.error('Failed to load student data.'); }
      finally { setLoading(false); }
    };
    fetchStudents();
  }, []);

  const handleDelete = async () => {
    if (!deleteModal.student) return;
    setDeleting(true);
    try {
      // In a real strict environment, deleting a user is complex (Auth + Firestore). We delete firestore doc here.
      await deleteDoc(doc(db, 'users', deleteModal.student.id));
      setStudents(students.filter(s => s.id !== deleteModal.student.id));
      toast.success('Student record deleted');
      setDeleteModal({ open: false, student: null });
    } catch (err) { toast.error('Failed to delete student record'); }
    finally { setDeleting(false); }
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  const sortedStudents = [...students].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key] || '';
    const valB = b[sortConfig.key] || '';
    if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredStudents = sortedStudents.filter(student =>
    Object.values(student).some(v => typeof v === 'string' && v.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const exportData = (type) => {
    if (type === 'pdf') {
      const pdfDoc = new jsPDF();
      pdfDoc.text('Student Directory', 14, 15);
      autoTable(pdfDoc, {
        startY: 20,
        head: [['Name', 'Email', 'Role']],
        body: filteredStudents.map((s) => [s.name, s.email, s.role]),
        theme: 'grid'
      });
      pdfDoc.save('students.pdf');
    } else {
      const csv = Papa.unparse(filteredStudents.map(({ name, email, role }) => ({ Name: name, Email: email, Role: role })));
      const link = document.createElement('a');
      link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
      link.download = 'students.csv';
      link.click();
    }
    toast.success(`${type.toUpperCase()} exported`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Input icon={Search} placeholder="Search students..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full sm:w-72" />
        <div className="flex items-center gap-2 flex-wrap">
          <Button variant="secondary" size="sm" icon={FileText} onClick={() => exportData('pdf')}>PDF</Button>
          <Button variant="secondary" size="sm" icon={Download} onClick={() => exportData('csv')}>CSV</Button>
          <Button size="sm" icon={UserPlus} onClick={() => navigate('/add-student')}>Add Student</Button>
        </div>
      </div>

      {!loading && <p className="text-sm text-surface-500">Showing <span className="font-medium text-surface-700">{filteredStudents.length}</span> students</p>}

      {loading ? <TableSkeleton columns={4} rows={6} /> : filteredStudents.length === 0 ? (
        <EmptyState icon={GraduationCap} title="No students found" description={searchTerm ? 'Try a different search term' : 'Add your first student to get started.'} />
      ) : (
        <Card className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-surface-100 bg-surface-50">
                <th onClick={() => handleSort('name')} className="px-6 py-3 text-xs font-bold text-surface-500 uppercase cursor-pointer hover:text-surface-700">Name <ArrowUpDown className="inline w-3 h-3 ml-1"/></th>
                <th onClick={() => handleSort('email')} className="px-6 py-3 text-xs font-bold text-surface-500 uppercase cursor-pointer hover:text-surface-700">Email <ArrowUpDown className="inline w-3 h-3 ml-1"/></th>
                <th className="px-6 py-3 text-xs font-bold text-surface-500 uppercase">Status</th>
                <th className="px-6 py-3 text-xs font-bold text-surface-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {filteredStudents.map(student => (
                <tr key={student.id} className="hover:bg-surface-50">
                  <td className="px-6 py-4 text-sm font-medium text-surface-900">{student.name}</td>
                  <td className="px-6 py-4 text-sm text-surface-600">{student.email}</td>
                  <td className="px-6 py-4"><Badge variant={student.isActive !== false ? 'success' : 'danger'}>{student.isActive !== false ? 'Active' : 'Disabled'}</Badge></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button onClick={() => navigate(`/edit-student/${student.id}`)} className="p-2 text-surface-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg"><Pencil className="w-4 h-4" /></button>
                      <button onClick={() => setDeleteModal({ open: true, student })} className="p-2 text-surface-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}

      <Modal isOpen={deleteModal.open} onClose={() => setDeleteModal({ open: false, student: null })} title="Delete Student Record">
        <div className="space-y-4">
          <p className="text-sm text-surface-600">Are you sure you want to delete <span className="font-semibold">{deleteModal.student?.name}</span>?</p>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setDeleteModal({ open: false, student: null })}>Cancel</Button>
            <Button variant="danger" loading={deleting} onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function StaffGradebook() {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState('');
  
  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onSnapshot(collection(db, 'courses'), snap => setCourses(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    const fetchStudents = async () => {
      const s = await getDocs(query(collection(db, 'users'), where('role', '==', 'student')));
      setStudents(s.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    if (!courseId) return;
    setLoading(true);
    const fetchData = async () => {
      try {
        const aSnap = await getDocs(query(collection(db, 'assignments'), where('courseId', '==', courseId)));
        const aList = aSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        setAssignments(aList);

        if (aList.length > 0) {
          const sSnap = await getDocs(collection(db, 'submissions')); 
          // Client-side filtering because of firestore composite index limitations out-of-the-box
          const aIds = aList.map(a => a.id);
          const sList = sSnap.docs.map(d => d.data()).filter(sub => aIds.includes(sub.assignmentId));
          setSubmissions(sList);
        } else {
          setSubmissions([]);
        }
      } catch (e) { toast.error("Error loading gradebook"); }
      finally { setLoading(false); }
    };
    fetchData();
  }, [courseId]);

  const getStudentGrade = (studentId, assignmentId) => {
    const sub = submissions.find(s => s.studentId === studentId && s.assignmentId === assignmentId);
    return sub?.grade ?? '-';
  };

  const getStudentTotal = (studentId) => {
    if (assignments.length === 0) return 0;
    let earned = 0;
    let max = 0;
    assignments.forEach(a => {
      const sub = submissions.find(s => s.studentId === studentId && s.assignmentId === a.id);
      earned += (sub?.grade || 0);
      max += (a.maxMarks || 100);
    });
    return max > 0 ? Math.round((earned / max) * 100) : 0;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="border-t-4 border-t-primary-500">
        <CardBody className="flex flex-col sm:flex-row items-center gap-4">
          <BookOpen className="w-8 h-8 text-primary-600 shrink-0" />
          <div className="w-full max-w-sm">
            <label className="block text-sm font-semibold text-surface-700 mb-1">Select Course Gradebook</label>
            <select value={courseId} onChange={e=>setCourseId(e.target.value)} className="w-full bg-surface-50 border border-surface-300 rounded-xl px-4 py-2 text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none">
              <option value="">Choose a course...</option>
              {courses.map(c => <option key={c.id} value={c.id}>{c.code} - {c.title}</option>)}
            </select>
          </div>
        </CardBody>
      </Card>

      {!courseId ? (
        <EmptyState icon={Calculator} title="Gradebook Ready" description="Select a course above to view student grades and aggregated totals." />
      ) : loading ? (
        <TableSkeleton columns={4} rows={5} />
      ) : assignments.length === 0 ? (
        <EmptyState icon={FileText} title="No Assignments" description="This course has no assignments published yet." />
      ) : (
        <Card className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-surface-200 bg-surface-50">
                <th className="px-6 py-4 text-xs font-bold text-surface-500 uppercase sticky left-0 bg-surface-50 z-10">Student</th>
                {assignments.map(a => (
                  <th key={a.id} className="px-4 py-4 text-xs font-bold text-surface-500 uppercase text-center min-w-[120px]">
                    <div className="truncate text-primary-700">{a.title}</div>
                    <div className="text-[10px] text-surface-400 font-normal">Max: {a.maxMarks || 100}</div>
                  </th>
                ))}
                <th className="px-6 py-4 text-xs font-black text-emerald-700 uppercase bg-emerald-50 text-right">Overall %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {students.map(student => (
                <tr key={student.id} className="hover:bg-surface-50">
                  <td className="px-6 py-4 text-sm font-medium text-surface-900 sticky left-0 bg-white shadow-[1px_0_0_0_#f3f4f6]">
                    {student.name}
                    <div className="text-xs text-surface-400 font-normal mt-0.5">{student.email}</div>
                  </td>
                  {assignments.map(a => {
                    const grade = getStudentGrade(student.id, a.id);
                    return <td key={a.id} className="px-4 py-4 text-sm text-center font-semibold text-surface-700">{grade}</td>;
                  })}
                  <td className="px-6 py-4 text-right bg-emerald-50/30">
                    <span className="font-black text-lg text-emerald-700">{getStudentTotal(student.id)}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// STUDENT VIEW (My Complete Gradebook)
// ----------------------------------------------------------------------
function StudentGradebook({ userId }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState({}); // { courseId: { assignments: [], totalEarned, totalMax } }

  useEffect(() => {
    const fetchEverything = async () => {
      try {
        // 1. Fetch courses
        const cSnap = await getDocs(collection(db, 'courses'));
        const courseList = cSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        setCourses(courseList);

        // 2. Fetch all assignments
        const aSnap = await getDocs(collection(db, 'assignments'));
        const assignmentsMap = {};
        aSnap.docs.forEach(d => { assignmentsMap[d.id] = { id: d.id, ...d.data() }; });

        // 3. Fetch submissions for this student
        const sSnap = await getDocs(query(collection(db, 'submissions'), where('studentId', '==', userId)));
        const submissions = sSnap.docs.map(d => d.data());

        // 4. Aggregate
        const cData = {};
        courseList.forEach(c => cData[c.id] = { cInfo: c, entries: [], earned: 0, max: 0 });

        submissions.forEach(sub => {
          const aInfo = assignmentsMap[sub.assignmentId];
          if (aInfo && sub.grade !== undefined && sub.grade !== null) {
            const cid = aInfo.courseId;
            if (cData[cid]) {
              cData[cid].entries.push({ title: aInfo.title, grade: sub.grade, maxMarks: aInfo.maxMarks || 100 });
              cData[cid].earned += sub.grade;
              cData[cid].max += (aInfo.maxMarks || 100);
            }
          }
        });

        // Clear empty courses
        Object.keys(cData).forEach(k => { if (cData[k].entries.length === 0) delete cData[k]; });
        setCourseData(cData);
      } catch (e) { toast.error("Error loading your grades"); }
      finally { setLoading(false); }
    };

    fetchEverything();
  }, [userId]);

  return (
    <AppLayout title="My Gradebook">
      <div className="max-w-5xl space-y-6 animate-fade-in">
        
        {loading ? <TableSkeleton columns={2} rows={5} /> : Object.keys(courseData).length === 0 ? (
          <EmptyState icon={Calculator} title="No Grades Yet" description="Your graded assignments will appear here once they are evaluated." />
        ) : (
          <div className="space-y-8">
            {Object.values(courseData).map((cObj, i) => {
              const perc = Math.round((cObj.earned / cObj.max) * 100);
              return (
                <Card key={i} className="border-t-4 border-t-emerald-500">
                  <CardHeader className="flex justify-between items-center bg-surface-50 border-b border-surface-100">
                    <div>
                      <h3 className="font-bold text-surface-900 text-lg">{cObj.cInfo.code} - {cObj.cInfo.title}</h3>
                      <p className="text-sm text-surface-500">Course Grade Breakdown</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-bold text-surface-500 uppercase tracking-widest">Overall Score</span>
                      <span className="text-3xl font-black text-emerald-600">{perc}%</span>
                    </div>
                  </CardHeader>
                  <div className="p-0 overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-surface-200">
                          <th className="px-6 py-4 text-xs font-bold text-surface-500 uppercase">Evaluated Component</th>
                          <th className="px-6 py-4 text-xs font-bold text-surface-500 uppercase text-right">Score</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-100">
                        {cObj.entries.map((entry, j) => (
                          <tr key={j} className="hover:bg-surface-50">
                            <td className="px-6 py-4 font-semibold text-surface-800">{entry.title}</td>
                            <td className="px-6 py-4 text-right">
                              <span className="font-bold text-lg text-surface-900">{entry.grade}</span>
                              <span className="text-sm text-surface-400"> / {entry.maxMarks}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

      </div>
    </AppLayout>
  );
}