// Button.jsx — Reusable button with variants and loading state
import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Button variants:
 *   primary  — solid indigo fill
 *   secondary — bordered outline
 *   ghost    — transparent with hover fill
 *   danger   — solid red fill
 */
const variants = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-soft hover:shadow-card',
  secondary:
    'border border-surface-300 text-surface-700 bg-white hover:bg-surface-50 active:bg-surface-100',
  ghost:
    'text-surface-600 hover:bg-surface-100 active:bg-surface-200',
  danger:
    'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-soft',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-2.5 text-base gap-2',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon: Icon,
  className = '',
  disabled,
  ...props
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center font-medium rounded-xl
        transition-all duration-200 ease-out
        disabled:opacity-50 disabled:cursor-not-allowed
        focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4" />
      ) : null}
      {children}
    </button>
  );
}
