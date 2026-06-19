import React from 'react';

export default function Input({
  label,
  id,
  error,
  className = '',
  icon: Icon,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--color-charcoal)] font-heading"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-gray-400">
            <Icon size={18} />
          </div>
        )}
        <input
          id={id}
          className={`
            w-full px-4 py-3 ${Icon ? 'pl-10' : ''}
            bg-white border rounded-[var(--radius-md)]
            font-body text-[var(--color-charcoal)]
            placeholder:text-warm-gray-400
            transition-all duration-200 ease-[var(--ease-smooth)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)]
            ${error ? 'border-terracotta-500 focus:ring-terracotta-400' : 'border-warm-gray-200 hover:border-[var(--color-gold)]/30'}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-terracotta-500 mt-0.5">{error}</p>
      )}
    </div>
  );
}
