// AddStudent.jsx — Modern add student form with validation and toast
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardHeader, CardBody } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import {
  User,
  Mail,
  BookOpen,
  Award,
  ArrowLeft,
  UserPlus,
} from 'lucide-react';

function AddStudent() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: '',
    grade: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.trimStart() });
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!form.course.trim()) newErrors.course = 'Course is required';
    if (!form.grade.trim()) newErrors.grade = 'Grade is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await addDoc(collection(db, 'students'), {
        ...form,
        enrollmentDate: new Date().toISOString().split('T')[0],
        timestamp: serverTimestamp(),
      });
      toast.success('Student added successfully!');
      setForm({ name: '', email: '', course: '', grade: '' });
    } catch (error) {
      toast.error('Error adding student: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout title="Add Student">
      <div className="max-w-lg mx-auto animate-fade-in">
        {/* Back button */}
        <button
          onClick={() => navigate('/students')}
          className="flex items-center gap-1.5 text-sm text-surface-500 hover:text-surface-700 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Student Records
        </button>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-surface-900">Add New Student</h3>
            </div>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Full Name"
                type="text"
                name="name"
                icon={User}
                placeholder="Enter student name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                icon={Mail}
                placeholder="student@example.com"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Input
                label="Course"
                type="text"
                name="course"
                icon={BookOpen}
                placeholder="e.g. Computer Science"
                value={form.course}
                onChange={handleChange}
                error={errors.course}
              />
              <Input
                label="Grade"
                type="text"
                name="grade"
                icon={Award}
                placeholder="e.g. A, B+, 3.8 GPA"
                value={form.grade}
                onChange={handleChange}
                error={errors.grade}
              />

              <div className="flex items-center gap-3 pt-2">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => navigate('/students')}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  loading={loading}
                  icon={UserPlus}
                  className="flex-1"
                >
                  {loading ? 'Adding...' : 'Add Student'}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  );
}

export default AddStudent;
