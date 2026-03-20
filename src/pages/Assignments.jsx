import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, doc, setDoc, onSnapshot, query, orderBy, serverTimestamp, getDocs, where } from 'firebase/firestore';
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
import { ClipboardList, PlusCircle, CheckCircle, Clock, Link as LinkIcon, BookOpen, AlertCircle } from 'lucide-react';

export default function Assignments() {
  const { userRole, currentUser } = useAuth();
  if (userRole === 'student') return <StudentAssignments userId={currentUser.uid} />;
  return <StaffAssignments />;
}

// ----------------------------------------------------------------------
// STAFF VIEW (Create & Grade)
// ----------------------------------------------------------------------
function StaffAssignments() {
  const [assignments, setAssignments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list'); // list | create | grade
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [courseId, setCourseId] = useState('');
  const [maxMarks, setMaxMarks] = useState('100');

  useEffect(() => {
    onSnapshot(collection(db, 'courses'), snap => setCourses(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    const q = query(collection(db, 'assignments'), orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setAssignments(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate || !courseId) return;
    
    try {
      const c = courses.find(cr => cr.id === courseId);
      const docRef = await addDoc(collection(db, 'assignments'), {
        title, description, dueDate, courseId, courseCode: c?.code || '',
        maxMarks: Number(maxMarks), timestamp: serverTimestamp()
      });
      await logAction('CREATE_ASSIGNMENT', 'assignments', docRef.id, { title, course: c?.code });
      toast.success('Assignment created');
      setTitle(''); setDescription(''); setDueDate(''); setMaxMarks('100'); setCourseId('');
      setView('list');
    } catch { toast.error('Failed to create assignment'); }
  };

  return (
    <AppLayout title="Course Assignments">
      <div className="max-w-6xl space-y-6 animate-fade-in">
        
        <div className="flex gap-2 mb-6">
          <Button variant={view === 'list' ? 'primary' : 'secondary'} onClick={() => {setView('list'); setSelectedAssignment(null);}} icon={ClipboardList}>
            Active Assignments
          </Button>
          <Button variant={view === 'create' ? 'primary' : 'secondary'} onClick={() => setView('create')} icon={PlusCircle}>
            Create New
          </Button>
        </div>

        {view === 'create' && (
          <Card className="max-w-2xl border-t-4 border-t-primary-500">
            <CardHeader><h3 className="text-lg font-bold text-surface-900">Define Rubric & Assignment</h3></CardHeader>
            <CardBody>
              <form onSubmit={handleCreate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5 ml-1">Target Course</label>
                  <select required value={courseId} onChange={e=>setCourseId(e.target.value)} className="w-full bg-white border border-surface-300 rounded-xl px-4 py-3 text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none">
                    <option value="">Select Course...</option>
                    {courses.map(c => <option key={c.id} value={c.id}>{c.code} - {c.title}</option>)}
                  </select>
                </div>
                <Input label="Assignment Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5 ml-1">Instructions / Rubric</label>
                  <textarea rows={4} value={description} onChange={e => setDescription(e.target.value)} required placeholder="Provide clear instructions and grading rubrics..."
                    className="w-full bg-white border border-surface-300 rounded-xl px-4 py-3 text-surface-900 outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="date" label="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                  <Input type="number" min="1" label="Maximum Marks" value={maxMarks} onChange={(e) => setMaxMarks(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full mt-2">Publish Assignment</Button>
              </form>
            </CardBody>
          </Card>
        )}

        {view === 'list' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading ? <TableSkeleton columns={1} rows={3} /> : assignments.length === 0 ? <p className="text-surface-500">No assignments created yet.</p> :
              assignments.map(a => (
                <Card key={a.id} hover className="cursor-pointer border border-transparent hover:border-primary-300" onClick={() => {setSelectedAssignment(a); setView('grade');}}>
                  <CardBody>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-lg text-surface-900 truncate pr-2">{a.title}</h4>
                      <Badge variant="primary">{a.courseCode}</Badge>
                    </div>
                    <p className="text-sm text-surface-500 mt-2 mb-4 flex items-center gap-2"><Clock className="w-4 h-4"/> Due: {a.dueDate}</p>
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-surface-600">Max Marks: {a.maxMarks || 100}</span>
                      <span className="text-primary-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Grade <span aria-hidden="true">&rarr;</span></span>
                    </div>
                  </CardBody>
                </Card>
              ))
            }
          </div>
        )}

        {view === 'grade' && selectedAssignment && <GradingBoard assignment={selectedAssignment} onBack={() => setView('list')} />}

      </div>
    </AppLayout>
  );
}

function GradingBoard({ assignment, onBack }) {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'submissions'), where('assignmentId', '==', assignment.id));
    const unsub = onSnapshot(q, (snap) => {
      setSubmissions(snap.docs.map(d => ({ submissionId: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, [assignment.id]);

  const handleGrade = async (sub, gradeScore) => {
    if (gradeScore === '' || Number(gradeScore) < 0 || Number(gradeScore) > (assignment.maxMarks || 100)) {
      toast.error(`Grade must be between 0 and ${assignment.maxMarks || 100}`);
      return;
    }
    try {
      await setDoc(doc(db, 'submissions', sub.submissionId), { grade: Number(gradeScore) }, { merge: true });
      await logAction('GRADED_SUBMISSION', 'submissions', sub.submissionId, { score: gradeScore });
      toast.success('Grade saved');
    } catch { toast.error('Error saving grade'); }
  };

  return (
    <Card className="animate-fade-in border-t-4 border-t-emerald-500">
      <CardHeader className="flex justify-between items-center bg-surface-50 border-b border-surface-100">
        <div>
          <h3 className="font-bold text-surface-900 text-lg flex items-center gap-2">{assignment.title} <Badge variant="neutral">{assignment.courseCode}</Badge></h3>
          <p className="text-sm text-surface-500 mt-1">Rubric Max Marks: <strong>{assignment.maxMarks || 100}</strong></p>
        </div>
        <Button variant="ghost" size="sm" onClick={onBack}>&larr; Back to List</Button>
      </CardHeader>
      <div className="overflow-x-auto">
        {loading ? <div className="p-8"><TableSkeleton columns={3} rows={2} /></div> : submissions.length === 0 ? (
          <div className="p-8 text-center text-surface-500">No submissions received yet.</div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-surface-200">
                <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase">Student Email</th>
                <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase w-1/2">Submitted Work</th>
                <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase text-right">Grade / {assignment.maxMarks || 100}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {submissions.map(sub => (
                <tr key={sub.submissionId} className="hover:bg-surface-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-surface-900">{sub.studentEmail}</td>
                  <td className="px-6 py-4 text-sm text-surface-600">
                    <div className="whitespace-pre-wrap mb-2">{sub.content}</div>
                    {sub.link && (
                      <a href={sub.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:underline font-medium">
                        <LinkIcon className="w-3 h-3" /> External Link / File Attachment
                      </a>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <input 
                        type="number" min="0" max={assignment.maxMarks || 100} placeholder="-"
                        defaultValue={sub.grade ?? ''}
                        onBlur={(e) => handleGrade(sub, e.target.value)}
                        className="w-20 px-3 py-1.5 rounded-lg border border-surface-300 focus:ring-2 focus:ring-primary-500 outline-none text-right font-medium"
                      />
                      {sub.grade !== undefined && sub.grade !== null && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Card>
  );
}


// ----------------------------------------------------------------------
// STUDENT VIEW (Submit & View Grades)
// ----------------------------------------------------------------------
function StudentAssignments({ userId }) {
  const { userData } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [mySubmissions, setMySubmissions] = useState({});
  const [loading, setLoading] = useState(true);
  
  const [selectedAsg, setSelectedAsg] = useState(null);
  const [submissionContent, setSubmissionContent] = useState('');
  const [submissionLink, setSubmissionLink] = useState('');

  useEffect(() => {
    const fetchAll = async () => {
      const asgSnap = await getDocs(query(collection(db, 'assignments'), orderBy('timestamp', 'desc')));
      const asgList = asgSnap.docs.map(d => ({ id: d.id, ...d.data() }));
      
      const subSnap = await getDocs(query(collection(db, 'submissions'), where('studentId', '==', userId)));
      const subMap = {};
      subSnap.docs.forEach(d => { subMap[d.data().assignmentId] = d.data(); });

      setAssignments(asgList);
      setMySubmissions(subMap);
      setLoading(false);
    };
    fetchAll();
  }, [userId, selectedAsg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((!submissionContent.trim() && !submissionLink.trim()) || !selectedAsg) return;

    try {
      const subId = `${selectedAsg.id}_${userId}`;
      await setDoc(doc(db, 'submissions', subId), {
        assignmentId: selectedAsg.id,
        assignmentTitle: selectedAsg.title,
        studentId: userId,
        studentEmail: userData.email,
        content: submissionContent,
        link: submissionLink,
        timestamp: serverTimestamp()
      }, { merge: true });
      
      toast.success('Assignment submitted successfully!');
      setSelectedAsg(null); setSubmissionContent(''); setSubmissionLink('');
    } catch { toast.error('Failed to submit'); }
  };

  return (
    <AppLayout title="My Coursework">
      <div className="max-w-5xl space-y-6 animate-fade-in">
        
        {loading ? <TableSkeleton columns={2} rows={3} /> : assignments.length === 0 ? <EmptyState icon={ClipboardList} title="All clear!" description="No active assignments right now." /> :
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assignments.map(a => {
              const sub = mySubmissions[a.id];
              const isSubmitted = !!sub;
              const hasGrade = sub?.grade !== undefined && sub?.grade !== null;

              return (
                <Card key={a.id} className={isSubmitted ? 'border-l-4 border-l-emerald-500' : 'border-l-4 border-l-amber-500'}>
                  <CardBody className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-surface-900 pr-2">{a.title}</h4>
                        <Badge variant="neutral">{a.courseCode}</Badge>
                      </div>
                      <p className="text-sm text-surface-600 line-clamp-2 mb-4">{a.description}</p>
                    </div>
                    
                    <div className="flex justify-between items-end border-t border-surface-100 pt-4 mt-auto">
                      <div className="space-y-1">
                        <span className="text-xs font-semibold px-2 py-1 bg-surface-100 rounded-md text-surface-600 flex items-center gap-1 w-fit">
                          <Clock className="w-3 h-3"/> Due: {a.dueDate}
                        </span>
                        {isSubmitted ? (
                          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Submitted</span>
                        ) : (
                          <span className="text-xs font-bold text-amber-600 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> Action Required</span>
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        {hasGrade ? (
                          <div className="text-center px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100 transform rotate-2">
                            <span className="block text-[10px] text-emerald-600 font-extrabold uppercase tracking-widest">Graded</span>
                            <span className="text-2xl font-black text-emerald-700">{sub.grade}<span className="text-sm text-emerald-500 font-medium">/{a.maxMarks || 100}</span></span>
                          </div>
                        ) : (
                          !isSubmitted && <Button onClick={() => setSelectedAsg(a)} variant="primary" size="sm">Submit Work</Button>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        }

        {selectedAsg && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 animate-scale-in max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-bold text-surface-900 mb-1">{selectedAsg.title}</h2>
              <p className="text-sm text-surface-500 mb-6 pb-4 border-b border-surface-200 whitespace-pre-wrap">{selectedAsg.description}</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-surface-700 mb-2">Answer / Text Submission</label>
                  <textarea 
                    rows={5} value={submissionContent} onChange={(e) => setSubmissionContent(e.target.value)}
                    placeholder="Type your submission here..."
                    className="w-full bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 text-surface-900 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <Input label="External Link / Drive URL (Optional)" value={submissionLink} onChange={e=>setSubmissionLink(e.target.value)} icon={LinkIcon} placeholder="https://..." />
                
                <div className="flex gap-3 justify-end pt-4 border-t border-surface-100">
                  <Button type="button" variant="secondary" onClick={() => {setSelectedAsg(null); setSubmissionContent(''); setSubmissionLink('');}}>Cancel</Button>
                  <Button type="submit" icon={CheckCircle}>Confirm Hand In</Button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </AppLayout>
  );
}
