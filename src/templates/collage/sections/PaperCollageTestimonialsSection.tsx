import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface PaperCollageTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperCollageTestimonialsSection: React.FC<PaperCollageTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperCollageSectionHeader title="Words from others" number="09" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {testimonials.map((t, idx) => (
          <div key={t.id || idx} className="break-inside-avoid relative mb-8">
             {/* Offset quotation sheet */}
             <div className="absolute inset-0 bg-[#315CFF] opacity-10 dark:opacity-5 transform -rotate-1 translate-x-2 translate-y-2"></div>
             
             <div className="relative bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-8 md:p-10 shadow-sm">
                
                {/* Large Quote Mark */}
                <div className="absolute top-4 right-4 font-heading text-8xl text-[#F7F3EA] dark:text-[#1A1C23] leading-none select-none z-0">
                  "
                </div>

                <div className="relative z-10">
                  <p className="font-heading text-xl md:text-2xl text-[#171717] dark:text-white leading-relaxed mb-8">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-[#E5E1D8] dark:border-[#3A3F4C]">
                    {t.avatarUrl && (
                      <div className="w-12 h-12 rounded-none border border-[#171717] dark:border-white overflow-hidden transform rotate-3 flex-shrink-0">
                        <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover grayscale" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-[#171717] dark:text-white uppercase tracking-wider text-sm">
                        {t.author}
                      </h4>
                      <p className="font-mono text-[10px] text-[#737373] dark:text-[#A0A5B5] uppercase">
                        {t.role} {t.company && `at ${t.company}`}
                      </p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
