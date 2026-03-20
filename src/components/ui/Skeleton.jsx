// Skeleton.jsx — Loading placeholder with shimmer effect
import React from 'react';

export default function Skeleton({ className = '', rows = 1 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className={`skeleton rounded-xl h-4 ${className}`}
          style={{ width: `${100 - i * 10}%` }}
        />
      ))}
    </div>
  );
}

// Table skeleton with header + rows
export function TableSkeleton({ columns = 5, rows = 5 }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-200">
      {/* Header */}
      <div className="bg-surface-50 px-6 py-4 flex gap-4">
        {Array.from({ length: columns }).map((_, i) => (
          <div key={i} className="skeleton h-4 rounded-lg flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div key={rowIdx} className="px-6 py-4 flex gap-4 border-t border-surface-100">
          {Array.from({ length: columns }).map((_, colIdx) => (
            <div key={colIdx} className="skeleton h-4 rounded-lg flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}

// Card-shaped skeleton
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-surface-100 p-6 space-y-4">
      <div className="skeleton h-5 w-1/3 rounded-lg" />
      <div className="skeleton h-8 w-1/2 rounded-lg" />
      <div className="skeleton h-3 w-2/3 rounded-lg" />
    </div>
  );
}
