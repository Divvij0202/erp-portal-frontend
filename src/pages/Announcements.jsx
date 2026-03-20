import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { logAction } from '../utils/auditLogger';
import toast from 'react-hot-toast';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { Bell, Trash2, Megaphone, Send, Users, BookOpen, Layers } from 'lucide-react';

function Announcements() {
  const { userRole, userData } = useAuth();
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Data for targeting
  const [courses, setCourses] = useState([]);
  const [sections, setSections] = useState([]);
  
  // Form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [targetType, setTargetType] = useState('global'); // 'global' | 'course' | 'section'
  const [targetGlobal, setTargetGlobal] = useState('all'); // 'all' | 'student' | 'staff'
  const [targetCourse, setTargetCourse] = useState('');
  const [targetSection, setTargetSection] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canManage = userRole === 'admin' || userRole === 'staff';

  useEffect(() => {
    // Fetch courses and sections for the dropdowns
    if (canManage) {
      onSnapshot(collection(db, 'courses'), snap => setCourses(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
      onSnapshot(collection(db, 'sections'), snap => setSections(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    }
  }, [canManage]);

  useEffect(() => {
    const q = query(collection(db, 'announcements'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      
      const userCourses = userData?.courses || [];
      const userSection = userData?.sectionId || null;

      const filtered = userRole === 'admin' 
        ? data 
        : data.filter(a => {
            if (!a.targetRoles) return true;
            if (a.targetRoles.includes('all') || a.targetRoles.includes(userRole)) return true;
            // Forward compatibility: if user has course/section attached
            if (userCourses.some(cId => a.targetRoles.includes(`course_${cId}`))) return true;
            if (userSection && a.targetRoles.includes(`section_${userSection}`)) return true;
            // If they are staff and it targets a specific course they teach
            if (userRole === 'staff') return true; // staff typically can see all acad announcements
            return false;
          });
      
      setAnnouncements(filtered);
      setLoading(false);
    }, (error) => {
      console.error(error);
      toast.error('Failed to fetch announcements');
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [userRole, userData]);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    let targetRolesArray = [];
    let displayTarget = '';

    if (targetType === 'global') {
      targetRolesArray = targetGlobal === 'all' ? ['all', 'admin', 'staff', 'student'] : [targetGlobal, 'admin'];
      displayTarget = targetGlobal === 'all' ? 'All Users' : (targetGlobal === 'student' ? 'Students Only' : 'Staff Only');
    } else if (targetType === 'course') {
      if (!targetCourse) return toast.error("Please select a course");
      targetRolesArray = [`course_${targetCourse}`, 'admin', 'staff'];
      const c = courses.find(c => c.id === targetCourse);
      displayTarget = c ? `Course: ${c.code}` : 'Specific Course';
    } else if (targetType === 'section') {
      if (!targetSection) return toast.error("Please select a section");
      targetRolesArray = [`section_${targetSection}`, 'admin', 'staff'];
      const s = sections.find(s => s.id === targetSection);
      displayTarget = s ? `Section: ${s.name}` : 'Specific Section';
    }

    setIsSubmitting(true);
    
    try {
      const authorName = userData?.name || 'Staff Member';
      
      const docRef = await addDoc(collection(db, 'announcements'), {
        title: title.trim(),
        content: content.trim(),
        authorName,
        targetRoles: targetRolesArray,
        displayTarget,
        timestamp: serverTimestamp()
      });
      
      await logAction('POST_ANNOUNCEMENT', 'announcements', docRef.id, { title, targetType, displayTarget });
      toast.success('Announcement posted');
      setTitle(''); setContent('');
      setTargetType('global'); setTargetGlobal('all'); setTargetCourse(''); setTargetSection('');
    } catch (error) {
      toast.error('Failed to post announcement');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id, title) => {
    try {
      await deleteDoc(doc(db, 'announcements', id));
      await logAction('DELETE_ANNOUNCEMENT', 'announcements', id, { title });
      toast.success('Announcement deleted');
    } catch (error) {
      toast.error('Failed to delete announcement');
    }
  };

  const getTargetBadge = (rolesArray, displayTarget) => {
    if (rolesArray?.includes('course_' + targetCourse) || displayTarget?.includes('Course')) return <Badge variant="primary" icon={BookOpen}>{displayTarget}</Badge>;
    if (rolesArray?.includes('section_' + targetSection) || displayTarget?.includes('Section')) return <Badge variant="warning" icon={Layers}>{displayTarget}</Badge>;
    if (rolesArray?.includes('student')) return <Badge variant="info" icon={Users}>Students Only</Badge>;
    if (rolesArray?.includes('staff')) return <Badge variant="warning" icon={Users}>Staff Only</Badge>;
    return <Badge variant="neutral" icon={Users}>Campus Wide</Badge>;
  };

  return (
    <AppLayout title="Announcements">
      <div className="space-y-8 animate-fade-in max-w-4xl">
        
        {/* Post Announcement Form (Admin/Staff only) */}
        {canManage && (
          <Card className="border-t-4 border-t-primary-500 shadow-md">
            <CardHeader className="bg-surface-50 border-b border-surface-100">
              <div className="flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-bold text-surface-900">Broadcast New Announcement</h3>
              </div>
            </CardHeader>
            <CardBody>
              <form onSubmit={handlePost} className="space-y-5">
                <Input label="Title" placeholder="e.g. End of Semester Examinations" value={title} onChange={(e) => setTitle(e.target.value)} required />
                
                <div>
                  <label className="block text-sm font-semibold text-surface-700 mb-2">Message Content</label>
                  <textarea
                    rows={4} value={content} onChange={(e) => setContent(e.target.value)} required
                    placeholder="Type the details of your announcement here..."
                    className="w-full bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none shadow-sm"
                  />
                </div>

                <div className="bg-surface-50 p-4 rounded-xl border border-surface-200 space-y-4">
                  <label className="block text-sm font-bold text-surface-800">Target Audience</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/3">
                      <select value={targetType} onChange={(e) => setTargetType(e.target.value)} className="w-full bg-white border border-surface-300 rounded-lg px-3 py-2 text-sm text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none">
                        <option value="global">Role-based (Global)</option>
                        <option value="course">Specific Course</option>
                        <option value="section">Specific Section</option>
                      </select>
                    </div>

                    <div className="w-full sm:w-2/3">
                      {targetType === 'global' && (
                        <select value={targetGlobal} onChange={(e) => setTargetGlobal(e.target.value)} className="w-full bg-white border border-surface-300 rounded-lg px-3 py-2 text-sm text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none">
                          <option value="all">Everyone (Campus Wide)</option>
                          <option value="student">Students Only</option>
                          <option value="staff">Staff Only</option>
                        </select>
                      )}
                      {targetType === 'course' && (
                        <select value={targetCourse} onChange={(e) => setTargetCourse(e.target.value)} className="w-full bg-white border border-surface-300 rounded-lg px-3 py-2 text-sm text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none">
                          <option value="">Select a Course...</option>
                          {courses.map(c => <option key={c.id} value={c.id}>{c.code} - {c.title}</option>)}
                        </select>
                      )}
                      {targetType === 'section' && (
                        <select value={targetSection} onChange={(e) => setTargetSection(e.target.value)} className="w-full bg-white border border-surface-300 rounded-lg px-3 py-2 text-sm text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none">
                          <option value="">Select a Section...</option>
                          {sections.map(s => <option key={s.id} value={s.id}>{s.name} ({s.courseId})</option>)}
                        </select>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <Button type="submit" icon={Send} loading={isSubmitting} className="min-w-[120px]">
                    Publish Now
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        )}

        {/* Announcements Feed */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4 pl-1">
            <Bell className="w-5 h-5 text-surface-500" />
            <h3 className="text-xl font-bold text-surface-900">Notice Board</h3>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => <div key={i} className="animate-pulse bg-surface-100 h-32 rounded-2xl w-full"></div>)}
            </div>
          ) : announcements.length === 0 ? (
            <div className="text-center py-16 bg-surface-50 rounded-2xl border border-surface-200 border-dashed">
              <Bell className="w-12 h-12 text-surface-300 mx-auto mb-4" />
              <p className="text-lg text-surface-600 font-bold mb-1">No announcements yet</p>
              <p className="text-sm text-surface-400">You're all caught up! Check back later.</p>
            </div>
          ) : (
            announcements.map((announcement) => (
              <Card key={announcement.id} className="relative overflow-hidden group hover:shadow-md transition-shadow">
                <CardBody className="p-6">
                  {/* Decorative accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-500 rounded-l-2xl" />
                  
                  <div className="flex justify-between items-start gap-4">
                    <div className="w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <h4 className="text-xl font-bold text-surface-900">{announcement.title}</h4>
                        {getTargetBadge(announcement.targetRoles, announcement.displayTarget)}
                      </div>
                      
                      <div className="bg-surface-50 p-4 rounded-xl border border-surface-100 mb-4">
                        <p className="text-surface-700 whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
                          {announcement.content}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-surface-400 uppercase tracking-widest">
                        <span>{announcement.authorName}</span>
                        <span className="w-1 h-1 rounded-full bg-surface-300" />
                        <span>
                          {announcement.timestamp?.toDate 
                            ? new Date(announcement.timestamp.toDate()).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) 
                            : 'Just now'}
                        </span>
                      </div>
                    </div>

                    {/* Delete button (Admin/Staff only) */}
                    {canManage && (
                      <button 
                        onClick={() => handleDelete(announcement.id, announcement.title)}
                        className="p-2 text-surface-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100 shrink-0 mt-1"
                        title="Delete announcement"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </div>
    </AppLayout>
  );
}

export default Announcements;
