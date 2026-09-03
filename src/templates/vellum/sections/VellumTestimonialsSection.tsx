import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface VellumTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const VellumTestimonialsSection: React.FC<VellumTestimonialsSectionProps> = ({ data, enabled = true }) => {
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
      <VellumSection title="Endorsements" number="09">
        <div className="flex flex-col gap-16 pt-4">
          {testimonials.map((t, idx) => (
            <VellumAnnotation 
              key={t.id}
              marker={`* ${t.author.split(' ')[0]}`} 
              color="dustRose" 
              position="left"
            >
              <div className="flex flex-col gap-6">
                <blockquote className="font-heading italic text-2xl md:text-3xl text-[#242522] dark:text-[#F0EDE3] leading-relaxed">
                  "{t.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  {t.avatarUrl && (
                    <div className="w-10 h-10 rounded-full overflow-hidden grayscale contrast-125 sepia-[0.3]">
                      <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="font-heading font-medium text-lg text-[#242522] dark:text-[#F0EDE3]">{t.author}</span>
                    {(t.role || t.company) && (
                      <span className="font-mono text-[10px] text-[#6D6D66] dark:text-[#AAA99F] uppercase tracking-widest">
                        {[t.role, t.company].filter(Boolean).join(', ')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </VellumAnnotation>
          ))}
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
