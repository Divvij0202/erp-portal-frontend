import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, updateDoc, onSnapshot, setDoc, query, where, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { logAction } from '../utils/auditLogger';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Modal from '../components/ui/Modal';
import { TableSkeleton } from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import { Users, Shield, UserCog, UserX, UserCheck } from 'lucide-react';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModal, setEditModal] = useState({ open: false, user: null });
  const [selectedRole, setSelectedRole] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Real-time listener for users collection
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const usersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(usersData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching users:", error);
      toast.error("Failed to load users in real-time.");
      setLoading(false);
    });

    const q = query(collection(db, 'requests'), where('status', '==', 'pending'));
    const unsubscribeReqs = onSnapshot(q, (snapshot) => {
      setRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubscribe();
      unsubscribeReqs();
    };
  }, []);

  const handleApproveRequest = async (req) => {
    try {
      await setDoc(doc(db, 'users', req.id), {
        email: req.email,
        name: req.name || req.email.split('@')[0],
        role: req.role_requested,
        status: 'active',
        createdAt: serverTimestamp()
      });
      await updateDoc(doc(db, 'requests', req.id), {
        status: 'approved',
        processedAt: serverTimestamp()
      });
      toast.success(`${req.name || req.email} approved as ${req.role_requested}`);
    } catch (err) {
      toast.error("Failed to approve request");
      console.error(err);
    }
  };

  const handleRejectRequest = async (req) => {
    try {
      await updateDoc(doc(db, 'requests', req.id), {
        status: 'rejected',
        processedAt: serverTimestamp()
      });
      toast.success("Request rejected");
    } catch (err) {
      toast.error("Failed to reject request");
    }
  };

  const openEditModal = (user) => {
    setEditModal({ open: true, user });
    setSelectedRole(user.role || 'student');
  };

  const handleUpdateRole = async () => {
    if (!editModal.user) return;
    setIsUpdating(true);
    
    try {
      const userRef = doc(db, 'users', editModal.user.id);
      await updateDoc(userRef, { role: selectedRole });
      
      await logAction('UPDATE_ROLE', 'users', editModal.user.id, { 
        oldRole: editModal.user.role, 
        newRole: selectedRole,
        targetEmail: editModal.user.email
      });
      
      toast.success(`Role updated to ${selectedRole}`);
      setEditModal({ open: false, user: null });
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Failed to update user role");
    } finally {
      setIsUpdating(false);
    }
  };

  const toggleUserStatus = async (user) => {
    const newStatus = user.status === 'disabled' ? 'active' : 'disabled';
    try {
      await updateDoc(doc(db, 'users', user.id), { status: newStatus });
      await logAction('UPDATE_STATUS', 'users', user.id, { status: newStatus });
      toast.success(`User marked as ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update user status");
    }
  };

  const getRoleBadge = (role) => {
    switch(role) {
      case 'admin': return <Badge variant="danger">Admin</Badge>;
      case 'staff': return <Badge variant="primary">Staff</Badge>;
      case 'student':
      default: return <Badge variant="neutral">Student</Badge>;
    }
  };

  return (
    <AppLayout title="User Management">
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-surface-500" />
          <p className="text-surface-500 text-sm">Real-time Admin Control Panel</p>
        </div>

        {requests.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-surface-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Pending Registration Requests
            </h3>
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-surface-200">
                      <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase tracking-wider">User details</th>
                      <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase tracking-wider">Requested Role</th>
                      <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase tracking-wider">Requested On</th>
                      <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-100">
                    {requests.map(req => (
                      <tr key={req.id} className="hover:bg-amber-50/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-surface-900">{req.name || 'Unnamed'}</div>
                          <div className="text-sm text-surface-500">{req.email}</div>
                        </td>
                        <td className="px-6 py-4">{getRoleBadge(req.role_requested)}</td>
                        <td className="px-6 py-4 text-sm text-surface-500">
                          {req.timestamp?.toDate ? new Date(req.timestamp.toDate()).toLocaleDateString() : 'N/A'}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="secondary" onClick={() => handleRejectRequest(req)}>Reject</Button>
                            <Button size="sm" variant="primary" onClick={() => handleApproveRequest(req)}>Approve</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {loading ? (
          <TableSkeleton columns={5} rows={6} />
        ) : users.length === 0 ? (
          <EmptyState icon={Users} title="No users found" description="There are no registered users in the system yet." />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-200">
                    <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase tracking-wider">User details</th>
                    <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase tracking-wider">Joined</th>
                    <th className="px-6 py-4 text-xs font-semibold text-surface-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-surface-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-surface-900">{user.name || 'Unnamed'}</div>
                        <div className="text-sm text-surface-500">{user.email}</div>
                      </td>
                      <td className="px-6 py-4">{getRoleBadge(user.role)}</td>
                      <td className="px-6 py-4">
                        <Badge variant={user.status === 'disabled' ? 'danger' : 'success'}>
                          {user.status || 'active'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-surface-500">
                        {user.createdAt?.toDate ? new Date(user.createdAt.toDate()).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => toggleUserStatus(user)}
                            className="p-2 text-surface-400 hover:text-surface-700 hover:bg-surface-100 rounded-lg transition-colors"
                            title={user.status === 'disabled' ? "Enable User" : "Disable User"}
                          >
                            {user.status === 'disabled' ? <UserCheck className="w-4 h-4" /> : <UserX className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => openEditModal(user)}
                            className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                            title="Edit Role"
                          >
                            <UserCog className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>

      {/* Edit Role Modal */}
      <Modal
        isOpen={editModal.open}
        onClose={() => setEditModal({ open: false, user: null })}
        title="Edit User Role"
      >
        <div className="space-y-4">
          <p className="text-sm text-surface-600">
            Select a new role for <span className="font-semibold text-surface-900">{editModal.user?.email}</span>.
          </p>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full bg-white border border-surface-300 rounded-xl px-4 py-3 text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all appearance-none"
          >
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="admin">Administrator</option>
          </select>

          <div className="flex items-center gap-2 justify-end pt-4">
            <Button variant="secondary" onClick={() => setEditModal({ open: false, user: null })}>
              Cancel
            </Button>
            <Button loading={isUpdating} onClick={handleUpdateRole}>
              Save Role
            </Button>
          </div>
        </div>
      </Modal>
    </AppLayout>
  );
}

export default UserManagement;
