import React from 'react';

export default function Badge({ children, color, className = '' }) {
  const style = color
    ? { backgroundColor: color.bg, color: color.text, borderColor: color.border }
    : {};

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1
        text-xs font-medium font-heading
        rounded-[var(--radius-full)]
        border
        ${!color ? 'bg-[var(--color-cream-200)] text-[var(--color-espresso)] border-[var(--color-gold)]/20' : ''}
        ${className}
      `}
      style={style}
    >
      {children}
    </span>
  );
}
