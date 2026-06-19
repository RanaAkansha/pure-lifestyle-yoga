import React from 'react';

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      <h2 className={`mb-4 ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-warm-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-[var(--color-gold)] ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
