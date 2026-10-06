import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '../../types';
import { Badge } from '../ui/Badge';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  featured = false,
}) => {
  return (
    <Link
      to={`/work/${caseStudy.slug}`}
      className="group block bg-white border border-[#E7E8E4] rounded-2xl p-6 sm:p-8 hover:border-[#2B6BFF]/40 hover:shadow-[0_8px_24px_rgba(43,107,255,0.06)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B6BFF]"
    >
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <Badge variant="accent">{caseStudy.category}</Badge>
          <span className="text-xs text-[#5B6470] tracking-tight">
            {caseStudy.industry}
          </span>
        </div>
        <span
          className="w-9 h-9 rounded-full bg-[#FAFAF7] border border-[#E7E8E4] flex items-center justify-center text-[#0B0F14] group-hover:bg-[#2B6BFF] group-hover:text-white group-hover:border-[#2B6BFF] transition-all duration-150"
          aria-hidden="true"
        >
          <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <div className="space-y-3 mb-8">
        <h3 className="text-xl sm:text-2xl font-serif text-[#0B0F14] tracking-tight group-hover:text-[#2B6BFF] transition-colors">
          {caseStudy.client}
        </h3>
        <p className="text-2xl sm:text-3xl font-serif font-normal text-[#0B0F14] tracking-tight text-balance">
          {caseStudy.headlineResult}
        </p>
        <p className="text-sm text-[#5B6470] leading-relaxed line-clamp-2">
          {caseStudy.summary}
        </p>
      </div>

      {/* Primary result highlight pills */}
      <div className="pt-6 border-t border-[#E7E8E4] grid grid-cols-2 gap-4">
        {caseStudy.results.slice(0, 2).map((res, i) => (
          <div key={i} className="space-y-0.5">
            <span className="block text-base sm:text-lg font-serif font-semibold text-[#0B0F14]">
              {res.value}
            </span>
            <span className="block text-xs text-[#5B6470] leading-tight line-clamp-1">
              {res.label}
            </span>
          </div>
        ))}
      </div>
    </Link>
  );
};
