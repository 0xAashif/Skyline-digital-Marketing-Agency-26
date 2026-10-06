import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/site';
import { SkylineBars } from '../brand/SkylineBars';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#0B0F14] text-white pt-20 pb-12 border-t border-[#1f2631]"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2.5 text-white focus-visible:ring-2 focus-visible:ring-[#2B6BFF] rounded-md w-fit"
              aria-label="Skyline Digital Marketing Agency — Home"
            >
              <SkylineBars variant="logo" />
              <span className="font-semibold text-xl tracking-tight text-white">
                Skyline
              </span>
            </Link>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed">
              {siteConfig.tagline} A growth-focused digital marketing agency for ambitious brands and high-momentum businesses across India.
            </p>
            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>Founders: Aashif Khan & Sachin Sahu</p>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors py-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-white transition-colors py-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-white/80 hover:text-white transition-colors py-1 inline-block"
                >
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors py-1 inline-block"
                >
                  About the Agency
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors py-1 inline-block"
                >
                  Book Strategy Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>SEO Architecture</li>
              <li>Performance Ads</li>
              <li>Social Media</li>
              <li>Brand Identity</li>
              <li>Conversion Copy</li>
              <li>Fast Web Dev</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold">
              Connect
            </h4>
            <div className="space-y-2.5 text-sm text-white/80">
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <div className="pt-2 flex gap-3">
                {siteConfig.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                    aria-label={s.label}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {currentYear} Skyline Digital Marketing Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Clean execution. No noise.</span>
            <span>Bengaluru & New Delhi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
