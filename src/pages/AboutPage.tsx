import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { siteConfig } from '../data/site';
import { SkylineBars } from '../components/brand/SkylineBars';
import { CtaBand } from '../components/sections/CtaBand';

export const AboutPage: React.FC = () => {
  useDocumentMeta({
    title: 'About Skyline — Senior Marketing Leadership',
    description:
      'Learn about Skyline Digital Marketing Agency, co-founded by Aashif Khan and Sachin Sahu. Calm, confident, precise marketing that lifts your brand above the noise.',
  });

  const values = [
    {
      number: '01',
      title: 'Attribution over vanity',
      description:
        'Likes, impressions, and arbitrary awards do not pay payroll. We build systems that directly connect marketing spend to bankable revenue and customer lifetime value.',
    },
    {
      number: '02',
      title: 'Senior practitioners only',
      description:
        'When you hire Skyline, you work directly with Aashif and Sachin. No bait-and-switch where senior founders sell the account and handover execution to unproven trainees.',
    },
    {
      number: '03',
      title: 'Candor and clean boundaries',
      description:
        'If a marketing channel does not make sense for your unit economics, we will advise against it. We safeguard your capital as rigorously as our own.',
    },
  ];

  const principles = [
    {
      title: 'Sprint-based velocity',
      text: 'We ship experiments weekly instead of quarterly. Fast loops beat slow perfection.',
    },
    {
      title: 'Shared dashboard truth',
      text: 'You see the exact same real-time spend and conversion telemetry that our leads analyze.',
    },
    {
      title: 'Zero predatory lock-ins',
      text: 'After an initial 90-day validation sprint, we earn your business month by month.',
    },
  ];

  return (
    <div className="w-full pt-32 md:pt-40">
      {/* 1. Header & Story */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mb-24 md:mb-32">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E7E8E4] text-[#0B0F14]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
            About Skyline
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-[#0B0F14] leading-[1.05]">
            Built by founders who grew tired of <br />
            <span className="italic font-normal">agency smoke and mirrors.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5B6470] leading-relaxed max-w-[65ch]">
            Digital marketing agencies got lazy. They sold pre-packaged retained hours, hid behind vanity traffic graphs, and passed client accounts through an endless assembly line of junior hires.
          </p>
          <p className="text-base sm:text-lg text-[#5B6470] leading-relaxed max-w-[65ch]">
            We started Skyline with a single operating thesis: ambitious founders and marketing leaders in India deserve a calm, confident, and senior-led growth partner that delivers undeniable unit economics.
          </p>
        </div>
      </section>

      {/* 2. Founders Section with Monogram Avatars */}
      <section className="bg-white border-y border-[#E7E8E4] py-20 md:py-32 mb-24 md:mb-32">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2B6BFF] font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
              Founding Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#0B0F14]">
              Practitioners at the helm of every account.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {siteConfig.founders.map((founder) => (
              <div
                key={founder.name}
                className="p-8 sm:p-10 rounded-2xl bg-[#FAFAF7] border border-[#E7E8E4] flex flex-col justify-between space-y-6 hover:border-[#2B6BFF]/30 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Monogram Avatar (CSS/Typography only) */}
                  <div className="w-20 h-20 rounded-2xl bg-[#0B0F14] text-white flex items-center justify-center font-serif text-2xl font-normal tracking-wide shadow-xs border border-black/10">
                    {founder.initials}
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-[#0B0F14] tracking-tight">
                      {founder.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#2B6BFF] font-semibold pt-1">
                      {founder.role}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#5B6470] leading-relaxed">
                    {founder.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E7E8E4] flex items-center justify-between text-xs text-[#5B6470]">
                  <span>Active Sprint Partner</span>
                  <span className="font-mono">Direct Communication</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mb-24 md:mb-32">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2B6BFF] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
            Operating Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#0B0F14]">
            How we protect your capital and trust.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val) => (
            <div
              key={val.number}
              className="bg-white border border-[#E7E8E4] rounded-2xl p-8 space-y-4 hover:border-[#2B6BFF]/30 transition-all"
            >
              <span className="text-xs font-mono text-[#2B6BFF] font-semibold">
                {val.number}
              </span>
              <h3 className="text-xl font-serif text-[#0B0F14] tracking-tight">
                {val.title}
              </h3>
              <p className="text-sm text-[#5B6470] leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How We Work — 3 Principles */}
      <section className="bg-white border-y border-[#E7E8E4] py-20 mb-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#0B0F14]">
              Three rules governing every engagement.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="text-center p-6 border border-[#E7E8E4] rounded-2xl bg-[#FAFAF7]"
              >
                <div className="w-8 h-8 rounded-full bg-[#0B0F14] text-white text-xs font-medium flex items-center justify-center mx-auto mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-serif text-[#0B0F14] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#5B6470] leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skyline Bars Divider */}
      <SkylineBars variant="divider" />

      {/* CTA Band */}
      <CtaBand />
    </div>
  );
};
