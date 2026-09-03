import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface KineticTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KineticTestimonialsSection: React.FC<KineticTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-0"
      className="py-16 md:py-32 bg-[#E8E3D8] dark:bg-[#1C2020]"
    >
      <div className="px-6 sm:px-12 max-w-[1600px] mx-auto">
        <KineticSectionHeader title="Endorsements" />
      </div>

      <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-6 sm:px-12 pb-12 w-full no-scrollbar">
        {testimonials.map((t, idx) => (
          <div key={t.id} className="min-w-[85vw] sm:min-w-[600px] lg:min-w-[800px] snap-center flex flex-col gap-8 bg-[#F3F0E8] dark:bg-[#111313] p-10 md:p-16 border-4 border-[#171717] dark:border-[#F3F0E8] hover:border-[#E84F3D] dark:hover:border-[#FF715D] transition-colors">
            
            <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tighter text-[#171717] dark:text-[#F3F0E8]">
              "{t.quote}"
            </div>
            
            <div className="flex items-center gap-6 mt-4">
              {t.avatarUrl && (
                <div className="w-20 h-20 shrink-0 overflow-hidden border-2 border-[#171717] dark:border-[#F3F0E8]">
                  <ImageWithFallback
                    src={t.avatarUrl}
                    alt={t.author}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              )}
              
              <div className="flex flex-col gap-1">
                <div className="font-heading font-black text-2xl uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8]">
                  {t.author}
                </div>
                {(t.role || t.company) && (
                  <div className="font-mono text-sm uppercase tracking-widest text-[#285B63] dark:text-[#6FA9B0] font-bold">
                    {t.role}{t.role && t.company && ' // '}{t.company}
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
