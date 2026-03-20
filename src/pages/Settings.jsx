import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth, storage } from '../firebase';
import { updatePassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import toast from 'react-hot-toast';

import { useAuth } from '../contexts/AuthContext';
import { useTheme, THEMES } from '../contexts/ThemeContext';
import { logAction } from '../utils/auditLogger';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardHeader, CardBody } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import {
  User, Mail, Lock, Settings as SettingsIcon, Shield, Send, Sliders, Save,
  Camera, Trash2, Check, Palette
} from 'lucide-react';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

function Settings() {
  const { userRole, userData, currentUser } = useAuth();
  const { theme: activeTheme, setTheme } = useTheme();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Personal
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Admin System Settings
  const [minAttendance, setMinAttendance] = useState(75);
  const [allowLateSubmissions, setAllowLateSubmissions] = useState(false);
  const [academicYear, setAcademicYear] = useState('2025-2026');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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

  // Profile Picture
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!ALLOWED_TYPES.includes(file.type)) return toast.error('Only JPG and PNG files are allowed.');
    if (file.size > MAX_FILE_SIZE) return toast.error('File must be under 2MB.');
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleAvatarUpload = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, `profile_pictures/${currentUser.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await updateDoc(doc(db, 'users', currentUser.uid), { photoURL: downloadURL });
      setPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      toast.success('Profile picture updated!');
    } catch (err) {
      toast.error(err.message || 'Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  const handleAvatarDelete = async () => {
    setUploading(true);
    try {
      const storageRef = ref(storage, `profile_pictures/${currentUser.uid}`);
      try { await deleteObject(storageRef); } catch (e) { /* ignore if not found */ }
      await updateDoc(doc(db, 'users', currentUser.uid), { photoURL: '' });
      toast.success('Profile picture removed');
    } catch (err) {
      toast.error('Failed to remove picture');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (newPassword && confirmPassword) {
        if (newPassword !== confirmPassword) throw new Error("Passwords don't match");
        await updatePassword(auth.currentUser, newPassword);
        toast.success('Password updated');
      }

      if (userRole === 'admin') {
        await setDoc(doc(db, 'settings', 'system'), {
          minAttendance: Number(minAttendance),
          allowLateSubmissions,
          academicYear,
          updatedAt: new Date()
        }, { merge: true });
        await logAction('UPDATE_SETTINGS', 'settings', 'system', { changes: 'Updated global configuration' });
      }

      toast.success('Settings saved');
      setNewPassword(''); setConfirmPassword('');
    } catch (err) {
      toast.error(err.message || 'Failed to update settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!auth.currentUser?.email) return toast.error('No email available');
    try {
      await sendPasswordResetEmail(auth, auth.currentUser.email);
      toast.success('Password reset email sent');
    } catch (err) { toast.error(err.message); }
  };

  const Toggle = ({ checked, onChange, id }) => (
    <label htmlFor={id} className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" id={id} className="sr-only peer" checked={checked} onChange={onChange} />
      <div className="w-11 h-6 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-sm"
        style={{ backgroundColor: checked ? 'var(--primary)' : 'var(--border)' }} />
    </label>
  );

  const currentAvatar = preview || userData?.photoURL;
  const initials = userData?.name?.charAt(0)?.toUpperCase() || 'U';

  return (
    <AppLayout title="Settings & Configuration">
      <div className="max-w-3xl space-y-6 animate-fade-in pb-12">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Profile & Avatar Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Profile</h3>
              </div>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="relative group shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2" style={{ borderColor: 'var(--border)' }}>
                    {currentAvatar ? (
                      <img src={currentAvatar} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl font-bold" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
                        {initials}
                      </div>
                    )}
                  </div>
                  <button type="button" onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 rounded-2xl bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" />
                  </button>
                  <input type="file" ref={fileInputRef} accept=".jpg,.jpeg,.png" className="hidden" onChange={handleFileSelect} />
                </div>

                {/* Info + Actions */}
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <h4 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{userData?.name || 'User'}</h4>
                  <p className="text-sm flex items-center gap-1 justify-center sm:justify-start" style={{ color: 'var(--text-muted)' }}>
                    <Mail className="w-4 h-4" /> {userData?.email}
                  </p>
                  <p className="text-xs uppercase font-bold tracking-widest" style={{ color: 'var(--primary)' }}>{userRole}</p>
                  <div className="flex gap-2 justify-center sm:justify-start pt-1">
                    {preview && (
                      <>
                        <Button type="button" size="sm" icon={Save} onClick={handleAvatarUpload} loading={uploading}>Save Photo</Button>
                        <Button type="button" size="sm" variant="secondary" onClick={() => { setPreview(null); if(fileInputRef.current) fileInputRef.current.value=''; }}>Cancel</Button>
                      </>
                    )}
                    {!preview && userData?.photoURL && (
                      <Button type="button" size="sm" variant="ghost" icon={Trash2} onClick={handleAvatarDelete} loading={uploading}>Remove</Button>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>JPG or PNG only, max 2MB. Hover avatar to upload.</p>
            </CardBody>
          </Card>

          {/* Theme Selector */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Theme</h3>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>Choose a theme. It applies instantly, persists per account, and works across every page.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {Object.entries(THEMES).map(([key, t]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTheme(key)}
                    className={`relative rounded-xl p-3 text-left transition-all duration-200 border-2 hover:scale-[1.03] ${activeTheme === key ? 'ring-2 ring-offset-2' : ''}`}
                    style={{
                      backgroundColor: t.vars['--bg-card'],
                      borderColor: activeTheme === key ? t.vars['--primary'] : t.vars['--border'],
                      ringColor: t.vars['--primary'],
                    }}
                  >
                    {activeTheme === key && (
                      <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: t.vars['--primary'] }}>
                        <Check className="w-3 h-3" style={{ color: t.vars['--text-inverted'] }} />
                      </div>
                    )}
                    <div className="flex gap-1 mb-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: t.vars['--primary'] }} />
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: t.vars['--accent'] }} />
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: t.vars['--bg'] }} />
                    </div>
                    <p className="text-xs font-bold truncate" style={{ color: t.vars['--text'] }}>
                      {t.emoji} {t.name}
                    </p>
                  </button>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Security</h3>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="New Password" type="password" icon={Lock} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Leave blank to keep current" />
                <Input label="Confirm Password" type="password" icon={Lock} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" />
              </div>
              <div className="pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                <Button type="button" variant="ghost" size="sm" icon={Send} onClick={handleResetPassword}>
                  Send Password Reset Email
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Admin System Config */}
          {userRole === 'admin' && (
            <Card className="border-t-4 border-t-amber-500">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-amber-600" />
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>System Configuration</h3>
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">Admin Only</p>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: 'var(--text)' }}>Minimum Attendance (%)</label>
                    <div className="flex items-center gap-4">
                      <input type="range" min="0" max="100" value={minAttendance}
                        onChange={(e) => setMinAttendance(e.target.value)}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{ accentColor: 'var(--primary)' }} />
                      <span className="font-black text-xl w-12 text-center" style={{ color: 'var(--primary)' }}>{minAttendance}%</span>
                    </div>
                  </div>
                  <Input label="Academic Year" icon={SettingsIcon} value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} required />
                </div>
                <div className="rounded-xl p-4 flex items-center justify-between" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <div>
                    <p className="font-bold" style={{ color: 'var(--text)' }}>Allow Late Submissions</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Instructors can override per assignment</p>
                  </div>
                  <Toggle id="allowLate" checked={allowLateSubmissions} onChange={(e) => setAllowLateSubmissions(e.target.checked)} />
                </div>
              </CardBody>
            </Card>
          )}

          {/* Save Bar */}
          <div className="flex items-center justify-between gap-3 p-4 rounded-xl sticky bottom-4 z-40 backdrop-blur-md"
            style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
            <p className="text-sm font-semibold hidden md:block" style={{ color: 'var(--text-muted)' }}>Unsaved changes will be lost.</p>
            <div className="flex gap-2">
              <Button type="button" variant="secondary" onClick={() => navigate('/')}>Discard</Button>
              <Button type="submit" loading={isLoading} icon={Save}>Save All</Button>
            </div>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}

export default Settings;