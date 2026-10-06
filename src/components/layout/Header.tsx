import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/site';
import { SkylineBars } from '../brand/SkylineBars';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll > 8px
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll and focus handling when mobile menu opens
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0B0F14] focus:text-white focus:rounded-md focus:shadow-md focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAFAF7]/90 backdrop-blur-md border-b border-[#E7E8E4] py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-[#0B0F14] focus-visible:ring-2 focus-visible:ring-[#2B6BFF] rounded-md py-1"
            aria-label="Skyline Digital Marketing Agency — Home"
          >
            <SkylineBars variant="logo" />
            <span className="font-semibold text-lg tracking-tight text-[#0B0F14]">
              Skyline
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#0B0F14] font-semibold'
                      : 'text-[#5B6470] hover:text-[#0B0F14]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2B6BFF] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button to="/contact" variant="primary" size="sm" withArrow>
              Book a free strategy call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-[#0B0F14] hover:bg-[#E7E8E4]/50 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#2B6BFF]"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Full-screen Sheet */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-[#FAFAF7] flex flex-col p-6 animate-in fade-in duration-200"
        >
          {/* Header row in mobile sheet */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E7E8E4]">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 text-[#0B0F14]"
              aria-label="Skyline Home"
            >
              <SkylineBars variant="logo" />
              <span className="font-semibold text-lg tracking-tight">Skyline</span>
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 text-[#0B0F14] hover:bg-[#E7E8E4]/50 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#2B6BFF]"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Nav Links */}
          <nav
            role="navigation"
            aria-label="Mobile Menu Links"
            className="flex-1 flex flex-col justify-center gap-6 py-8"
          >
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-serif tracking-tight py-2 transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#2B6BFF] font-semibold'
                      : 'text-[#0B0F14] hover:text-[#2B6BFF]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#2B6BFF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Bottom CTA */}
          <div className="pt-6 border-t border-[#E7E8E4] flex flex-col gap-3">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              withArrow
              className="w-full"
            >
              Book a free strategy call
            </Button>
            <p className="text-xs text-center text-[#5B6470] pt-1">
              No pressure. 30-min growth review with our founders.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
