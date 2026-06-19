import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Select({
  label,
  id,
  error,
  options = [],
  placeholder = 'Select an option',
  className = '',
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
      <div className="relative">
        <select
          id={id}
          className={`
            w-full px-4 py-3 pr-10
            bg-white border rounded-[var(--radius-md)]
            font-body text-charcoal
            appearance-none cursor-pointer
            transition-all duration-200 ease-[var(--ease-smooth)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)]
            ${error ? 'border-terracotta-500 focus:ring-terracotta-400' : 'border-warm-gray-200 hover:border-[var(--color-gold)]/30'}
          `}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray-400 pointer-events-none"
        />
      </div>
      {error && (
        <p className="text-sm text-terracotta-500 mt-0.5">{error}</p>
      )}
    </div>
  );
}
