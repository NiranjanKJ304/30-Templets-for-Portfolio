import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';
import { FlowSurface } from '../components/FlowSurface';
import { FlowDivider } from '../components/FlowDivider';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface OrganicFlowTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrganicFlowTestimonialsSection: React.FC<OrganicFlowTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative z-0"
      containerClassName="px-0 py-0"
    >
      <FlowDivider direction="down" color="canvas" className="absolute -top-1 left-0 z-0" />
      <div className="bg-[#FBFAF5] dark:bg-[#1E2321] relative z-10 pt-24 md:pt-48 pb-24 md:pb-48">
        <FlowSection title="KIND WORDS" align="left">
          <div className="flex flex-col gap-12 md:gap-24 mt-12 md:mt-24">
            {testimonials.map((t, idx) => (
              <FlowSurface 
                key={t.id} 
                variant="secondary" 
                className="p-8 md:p-16 lg:p-24 shadow-sm"
                curveTop={idx % 2 === 0 ? 'left' : 'right'}
                curveBottom={idx % 2 === 0 ? 'right' : 'left'}
              >
                <div className="flex flex-col gap-12 items-center text-center max-w-4xl mx-auto">
                  <blockquote className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl text-[#202321] dark:text-[#F1EFE7] leading-snug">
                    "{t.quote}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center gap-4">
                    {t.avatarUrl ? (
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm">
                        <ImageWithFallback
                          src={t.avatarUrl}
                          alt={t.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#E8DED0] dark:bg-[#302A26] flex items-center justify-center font-heading font-bold text-2xl text-[#819B8A] dark:text-[#88A995] select-none">
                        {t.author.charAt(0)}
                      </div>
                    )}
                    <div className="flex flex-col items-center">
                      <span className="font-heading font-bold text-lg text-[#202321] dark:text-[#F1EFE7]">{t.author}</span>
                      {(t.role || t.company) && (
                        <span className="font-mono text-xs text-[#6B706A] dark:text-[#A8ACA5] mt-1">
                          {[t.role, t.company].filter(Boolean).join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </FlowSurface>
            ))}
          </div>
        </FlowSection>
      </div>
      <FlowDivider direction="down" color="primary" className="absolute bottom-0 left-0 translate-y-full z-10" />
    </SectionWrapper>
  );
};
