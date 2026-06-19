import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--color-espresso)] to-[var(--color-charcoal)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-2xl">
            <h1 className="text-white mb-4">Our Services</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              From weight loss to stress relief, our personalized yoga programs are designed
              to address your specific goals and transform your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
