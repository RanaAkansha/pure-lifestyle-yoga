import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-espresso)]">
        {/* Decorative Overlays */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-[var(--color-charcoal)] to-transparent z-10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[var(--color-gold)] blur-[120px] mix-blend-overlay" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03] z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 pt-40 md:pt-48 pb-24 z-20 flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-4 text-[var(--color-gold)] text-xs font-heading tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-px bg-[var(--color-gold)]/50" />
            THE SANCTUARY WITHIN
            <span className="w-8 h-px bg-[var(--color-gold)]/50" />
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up text-white mb-6 leading-tight text-5xl md:text-7xl font-serif">
            <span className="block font-light text-[var(--color-cream-200)]">Gurugram's</span>
            <span className="block mt-2 text-white">
              Most <span className="italic text-[var(--color-gold)] font-light">Exclusive</span> Practice.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 text-lg text-white/70 mb-10 max-w-xl leading-relaxed font-light">
            An invitation to unparalleled well-being. Experience highly personalized, luxury in-home wellness designed strictly for the discerning few.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Link to="/booking">
              <Button variant="primary" size="lg" className="bg-[var(--color-gold)] hover:bg-[#B48B47] text-[var(--color-charcoal)] border-none px-8 py-4 font-semibold tracking-wide uppercase text-sm">
                BEGIN YOUR JOURNEY
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 tracking-wide uppercase text-sm">
                THE PHILOSOPHY
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
