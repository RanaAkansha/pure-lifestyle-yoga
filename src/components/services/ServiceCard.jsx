import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CreditCard } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ServiceCard({ service }) {
  const IconComponent = LucideIcons[
    service.icon
      ? service.icon.split('-').map((w, i) => i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w.charAt(0).toUpperCase() + w.slice(1)).join('')
      : 'Sparkles'
  ] || LucideIcons.Sparkles;

  return (
    <Card padding={false} className="overflow-hidden h-full flex flex-col group">
      {/* Color Header */}
      <div
        className="h-3 transition-all duration-300 group-hover:h-4"
        style={{ backgroundColor: service.color || 'var(--color-espresso)' }}
      />

      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-[var(--radius-lg)] flex items-center justify-center mb-5"
          style={{ backgroundColor: `${service.color || '#7C9A6E'}15` }}
        >
          <IconComponent size={28} style={{ color: service.color || '#7C9A6E' }} />
        </div>

        {/* Title */}
        <h3 className="font-heading font-semibold text-charcoal text-xl mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-warm-gray-600 leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-6 text-sm text-warm-gray-600">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-[var(--color-warm-gray-400)]" />
            {service.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <CreditCard size={14} className="text-[var(--color-warm-gray-400)]" />
            {service.price}
          </div>
        </div>

        {/* CTA */}
        <Link to={`/booking?service=${service.id}`}>
          <Button
            variant="outline"
            size="sm"
            icon={ArrowRight}
            iconPosition="right"
            className="w-full"
          >
            Book This Service
          </Button>
        </Link>
      </div>
    </Card>
  );
}
