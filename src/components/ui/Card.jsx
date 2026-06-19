import React from 'react';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = true,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-[var(--radius-lg)]
        shadow-[var(--shadow-card)]
        ${padding ? 'p-6 md:p-8' : ''}
        ${hover ? 'transition-all duration-300 ease-[var(--ease-smooth)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
