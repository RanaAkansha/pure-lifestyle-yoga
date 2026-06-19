import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children, title, maxWidth = '600px' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4
        transition-all duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className={`
          relative bg-white rounded-[var(--radius-xl)] shadow-[var(--shadow-elevated)]
          w-full overflow-hidden
          transition-all duration-300 ease-[var(--ease-smooth)]
          ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
        `}
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-warm-gray-200">
            <h3 className="text-xl font-heading font-semibold text-charcoal">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-[var(--radius-md)] text-warm-gray-400 hover:text-charcoal hover:bg-cream-100 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
          {children}
        </div>

        {/* Close button if no title */}
        {!title && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-[var(--radius-md)] text-warm-gray-400 hover:text-charcoal hover:bg-cream-100 transition-colors cursor-pointer z-10"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
