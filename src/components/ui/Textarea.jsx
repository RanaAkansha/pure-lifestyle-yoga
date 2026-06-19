import React from 'react';

export default function Textarea({
  label,
  id,
  error,
  className = '',
  rows = 4,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-charcoal font-heading"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={`
          w-full px-4 py-3
          bg-white border rounded-[var(--radius-md)]
          font-body text-charcoal
          placeholder:text-warm-gray-400
          resize-vertical min-h-[100px]
          transition-all duration-200 ease-[var(--ease-smooth)]
          focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)]
          ${error ? 'border-terracotta-500 focus:ring-terracotta-400' : 'border-warm-gray-200 hover:border-[var(--color-gold)]/30'}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-terracotta-500 mt-0.5">{error}</p>
      )}
    </div>
  );
}
