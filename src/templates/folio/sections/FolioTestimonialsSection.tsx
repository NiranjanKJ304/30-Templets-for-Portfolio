import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FolioSheet } from '../components/FolioSheet';
import { FolioMeta } from '../components/FolioMeta';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface FolioTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  pageNum: string;
}

export const FolioTestimonialsSection: React.FC<FolioTestimonialsSectionProps> = ({ data, enabled = true, pageNum }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <FolioSheet pageNum={pageNum} title="REFERENCES" alternate offset="none">
        <div className="flex flex-col gap-16 md:gap-24">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="flex flex-col gap-12 pb-16 md:pb-24 border-b border-[#C9C5BA]/50 dark:border-[#444A45]/50 last:border-0 last:pb-0">
              
              <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.3] tracking-tight text-[#1D2020] dark:text-[#F0EEE6] max-w-4xl relative">
                <span className="text-[#C9C5BA] dark:text-[#444A45] font-serif pr-2 select-none">"</span>
                {t.quote}
                <span className="text-[#C9C5BA] dark:text-[#444A45] font-serif pl-2 select-none">"</span>
              </blockquote>

              <div className="flex items-center gap-6 pt-6 border-t border-[#C9C5BA]/30 dark:border-[#444A45]/30">
                {t.avatarUrl && (
                  <div className="w-16 h-16 shrink-0 border border-[#C9C5BA] dark:border-[#444A45] p-1 bg-[#FAF8F1] dark:bg-[#1D211F]">
                    <div className="w-full h-full overflow-hidden">
                      <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover grayscale opacity-90" />
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-xl text-[#1D2020] dark:text-[#F0EEE6]">
                    {t.author}
                  </span>
                  {(t.role || t.company) && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#70736F] dark:text-[#A5AAA3]">
                      {[t.role, t.company].filter(Boolean).join(' · ')}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </FolioSheet>
    </SectionWrapper>
  );
};
