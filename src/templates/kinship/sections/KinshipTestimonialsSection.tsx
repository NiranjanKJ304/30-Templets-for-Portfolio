import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface KinshipTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KinshipTestimonialsSection: React.FC<KinshipTestimonialsSectionProps> = ({ data, enabled = true }) => {
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
      <KinshipSection title="Voices" color="lavender">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col gap-8 relative group bg-[#FCFBF7] dark:bg-[#1D211F] p-8 md:p-10 rounded-2xl ring-1 ring-[rgba(168,178,172,0.2)] dark:ring-[rgba(89,98,93,0.2)]">
              <KinshipAnchor color="lavender" className="absolute top-10 left-0 -translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity hidden md:block" />
              
              <blockquote className="font-body text-xl md:text-2xl text-[#202624] dark:text-[#EEF0EA] leading-relaxed font-light">
                "{t.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto pt-4">
                <KinshipConnector className="w-8 opacity-30" />
                <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden bg-[rgba(32,38,36,0.05)] dark:bg-[rgba(238,240,234,0.05)]">
                  {t.avatarUrl ? (
                    <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-heading font-medium text-lg text-[#737A75] dark:text-[#A7ADA7] select-none">
                      {t.author.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-heading font-medium text-lg text-[#202624] dark:text-[#EEF0EA]">{t.author}</span>
                  {(t.role || t.company) && (
                    <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest">
                      {[t.role, t.company].filter(Boolean).join(', ')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
