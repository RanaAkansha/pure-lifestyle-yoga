import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Globe, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-espresso)] text-[var(--color-cream)]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
                <Leaf size={20} className="text-[var(--color-gold)]" />
              </div>
              <span className="font-heading font-bold text-lg">
                Pure Lifestyle <span className="text-[var(--color-gold)]">Yoga</span>
              </span>
            </Link>
            <p className="text-warm-gray-400 text-sm leading-relaxed mb-6">
              Personalized private yoga sessions at home and online. Transform your life with certified expert guidance.
            </p>
            <div className="flex gap-3">
              {[Globe, MessageCircle, Heart].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-warm-gray-400 hover:bg-[var(--color-gold)] hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/trainers', label: 'Our Trainers' },
                { to: '/recommendation', label: 'Find Your Fit' },
                { to: '/booking', label: 'Book Consultation' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-warm-gray-400 hover:text-[var(--color-gold)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-white">Services</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                'Weight Loss Yoga',
                'Stress Relief Yoga',
                'Therapeutic Yoga',
                'Prenatal Yoga',
                'Senior Citizen Yoga',
                'Corporate Wellness',
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="text-sm text-warm-gray-400 hover:text-[var(--color-gold)] transition-colors duration-200"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-white">Contact Us</h4>
            <div className="flex flex-col gap-3">
              {[
                { Icon: Phone, text: '+91 98765 43210' },
                { Icon: Mail, text: 'hello@purelifestyleyoga.com' },
                { Icon: MapPin, text: 'Mumbai, Delhi, Bangalore' },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon size={16} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-warm-gray-400">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-warm-gray-400">
            © {new Date().getFullYear()} Pure Lifestyle Yoga. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-warm-gray-400 hover:text-[var(--color-gold)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-warm-gray-400 hover:text-[var(--color-gold)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
