// StatCard.jsx — Dashboard metric card with icon, value, trend
import React from 'react';

export default function StatCard({
  label,
  value,
  change,
  changeType = 'neutral', // 'up', 'down', 'neutral'
  icon: Icon,
  iconBg = 'bg-primary-50',
  iconColor = 'text-primary-600',
}) {
  const changeColors = {
    up: 'text-emerald-600 bg-emerald-50',
    down: 'text-red-600 bg-red-50',
    neutral: 'text-surface-500 bg-surface-100',
  };

  return (
    <div className="bg-white rounded-2xl shadow-card border border-surface-100 p-6 hover:shadow-elevated transition-all duration-300 animate-slide-up">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-surface-500">{label}</p>
          <p className="text-3xl font-bold text-surface-900 tracking-tight">{value}</p>
          {change && (
            <span
              className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full ${changeColors[changeType]}`}
            >
              {changeType === 'up' && '↑ '}
              {changeType === 'down' && '↓ '}
              {change}
            </span>
          )}
        </div>
        {Icon && (
          <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>
        )}
      </div>
    </div>
  );
}
