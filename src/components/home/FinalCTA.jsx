import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="section-padding bg-cream-100 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-[var(--color-gold)]/20 opacity-30" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-[var(--color-gold)]/20 opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-[var(--color-cream-200)] opacity-10 blur-xl" />

      <div className="container mx-auto relative">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-charcoal mb-4">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-warm-gray-600 text-lg mb-8 leading-relaxed">
              Take the first step toward a healthier, more balanced life. Book a free consultation
              with one of our expert trainers and discover the perfect yoga plan for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/booking">
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/recommendation">
                <Button variant="outline" size="lg">
                  Take the Quiz First
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
