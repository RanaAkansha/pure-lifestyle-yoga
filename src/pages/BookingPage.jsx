import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import BookingForm from '../components/booking/BookingForm';
import BookingConfirmation from '../components/booking/BookingConfirmation';
import AnimatedSection from '../components/ui/AnimatedSection';
import { useBookings } from '../hooks/useBookings';

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [bookingData, setBookingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const { createBooking } = useBookings();

  const initialData = {
    service: searchParams.get('service') || '',
    trainer: searchParams.get('trainer') || '',
  };

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    const result = await createBooking(formData);
    setIsLoading(false);

    if (result.success) {
      setReferenceId(result.referenceId);
      setBookingData(formData);
      setIsSubmitted(true);
      setSubmitError(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setSubmitError(result.error || 'An error occurred while submitting your booking. Please check your database schema or internet connection.');
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--color-espresso)] to-[var(--color-charcoal)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-gold-400 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-heading mb-4">
            <Calendar size={16} />
            Free Consultation
          </div>
          <h1 className="text-white mb-3 text-3xl md:text-4xl">Book Your Consultation</h1>
          <p className="text-white/80 max-w-lg mx-auto">
            Fill in your details below and our team will reach out to schedule your personalized session.
          </p>
        </div>
      </section>

      {/* Form / Confirmation */}
      <section className="section-padding bg-cream-50">
        <div className="container-sm mx-auto px-4 md:px-6">
          {isSubmitted ? (
            <BookingConfirmation
              referenceId={referenceId}
              bookingData={bookingData}
            />
          ) : (
            <AnimatedSection>
              <div className="bg-white rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] p-6 md:p-10">
                {submitError && (
                  <div className="mb-6 p-4 bg-terracotta-500/10 border border-terracotta-500 text-terracotta-500 rounded-[var(--radius-md)] text-sm">
                    <strong>Booking Failed:</strong> {submitError}
                    <br/><br/>
                    <em>Hint: Did you re-run the updated `supabase_schema.sql`? The trainer or service ID might not match.</em>
                  </div>
                )}
                <BookingForm
                  initialData={initialData}
                  onSubmit={handleSubmit}
                  isLoading={isLoading}
                />
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
