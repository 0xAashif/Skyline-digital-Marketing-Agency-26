import React from 'react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white border border-[#E7E8E4] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#2B6BFF]/30 transition-all duration-200">
      <div className="space-y-4">
        {testimonial.metricHighlight && (
          <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-[#EAF0FF] text-[#2B6BFF]">
            {testimonial.metricHighlight}
          </div>
        )}
        <p className="text-base sm:text-[17px] text-[#0B0F14] leading-relaxed font-serif italic">
          “{testimonial.quote}”
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-[#E7E8E4] flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-[#0B0F14]">
            {testimonial.name}
          </h4>
          <p className="text-xs text-[#5B6470]">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#FAFAF7] border border-[#E7E8E4] flex items-center justify-center text-xs font-bold text-[#0B0F14]">
          {testimonial.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
      </div>
    </div>
  );
};
