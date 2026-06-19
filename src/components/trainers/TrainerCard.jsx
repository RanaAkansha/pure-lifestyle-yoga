import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import StarRating from '../ui/StarRating';
import Button from '../ui/Button';

export default function TrainerCard({ trainer, onViewProfile }) {
  return (
    <Card padding={false} className="overflow-hidden h-full flex flex-col">
      {/* Trainer Image */}
      <div
        className="h-56 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--color-espresso), var(--color-charcoal))`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-3xl font-heading font-bold text-white/80">
              {trainer.name.charAt(0)}
            </span>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-heading font-semibold text-[var(--color-espresso)]">
          {trainer.experience}+ years
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <h4 className="font-heading font-semibold text-charcoal text-lg mb-1">
          {trainer.name}
        </h4>
        <p className="text-sm text-[var(--color-gold)] font-medium mb-2">
          {trainer.specialization}
        </p>
        <div className="mb-4">
          <StarRating rating={trainer.rating} size={14} />
        </div>
        <p className="text-sm text-warm-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
          {trainer.bio}
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onViewProfile(trainer)}
          >
            View Profile
          </Button>
          <Link to={`/booking?trainer=${trainer.id}`} className="flex-1">
            <Button variant="primary" size="sm" className="w-full">
              Book Session
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
