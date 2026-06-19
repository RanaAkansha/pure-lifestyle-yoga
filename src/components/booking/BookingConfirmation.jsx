import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

export default function BookingConfirmation({ referenceId, bookingData }) {
  return (
    <AnimatedSection animation="scale-in">
      <div className="text-center max-w-lg mx-auto">
        {/* Success Icon */}
        <div className="w-24 h-24 rounded-full bg-[var(--color-cream-200)] flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} className="text-[var(--color-gold)]" />
        </div>

        <h2 className="font-heading font-bold text-charcoal text-2xl md:text-3xl mb-3">
          Booking Request Received!
        </h2>
        <p className="text-warm-gray-600 mb-8">
          Thank you, {bookingData?.name?.split(' ')[0] || 'there'}! Our team will contact you
          within 24 hours to confirm your session.
        </p>

        {/* Reference ID */}
        <div className="bg-cream-200 rounded-[var(--radius-lg)] p-6 mb-8">
          <p className="text-sm text-warm-gray-600 font-heading mb-1">Your Booking Reference</p>
          <p className="text-2xl font-heading font-bold text-[var(--color-espresso)] tracking-wider">
            {referenceId}
          </p>
          <p className="text-xs text-warm-gray-400 mt-2">
            Please save this reference for future communication.
          </p>
        </div>

        {/* Summary */}
        {bookingData && (
          <div className="bg-white rounded-[var(--radius-lg)] p-6 mb-8 text-left shadow-[var(--shadow-soft)]">
            <h4 className="font-heading font-semibold text-charcoal mb-4">Booking Summary</h4>
            <div className="space-y-3">
              {[
                { label: 'Name', value: bookingData.name },
                { label: 'Email', value: bookingData.email },
                { label: 'Phone', value: bookingData.phone },
                { label: 'City', value: bookingData.city },
                { label: 'Goal', value: bookingData.goal },
              ].filter(item => item.value).map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-warm-gray-100 last:border-0">
                  <span className="text-sm text-warm-gray-600">{item.label}</span>
                  <span className="text-sm font-medium text-charcoal capitalize">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button variant="primary" icon={Home} size="md">
              Back to Home
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" icon={ArrowRight} iconPosition="right" size="md">
              Explore More Services
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
