import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface DuplexTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const DuplexTestimonialsSection: React.FC<DuplexTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="Endorsements" />}
      containerClassName="px-6 sm:px-12"
      className="py-16 md:py-24"
    >
      <div className="flex flex-col gap-20 lg:gap-32">
        {testimonials.map((t, idx) => (
          <div key={t.id} className="flex flex-col gap-8 max-w-4xl mx-auto text-center items-center">
            
            <div className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-[#181818] dark:text-[#F1EEE7]">
              "{t.quote}"
            </div>
            
            <div className="flex flex-col items-center gap-4 mt-4">
              {t.avatarUrl && (
                <div className="w-16 h-16 rounded-full overflow-hidden border border-[#B7B0A5]/40 dark:border-[#414542]/40">
                  <ImageWithFallback
                    src={t.avatarUrl}
                    alt={t.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="flex flex-col items-center gap-1">
                <div className="font-mono text-sm font-bold uppercase tracking-wider text-[#181818] dark:text-[#F1EEE7]">
                  {t.author}
                </div>
                {(t.role || t.company) && (
                  <div className="font-mono text-xs uppercase tracking-widest text-[#5F625F] dark:text-[#A9AAA4]">
                    {t.role}{t.role && t.company && ' • '}{t.company}
                  </div>
                )}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
