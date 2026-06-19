import React from 'react';

const variants = {
  primary: 'bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-hover)] shadow-md hover:shadow-lg',
  secondary: 'bg-[var(--color-espresso)] text-white hover:bg-[var(--color-espresso-light)]',
  outline: 'border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-cream-200)]',
  ghost: 'text-[var(--color-charcoal)] hover:bg-[var(--color-cream-200)]',
  white: 'bg-white text-[var(--color-charcoal)] hover:bg-[var(--color-cream-100)] shadow-md',
  danger: 'bg-[var(--color-status-cancelled-bg)] text-[var(--color-status-cancelled-text)] hover:opacity-90',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2
        font-heading font-medium
        rounded-[var(--radius-md)] 
        transition-all duration-300 ease-[var(--ease-smooth)]
        cursor-pointer select-none
        disabled:opacity-50 disabled:cursor-not-allowed
        active:scale-[0.97]
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={18} />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={18} />}
        </>
      )}
    </button>
  );
}
