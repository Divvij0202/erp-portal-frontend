import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, deleteDoc, doc, where } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { logAction } from '../utils/auditLogger';
import toast from 'react-hot-toast';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { TableSkeleton } from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import { CalendarClock, PlusCircle, Trash2, Clock, User, BookOpen, MapPin } from 'lucide-react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Timetable() {
  const { userRole } = useAuth();
  
  const [slots, setSlots] = useState([]);
  const [courses, setCourses] = useState([]);
  const [sections, setSections] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form states (Admin/Staff only)
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({
    day: 'Monday',
    startTime: '09:00',
    endTime: '10:00',
    courseId: '',
    sectionId: '',
    facultyId: '',
    room: ''
  });

  // Filter state
  const [filterDay, setFilterDay] = useState(new Date().getDay() !== 0 ? DAYS[new Date().getDay() - 1] || 'Monday' : 'Monday');

  useEffect(() => {
    // Fetch related data
    onSnapshot(collection(db, 'courses'), snap => setCourses(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    onSnapshot(collection(db, 'sections'), snap => setSections(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    onSnapshot(query(collection(db, 'users'), where('role', '==', 'staff')), snap => setStaffList(snap.docs.map(d => ({ id: d.id, ...d.data() }))));

    // Fetch slots
    const q = query(collection(db, 'timetable_slots'), orderBy('startTime', 'asc'));
    const unsub = onSnapshot(q, snap => {
      setSlots(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'timetable_slots'), form);
      // Construct details for audit log
      const c = courses.find(c => c.id === form.courseId);
      const s = sections.find(s => s.id === form.sectionId);
      await logAction('CREATE_TIMETABLE_SLOT', 'timetable_slots', docRef.id, { 
        day: form.day, time: `${form.startTime}-${form.endTime}`, course: c?.code, section: s?.name 
      });
      toast.success('Slot added to timetable');
      setShowAdd(false);
    } catch { toast.error('Failed to add slot'); }
  };

  const handleDelete = async (id) => {
    if(!window.confirm('Delete this slot?')) return;
    try {
      await deleteDoc(doc(db, 'timetable_slots', id));
      await logAction('DELETE_TIMETABLE_SLOT', 'timetable_slots', id, {});
      toast.success('Slot removed');
    } catch { toast.error('Failed to remove slot'); }
  };

  const displaySlots = slots.filter(s => s.day === filterDay);

  const getSlotDetails = (slot) => {
    const c = courses.find(c => c.id === slot.courseId) || { code: 'N/A', title: 'Unknown Course' };
    const s = sections.find(s => s.id === slot.sectionId) || { name: 'N/A' };
    const f = staffList.find(f => f.id === slot.facultyId) || { name: 'Unknown Faculty' };
    return { course: c, section: s, faculty: f };
  };

  return (
    <AppLayout title="Timetable System">
      <div className="max-w-6xl space-y-6 animate-fade-in">
        
        {/* Controls Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex bg-surface-100 p-1 rounded-xl w-full sm:w-auto overflow-x-auto no-scrollbar">
            {DAYS.map(d => (
              <button 
                key={d} 
                onClick={() => setFilterDay(d)} 
                className={`px-4 py-2 flex-shrink-0 rounded-lg text-sm font-semibold transition-all ${filterDay === d ? 'bg-white shadow-soft text-primary-700' : 'text-surface-600 hover:text-surface-900'}`}
              >
                {d.substring(0, 3)}
              </button>
            ))}
          </div>

          {(userRole === 'admin' || userRole === 'staff') && (
            <Button onClick={() => setShowAdd(!showAdd)} variant={showAdd ? 'secondary' : 'primary'} icon={showAdd ? null : PlusCircle}>
              {showAdd ? 'Cancel' : 'Add Slot'}
            </Button>
          )}
        </div>

        {/* Add Slot Form */}
        {showAdd && (userRole === 'admin' || userRole === 'staff') && (
          <Card className="border-l-4 border-l-primary-500 animate-scale-in">
            <CardHeader><h3 className="font-bold text-surface-900">Configure New Timetable Slot</h3></CardHeader>
            <CardBody>
              <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1 ml-1">Day</label>
                  <select value={form.day} onChange={e=>setForm({...form, day: e.target.value})} className="w-full border-surface-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500">
                    {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <Input type="time" label="Start Time" value={form.startTime} onChange={e=>setForm({...form, startTime: e.target.value})} required />
                <Input type="time" label="End Time" value={form.endTime} onChange={e=>setForm({...form, endTime: e.target.value})} required />
                
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1 ml-1">Course</label>
                  <select required value={form.courseId} onChange={e=>setForm({...form, courseId: e.target.value})} className="w-full border-surface-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Course</option>
                    {courses.map(c => <option key={c.id} value={c.id}>{c.code} - {c.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1 ml-1">Section</label>
                  <select required value={form.sectionId} onChange={e=>setForm({...form, sectionId: e.target.value})} className="w-full border-surface-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Section</option>
                    {sections.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1 ml-1">Faculty</label>
                  <select required value={form.facultyId} onChange={e=>setForm({...form, facultyId: e.target.value})} className="w-full border-surface-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Faculty</option>
                    {staffList.map(f => <option key={f.id} value={f.id}>{f.name || f.email}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2 lg:col-span-3 flex justify-between items-end gap-4 mt-2">
                  <div className="flex-1">
                    <Input label="Room/Location (Optional)" value={form.room} onChange={e=>setForm({...form, room: e.target.value})} placeholder="e.g. Lab 3, Hall A" />
                  </div>
                  <Button type="submit" className="mb-[2px] h-[46px]">Save Slot</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        )}

        {/* Timetable Display */}
        {loading ? <TableSkeleton columns={3} rows={4} /> : displaySlots.length === 0 ? (
          <EmptyState icon={CalendarClock} title={`No classes on ${filterDay}`} description="There are no timetable slots scheduled for this day." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {displaySlots.map(slot => {
              const { course, section, faculty } = getSlotDetails(slot);
              return (
                <Card key={slot.id} className="relative overflow-hidden group border border-surface-200 hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-500" />
                  <CardBody className="pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg text-surface-900 group-hover:text-primary-700 transition-colors uppercase">{course.code}</h4>
                      <Badge variant="neutral" className="font-mono">{slot.startTime} - {slot.endTime}</Badge>
                    </div>
                    <p className="text-sm font-medium text-surface-600 mb-4 truncate" title={course.title}>{course.title}</p>
                    
                    <div className="space-y-2 text-sm text-surface-500">
                      <p className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-surface-400"/> Section <span className="font-semibold text-surface-700">{section.name}</span></p>
                      <p className="flex items-center gap-2"><User className="w-4 h-4 text-surface-400"/> {faculty.name || faculty.email}</p>
                      {slot.room && <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-500"/> {slot.room}</p>}
                    </div>

                    {(userRole === 'admin' || userRole === 'staff') && (
                      <button onClick={() => handleDelete(slot.id)} className="absolute bottom-4 right-4 p-2.5 bg-red-50 text-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </CardBody>
                </Card>
              );
            })}
          </div>
        )}

      </div>
    </AppLayout>
  );
}
