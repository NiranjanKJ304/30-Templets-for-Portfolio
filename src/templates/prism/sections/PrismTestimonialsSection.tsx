import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismFacet } from '../components/PrismFacet';
import { PrismDivider } from '../components/PrismDivider';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface PrismTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PrismTestimonialsSection: React.FC<PrismTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <PrismSection title="Voices" colorFacet="cyan">
        <div className="flex flex-col gap-12 md:gap-24">
          {testimonials.map((t, idx) => (
            <PrismFacet 
              key={t.id} 
              cut={idx % 2 === 0 ? 'top-right' : 'bottom-left'} 
              colorHint="neutral" 
              className="bg-[#FCFBF7] dark:bg-[#1A1E1F] shadow-sm flex flex-col md:flex-row gap-8 md:gap-16 items-start"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-[rgba(23,26,27,0.05)] dark:bg-[rgba(241,240,234,0.05)] relative">
                {t.avatarUrl ? (
                  <div className="w-full h-full overflow-hidden" style={{ clipPath: 'polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}>
                    <ImageWithFallback
                      src={t.avatarUrl}
                      alt={t.author}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-heading font-extrabold text-4xl text-[#171A1B] dark:text-[#F1F0EA] select-none" style={{ clipPath: 'polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}>
                    {t.author.charAt(0)}
                  </div>
                )}
                
                <div className="absolute -top-3 -left-3 w-6 h-6 text-[#6C9CA3] dark:text-[#82B0B5]" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
              </div>
              
              <div className="flex flex-col gap-8 w-full flex-1">
                <blockquote className="font-body text-xl md:text-3xl text-[#171A1B] dark:text-[#F1F0EA] leading-relaxed font-light">
                  {t.quote}
                </blockquote>
                
                <div className="flex flex-col gap-1 border-t-2 border-[rgba(23,26,27,0.1)] dark:border-[rgba(241,240,234,0.1)] pt-4">
                  <span className="font-heading font-extrabold text-xl text-[#171A1B] dark:text-[#F1F0EA] uppercase tracking-widest">{t.author}</span>
                  {(t.role || t.company) && (
                    <span className="font-mono text-[10px] md:text-xs text-[#6C9CA3] dark:text-[#82B0B5] uppercase tracking-widest">
                      {[t.role, t.company].filter(Boolean).join(', ')}
                    </span>
                  )}
                </div>
              </div>
            </PrismFacet>
          ))}
        </div>
        <div className="mt-24 md:mt-40">
          <PrismDivider direction="left-to-right" />
        </div>
      </PrismSection>
    </SectionWrapper>
  );
};
