import React from 'react';
import { ShieldCheck, Target, Home, CalendarDays } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified Trainers',
    description: 'All our yoga instructors are RYT-certified with extensive teaching experience and specialized training.',
    color: '#7C9A6E',
  },
  {
    icon: Target,
    title: 'Personalized Plans',
    description: 'Every session is tailored to your unique goals, health conditions, and fitness level for maximum results.',
    color: '#C9A96E',
  },
  {
    icon: Home,
    title: 'Home Sessions',
    description: 'Enjoy the comfort of practicing yoga in your own space. We come to you with everything needed.',
    color: '#6B8FA3',
  },
  {
    icon: CalendarDays,
    title: 'Flexible Scheduling',
    description: 'Book sessions at times that work for you. Morning, evening, weekdays, or weekends — you choose.',
    color: '#C4836A',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Why Choose Pure Lifestyle Yoga"
            subtitle="We bring a premium, personalized approach to yoga that adapts to your lifestyle, not the other way around."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="text-center h-full">
                <div
                  className="w-14 h-14 rounded-[var(--radius-lg)] mx-auto mb-5 flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon size={28} style={{ color: feature.color }} />
                </div>
                <h4 className="font-heading font-semibold text-charcoal mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-warm-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
