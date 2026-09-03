import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface PosterTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
}

export const PosterTestimonialsSection: React.FC<PosterTestimonialsSectionProps> = ({ data, enabled = true, index }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="lavender" />
          <PosterLabel className="text-[#A79AB8] dark:text-[#B7A9C7] text-right mt-4 md:mt-12">STATEMENTS</PosterLabel>
        </div>

        <div className="flex flex-col gap-24 mt-8">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="shrink-0">
                {t.avatarUrl ? (
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={t.avatarUrl}
                      alt={t.author}
                      className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-luminosity"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#A79AB8] dark:bg-[#B7A9C7] flex items-center justify-center font-heading font-black text-[#F4EFE4] dark:text-[#151617] text-4xl opacity-50 select-none">
                    {t.author.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-8">
                <blockquote className="font-heading font-bold text-2xl md:text-4xl text-[#17191B] dark:text-[#F5F0E5] leading-snug">
                  “{t.quote}”
                </blockquote>
                <div className="flex flex-col">
                  <span className="font-body font-bold text-lg text-[#17191B] dark:text-[#F5F0E5] uppercase">{t.author}</span>
                  {(t.role || t.company) && (
                    <span className="font-mono text-sm text-[#65635D] dark:text-[#B4B0A7]">
                      {[t.role, t.company].filter(Boolean).join(', ')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </PosterBlock>
    </SectionWrapper>
  );
};
