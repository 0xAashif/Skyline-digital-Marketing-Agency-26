import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useAsync } from '../hooks/useAsync';
import {
  getServices,
  getCaseStudies,
  getTestimonials,
  getFaqs,
} from '../lib/api';
import { siteConfig, heroStats, trustedBrands } from '../data/site';
import { SkylineBars } from '../components/brand/SkylineBars';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ServiceIcon } from '../components/ui/ServiceIcon';
import { Skeleton } from '../components/ui/Skeleton';
import { CaseStudyCard } from '../components/sections/CaseStudyCard';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { ResultsBand } from '../components/sections/ResultsBand';
import { TestimonialCard } from '../components/sections/TestimonialCard';
import { FaqAccordion } from '../components/sections/FaqAccordion';
import { CtaBand } from '../components/sections/CtaBand';

export const HomePage: React.FC = () => {
  useDocumentMeta({
    title: 'Skyline — Growth-Focused Digital Marketing Agency',
    description: siteConfig.description,
  });

  const { data: services, loading: loadingServices } = useAsync(getServices);
  const { data: caseStudies, loading: loadingWork } = useAsync(() =>
    getCaseStudies()
  );
  const { data: testimonials } = useAsync(getTestimonials);
  const { data: faqs } = useAsync(getFaqs);

  const featuredStudies = caseStudies ? caseStudies.slice(0, 3) : [];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Subtle radial tint behind hero only */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#2B6BFF]/[0.06] to-transparent rounded-full pointer-events-none blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white border border-[#E7E8E4] text-[#0B0F14]">
                <span className="w-2 h-2 rounded-full bg-[#2B6BFF]" />
                Digital marketing agency
              </div>

              {/* H1 Headline with italic accent on the phrase */}
              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-serif tracking-tight leading-[1.02] text-[#0B0F14] text-balance">
                Marketing that lifts your brand{' '}
                <span className="italic font-normal">above the noise.</span>
              </h1>

              {/* Subcopy */}
              <p className="text-lg sm:text-xl text-[#5B6470] max-w-[65ch] leading-relaxed">
                Skyline is a growth-focused digital marketing agency for
                ambitious businesses — SEO, performance ads, social and brand,
                run by one senior team.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button to="/contact" variant="primary" size="lg" withArrow>
                  Book a free strategy call
                </Button>
                <Button to="/work" variant="secondary" size="lg">
                  See our work
                </Button>
              </div>

              {/* Proof Row of 3 Stats */}
              <div className="pt-8 border-t border-[#E7E8E4] grid grid-cols-3 gap-4">
                {heroStats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-serif text-[#0B0F14] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#5B6470] leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Skyline Bars Visual */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full max-w-[460px] bg-white border border-[#E7E8E4] rounded-2xl p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#5B6470] font-semibold">
                      Growth Velocity
                    </h3>
                    <p className="text-sm font-medium text-[#0B0F14]">
                      Compounding Return Model
                    </p>
                  </div>
                  <Badge variant="accent">Live telemetry</Badge>
                </div>

                {/* Signature Element: Hero Visual */}
                <SkylineBars variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="py-12 border-y border-[#E7E8E4] bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <span className="text-xs uppercase tracking-wider text-[#5B6470] font-semibold shrink-0">
              Trusted by growing brands:
            </span>
            <div className="flex flex-wrap items-center gap-8 md:gap-14">
              {trustedBrands.map((brand) => (
                <div key={brand.name} className="flex items-baseline gap-1.5">
                  <span className="font-serif text-lg md:text-xl text-[#0B0F14]/70 hover:text-[#0B0F14] transition-colors tracking-tight">
                    {brand.name}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-[#5B6470]/60">
                    ({brand.tag})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2B6BFF] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#0B0F14] leading-[1.08]">
                Everything your business needs to{' '}
                <span className="italic">scale predictably.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#2B6BFF] hover:underline"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadingServices
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-8 bg-white border border-[#E7E8E4] rounded-2xl space-y-4"
                  >
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <Skeleton className="w-3/4 h-6" />
                    <Skeleton className="w-full h-4" />
                  </div>
                ))
              : services?.map((srv) => (
                  <Link
                    key={srv.id}
                    to="/services"
                    className="group bg-white border border-[#E7E8E4] rounded-2xl p-8 hover:border-[#2B6BFF]/40 hover:shadow-[0_8px_20px_rgba(43,107,255,0.05)] transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#FAFAF7] border border-[#E7E8E4] flex items-center justify-center mb-6 group-hover:bg-[#EAF0FF] transition-colors">
                        <ServiceIcon name={srv.iconName} />
                      </div>
                      <h3 className="text-xl font-serif text-[#0B0F14] tracking-tight group-hover:text-[#2B6BFF] transition-colors mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-sm font-medium text-[#2B6BFF] mb-3">
                        {srv.benefit}
                      </p>
                      <p className="text-sm text-[#5B6470] leading-relaxed">
                        {srv.summary}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E7E8E4] flex items-center justify-between text-xs font-semibold text-[#0B0F14] group-hover:text-[#2B6BFF]">
                      <span>Learn methodology</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DIVIDER */}
      <SkylineBars variant="divider" />

      {/* 4. FEATURED WORK SECTION */}
      <section className="py-20 md:py-28 bg-white border-y border-[#E7E8E4]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2B6BFF] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
                Featured Case Studies
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#0B0F14] leading-[1.08]">
                Proof through <span className="italic">unit economics.</span>
              </h2>
            </div>
            <Button to="/work" variant="secondary" size="md" withArrow>
              View all 6 case studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loadingWork
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-8 bg-[#FAFAF7] border border-[#E7E8E4] rounded-2xl space-y-4"
                  >
                    <Skeleton className="w-24 h-6" />
                    <Skeleton className="w-3/4 h-8" />
                    <Skeleton className="w-full h-16" />
                  </div>
                ))
              : featuredStudies.map((cs) => (
                  <CaseStudyCard key={cs.id} caseStudy={cs} featured />
                ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <ProcessTimeline />

      {/* 6. RESULTS BAND (Count-up stats) */}
      <ResultsBand />

      {/* 7. TESTIMONIALS */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2B6BFF] font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
              Founder Perspectives
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#0B0F14] leading-[1.08]">
              What happens when senior practitioners{' '}
              <span className="italic">own the outcome.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E7E8E4]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2B6BFF] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#0B0F14] leading-[1.1]">
                Clear answers before you book a call.
              </h2>
              <p className="text-base text-[#5B6470] leading-relaxed max-w-sm">
                We believe in total upfront clarity on pricing, timelines,
                contract structure, and expectations.
              </p>
              <div className="pt-4">
                <Button to="/contact" variant="secondary" size="md">
                  Have another question?
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              {faqs ? <FaqAccordion items={faqs} /> : <Skeleton className="h-64" />}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA BAND (DARK) */}
      <CtaBand />
    </div>
  );
};
