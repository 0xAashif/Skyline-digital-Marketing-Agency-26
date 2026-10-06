import React from 'react';
import { motion } from 'motion/react';
import { processSteps } from '../../data/site';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2B6BFF] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
            How We Operate
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#0B0F14] leading-[1.08]">
            A sprint process built for <span className="italic">velocity and rigor.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B6470] mt-4 leading-relaxed">
            No endless slide decks or committee delays. Four transparent phases designed to identify leverage, deploy creative rapidly, and compound profit.
          </p>
        </div>

        {/* Timeline Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Horizontal connection line on desktop */}
          <div
            className="hidden md:block absolute top-[28px] left-[40px] right-[40px] h-[1px] bg-[#E7E8E4] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white border border-[#E7E8E4] rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#2B6BFF]/30 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-full bg-[#FAFAF7] border border-[#E7E8E4] text-[#0B0F14] font-semibold text-xs flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider text-[#5B6470] uppercase">
                      Sprint Phase
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#0B0F14] tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#2B6BFF] mb-3">
                    {step.tagline}
                  </p>
                  <p className="text-sm text-[#5B6470] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7E8E4]/60 flex items-center text-[11px] text-[#5B6470]">
                  <span>Phase duration: 1–2 weeks</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
