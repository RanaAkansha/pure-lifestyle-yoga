import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { getStatusColor } from '../../utils/formatters';

const statuses = ['new', 'contacted', 'confirmed', 'completed', 'cancelled'];

export default function StatusDropdown({ currentStatus, onStatusChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const colors = getStatusColor(currentStatus);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium font-heading rounded-[var(--radius-full)] border transition-colors cursor-pointer"
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
          borderColor: colors.border,
        }}
      >
        <span className="capitalize">{currentStatus}</span>
        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-elevated)] border border-warm-gray-200 py-1 z-50 min-w-[140px]">
          {statuses.map((status) => {
            const statusColors = getStatusColor(status);
            return (
              <button
                key={status}
                onClick={() => {
                  onStatusChange(status);
                  setIsOpen(false);
                }}
                className={`
                  w-full text-left px-3 py-2 text-sm capitalize cursor-pointer
                  transition-colors hover:bg-cream-100
                  ${status === currentStatus ? 'font-medium' : ''}
                `}
                style={{ color: statusColors.text }}
              >
                {status}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
