import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useAsync } from '../hooks/useAsync';
import { getCaseStudies } from '../lib/api';
import { CaseStudyCard } from '../components/sections/CaseStudyCard';
import { Skeleton } from '../components/ui/Skeleton';
import { CtaBand } from '../components/sections/CtaBand';

const CATEGORIES = ['All', 'SEO', 'Performance', 'Social', 'Branding', 'Web'] as const;

export const WorkPage: React.FC = () => {
  useDocumentMeta({
    title: 'Work & Case Studies — Verified Results',
    description:
      'Case studies documenting performance marketing, SEO, social growth, and brand transformations for ambitious brands.',
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { data: caseStudies, loading } = useAsync(() => getCaseStudies(activeCategory), true, [activeCategory]);

  return (
    <div className="w-full pt-32 md:pt-40">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 mb-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E7E8E4] text-[#0B0F14]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
            Client Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-[#0B0F14] leading-[1.05]">
            Our work is measured in <br />
            <span className="italic font-normal">revenue, not vanity.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5B6470] leading-relaxed max-w-[65ch]">
            Every engagement begins with specific unit-economic benchmarks. Here is how we scaled traffic, acquired customers, and built category leaders.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-10" role="tablist" aria-label="Filter case studies by category">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full border transition-all duration-150 min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B6BFF] ${
                  isActive
                    ? 'bg-[#0B0F14] text-white border-[#0B0F14]'
                    : 'bg-white text-[#5B6470] border-[#E7E8E4] hover:border-[#0B0F14] hover:text-[#0B0F14]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Case Studies with Animated Reflow */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mb-28">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-[#E7E8E4] rounded-2xl space-y-4"
              >
                <Skeleton className="w-24 h-6" />
                <Skeleton className="w-3/4 h-8" />
                <Skeleton className="w-full h-16" />
                <Skeleton className="w-full h-12" />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {caseStudies?.map((study) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <CaseStudyCard caseStudy={study} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* CTA Band */}
      <CtaBand />
    </div>
  );
};
