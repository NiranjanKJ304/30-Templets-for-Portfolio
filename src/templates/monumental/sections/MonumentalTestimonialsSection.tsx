import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalSurface } from '../components/MonumentalSurface';
import { MonumentalDivider } from '../components/MonumentalDivider';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface MonumentalTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonumentalTestimonialsSection: React.FC<MonumentalTestimonialsSectionProps> = ({ data, enabled = true }) => {
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
      <MonumentalSection title="ENDORSEMENTS" index="09" align="center">
        <div className="flex flex-col gap-16 md:gap-32">
          {testimonials.map((t, idx) => (
            <MonumentalSurface 
              key={t.id} 
              variant="structural" 
              className="p-8 md:p-16 lg:p-32 flex flex-col lg:flex-row gap-16 lg:gap-32 items-center lg:items-start"
            >
              {t.avatarUrl ? (
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 border-4 border-[#171918] dark:border-[#F0EEE6]">
                  <ImageWithFallback
                    src={t.avatarUrl}
                    alt={t.author}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-[#171918] dark:bg-[#F0EEE6] flex items-center justify-center font-heading font-black text-6xl text-[#ECE9E1] dark:text-[#121514] select-none">
                  {t.author.charAt(0)}
                </div>
              )}
              
              <div className="flex flex-col gap-12 w-full text-center lg:text-left">
                <blockquote className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-[#171918] dark:text-[#F0EEE6] leading-[1.2] tracking-tighter uppercase break-words">
                  "{t.quote}"
                </blockquote>
                
                <div className="flex flex-col gap-2">
                  <span className="font-heading font-bold text-2xl text-[#171918] dark:text-[#F0EEE6] uppercase tracking-widest">{t.author}</span>
                  {(t.role || t.company) && (
                    <span className="font-mono text-sm text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                      {[t.role, t.company].filter(Boolean).join(', ')}
                    </span>
                  )}
                </div>
              </div>
            </MonumentalSurface>
          ))}
        </div>
        <div className="mt-16 md:mt-32">
          <MonumentalDivider thickness="thick" />
        </div>
      </MonumentalSection>
    </SectionWrapper>
  );
};
