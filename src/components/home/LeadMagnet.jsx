import React, { useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { validateLeadForm } from '../../utils/validators';
import { useLeads } from '../../hooks/useLeads';

export default function LeadMagnet() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { createLead } = useLeads();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateLeadForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    const result = await createLead({ ...formData, source: 'free_guide' });
    setIsLoading(false);

    if (result.success) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="section-padding bg-[var(--color-espresso-light)] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-400 blur-3xl" />
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            {isSubmitted ? (
              /* Success State */
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  Your Guide is on the Way!
                </h3>
                <p className="text-white/80 max-w-md mx-auto">
                  Check your email for "5 Yoga Habits for Better Posture and Reduced Stress". Start your wellness journey today!
                </p>
              </div>
            ) : (
              /* Form State */
              <div className="text-center">
                <div className="w-16 h-16 rounded-[var(--radius-lg)] bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <BookOpen size={32} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                  Free Guide: 5 Yoga Habits
                </h3>
                <p className="text-white/80 mb-8 max-w-lg mx-auto">
                  Download our expert guide for better posture and reduced stress. No commitment required — just practical tips you can start using today.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    className="flex-1"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    className="flex-1"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    variant="white"
                    size="md"
                    loading={isLoading}
                    className="whitespace-nowrap md:self-start"
                  >
                    Get Free Guide
                  </Button>
                </form>
                <p className="text-xs text-white/50 mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
