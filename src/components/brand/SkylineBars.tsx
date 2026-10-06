import React, { useState } from 'react';
import { motion } from 'motion/react';

interface SkylineBarsProps {
  variant?: 'logo' | 'hero' | 'divider';
  className?: string;
}

interface HeroBarItem {
  id: number;
  height: number; // percentage or px
  label: string;
  isAccent: boolean;
}

const HERO_BARS: HeroBarItem[] = [
  { id: 1, height: 42, label: 'Audit & baseline', isAccent: false },
  { id: 2, height: 64, label: 'Sprint 1 testing', isAccent: false },
  { id: 3, height: 92, label: 'Topical authority', isAccent: false },
  { id: 4, height: 130, label: 'Creative angle scale', isAccent: false },
  { id: 5, height: 110, label: 'CAC consolidation', isAccent: false },
  { id: 6, height: 175, label: '+180% AOV uplift', isAccent: false },
  { id: 7, height: 235, label: '+212% organic leads', isAccent: true }, // The single accent bar
  { id: 8, height: 185, label: '3.4x ROAS sustained', isAccent: false },
  { id: 9, height: 215, label: 'Compounding reach', isAccent: false },
  { id: 10, height: 145, label: 'Scale stability', isAccent: false },
];

export const SkylineBars: React.FC<SkylineBarsProps> = ({
  variant = 'hero',
  className = '',
}) => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  if (variant === 'logo') {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block shrink-0 ${className}`}
        aria-hidden="true"
      >
        {/* Bar 1 */}
        <rect x="2" y="10" width="4.5" height="12" rx="2" fill="#0B0F14" />
        {/* Bar 2 (Accent) */}
        <rect x="9.5" y="4" width="4.5" height="18" rx="2" fill="#2B6BFF" />
        {/* Bar 3 */}
        <rect x="17" y="7" width="4.5" height="15" rx="2" fill="#0B0F14" />
      </svg>
    );
  }

  if (variant === 'divider') {
    return (
      <div
        className={`w-full flex items-center justify-center my-12 ${className}`}
        aria-hidden="true"
      >
        <div className="h-px bg-[#E7E8E4] flex-1 max-w-[120px]" />
        <div className="flex items-end gap-1 px-4">
          <span className="w-1 h-3 rounded-full bg-[#0B0F14]/40" />
          <span className="w-1 h-5 rounded-full bg-[#2B6BFF]" />
          <span className="w-1 h-4 rounded-full bg-[#0B0F14]/40" />
          <span className="w-1 h-6 rounded-full bg-[#0B0F14]/40" />
          <span className="w-1 h-3.5 rounded-full bg-[#0B0F14]/40" />
        </div>
        <div className="h-px bg-[#E7E8E4] flex-1 max-w-[120px]" />
      </div>
    );
  }

  // Hero Visual Variant
  return (
    <div
      className={`relative w-full max-w-[580px] select-none ${className}`}
      role="img"
      aria-label="Interactive Skyline growth chart depicting progressive compounding results"
    >
      {/* Background subtle baseline guide */}
      <div className="relative pt-12 pb-6">
        <div className="flex items-end justify-between gap-2 md:gap-3.5 h-[270px] px-2 md:px-4">
          {HERO_BARS.map((bar, index) => {
            const isHovered = activeTooltip === bar.id;
            return (
              <div
                key={bar.id}
                className="relative flex-1 flex flex-col items-center justify-end h-full group"
                onMouseEnter={() => setActiveTooltip(bar.id)}
                onMouseLeave={() => setActiveTooltip(null)}
                onFocus={() => setActiveTooltip(bar.id)}
                onBlur={() => setActiveTooltip(null)}
                tabIndex={0}
                role="button"
                aria-label={`${bar.label}, height ${bar.height}`}
              >
                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-10 z-20 whitespace-nowrap px-2.5 py-1 text-[11px] font-medium tracking-tight rounded-md bg-[#0B0F14] text-white shadow-sm pointer-events-none"
                  >
                    {bar.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0B0F14]" />
                  </motion.div>
                )}

                {/* Animated Bar */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: `${bar.height}px`,
                    opacity: 1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 110,
                    damping: 18,
                    delay: 0.1 + index * 0.05,
                  }}
                  whileHover={{ y: -4 }}
                  className={`w-full max-w-[36px] rounded-t-[6px] rounded-b-[2px] transition-colors duration-150 cursor-pointer ${
                    bar.isAccent
                      ? 'bg-[#2B6BFF] ring-4 ring-[#EAF0FF]'
                      : 'bg-[#0B0F14] hover:bg-[#2B6BFF]'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Anchoring baseline */}
        <div className="w-full h-[1px] bg-[#E7E8E4] mt-1" />

        {/* Micro-labels beneath baseline */}
        <div className="flex justify-between items-center text-[10px] tracking-wider uppercase text-[#5B6470] mt-2 px-2">
          <span>Sprint baseline</span>
          <span className="font-semibold text-[#2B6BFF]">Compounding scale</span>
          <span>Sustained growth</span>
        </div>
      </div>
    </div>
  );
};
