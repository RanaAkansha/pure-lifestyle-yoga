import React from 'react';

export default function MetricCard({ title, value, icon: Icon, trend, color = '#7C9A6E' }) {
  return (
    <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] p-6 transition-all duration-300 hover:shadow-[var(--shadow-elevated)]">
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          {Icon && <Icon size={24} style={{ color }} />}
        </div>
        {trend !== undefined && (
          <span
            className={`text-sm font-medium ${trend >= 0 ? 'text-green-600' : 'text-red-500'}`}
          >
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <p className="text-3xl font-heading font-bold text-charcoal mb-1">{value}</p>
      <p className="text-sm text-warm-gray-600">{title}</p>
    </div>
  );
}
