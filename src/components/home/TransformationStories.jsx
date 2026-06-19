import React from 'react';
import { TrendingUp, Clock, Award } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const stories = [
  {
    initials: 'RS',
    name: 'Ravi S.',
    problem: 'Chronic lower back pain from desk job',
    duration: '8 Weeks',
    outcome: 'Complete pain relief, improved posture, and started running again',
    metric: '95%',
    metricLabel: 'Pain Reduction',
    color: '#26211C', // Espresso Brown
  },
  {
    initials: 'MP',
    name: 'Meera P.',
    problem: 'Post-pregnancy weight gain and low energy',
    duration: '12 Weeks',
    outcome: 'Lost 8kg, regained energy, and built a sustainable daily yoga routine',
    metric: '8kg',
    metricLabel: 'Weight Lost',
    color: '#C69C54', // Muted Gold
  },
  {
    initials: 'AK',
    name: 'Amit K.',
    problem: 'Severe work stress, insomnia, and anxiety',
    duration: '6 Weeks',
    outcome: 'Sleeping 7+ hours, anxiety reduced significantly, improved focus at work',
    metric: '3x',
    metricLabel: 'Better Sleep',
    color: '#3F372F', // Espresso Light
  },
];

export default function TransformationStories() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Real Transformation Stories"
            subtitle="See how our clients have transformed their lives through personalized yoga sessions. Real people, real results."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <Card className="h-full relative overflow-hidden">
                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-[var(--radius-lg)]"
                  style={{ backgroundColor: story.color }}
                />

                {/* Client */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm"
                    style={{ backgroundColor: story.color }}
                  >
                    {story.initials}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-charcoal">{story.name}</p>
                    <div className="flex items-center gap-1 text-xs text-warm-gray-400">
                      <Clock size={12} />
                      {story.duration}
                    </div>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <p className="text-xs font-heading font-semibold text-warm-gray-400 uppercase tracking-wider mb-1">
                    Challenge
                  </p>
                  <p className="text-sm text-warm-gray-600">{story.problem}</p>
                </div>

                {/* Outcome */}
                <div className="mb-5">
                  <p className="text-xs font-heading font-semibold text-warm-gray-400 uppercase tracking-wider mb-1">
                    Outcome
                  </p>
                  <p className="text-sm text-charcoal font-medium">{story.outcome}</p>
                </div>

                {/* Metric */}
                <div
                  className="flex items-center gap-3 p-3 rounded-[var(--radius-md)]"
                  style={{ backgroundColor: `${story.color}10` }}
                >
                  <TrendingUp size={20} style={{ color: story.color }} />
                  <div>
                    <p className="text-xl font-heading font-bold" style={{ color: story.color }}>
                      {story.metric}
                    </p>
                    <p className="text-xs text-warm-gray-600">{story.metricLabel}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
