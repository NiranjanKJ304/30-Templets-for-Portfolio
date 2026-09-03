import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface TesseraTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TesseraTestimonialsSection: React.FC<TesseraTestimonialsSectionProps> = ({ data, enabled = true }) => {
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
      <TesseraSection title="Testimonials" accent="primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[#C8C4B9] dark:border-[#4A4D48] relative w-full">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block z-0" />
          
          {testimonials.map((t, idx) => (
            <TesseraModule 
              key={t.id}
              elevation="flat"
              tab={idx % 2 === 0 ? 'top' : 'none'}
              className="flex flex-col gap-8 p-8 md:p-12 border-b border-[#C8C4B9] dark:border-[#4A4D48] md:odd:border-r"
            >
              <blockquote className="font-body text-xl md:text-2xl text-[#242522] dark:text-[#F0EEE5] leading-relaxed font-light">
                "{t.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-[#C8C4B9] dark:border-[#4A4D48]">
                <div className="w-12 h-12 shrink-0 overflow-hidden bg-[#F2EFE7] dark:bg-[#151716] ring-1 ring-[#C8C4B9] dark:ring-[#4A4D48]">
                  {t.avatarUrl ? (
                    <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover grayscale opacity-80" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-heading font-medium text-lg text-[#73756E] dark:text-[#A5A7A0] select-none">
                      {t.author.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-heading font-medium text-lg text-[#242522] dark:text-[#F0EEE5]">{t.author}</span>
                  {(t.role || t.company) && (
                    <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest">
                      {[t.role, t.company].filter(Boolean).join(', ')}
                    </span>
                  )}
                </div>
              </div>
            </TesseraModule>
          ))}
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
