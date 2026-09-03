import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface ChromaTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChromaTestimonialsSection: React.FC<ChromaTestimonialsSectionProps> = ({ data, enabled = true }) => {
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
      <ChromaField color="clay">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="font-mono text-sm uppercase tracking-widest opacity-60">Endorsements</h2>
          </div>

          <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-24">
            {testimonials.map((t, idx) => (
              <div key={t.id} className="flex flex-col gap-8 max-w-4xl">
                <blockquote className="font-heading text-3xl md:text-5xl font-light leading-[1.2] tracking-tight">
                  "{t.quote}"
                </blockquote>
                
                <div className="flex items-center gap-6">
                  {t.avatarUrl && (
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 grayscale opacity-80">
                      <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="font-body text-lg font-medium">{t.author}</span>
                    {(t.role || t.company) && (
                      <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                        {[t.role, t.company].filter(Boolean).join(', ')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </ChromaField>
    </SectionWrapper>
  );
};
