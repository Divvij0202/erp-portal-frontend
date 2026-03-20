import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy, addDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { logAction } from '../utils/auditLogger';
import toast from 'react-hot-toast';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { TableSkeleton } from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import { Network, PlusCircle, Trash2, FolderTree, BookOpen, Users } from 'lucide-react';

export default function AcademicStructure() {
  const [activeTab, setActiveTab] = useState('departments'); // departments | courses | sections

  return (
    <AppLayout title="Academic Structure">
      <div className="max-w-6xl space-y-6 animate-fade-in">
        
        {/* Tabs */}
        <div className="flex bg-surface-100 p-1 rounded-xl w-fit">
          <button onClick={() => setActiveTab('departments')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'departments' ? 'bg-white shadow-soft text-primary-700' : 'text-surface-600 hover:text-surface-900'}`}>
            <FolderTree className="w-4 h-4" /> Departments
          </button>
          <button onClick={() => setActiveTab('courses')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'courses' ? 'bg-white shadow-soft text-primary-700' : 'text-surface-600 hover:text-surface-900'}`}>
            <BookOpen className="w-4 h-4" /> Courses
          </button>
          <button onClick={() => setActiveTab('sections')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'sections' ? 'bg-white shadow-soft text-primary-700' : 'text-surface-600 hover:text-surface-900'}`}>
            <Users className="w-4 h-4" /> Sections
          </button>
        </div>

        {activeTab === 'departments' && <DepartmentsManager />}
        {activeTab === 'courses' && <CoursesManager />}
        {activeTab === 'sections' && <SectionsManager />}

      </div>
    </AppLayout>
  );
}

// ----------------------------------------------------------------------
// DEPARTMENTS
// ----------------------------------------------------------------------
function DepartmentsManager() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'departments'), orderBy('name', 'asc'));
    const unsub = onSnapshot(q, snap => {
      setDepartments(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name || !code) return;
    try {
      const docRef = await addDoc(collection(db, 'departments'), { name, code: code.toUpperCase() });
      await logAction('CREATE_DEPARTMENT', 'departments', docRef.id, { name, code });
      toast.success('Department created');
      setName(''); setCode('');
    } catch { toast.error('Failed to create department'); }
  };

  const handleDelete = async (id, depName) => {
    if(!window.confirm(`Delete ${depName}? This may break linked courses.`)) return;
    try {
      await deleteDoc(doc(db, 'departments', id));
      await logAction('DELETE_DEPARTMENT', 'departments', id, { depName });
      toast.success('Deleted');
    } catch { toast.error('Failed to delete'); }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1 h-fit">
        <CardHeader><h3 className="font-bold">Add Department</h3></CardHeader>
        <CardBody>
          <form onSubmit={handleAdd} className="space-y-4">
            <Input label="Department Name" value={name} onChange={e=>setName(e.target.value)} required placeholder="e.g. Computer Science" />
            <Input label="Department Code" value={code} onChange={e=>setCode(e.target.value)} required placeholder="e.g. CSE" />
            <Button type="submit" className="w-full" icon={PlusCircle}>Create</Button>
          </form>
        </CardBody>
      </Card>
      
      <Card className="lg:col-span-2">
        <div className="overflow-x-auto">
          {loading ? <div className="p-4"><TableSkeleton columns={3} rows={3} /></div> : departments.length === 0 ? <EmptyState icon={FolderTree} title="No Departments" /> : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-surface-200 bg-surface-50 text-xs text-surface-500 uppercase">
                  <th className="px-6 py-3">Code</th>
                  <th className="px-6 py-3">Department Name</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {departments.map(d => (
                  <tr key={d.id} className="hover:bg-surface-50">
                    <td className="px-6 py-4 font-bold text-primary-600">{d.code}</td>
                    <td className="px-6 py-4 font-medium">{d.name}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(d.id, d.name)} className="text-red-500 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Card>
    </div>
  );
}

// ----------------------------------------------------------------------
// COURSES
// ----------------------------------------------------------------------
function CoursesManager() {
  const [courses, setCourses] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [credits, setCredits] = useState('');
  const [departmentId, setDepartmentId] = useState('');

  useEffect(() => {
    onSnapshot(collection(db, 'departments'), snap => setDepartments(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    const q = query(collection(db, 'courses'), orderBy('code', 'asc'));
    const unsub = onSnapshot(q, snap => {
      setCourses(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title || !code || !credits || !departmentId) return;
    try {
      const docRef = await addDoc(collection(db, 'courses'), { title, code: code.toUpperCase(), credits: Number(credits), departmentId });
      await logAction('CREATE_COURSE', 'courses', docRef.id, { title, code });
      toast.success('Course created');
      setTitle(''); setCode(''); setCredits('');
    } catch { toast.error('Failed to create course'); }
  };

  const getDepName = (id) => departments.find(d => d.id === id)?.code || 'N/A';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1 h-fit">
        <CardHeader><h3 className="font-bold">Add Course</h3></CardHeader>
        <CardBody>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5 ml-1">Department</label>
              <select value={departmentId} onChange={e=>setDepartmentId(e.target.value)} required className="w-full bg-white border border-surface-300 rounded-xl px-4 py-2.5 text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none appearance-none">
                <option value="">Select Department...</option>
                {departments.map(d => <option key={d.id} value={d.id}>{d.name} ({d.code})</option>)}
              </select>
            </div>
            <Input label="Course Title" value={title} onChange={e=>setTitle(e.target.value)} required placeholder="e.g. Data Structures" />
            <Input label="Course Code" value={code} onChange={e=>setCode(e.target.value)} required placeholder="e.g. CS201" />
            <Input label="Credits" type="number" min="1" max="10" value={credits} onChange={e=>setCredits(e.target.value)} required />
            <Button type="submit" className="w-full" icon={PlusCircle}>Create Course</Button>
          </form>
        </CardBody>
      </Card>
      
      <Card className="lg:col-span-2">
        <div className="overflow-x-auto">
          {loading ? <div className="p-4"><TableSkeleton columns={4} rows={3} /></div> : courses.length === 0 ? <EmptyState icon={BookOpen} title="No Courses" /> : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-surface-200 bg-surface-50 text-xs text-surface-500 uppercase">
                  <th className="px-6 py-3">Code</th>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Department</th>
                  <th className="px-6 py-3">Credits</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {courses.map(c => (
                  <tr key={c.id} className="hover:bg-surface-50">
                    <td className="px-6 py-4 font-bold text-primary-600">{c.code}</td>
                    <td className="px-6 py-4 font-medium">{c.title}</td>
                    <td className="px-6 py-4"><Badge variant="secondary">{getDepName(c.departmentId)}</Badge></td>
                    <td className="px-6 py-4">{c.credits}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" onClick={async () => {
                        if(window.confirm(`Delete ${c.code}?`)) {
                          await deleteDoc(doc(db, 'courses', c.id));
                          toast.success('Course deleted');
                        }
                      }} className="text-red-500 hover:bg-red-50"><Trash2 className="w-4 h-4" /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Card>
    </div>
  );
}

// ----------------------------------------------------------------------
// SECTIONS & CLASS GROUPS
// ----------------------------------------------------------------------
function SectionsManager() {
  const [sections, setSections] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [name, setName] = useState('');
  const [courseId, setCourseId] = useState('');

  useEffect(() => {
    onSnapshot(collection(db, 'courses'), snap => setCourses(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    const unsub = onSnapshot(collection(db, 'sections'), snap => {
      setSections(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name || !courseId) return;
    try {
      const docRef = await addDoc(collection(db, 'sections'), { name: name.toUpperCase(), courseId });
      await logAction('CREATE_SECTION', 'sections', docRef.id, { name, courseId });
      toast.success('Section created');
      setName('');
    } catch { toast.error('Failed to create section'); }
  };

  const getCourse = (id) => courses.find(c => c.id === id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1 h-fit">
        <CardHeader><h3 className="font-bold">Add Section / Batch</h3></CardHeader>
        <CardBody>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5 ml-1">Course</label>
              <select value={courseId} onChange={e=>setCourseId(e.target.value)} required className="w-full bg-white border border-surface-300 rounded-xl px-4 py-2.5 text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none appearance-none">
                <option value="">Select Course...</option>
                {courses.map(c => <option key={c.id} value={c.id}>{c.code} - {c.title}</option>)}
              </select>
            </div>
            <Input label="Section Name" value={name} onChange={e=>setName(e.target.value)} required placeholder="e.g. A, B, L1" />
            <Button type="submit" className="w-full" icon={PlusCircle}>Create Section</Button>
          </form>
        </CardBody>
      </Card>
      
      <Card className="lg:col-span-2">
        <div className="overflow-x-auto">
          {loading ? <div className="p-4"><TableSkeleton columns={3} rows={3} /></div> : sections.length === 0 ? <EmptyState icon={Users} title="No Sections" /> : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-surface-200 bg-surface-50 text-xs text-surface-500 uppercase">
                  <th className="px-6 py-3">Section</th>
                  <th className="px-6 py-3">Linked Course</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {sections.map(s => {
                  const course = getCourse(s.courseId);
                  return (
                    <tr key={s.id} className="hover:bg-surface-50">
                      <td className="px-6 py-4 font-bold text-xl text-surface-900">{s.name}</td>
                      <td className="px-6 py-4">
                        {course ? <span className="font-medium">{course.code} <span className="text-surface-500 text-sm ml-2">{course.title}</span></span> : <span className="text-red-500">Unlinked Course</span>}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" onClick={async () => {
                          if(window.confirm(`Delete section ${s.name}?`)) {
                            await deleteDoc(doc(db, 'sections', s.id));
                            toast.success('Deleted');
                          }
                        }} className="text-red-500 hover:bg-red-50"><Trash2 className="w-4 h-4" /></Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </Card>
    </div>
  );
}
