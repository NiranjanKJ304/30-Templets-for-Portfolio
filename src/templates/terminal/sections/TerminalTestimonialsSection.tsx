import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';

interface TerminalTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TerminalTestimonialsSection: React.FC<TerminalTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="cat endorsements.md" isSectionHeader />
        
        <div className="flex flex-col gap-8 pl-0 md:pl-4">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col gap-3 border-l-2 border-[#397A4A] dark:border-[#79C98B] pl-4">
              <blockquote className="font-heading font-bold text-lg text-[#18201B] dark:text-[#DCE4DC] leading-snug">
                "{t.quote}"
              </blockquote>
              
              <div className="flex flex-col gap-1 font-mono text-xs">
                <span className="text-[#347A84] dark:text-[#69B7C4]">-- {t.author}</span>
                {(t.role || t.company) && (
                  <span className="text-[#5F6861] dark:text-[#9CA39D]">
                    {t.role}{t.role && t.company && ' @ '}{t.company}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
