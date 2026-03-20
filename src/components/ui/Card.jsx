// Card.jsx — Reusable card container with soft shadows
import React from 'react';

export default function Card({ children, className = '', hover = false, ...props }) {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-card border border-surface-100
        ${hover ? 'hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 border-b border-surface-100 ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = '' }) {
  return <div className={`px-6 py-5 ${className}`}>{children}</div>;
}
