// Input.jsx — Styled input with label, error message, and icon support
import React from 'react';

export default function Input({
  label,
  error,
  icon: Icon,
  className = '',
  id,
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-surface-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="w-4 h-4 text-surface-400" />
          </div>
        )}
        <input
          id={inputId}
          className={`
            block w-full rounded-xl border bg-white px-4 py-2.5 text-sm
            transition-all duration-200
            placeholder:text-surface-400
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            disabled:bg-surface-100 disabled:cursor-not-allowed disabled:opacity-60
            ${Icon ? 'pl-10' : ''}
            ${error
              ? 'border-red-400 text-red-900 focus:ring-red-500 focus:border-red-500'
              : 'border-surface-300 text-surface-800 hover:border-surface-400'
            }
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
