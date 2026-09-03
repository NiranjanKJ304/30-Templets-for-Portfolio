import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface ContourTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ContourTestimonialsSection: React.FC<ContourTestimonialsSectionProps> = ({ data, enabled = true }) => {
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
      <ContourField label="Perspectives" contourVariant="subtle">
        <div className="flex flex-col gap-16 md:gap-24">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pb-16 md:pb-24 border-b border-[#C7C9B9]/30 dark:border-[#46504A]/30 last:border-0 last:pb-0">
              
              <div className="lg:col-span-8 flex flex-col gap-8">
                <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-tight text-[#202523] dark:text-[#EEF0E8] max-w-4xl relative">
                  <span className="absolute -left-6 md:-left-10 -top-4 text-5xl md:text-6xl text-[#C7C9B9]/50 dark:text-[#46504A]/50 font-serif leading-none select-none">"</span>
                  {t.quote}
                  <span className="absolute ml-2 -bottom-6 text-5xl md:text-6xl text-[#C7C9B9]/50 dark:text-[#46504A]/50 font-serif leading-none select-none">"</span>
                </blockquote>
              </div>

              <div className="lg:col-span-4 flex items-center lg:justify-end gap-6">
                {t.avatarUrl && (
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-[#C7C9B9] dark:border-[#46504A]">
                    <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover grayscale opacity-90" />
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-xl text-[#202523] dark:text-[#EEF0E8]">
                    {t.author}
                  </span>
                  {(t.role || t.company) && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6]">
                      {[t.role, t.company].filter(Boolean).join(' · ')}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
