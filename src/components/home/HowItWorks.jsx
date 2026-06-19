import React from 'react';
import { ClipboardCheck, FileText, Sparkles } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Assessment',
    description: 'We start by understanding your goals, posture, health concerns, and lifestyle to build a complete picture of your needs.',
    color: '#7C9A6E',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Personalized Blueprint',
    description: 'Our experts create a custom yoga and wellness plan tailored specifically to your body, goals, and preferences.',
    color: '#C9A96E',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Transformation Journey',
    description: 'Begin guided sessions with your dedicated trainer and track your progress as you transform your body and mind.',
    color: '#C4836A',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="How It Works"
            subtitle="Your wellness journey begins with three simple steps. We handle everything so you can focus on your practice."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[var(--color-cream-200)] via-[var(--color-gold)] to-[var(--color-espresso)] z-0" />

          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className="relative flex flex-col items-center text-center">
                {/* Number Circle */}
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon size={28} className="text-white" />
                </div>

                {/* Step Number */}
                <span
                  className="font-heading text-5xl font-bold mb-2 opacity-10"
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>

                {/* Content */}
                <h3 className="font-heading font-semibold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-warm-gray-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
