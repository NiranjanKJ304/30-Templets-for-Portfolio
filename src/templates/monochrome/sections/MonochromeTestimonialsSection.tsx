import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';

interface MonochromeTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonochromeTestimonialsSection: React.FC<MonochromeTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MonochromeSectionHeader title="Endorsements" number="09" subtitle="References" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {testimonials.map((t, idx) => (
          <div key={t.id || idx} className="flex flex-col">
             
             <div className="font-heading text-6xl text-[#C9C6BE] dark:text-[#3A3A37] leading-none select-none mb-6">
               "
             </div>

             <p className="font-heading text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-[#151515] dark:text-[#F2F0E9] whitespace-pre-wrap mb-10">
               {t.quote}
             </p>

             <div className="mt-auto border-t border-[#C9C6BE]/50 dark:border-[#3A3A37]/50 pt-6">
               <h4 className="font-heading text-xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight mb-1">
                 {t.author}
               </h4>
               <p className="font-mono text-[10px] text-[#555555] dark:text-[#B5B3AC] uppercase tracking-widest">
                 {t.role} {t.company && `— ${t.company}`}
               </p>
             </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
