import React, { useState, useRef, useEffect } from 'react';
import AppLayout from '../components/ui/AppLayout';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Modal from '../components/ui/Modal';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { db, storage } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import toast from 'react-hot-toast';
import { User, Mail, Shield, BookOpen, Clock, Camera, Trash2, Upload, ImageIcon } from 'lucide-react';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

export default function MyProfile() {
  const { userData, currentUser } = useAuth();
  const { theme, setTheme, themes } = useTheme();

  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const [editModal, setEditModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', bio: '' });
  const [savingProfile, setSavingProfile] = useState(false);

  useEffect(() => {
    if (userData && !editModal) {
      setFormData({
        name: userData.name || '',
        phone: userData.phone || '',
        bio: userData.bio || ''
      });
    }
  }, [userData, editModal]);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setSavingProfile(true);
    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        name: formData.name,
        phone: formData.phone,
        bio: formData.bio
      });
      toast.success('Profile updated');
      setEditModal(false);
    } catch (err) {
      toast.error('Failed to update profile');
    } finally {
      setSavingProfile(false);
    }
  };

  if (!userData || !themes) return null;

  const validateFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error('Only JPG and PNG files are allowed.');
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      toast.error('File size must be under 2MB.');
      return false;
    }
    return true;
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!validateFile(file)) return;

    // Show instant preview
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) return toast.error('No file selected');
    if (!validateFile(file)) return;

    setUploading(true);
    try {
      // Upload to Firebase Storage at profile_pictures/{uid}
      const storageRef = ref(storage, `profile_pictures/${currentUser.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      // Save URL to Firestore user document
      await updateDoc(doc(db, 'users', currentUser.uid), { photoURL: downloadURL });

      setPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      toast.success('Profile picture updated!');
    } catch (err) {
      console.error('Upload error:', err);
      toast.error(err.message || 'Upload failed. Make sure Firebase Storage is enabled.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!userData.photoURL) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, `profile_pictures/${currentUser.uid}`);
      await deleteObject(storageRef);
      await updateDoc(doc(db, 'users', currentUser.uid), { photoURL: '' });
      toast.success('Profile picture removed');
    } catch (err) {
      // If file doesn't exist in storage, still clear the URL
      await updateDoc(doc(db, 'users', currentUser.uid), { photoURL: '' });
      toast.success('Profile picture removed');
    } finally {
      setUploading(false);
    }
  };

  const currentAvatar = preview || userData.photoURL;
  const initials = userData.name ? userData.name.charAt(0).toUpperCase() : 'S';

  return (
    <AppLayout title="My Academic Profile">
      <div className="max-w-3xl space-y-6 animate-fade-in">

        {/* Header Profile Card */}
        <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
          <div className="h-32" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }} />
          <div className="px-6 sm:px-10 pb-8 relative">

            {/* Avatar Upload Zone */}
            <div className="absolute -top-12 group">
              <div className="w-24 h-24 rounded-full p-1 border-2 relative" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                {currentAvatar ? (
                  <img src={currentAvatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <div className="w-full h-full rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-light)' }}>
                    <span className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>{initials}</span>
                  </div>
                )}
                {/* Camera overlay */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <Camera className="w-6 h-6 text-white" />
                </button>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                accept=".jpg,.jpeg,.png"
                className="hidden"
                onChange={handleFileSelect}
              />
            </div>

            <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>{userData.name || 'Student Name'}</h2>
                <div className="flex items-center gap-2 mt-1" style={{ color: 'var(--text-muted)' }}>
                  <Mail className="w-4 h-4" />
                  <span>{userData.email}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {preview && (
                  <>
                    <Button size="sm" icon={Upload} onClick={handleUpload} loading={uploading}>Save Photo</Button>
                    <Button size="sm" variant="secondary" onClick={() => { setPreview(null); if(fileInputRef.current) fileInputRef.current.value = ''; }}>Cancel</Button>
                  </>
                )}
                {!preview && userData.photoURL && (
                  <Button size="sm" variant="ghost" icon={Trash2} onClick={handleDelete} loading={uploading}>Remove Photo</Button>
                )}
                {!preview && (
                  <Badge variant="success" className="w-max">Active Enrollment</Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Upload Guidelines */}
        <div className="rounded-xl p-4 flex items-center gap-3" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
          <ImageIcon className="w-5 h-5 shrink-0" />
          <p className="text-sm">
            <strong>Profile Picture:</strong> JPG or PNG only, max 2MB. Hover over your avatar and click to upload. Your image is securely stored in the cloud.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex justify-between items-center pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
              <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <User className="w-5 h-5" style={{ color: 'var(--primary)' }} /> Personal Details
              </h3>
              <Button size="sm" variant="secondary" onClick={() => setEditModal(true)}>Edit Info</Button>
            </CardHeader>
            <CardBody className="space-y-4 pt-4">
              <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)' }} className="font-medium">Phone Number</span>
                <span className="font-medium" style={{ color: 'var(--text)' }}>{userData.phone || 'Not provided'}</span>
              </div>
              <div className="flex flex-col py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)' }} className="font-medium mb-1">Bio / Headline</span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>{userData.bio || 'No bio provided. Click Edit Info to add one.'}</span>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <Shield className="w-5 h-5" style={{ color: 'var(--primary)' }} /> Account Status
              </h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)' }} className="font-medium">Role</span>
                <Badge variant="neutral" className="capitalize">{userData.role || 'Student'}</Badge>
              </div>
              <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)' }} className="font-medium">System ID</span>
                <span className="font-mono text-xs px-2 py-1 rounded" style={{ color: 'var(--text)', backgroundColor: 'var(--bg-secondary)' }}>{currentUser?.uid.substring(0, 8)}</span>
              </div>
              <div className="flex justify-between items-center py-2 text-sm">
                <span style={{ color: 'var(--text-muted)' }} className="font-medium">Joined</span>
                <span style={{ color: 'var(--text)' }}>
                  {userData.createdAt?.toDate ? new Date(userData.createdAt.toDate()).toLocaleDateString() : 'N/A'}
                </span>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <BookOpen className="w-5 h-5 text-emerald-600" /> Academic Standing
              </h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)' }} className="font-medium">Current Program</span>
                <span className="font-medium" style={{ color: 'var(--text)' }}>Computer Science</span>
              </div>
              <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)' }} className="font-medium">Term</span>
                <span className="font-medium" style={{ color: 'var(--text)' }}>Fall 2026</span>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="flex items-center gap-1" style={{ color: 'var(--text-muted)' }}><Clock className="w-4 h-4" /> Degree Progress</span>
                  <span style={{ color: 'var(--primary)' }}>45%</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <div className="h-full rounded-full w-[45%]" style={{ backgroundColor: 'var(--primary)' }} />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <ImageIcon className="w-5 h-5" style={{ color: 'var(--primary)' }} /> Interface Theme Settings
              </h3>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {Object.entries(themes).map(([key, t]) => (
                  <button
                    key={key}
                    onClick={() => setTheme(key)}
                    className="flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer"
                    style={{ 
                      backgroundColor: theme === key ? 'var(--primary-light)' : 'var(--bg-secondary)', 
                      borderColor: theme === key ? 'var(--primary)' : 'transparent',
                      transform: theme === key ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: theme === key ? 'var(--shadow)' : 'none'
                    }}
                  >
                    <span className="text-2xl mb-2">{t.emoji}</span>
                    <span className="text-xs font-bold text-center" style={{ color: 'var(--text)' }}>{t.name}</span>
                  </button>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Edit Profile Modal */}
        <Modal isOpen={editModal} onClose={() => setEditModal(false)} title="Edit Profile Info">
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <Input label="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <Input label="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            <div>
              <label className="block text-sm font-semibold text-surface-700 mb-2">Bio / Headline</label>
              <textarea
                rows={3}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                placeholder="Tell us a bit about yourself..."
              />
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="secondary" onClick={() => setEditModal(false)}>Cancel</Button>
              <Button type="submit" loading={savingProfile}>Save Changes</Button>
            </div>
          </form>
        </Modal>

      </div>
    </AppLayout>
  );
}
