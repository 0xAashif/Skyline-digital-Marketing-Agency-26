import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useAsync } from '../hooks/useAsync';
import { getServices } from '../lib/api';
import { ServiceIcon } from '../components/ui/ServiceIcon';
import { Skeleton } from '../components/ui/Skeleton';
import { Button } from '../components/ui/Button';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { CtaBand } from '../components/sections/CtaBand';

export const ServicesPage: React.FC = () => {
  useDocumentMeta({
    title: 'Services — SEO, Performance Ads, Social & Web',
    description:
      'Rigorous digital marketing services for ambitious brands: SEO, Meta and Google Ads, Social Media, Branding, and Web Development.',
  });

  const { data: services, loading } = useAsync(getServices);

  return (
    <div className="w-full pt-32 md:pt-40">
      {/* Intro Header */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mb-20 md:mb-28">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E7E8E4] text-[#0B0F14]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
            Full-Spectrum Digital Growth
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-[#0B0F14] leading-[1.05]">
            Specialized execution. <br />
            <span className="italic font-normal">Unified attribution.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5B6470] leading-relaxed max-w-[65ch]">
            Most agencies create silos: the ad team blames the web team, and the web team blames the copy. At Skyline, every service is orchestrated by senior leads to compound your bottom-line return.
          </p>
        </div>
      </section>

      {/* 6 Alternating Detail Sections */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 space-y-24 md:space-y-36 mb-24 md:mb-36">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-8 bg-white border border-[#E7E8E4] rounded-2xl space-y-4">
                <Skeleton className="w-1/3 h-8" />
                <Skeleton className="w-full h-24" />
              </div>
            ))
          : services?.map((srv, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={srv.id}
                  id={srv.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Column: Description & Deliverables */}
                  <div
                    className={`lg:col-span-7 space-y-8 ${
                      !isEven ? 'lg:order-2' : ''
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EAF0FF] flex items-center justify-center">
                          <ServiceIcon name={srv.iconName} />
                        </div>
                        <span className="text-xs uppercase font-mono tracking-widest text-[#2B6BFF] font-semibold">
                          0{index + 1} // Capability
                        </span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#0B0F14]">
                        {srv.title}
                      </h2>
                      <p className="text-lg font-medium text-[#2B6BFF]">
                        {srv.benefit}
                      </p>
                      <p className="text-base text-[#5B6470] leading-relaxed max-w-[65ch]">
                        {srv.description}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs uppercase tracking-wider text-[#0B0F14] font-semibold">
                        What We Deliver:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {srv.deliverables.map((item, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-sm text-[#0B0F14]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#2B6BFF] mt-0.5 shrink-0" strokeWidth={2} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button to="/contact" variant="primary" size="sm" withArrow>
                        Discuss {srv.title}
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Ideal For & Outcome Metric Card */}
                  <div
                    className={`lg:col-span-5 ${
                      !isEven ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="bg-white border border-[#E7E8E4] rounded-2xl p-8 space-y-8 shadow-xs">
                      {/* Metric Callout */}
                      <div className="p-6 bg-[#FAFAF7] border border-[#E7E8E4] rounded-xl space-y-1">
                        <span className="text-xs uppercase tracking-wider text-[#5B6470] font-semibold">
                          Documented Outcome
                        </span>
                        <div className="text-4xl font-serif text-[#0B0F14] tracking-tight">
                          {srv.outcomeMetric.value}
                        </div>
                        <p className="text-xs text-[#5B6470] leading-relaxed pt-1">
                          {srv.outcomeMetric.label}
                        </p>
                      </div>

                      {/* Ideal For */}
                      <div className="space-y-2">
                        <h4 className="text-xs uppercase tracking-wider text-[#0B0F14] font-semibold">
                          Ideal For:
                        </h4>
                        <p className="text-sm text-[#5B6470] leading-relaxed">
                          {srv.idealFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </section>

      {/* Process Strip */}
      <ProcessTimeline />

      {/* CTA Band */}
      <CtaBand headline={<>Have a specific channel challenge? <span className="italic">Let’s audit it.</span></>} />
    </div>
  );
};
