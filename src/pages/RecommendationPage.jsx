import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame, Cloud, StretchHorizontal, HeartPulse, Building2,
  User, Users, Award,
  Home, Monitor,
  ArrowRight, ArrowLeft, Sparkles,
} from 'lucide-react';
import { services } from '../data/services';
import { trainers } from '../data/trainers';
import StepIndicator from '../components/ui/StepIndicator';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import StarRating from '../components/ui/StarRating';
import AnimatedSection from '../components/ui/AnimatedSection';

const goalOptions = [
  { id: 'weight-loss', label: 'Weight Loss', icon: Flame, color: '#C4836A', serviceMatch: 'Weight Loss' },
  { id: 'stress-relief', label: 'Stress Relief', icon: Cloud, color: '#6B8FA3', serviceMatch: 'Stress Relief' },
  { id: 'flexibility', label: 'Flexibility', icon: StretchHorizontal, color: '#C9A96E', serviceMatch: 'Therapeutic' },
  { id: 'pain-relief', label: 'Pain Relief', icon: HeartPulse, color: '#7C9A6E', serviceMatch: 'Therapeutic' },
  { id: 'corporate', label: 'Corporate Wellness', icon: Building2, color: '#5B7A4A', serviceMatch: 'Corporate' },
];

const levelOptions = [
  { id: 'beginner', label: 'Beginner', icon: User, desc: 'New to yoga or returning after a break' },
  { id: 'intermediate', label: 'Intermediate', icon: Users, desc: 'Practicing for 6+ months' },
  { id: 'advanced', label: 'Advanced', icon: Award, desc: 'Experienced practitioner, 2+ years' },
];

const sessionOptions = [
  { id: 'home', label: 'At Home', icon: Home, desc: 'In the comfort of your own space' },
  { id: 'online', label: 'Online', icon: Monitor, desc: 'Virtual sessions via video call' },
];

const stepLabels = ['Your Goal', 'Experience', 'Session Type', 'Results'];

export default function RecommendationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({ goal: null, level: null, session: null });

  const handleSelect = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (currentStep < 2) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setCurrentStep(3), 300);
    }
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  // Recommendation logic
  const getRecommendation = () => {
    const selectedGoal = goalOptions.find(g => g.id === answers.goal);
    const recommendedService = services.find(s =>
      s.title.toLowerCase().includes(selectedGoal?.serviceMatch?.toLowerCase() || '')
    ) || services[0];

    // Match trainer based on goal
    const goalTrainerMap = {
      'weight-loss': 'Weight Loss',
      'stress-relief': 'Stress',
      'flexibility': 'Therapeutic',
      'pain-relief': 'Therapeutic',
      'corporate': 'Corporate',
    };
    const matchKey = goalTrainerMap[answers.goal] || '';
    const recommendedTrainer = trainers.find(t =>
      t.specialization.toLowerCase().includes(matchKey.toLowerCase())
    ) || trainers[0];

    return { service: recommendedService, trainer: recommendedTrainer };
  };

  const OptionCard = ({ option, isSelected, onClick }) => (
    <button
      onClick={onClick}
      className={`
        w-full p-5 rounded-[var(--radius-lg)] border-2 text-left
        transition-all duration-300 ease-[var(--ease-smooth)] cursor-pointer
        ${isSelected
          ? 'border-[var(--color-gold)] bg-[var(--color-cream-200)] shadow-[var(--shadow-card)]'
          : 'border-warm-gray-200 bg-white hover:border-[var(--color-gold)]/30 hover:shadow-[var(--shadow-soft)]'
        }
      `}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor: option.color ? `${option.color}15` : 'var(--color-cream-200)',
            color: option.color || 'var(--color-espresso)',
          }}
        >
          <option.icon size={24} />
        </div>
        <div>
          <p className="font-heading font-semibold text-charcoal">{option.label}</p>
          {option.desc && (
            <p className="text-sm text-warm-gray-600 mt-0.5">{option.desc}</p>
          )}
        </div>
      </div>
    </button>
  );

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-[var(--color-espresso)] to-[var(--color-charcoal)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 w-80 h-80 rounded-full bg-[var(--color-gold)] blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-heading mb-4">
            <Sparkles size={16} />
            Smart Recommendation
          </div>
          <h1 className="text-white mb-3 text-3xl md:text-4xl">Find Your Perfect Fit</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Answer three quick questions and we'll recommend the ideal service and trainer for you.
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-sm mx-auto px-4 md:px-6">
          <StepIndicator steps={stepLabels} currentStep={currentStep} />

          {/* Step 1: Goal */}
          {currentStep === 0 && (
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-2">
                  What is your primary goal?
                </h2>
                <p className="text-warm-gray-600">Choose the goal that matters most to you right now.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                {goalOptions.map((option) => (
                  <OptionCard
                    key={option.id}
                    option={option}
                    isSelected={answers.goal === option.id}
                    onClick={() => handleSelect('goal', option.id)}
                  />
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Step 2: Experience Level */}
          {currentStep === 1 && (
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-2">
                  What's your experience level?
                </h2>
                <p className="text-warm-gray-600">This helps us match you with the right intensity.</p>
              </div>
              <div className="flex flex-col gap-4 max-w-md mx-auto">
                {levelOptions.map((option) => (
                  <OptionCard
                    key={option.id}
                    option={option}
                    isSelected={answers.level === option.id}
                    onClick={() => handleSelect('level', option.id)}
                  />
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={goBack}>
                  Back
                </Button>
              </div>
            </AnimatedSection>
          )}

          {/* Step 3: Session Type */}
          {currentStep === 2 && (
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-2">
                  How would you like to practice?
                </h2>
                <p className="text-warm-gray-600">Choose your preferred session format.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                {sessionOptions.map((option) => (
                  <OptionCard
                    key={option.id}
                    option={option}
                    isSelected={answers.session === option.id}
                    onClick={() => handleSelect('session', option.id)}
                  />
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={goBack}>
                  Back
                </Button>
              </div>
            </AnimatedSection>
          )}

          {/* Step 4: Results */}
          {currentStep === 3 && (
            <AnimatedSection animation="scale-in">
              {(() => {
                const { service, trainer } = getRecommendation();
                return (
                  <div>
                    <div className="text-center mb-10">
                      <div className="w-16 h-16 rounded-full bg-[var(--color-cream-200)] flex items-center justify-center mx-auto mb-4">
                        <Sparkles size={32} className="text-[var(--color-gold)]" />
                      </div>
                      <h2 className="text-2xl font-heading font-bold text-charcoal mb-2">
                        Your Personalized Recommendation
                      </h2>
                      <p className="text-warm-gray-600">Based on your preferences, here's what we suggest.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {/* Recommended Service */}
                      <Card className="border-2 border-[var(--color-gold)]/20">
                        <p className="text-xs font-heading font-semibold text-[var(--color-gold)] uppercase tracking-wider mb-3">
                          Recommended Service
                        </p>
                        <h3 className="font-heading font-bold text-charcoal text-xl mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-warm-gray-600 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex gap-4 text-sm text-warm-gray-600">
                          <span>{service.duration}</span>
                          <span>{service.price}</span>
                        </div>
                      </Card>

                      {/* Recommended Trainer */}
                      <Card className="border-2 border-[var(--color-gold)]/20">
                        <p className="text-xs font-heading font-semibold text-[var(--color-gold)] uppercase tracking-wider mb-3">
                          Recommended Trainer
                        </p>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-14 h-14 rounded-full bg-[var(--color-cream-200)] flex items-center justify-center">
                            <span className="text-xl font-heading font-bold text-[var(--color-espresso)]">
                              {trainer.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-charcoal text-lg">
                              {trainer.name}
                            </h4>
                            <p className="text-sm text-[var(--color-gold)]">{trainer.specialization}</p>
                          </div>
                        </div>
                        <StarRating rating={trainer.rating} size={14} />
                        <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
                          {trainer.experience}+ years of experience
                        </p>
                      </Card>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <Link to={`/booking?service=${service.id}&trainer=${trainer.id}`}>
                        <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                          Book Consultation
                        </Button>
                      </Link>
                      <div className="mt-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setCurrentStep(0);
                            setAnswers({ goal: null, level: null, session: null });
                          }}
                        >
                          Start Over
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
