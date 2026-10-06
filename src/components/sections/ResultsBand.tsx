import React from 'react';
import { motion } from 'motion/react';
import { CountUp } from '../ui/CountUp';

export const ResultsBand: React.FC = () => {
  const metrics = [
    {
      target: 3.4,
      decimals: 1,
      prefix: '',
      suffix: 'x',
      label: 'Average client blended ROAS',
      sub: 'Across 90-day scale sprint audits', // PLACEHOLDER
    },
    {
      target: 212,
      decimals: 0,
      prefix: '+',
      suffix: '%',
      label: 'Organic lead volume uplift',
      sub: 'Within 6 months of topical mapping', // PLACEHOLDER
    },
    {
      target: 42,
      decimals: 0,
      prefix: '₹',
      suffix: 'Cr+',
      label: 'Client revenue generated',
      sub: 'Tracked via first-party attribution', // PLACEHOLDER
    },
    {
      target: 94,
      decimals: 0,
      prefix: '',
      suffix: '%',
      label: 'Annual partner retention',
      sub: 'Engagements continuing past 12 mos', // PLACEHOLDER
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-y border-[#E7E8E4]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-[#E7E8E4]">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex flex-col ${idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''}`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#0B0F14] mb-2 font-normal">
                <CountUp
                  target={m.target}
                  decimals={m.decimals}
                  prefix={m.prefix}
                  suffix={m.suffix}
                />
              </div>
              <p className="text-sm font-semibold text-[#0B0F14] tracking-tight">
                {m.label}
              </p>
              <p className="text-xs text-[#5B6470] mt-1">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
