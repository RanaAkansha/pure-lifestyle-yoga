import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, Star } from 'lucide-react';
import Modal from '../ui/Modal';
import StarRating from '../ui/StarRating';
import Button from '../ui/Button';

export default function TrainerModal({ trainer, isOpen, onClose }) {
  if (!trainer) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="700px">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <div
            className="w-full md:w-48 h-48 rounded-[var(--radius-lg)] overflow-hidden"
            style={{
              background: `linear-gradient(135deg, var(--color-espresso), var(--color-charcoal))`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-5xl font-heading font-bold text-white/80">
                {trainer.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="font-heading font-bold text-charcoal text-2xl mb-1">
            {trainer.name}
          </h3>
          <p className="text-[var(--color-gold)] font-medium mb-3">
            {trainer.specialization}
          </p>

          <div className="flex items-center gap-4 mb-4">
            <StarRating rating={trainer.rating} size={16} />
            <span className="flex items-center gap-1 text-sm text-warm-gray-600">
              <Clock size={14} />
              {trainer.experience}+ years experience
            </span>
          </div>

          <p className="text-warm-gray-600 text-sm leading-relaxed mb-6">
            {trainer.bio}
          </p>

          {/* Certifications */}
          {trainer.certifications && trainer.certifications.length > 0 && (
            <div className="mb-6">
              <h4 className="font-heading font-semibold text-charcoal text-sm mb-3 flex items-center gap-2">
                <Award size={16} className="text-gold-500" />
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {trainer.certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-cream-200 rounded-[var(--radius-full)] text-xs font-medium text-[var(--color-espresso)]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <Link to={`/booking?trainer=${trainer.id}`} onClick={onClose}>
            <Button variant="primary" size="md" className="w-full md:w-auto">
              Book Session with {trainer.name.split(' ')[0]}
            </Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}
