import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useAsync } from '../hooks/useAsync';
import { getCaseStudy, getCaseStudies } from '../lib/api';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Skeleton } from '../components/ui/Skeleton';
import { CtaBand } from '../components/sections/CtaBand';

export const WorkDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: study, loading, error } = useAsync(
    () => getCaseStudy(slug || ''),
    true,
    [slug]
  );
  const { data: allStudies } = useAsync(() => getCaseStudies());

  useDocumentMeta({
    title: study ? `${study.client} — ${study.headlineResult}` : 'Case Study',
    description: study?.summary,
  });

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-36 pb-24 space-y-8">
        <Skeleton className="w-32 h-6" />
        <Skeleton className="w-2/3 h-12" />
        <Skeleton className="w-full h-48" />
      </div>
    );
  }

  if (error || !study) {
    return (
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-40 pb-24 text-center space-y-6">
        <h1 className="text-3xl font-serif text-[#0B0F14]">Case Study Not Found</h1>
        <p className="text-sm text-[#5B6470]">
          The project study you are searching for may have been archived or moved.
        </p>
        <Button to="/work" variant="primary" withArrow>
          Back to all work
        </Button>
      </div>
    );
  }

  // Calculate Next Project link
  const currentIndex = allStudies?.findIndex((s) => s.slug === study.slug) ?? -1;
  const nextStudy =
    allStudies && currentIndex !== -1
      ? allStudies[(currentIndex + 1) % allStudies.length]
      : null;

  return (
    <div className="w-full pt-32 md:pt-40">
      {/* Back Link */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 mb-8">
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#5B6470] hover:text-[#0B0F14] transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all case studies</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mb-16 md:mb-24">
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">{study.category}</Badge>
            <span className="text-xs text-[#5B6470]">{study.industry}</span>
            <span className="text-xs text-[#5B6470]">• Sprint Timeline: {study.duration}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-[#0B0F14] leading-[1.05]">
            {study.client}: <br />
            <span className="italic font-normal text-[#2B6BFF]">
              {study.headlineResult}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#5B6470] leading-relaxed max-w-[65ch]">
            {study.summary}
          </p>
        </div>
      </section>

      {/* 3 Big Metrics Results Banner */}
      <section className="bg-white border-y border-[#E7E8E4] py-12 md:py-16 mb-20 md:mb-28">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-[#E7E8E4]">
            {study.results.map((res, i) => (
              <div
                key={i}
                className={`space-y-1 ${i !== 0 ? 'md:pl-8' : ''}`}
              >
                <div className="text-4xl sm:text-5xl font-serif text-[#0B0F14] tracking-tight">
                  {res.value}
                </div>
                <p className="text-xs uppercase tracking-wider text-[#2B6BFF] font-semibold pt-1">
                  Validated Metric
                </p>
                <p className="text-sm text-[#5B6470] leading-snug">
                  {res.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Approach Content */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Challenge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2B6BFF] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
              The Challenge
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0B0F14] tracking-tight">
              Where growth hit a ceiling.
            </h2>
            <p className="text-base text-[#5B6470] leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Approach */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2B6BFF] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B6BFF]" />
              Strategic Approach
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0B0F14] tracking-tight">
              Tactics executed during the sprint.
            </h2>

            <div className="space-y-4 pt-2">
              {study.approach.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-[#E7E8E4] rounded-xl flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2B6BFF] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <p className="text-sm sm:text-base text-[#0B0F14] leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Link */}
      {nextStudy && (
        <section className="border-t border-[#E7E8E4] py-16 bg-[#FFFFFF]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#5B6470] font-semibold">
                Next Case Study
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0B0F14] mt-1">
                {nextStudy.client} —{' '}
                <span className="italic">{nextStudy.headlineResult}</span>
              </h3>
            </div>
            <Link
              to={`/work/${nextStudy.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B0F14] text-white text-sm font-medium hover:bg-[#1f2631] transition-colors"
            >
              <span>View next project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <CtaBand headline={<>Want similar results for your brand? <span className="italic">Let’s talk strategy.</span></>} />
    </div>
  );
};
