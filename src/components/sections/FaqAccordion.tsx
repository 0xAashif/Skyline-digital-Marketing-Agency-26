import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';

interface FaqAccordionProps {
  items: FAQItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-[#E7E8E4] border-y border-[#E7E8E4]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className="py-5">
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between text-left py-2 font-medium text-lg text-[#0B0F14] hover:text-[#2B6BFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B6BFF] rounded-sm group"
              >
                <span className="pr-4 tracking-tight">{item.question}</span>
                <span
                  className={`p-1.5 rounded-full border border-[#E7E8E4] transition-all duration-200 shrink-0 ${
                    isOpen
                      ? 'bg-[#2B6BFF] border-[#2B6BFF] text-white rotate-180'
                      : 'bg-white text-[#5B6470] group-hover:border-[#0B0F14]'
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4 stroke-[1.5]" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`transition-all duration-200 overflow-hidden ${
                isOpen ? 'pt-3 pb-2 max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-base text-[#5B6470] leading-relaxed max-w-[65ch]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
