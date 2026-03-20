// Signup.jsx — Account creation with validation, matching Login aesthetic
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Mail, Lock, ShieldCheck, BookOpen } from 'lucide-react';

function Signup({ goToLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student', // Default role for new users
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      // Save user profile to Firestore with the selected role
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: formData.email,
        role: formData.role,
        name: formData.email.split('@')[0], // Extract name from email as default
        status: 'active',
        createdAt: serverTimestamp(),
      });

      setSuccessMessage('Account created successfully!');
      setFormData({ email: '', password: '', confirmPassword: '', role: 'student' });
    } catch (err) {
      setErrors({ server: err.message.replace('Firebase: ', '') });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Password strength indicator
  const getPasswordStrength = () => {
    const pwd = formData.password;
    if (!pwd) return { level: 0, label: '', color: '' };
    if (pwd.length < 6) return { level: 1, label: 'Weak', color: 'bg-red-500' };
    if (pwd.length < 10) return { level: 2, label: 'Fair', color: 'bg-amber-500' };
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd) && /[^A-Za-z0-9]/.test(pwd)) {
      return { level: 4, label: 'Strong', color: 'bg-emerald-500' };
    }
    return { level: 3, label: 'Good', color: 'bg-primary-500' };
  };

  const strength = getPasswordStrength();

  return (
    <div className="min-h-screen flex">
      {/* Left panel — gradient branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/5 rounded-full" />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Get started<br />with ERP Portal
          </h1>
          <p className="text-lg text-white/70 max-w-md leading-relaxed">
            Create your account to access the full suite of institutional
            management tools.
          </p>
        </div>
      </div>

      {/* Right panel — signup form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-surface-50">
        <div className="w-full max-w-md animate-slide-up">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-surface-900">ERP Portal</span>
          </div>

          <h2 className="text-2xl font-bold text-surface-900 mb-1">Create account</h2>
          <p className="text-surface-500 text-sm mb-8">
            Fill in the details below to get started
          </p>

          {/* Success message */}
          {successMessage && (
            <div className="mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm animate-scale-in">
              ✓ {successMessage}
            </div>
          )}

          {/* Server error */}
          {errors.server && (
            <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm animate-scale-in">
              {errors.server}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email"
              type="email"
              name="email"
              icon={Mail}
              placeholder="you@institution.edu"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <div>
              <Input
                label="Password"
                type="password"
                name="password"
                icon={Lock}
                placeholder="Min. 6 characters"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
              {/* Password strength bar */}
              {formData.password && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-surface-200 rounded-full overflow-hidden flex gap-0.5">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-full transition-all duration-300 ${
                          i <= strength.level ? strength.color : 'bg-surface-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-surface-500">{strength.label}</span>
                </div>
              )}
            </div>

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              icon={ShieldCheck}
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />

            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5 ml-1">Account Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-white border border-surface-300 rounded-xl px-4 py-3 text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all appearance-none cursor-pointer"
              >
                <option value="student">Student</option>
                <option value="staff">Staff / Teacher</option>
                <option value="admin">Administrator</option>
              </select>
            </div>

            <Button
              type="submit"
              loading={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </Button>
          </form>

          <p className="text-center text-sm text-surface-500 mt-8">
            Already have an account?{' '}
            <button
              onClick={goToLogin}
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;