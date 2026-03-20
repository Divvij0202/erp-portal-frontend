// Login.js — Split-screen login with gradient panel and animated form
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Mail, Lock, BookOpen } from 'lucide-react';

function Login({ goToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(getUserFriendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const getUserFriendlyError = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/user-disabled':
        return 'This account has been disabled';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Invalid email or password';
      case 'auth/invalid-credential':
        return 'Invalid email or password';
      default:
        return 'Login failed. Please try again.';
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel — gradient branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full" />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Welcome to<br />ERP Portal
          </h1>
          <p className="text-lg text-white/70 max-w-md leading-relaxed">
            A modern institutional management system for students, staff,
            finances, and reports — all in one place.
          </p>
          <div className="mt-12 flex items-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              Secure Authentication
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              Real-time Data
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-surface-50">
        <div className="w-full max-w-md animate-slide-up">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-surface-900">ERP Portal</span>
          </div>

          <h2 className="text-2xl font-bold text-surface-900 mb-1">Sign in</h2>
          <p className="text-surface-500 text-sm mb-8">
            Enter your credentials to access the portal
          </p>

          {/* Error alert */}
          {error && (
            <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2 animate-scale-in">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <Input
              label="Email"
              type="email"
              icon={Mail}
              placeholder="you@institution.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <Input
              label="Password"
              type="password"
              icon={Lock}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />

            <Button
              type="submit"
              loading={loading}
              className="w-full"
              size="lg"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          <p className="text-center text-sm text-surface-500 mt-8">
            Don't have an account?{' '}
            <button
              onClick={goToSignup}
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              disabled={loading}
            >
              Create account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;