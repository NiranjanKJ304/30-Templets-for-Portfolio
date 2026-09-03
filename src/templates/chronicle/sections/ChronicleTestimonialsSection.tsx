import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface ChronicleTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChronicleTestimonialsSection: React.FC<ChronicleTestimonialsSectionProps> = ({ data, enabled = true }) => {
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
      <ChronicleBand label="References">
        <div className="flex flex-col gap-16 md:gap-24">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 md:pb-24 border-b border-[#C9C5BB]/30 dark:border-[#474B47]/30 last:border-0 last:pb-0">
              
              <div className="lg:col-span-12 flex flex-col gap-10">
                <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-tight text-[#202321] dark:text-[#F0EEE6] max-w-5xl">
                  "{t.quote}"
                </blockquote>
                
                <div className="flex items-center gap-6">
                  {t.avatarUrl && (
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-[#C9C5BB] dark:border-[#474B47]">
                      <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover grayscale opacity-90" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="font-heading text-xl text-[#202321] dark:text-[#F0EEE6]">
                      {t.author}
                    </span>
                    {(t.role || t.company) && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
                        {[t.role, t.company].filter(Boolean).join(' · ')}
                      </span>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </ChronicleBand>
    </SectionWrapper>
  );
};
