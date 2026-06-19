import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import Button from '../ui/Button';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/trainers', label: 'Trainers' },
  { path: '/recommendation', label: 'Find Your Fit' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const showSolid = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-[var(--z-header)]
          transition-all duration-300 ease-[var(--ease-smooth)]
          ${showSolid
            ? 'bg-white/95 backdrop-blur-md shadow-[var(--shadow-soft)]'
            : 'bg-transparent'
          }
        `}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className={`
                w-9 h-9 rounded-full flex items-center justify-center transition-colors
                ${showSolid ? 'bg-[var(--color-cream-200)]' : 'bg-[var(--color-charcoal)]/5'}
              `}>
                <Leaf size={20} className={`transition-colors ${showSolid ? 'text-[var(--color-gold)]' : 'text-[var(--color-charcoal)]'}`} />
              </div>
              <span className={`
                font-heading font-bold text-lg md:text-xl tracking-tight transition-colors
                ${showSolid ? 'text-[var(--color-charcoal)]' : 'text-white'}
              `}>
                Pure Lifestyle <span className={`${showSolid ? 'text-[var(--color-gold)]' : 'text-white/80'}`}>Yoga</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    font-heading text-sm font-medium tracking-wide
                    transition-colors duration-200 relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0
                    after:h-0.5 after:rounded-full after:transition-all after:duration-300
                    hover:after:w-full
                    ${showSolid
                      ? `${location.pathname === link.path ? 'text-[var(--color-espresso)] after:w-full after:bg-[var(--color-gold)]' : 'text-[var(--color-warm-gray-600)] hover:text-[var(--color-espresso)] after:bg-[var(--color-gold)]'}`
                      : `${location.pathname === link.path ? 'text-white after:w-full after:bg-white' : 'text-white/80 hover:text-white after:bg-white'}`
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <Link to="/booking" className="hidden md:block">
                <Button
                  variant={showSolid ? 'primary' : 'white'}
                  size="sm"
                >
                  Book Consultation
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`
                  lg:hidden p-2 rounded-[var(--radius-md)] transition-colors cursor-pointer
                  ${showSolid ? 'text-[var(--color-charcoal)] hover:bg-[var(--color-cream-100)]' : 'text-white hover:bg-white/10'}
                `}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-[99] lg:hidden
          transition-all duration-300
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`
            absolute top-0 right-0 h-full w-[280px] bg-white shadow-[var(--shadow-elevated)]
            transition-transform duration-300 ease-[var(--ease-smooth)]
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-[var(--radius-md)] text-warm-gray-400 hover:text-charcoal hover:bg-cream-100 transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    px-4 py-3 rounded-[var(--radius-md)] font-heading text-base font-medium
                    transition-colors duration-200
                    ${location.pathname === link.path
                      ? 'bg-[var(--color-cream-200)] text-[var(--color-espresso)]'
                      : 'text-[var(--color-warm-gray-600)] hover:bg-[var(--color-cream-100)] hover:text-[var(--color-charcoal)]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8">
              <Link to="/booking">
                <Button variant="primary" size="md" className="w-full">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
