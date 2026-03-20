import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase';
import { updateEmail, updatePassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

import { useAuth } from '../contexts/AuthContext';
import { logAction } from '../utils/auditLogger';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardHeader, CardBody } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import {
  User, Mail, Lock, Settings as SettingsIcon, Palette, Shield, Send, Sliders, Save
} from 'lucide-react';

function Settings() {
  const { userRole, userData } = useAuth();
  const navigate = useNavigate();

  // Personal Settings
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notificationPref, setNotificationPref] = useState(true);
  
  // Admin System Settings
  const [minAttendance, setMinAttendance] = useState(75);
  const [allowLateSubmissions, setAllowLateSubmissions] = useState(false);
  const [academicYear, setAcademicYear] = useState('2025-2026');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      setEmail(auth.currentUser.email || '');
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      const savedNotificationPref = localStorage.getItem('notificationPref') !== 'false';
      setDarkMode(savedDarkMode);
      setNotificationPref(savedNotificationPref);
    }
  }, []);

  useEffect(() => {
    // Fetch global system settings if Admin
    if (userRole === 'admin') {
      const fetchSysSettings = async () => {
        try {
          const docSnap = await getDoc(doc(db, 'settings', 'system'));
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.minAttendance !== undefined) setMinAttendance(data.minAttendance);
            if (data.allowLateSubmissions !== undefined) setAllowLateSubmissions(data.allowLateSubmissions);
            if (data.academicYear !== undefined) setAcademicYear(data.academicYear);
          }
        } catch (error) { console.error("Could not fetch system settings", error); }
      };
      fetchSysSettings();
    }
  }, [userRole]);

  useEffect(() => {
    document.body.className = darkMode ? 'dark bg-surface-900 text-surface-50' : 'light bg-surface-50 text-surface-900';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Personal Settings
      if (email !== auth.currentUser.email) {
        await updateEmail(auth.currentUser, email);
        toast.success('Email updated successfully');
      }

      if (newPassword && currentPassword && confirmPassword) {
        if (newPassword !== confirmPassword) throw new Error("New passwords don't match");
        await updatePassword(auth.currentUser, newPassword);
        toast.success('Password updated successfully');
      }

      localStorage.setItem('notificationPref', notificationPref);

      // 2. Admin System Settings
      if (userRole === 'admin') {
        await setDoc(doc(db, 'settings', 'system'), {
          minAttendance: Number(minAttendance),
          allowLateSubmissions,
          academicYear,
          updatedAt: new Date()
        }, { merge: true });
        
        await logAction('UPDATE_SETTINGS', 'settings', 'system', { changes: 'Updated global configuration' });
      }

      toast.success('Settings saved completely');
      setNewPassword(''); setCurrentPassword(''); setConfirmPassword('');
    } catch (err) {
      console.error('Update error:', err);
      toast.error(err.message || 'Failed to update settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!auth.currentUser?.email) return toast.error('No email address available');
    try {
      await sendPasswordResetEmail(auth, auth.currentUser.email);
      toast.success('Password reset email sent. Check your inbox.');
    } catch (err) { toast.error(err.message || 'Failed to send reset email'); }
  };

  // Custom toggle switch component
  const Toggle = ({ checked, onChange, id }) => (
    <label htmlFor={id} className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" id={id} className="sr-only peer" checked={checked} onChange={onChange} />
      <div className="w-11 h-6 rounded-full bg-surface-300 peer-checked:bg-primary-600 transition-colors duration-200 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full after:shadow-soft" />
    </label>
  );

  return (
    <AppLayout title="Settings & Configuration">
      <div className="max-w-3xl space-y-6 animate-fade-in pb-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Section */}
            <Card>
              <CardHeader className="border-b border-surface-100 bg-surface-50">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary-600" />
                  <h3 className="text-lg font-bold text-surface-900">Personal Profile</h3>
                </div>
              </CardHeader>
              <CardBody className="space-y-4">
                <div className="bg-surface-100 p-4 rounded-xl border border-surface-200 text-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-2">
                    {userData?.name?.charAt(0) || 'U'}
                  </div>
                  <h4 className="font-bold text-surface-900">{userData?.name || 'User'}</h4>
                  <p className="text-sm font-mono text-surface-500 uppercase tracking-widest">{userRole}</p>
                </div>
                
                <Input label="Email Address" type="email" icon={Mail} value={email} onChange={(e) => setEmail(e.target.value)} required />
              </CardBody>
            </Card>

            {/* Preferences Section */}
            <Card>
              <CardHeader className="border-b border-surface-100 bg-surface-50">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary-600" />
                  <h3 className="text-lg font-bold text-surface-900">UI & Notifications</h3>
                </div>
              </CardHeader>
              <CardBody className="space-y-6">
                <div className="bg-surface-50 p-4 rounded-xl border border-surface-200 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-surface-900">Dark Theme</p>
                      <p className="text-xs text-surface-500">Toggle dark mode interface</p>
                    </div>
                    <Toggle id="darkMode" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
                  </div>
                  <div className="h-px bg-surface-200 w-full" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-surface-900">Notifications</p>
                      <p className="text-xs text-surface-500">Enable toast notifications</p>
                    </div>
                    <Toggle id="notificationPref" checked={notificationPref} onChange={(e) => setNotificationPref(e.target.checked)} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Security Section */}
          <Card>
            <CardHeader className="border-b border-surface-100 bg-surface-50">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-bold text-surface-900">Account Security</h3>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-full">
                  <Input label="Current Password" type="password" icon={Lock} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Required when changing password" />
                </div>
                <Input label="New Password" type="password" icon={Lock} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Leave blank to keep current" />
                <Input label="Confirm New Password" type="password" icon={Lock} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" />
              </div>
              <div className="pt-2 border-t border-surface-100 flex items-center justify-between mt-4">
                <p className="text-sm font-semibold text-surface-500">Forgot your password?</p>
                <Button type="button" variant="ghost" size="sm" icon={Send} onClick={handleResetPassword}>
                  Send Password Reset Email
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Admin System Configuration */}
          {userRole === 'admin' && (
            <Card className="border-t-4 border-t-amber-500 shadow-md">
              <CardHeader className="border-b border-surface-100 bg-amber-50/50">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-amber-600" />
                  <div>
                    <h3 className="text-lg font-bold text-surface-900">Global System Configuration</h3>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest">Admin Only Area</p>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <label className="block text-sm font-bold text-surface-800 mb-2">Minimum Attendance Policy (%)</label>
                    <div className="flex items-center gap-4">
                      <input 
                        type="range" min="0" max="100" value={minAttendance} 
                        onChange={(e) => setMinAttendance(e.target.value)}
                        className="w-full accent-primary-600 h-2 bg-surface-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="font-black text-xl text-primary-700 w-12 text-center">{minAttendance}%</span>
                    </div>
                    <p className="text-xs text-surface-500 mt-2">Students falling below this threshold will be flagged in reports and attendance lists.</p>
                  </div>

                  <div className="space-y-1">
                     <Input label="Current Academic Year" icon={SettingsIcon} value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} required />
                     <p className="text-xs text-surface-500 ml-1">e.g. 2025-2026</p>
                  </div>

                </div>

                <div className="bg-surface-50 p-4 rounded-xl border border-surface-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-surface-900">Allow Late Submissions by Default</p>
                    <p className="text-xs text-surface-500">Instructors can override this per assignment</p>
                  </div>
                  <Toggle id="allowLate" checked={allowLateSubmissions} onChange={(e) => setAllowLateSubmissions(e.target.checked)} />
                </div>
              </CardBody>
            </Card>
          )}

          {/* Global Actions */}
          <div className="flex items-center justify-between gap-3 bg-surface-100 p-4 rounded-xl border border-surface-200 sticky bottom-4 z-40 backdrop-blur-md bg-opacity-80 shadow-lg">
            <div className="flex-1 hidden md:block">
              <p className="text-sm font-semibold text-surface-600">Ensure passwords are secure before saving.</p>
            </div>
            <div className="flex gap-2">
              <Button type="button" variant="secondary" onClick={() => navigate('/')}>Discard Changes</Button>
              <Button type="submit" loading={isLoading} icon={Save}>Save All Changes</Button>
            </div>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}

export default Settings;