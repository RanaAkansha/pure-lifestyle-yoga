import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trainers } from '../../data/trainers';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import StarRating from '../ui/StarRating';
import Button from '../ui/Button';

export default function FeaturedTrainers() {
  const featured = trainers.slice(0, 3);

  return (
    <section className="section-padding bg-cream-50">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Meet Our Expert Trainers"
            subtitle="Certified professionals dedicated to guiding your personal yoga journey with care and expertise."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((trainer, index) => (
            <AnimatedSection key={trainer.id} delay={index * 150}>
              <Card padding={false} className="overflow-hidden h-full">
                {/* Trainer Image Placeholder */}
                <div
                  className="h-64 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, var(--color-espresso), var(--color-charcoal))`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-white/80">
                        {trainer.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-heading font-semibold text-[var(--color-espresso)]">
                    {trainer.experience}+ years
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6">
                  <h4 className="font-heading font-semibold text-charcoal text-lg mb-1">
                    {trainer.name}
                  </h4>
                  <p className="text-sm text-[var(--color-gold)] font-medium mb-3">
                    {trainer.specialization}
                  </p>
                  <StarRating rating={trainer.rating} size={14} />
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <div className="text-center mt-10">
            <Link to="/trainers">
              <Button variant="outline" icon={ArrowRight} iconPosition="right">
                View All Trainers
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
