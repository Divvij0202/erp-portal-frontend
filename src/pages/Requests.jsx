import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, doc, setDoc, onSnapshot, query, orderBy, serverTimestamp, where } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { logAction } from '../utils/auditLogger';
import toast from 'react-hot-toast';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import Modal from '../components/ui/Modal';
import { TableSkeleton } from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import { FileText, PlusCircle, CheckCircle, XCircle, MessageSquare, Clock } from 'lucide-react';

export default function Requests() {
  const { userRole, currentUser } = useAuth();
  if (userRole === 'student') return <StudentRequests userId={currentUser.uid} />;
  return <StaffAdminRequests userId={currentUser.uid} userRole={userRole} />;
}

// ----------------------------------------------------------------------
// FULL FEATURE STUDENT VIEW
// ----------------------------------------------------------------------
function StudentRequests({ userId }) {
  const { userData } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reqType, setReqType] = useState('leave'); // 'leave' | 'grade_review' | 'general'
  const [description, setDescription] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [courseCode, setCourseCode] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'requests'), where('studentId', '==', userId));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      data.sort((a,b) => (b.timestamp?.toMillis() || 0) - (a.timestamp?.toMillis() || 0));
      setRequests(data);
      setLoading(false);
    });
    return () => unsub();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description) return;
    try {
      const payload = {
        studentId: userId,
        studentName: userData.name || 'Student',
        studentEmail: userData.email,
        type: reqType,
        description,
        status: 'pending',
        timestamp: serverTimestamp()
      };
      
      if (reqType === 'leave') {
        if (!dateFrom || !dateTo) return toast.error('Dates required for leave');
        payload.dateFrom = dateFrom;
        payload.dateTo = dateTo;
      } else if (reqType === 'grade_review') {
        if (!courseCode) return toast.error('Course Code required');
        payload.courseCode = courseCode;
      }

      await addDoc(collection(db, 'requests'), payload);
      toast.success('Request submitted!');
      setIsModalOpen(false);
      setDescription(''); setDateFrom(''); setDateTo(''); setCourseCode('');
    } catch { toast.error("Failed to submit request"); }
  };

  const getStatusBadge = (status) => {
    if (status === 'approved') return <Badge variant="success" icon={CheckCircle}>Approved</Badge>;
    if (status === 'rejected') return <Badge variant="danger" icon={XCircle}>Rejected</Badge>;
    return <Badge variant="warning" icon={Clock}>Pending</Badge>;
  };

  const getTypeLabel = (type) => {
    if (type === 'leave') return 'Leave of Absence';
    if (type === 'grade_review') return 'Grade Review';
    return 'General Inquiry';
  };

  return (
    <AppLayout title="My Requests">
      <div className="max-w-5xl space-y-6 animate-fade-in">
        <div className="flex justify-end mb-4">
          <Button icon={PlusCircle} onClick={() => setIsModalOpen(true)}>Raise New Request</Button>
        </div>

        <Card>
          <div className="overflow-x-auto">
            {loading ? <div className="p-6"><TableSkeleton columns={4} rows={4} /></div> : requests.length === 0 ? (
              <EmptyState icon={FileText} title="No History" description="You haven't made any requests yet." />
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-surface-200 bg-surface-50">
                    <th className="px-6 py-4 text-xs font-bold text-surface-500 uppercase">Type & Details</th>
                    <th className="px-6 py-4 text-xs font-bold text-surface-500 uppercase">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-surface-500 uppercase">Admin Comments</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {requests.map(req => (
                    <tr key={req.id} className="hover:bg-surface-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-surface-900">{getTypeLabel(req.type)}</div>
                        <div className="text-sm text-surface-600 mt-1">
                          {req.type === 'leave' && <span className="block font-medium">Dates: {req.dateFrom} to {req.dateTo}</span>}
                          {req.type === 'grade_review' && <span className="block font-medium">Course: {req.courseCode}</span>}
                          <span className="block text-surface-500 mt-1">{req.description}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(req.status)}</td>
                      <td className="px-6 py-4 text-sm text-surface-700">
                        {req.adminComment ? (
                          <div className="flex items-start gap-2 bg-surface-100 p-2 rounded-lg">
                            <MessageSquare className="w-4 h-4 mt-0.5 text-primary-600 shrink-0"/>
                            <span>{req.adminComment}</span>
                          </div>
                        ) : <span className="text-surface-400 italic">No comments yet</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </Card>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Submit New Request">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-surface-700 mb-2">Request Category</label>
              <select value={reqType} onChange={e=>setReqType(e.target.value)} className="w-full bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none">
                <option value="leave">Leave of Absence</option>
                <option value="grade_review">Grade Review</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            {reqType === 'leave' && (
              <div className="grid grid-cols-2 gap-4 border-l-2 border-primary-500 pl-4 my-2">
                <Input type="date" label="From Date" value={dateFrom} onChange={e=>setDateFrom(e.target.value)} required />
                <Input type="date" label="To Date" value={dateTo} onChange={e=>setDateTo(e.target.value)} required />
              </div>
            )}

            {reqType === 'grade_review' && (
              <div className="border-l-2 border-primary-500 pl-4 my-2">
                <Input label="Course Code" placeholder="e.g. CS101" value={courseCode} onChange={e=>setCourseCode(e.target.value)} required />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-surface-700 mb-2">Detailed Reason/Description</label>
              <textarea 
                rows={4} value={description} onChange={e=>setDescription(e.target.value)} required
                className="w-full bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </Modal>

      </div>
    </AppLayout>
  );
}

// ----------------------------------------------------------------------
// STAFF/ADMIN VIEW (Approval Queue)
// ----------------------------------------------------------------------
function StaffAdminRequests({ userId, userRole }) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('pending'); // 'pending' | 'all'

  // Action Modal State
  const [actionModal, setActionModal] = useState({ open: false, req: null, action: null });
  const [adminComment, setAdminComment] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'requests'), orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      setRequests(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleAction = async (e) => {
    e.preventDefault();
    const { req, action } = actionModal;
    try {
      await setDoc(doc(db, 'requests', req.id), {
        status: action,
        adminComment,
        processedBy: userId,
        processedAt: serverTimestamp()
      }, { merge: true });
      
      await logAction('PROCESSED_REQUEST', 'requests', req.id, { action, student: req.studentEmail });
      toast.success(`Request marked as ${action}`);
      setActionModal({ open: false, req: null, action: null });
      setAdminComment('');
    } catch { toast.error('Failed to process request'); }
  };

  const filteredRequests = filter === 'pending' ? requests.filter(r => r.status === 'pending') : requests;

  return (
    <AppLayout title="Approval Queue">
      <div className="max-w-6xl space-y-6 animate-fade-in">
        <div className="flex gap-2 mb-4">
          <Button variant={filter === 'pending' ? 'primary' : 'secondary'} onClick={() => setFilter('pending')}>Pending Items</Button>
          <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>All History</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? <TableSkeleton columns={1} rows={4} /> : filteredRequests.length === 0 ? (
            <div className="col-span-full border border-dashed border-surface-300 rounded-2xl p-12 text-center text-surface-500">
              <CheckCircle className="w-12 h-12 mx-auto text-emerald-400 mb-4" />
              <p className="text-lg font-bold text-surface-900">Queue is empty!</p>
              <p>You're all caught up with the requests.</p>
            </div>
          ) : filteredRequests.map(req => (
            <Card key={req.id} className={`flex flex-col h-full border-t-4 ${req.status === 'pending' ? 'border-t-amber-400' : req.status === 'approved' ? 'border-t-emerald-500' : 'border-t-red-500'}`}>
              <CardBody className="flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={req.type === 'leave' ? 'primary' : req.type === 'grade_review' ? 'danger' : 'neutral'}>
                    {req.type === 'leave' ? 'Leave' : req.type === 'grade_review' ? 'Grade Review' : 'General'}
                  </Badge>
                  <span className={`text-xs font-bold uppercase tracking-wider ${req.status === 'pending' ? 'text-amber-600' : req.status === 'approved' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {req.status}
                  </span>
                </div>
                
                <h4 className="font-bold text-surface-900 text-lg mb-1">{req.studentName}</h4>
                <p className="text-sm font-mono text-surface-500 mb-4">{req.studentEmail}</p>
                
                <div className="bg-surface-50 p-3 rounded-xl border border-surface-100 text-sm mb-4 grow">
                  {req.type === 'leave' && <div className="font-semibold text-primary-700 mb-2 border-b border-primary-100 pb-1">Period: {req.dateFrom} &rarr; {req.dateTo}</div>}
                  {req.type === 'grade_review' && <div className="font-semibold text-red-700 mb-2 border-b border-red-100 pb-1">Course: {req.courseCode}</div>}
                  <p className="text-surface-700 whitespace-pre-wrap">{req.description}</p>
                </div>

                {req.status !== 'pending' && req.adminComment && (
                  <div className="text-xs text-surface-600 bg-surface-100 p-2 rounded flex gap-2 items-start mt-auto mb-4">
                    <MessageSquare className="w-3 h-3 mt-0.5 shrink-0" /> {req.adminComment}
                  </div>
                )}

                {req.status === 'pending' && (
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <Button variant="ghost" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100" onClick={() => setActionModal({ open: true, req, action: 'approved' })}>Approve</Button>
                    <Button variant="ghost" className="bg-red-50 text-red-700 hover:bg-red-100" onClick={() => setActionModal({ open: true, req, action: 'rejected' })}>Reject</Button>
                  </div>
                )}
              </CardBody>
            </Card>
          ))}
        </div>

        <Modal isOpen={actionModal.open} onClose={() => setActionModal({ open: false, req: null, action: null })} title={`${actionModal.action === 'approved' ? 'Approve' : 'Reject'} Request`}>
          <form onSubmit={handleAction} className="space-y-4">
            <p className="text-sm text-surface-600">You are about to <strong>{actionModal.action}</strong> the request from <strong>{actionModal.req?.studentName}</strong>.</p>
            <div>
              <label className="block text-sm font-semibold text-surface-700 mb-2">Add Comment (Optional, visible to student)</label>
              <textarea 
                rows={3} value={adminComment} onChange={e=>setAdminComment(e.target.value)} placeholder="Provide your reasoning..."
                className="w-full bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 text-surface-900 focus:ring-2 focus:ring-primary-500 outline-none resize-none"
              />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="secondary" onClick={() => setActionModal({ open: false, req: null, action: null })}>Cancel</Button>
              <Button type="submit" variant={actionModal.action === 'approved' ? 'primary' : 'danger'}>Confirm {actionModal.action}</Button>
            </div>
          </form>
        </Modal>

      </div>
    </AppLayout>
  );
}
