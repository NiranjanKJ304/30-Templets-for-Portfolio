import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface MonoformTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonoformTestimonialsSection: React.FC<MonoformTestimonialsSectionProps> = ({ data, enabled = true }) => {
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
      <MonoformSurface depth="inset" borderBottom>
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                09. References
              </h2>
            </div>

            <div className="lg:col-span-9 flex flex-col gap-20">
              <MonoformRule variant="subtle" />
              {testimonials.map((t, idx) => (
                <div key={t.id} className="flex flex-col gap-10">
                  <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-light leading-[1.2] tracking-tight text-[#1D1F1E] dark:text-[#F0EEE7]">
                    "{t.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-6">
                    {t.avatarUrl && (
                      <div className="w-12 h-12 rounded-sm overflow-hidden shrink-0 grayscale opacity-80">
                        <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex flex-col gap-1">
                      <span className="font-body text-base font-light text-[#1D1F1E] dark:text-[#F0EEE7]">
                        {t.author}
                      </span>
                      {(t.role || t.company) && (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                          {[t.role, t.company].filter(Boolean).join(' · ')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </MonoformSurface>
    </SectionWrapper>
  );
};
