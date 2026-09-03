import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface MosaicTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MosaicTestimonialsSection: React.FC<MosaicTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="Endorsements" />
        </div>
        
        {testimonials.map((t, idx) => (
          <MosaicTile 
            key={t.id} 
            span={testimonials.length === 1 ? "full" : "half"} 
            padding="lg" 
            surface={idx % 2 === 0 ? "primary" : "canvas"}
            className="flex flex-col justify-between gap-12"
          >
            <div className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl leading-[1.2] tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7]">
              "{t.quote}"
            </div>
            
            <div className="flex items-center gap-4 mt-auto">
              {t.avatarUrl && (
                <div className="w-16 h-16 shrink-0 border border-[#CBC5BB] dark:border-[#444744]">
                  <ImageWithFallback
                    src={t.avatarUrl}
                    alt={t.author}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              )}
              
              <div className="flex flex-col gap-1">
                <div className="font-heading font-bold text-xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7]">
                  {t.author}
                </div>
                {(t.role || t.company) && (
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#65645F] dark:text-[#B3B1AA] font-bold">
                    {t.role}{t.role && t.company && ' // '}{t.company}
                  </div>
                )}
              </div>
            </div>
          </MosaicTile>
        ))}
      </div>
    </SectionWrapper>
  );
};
