import React, { useState } from 'react';
import { trainers } from '../data/trainers';
import TrainerCard from '../components/trainers/TrainerCard';
import TrainerModal from '../components/trainers/TrainerModal';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function TrainersPage() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--color-espresso)] to-[var(--color-charcoal)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-400 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-2xl">
            <h1 className="text-white mb-4">Our Trainers</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Meet our team of certified yoga experts. Each trainer brings unique expertise
              and a passion for helping you achieve your wellness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section-padding bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <AnimatedSection key={trainer.id} delay={index * 100}>
                <TrainerCard
                  trainer={trainer}
                  onViewProfile={(t) => setSelectedTrainer(t)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Profile Modal */}
      <TrainerModal
        trainer={selectedTrainer}
        isOpen={!!selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
      />
    </>
  );
}
