import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface ArchiveTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
}

export const ArchiveTestimonialsSection: React.FC<ArchiveTestimonialsSectionProps> = ({ data, enabled = true, index }) => {
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
      <ArchiveEntry index={index} title="Testimonials" className="mt-8">
        <div className="flex flex-col gap-12 mt-8">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start pb-12 border-b border-[#C8C5BA] dark:border-[#464943] last:border-0 last:pb-0">
              <div className="w-16 h-16 md:w-24 md:h-24 shrink-0 bg-[#FAF8F2] dark:bg-[#1D201E] border border-[#C8C5BA] dark:border-[#464943]">
                {t.avatarUrl ? (
                  <ImageWithFallback
                    src={t.avatarUrl}
                    alt={t.author}
                    className="w-full h-full object-cover grayscale"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-heading font-black text-2xl text-[#C8C5BA] dark:text-[#464943]">
                    {t.author.charAt(0)}
                  </div>
                )}
              </div>
              
              <div className="flex-1 flex flex-col gap-6">
                <blockquote className="font-heading font-bold text-2xl lg:text-3xl tracking-tight text-[#20211F] dark:text-[#F1EEE5] leading-[1.3]">
                  "{t.quote}"
                </blockquote>
                
                <div className="flex flex-col gap-1 border-l-2 border-[#9D4937] dark:border-[#D4755D] pl-4 mt-2">
                  <span className="font-heading font-bold text-lg uppercase tracking-tighter text-[#20211F] dark:text-[#F1EEE5]">
                    {t.author}
                  </span>
                  {(t.role || t.company) && (
                    <span className="font-mono text-xs uppercase tracking-widest text-[#686861] dark:text-[#AAA9A0] font-bold">
                      {t.role}{t.role && t.company && ' · '}{t.company}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
