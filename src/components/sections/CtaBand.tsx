import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';

interface CtaBandProps {
  headline?: React.ReactNode;
  subtext?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export const CtaBand: React.FC<CtaBandProps> = ({
  headline,
  subtext = 'Schedule a candid 30-minute growth review directly with our founders. We will audit your current acquisition funnel and share three actionable leverage points before any commitment.',
  primaryCtaText = 'Book a free strategy call',
  secondaryCtaText = 'See our case studies',
}) => {
  return (
    <section className="bg-[#0B0F14] text-white py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background ambient highlight */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2B6BFF]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide bg-white/10 text-white/90 border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
            Limited Monthly Client Ingestion
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-[1.08] text-white">
            {headline || (
              <>
                Ready to lift your brand{' '}
                <span className="italic font-normal">above the noise?</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
            {subtext}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              to="/contact"
              variant="accent"
              size="lg"
              withArrow
              className="text-white"
            >
              {primaryCtaText}
            </Button>
            <Button
              to="/work"
              variant="secondary"
              size="lg"
              className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/40"
            >
              {secondaryCtaText}
            </Button>
          </div>

          <div className="pt-4 flex items-center gap-6 text-xs text-white/50">
            <span>✓ Direct founder involvement</span>
            <span>✓ No 12-month lock-in</span>
            <span>✓ Transparent weekly reporting</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
