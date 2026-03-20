// Badge.jsx — Colored status pills
import React from 'react';

const styles = {
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  danger:  'bg-red-50 text-red-700 border-red-200',
  info:    'bg-blue-50 text-blue-700 border-blue-200',
  neutral: 'bg-surface-100 text-surface-600 border-surface-200',
  primary: 'bg-primary-50 text-primary-700 border-primary-200',
};

export default function Badge({ children, variant = 'neutral', className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full
        text-xs font-medium border capitalize
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
