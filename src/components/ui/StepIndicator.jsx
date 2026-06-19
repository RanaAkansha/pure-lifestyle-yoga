import React from 'react';
import { Check } from 'lucide-react';

export default function StepIndicator({ steps, currentStep }) {
  return (
    <div className="flex items-center justify-center gap-0 w-full max-w-lg mx-auto mb-10">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center gap-2">
              {/* Circle */}
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  font-heading font-semibold text-sm
                  transition-all duration-300 ease-[var(--ease-smooth)]
                  ${isCompleted ? 'bg-[var(--color-gold)] text-white' : ''}
                  ${isCurrent ? 'bg-[var(--color-gold)] text-white ring-4 ring-[var(--color-gold)]/20' : ''}
                  ${!isCompleted && !isCurrent ? 'bg-warm-gray-200 text-warm-gray-400' : ''}
                `}
              >
                {isCompleted ? <Check size={18} /> : index + 1}
              </div>
              {/* Label */}
              <span
                className={`
                  text-xs font-medium font-heading whitespace-nowrap
                  ${isCurrent ? 'text-[var(--color-espresso)]' : ''}
                  ${isCompleted ? 'text-[var(--color-gold)]' : ''}
                  ${!isCompleted && !isCurrent ? 'text-warm-gray-400' : ''}
                `}
              >
                {step}
              </span>
            </div>
            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                className={`
                  flex-1 h-0.5 mx-2 mb-6 rounded-full
                  transition-all duration-300
                  ${index < currentStep ? 'bg-[var(--color-gold)]' : 'bg-warm-gray-200'}
                `}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
