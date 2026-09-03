import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface MemphisTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MemphisTestimonialsSection: React.FC<MemphisTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MemphisSectionHeader title="Testimonials" number="09" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={testimonial.id}
            className="bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white p-8 relative mt-6"
            style={{ boxShadow: '8px 8px 0 0 #202124' }}
          >
            {/* Playful quote mark */}
            <div className="absolute -top-6 -left-4 w-12 h-12 bg-[#FACC15] border-4 border-neutral-900 dark:border-white flex items-center justify-center font-heading font-black text-4xl text-neutral-900 transform -rotate-12 shadow-[2px_2px_0_0_#202124]">
              "
            </div>

            <blockquote className="font-heading font-bold text-xl md:text-2xl leading-relaxed text-neutral-900 dark:text-white mb-8 relative z-10 pt-4">
              {testimonial.quote}
            </blockquote>
            
            <div className="flex items-center gap-4 mt-auto border-t-4 border-neutral-900 dark:border-white pt-6">
              {testimonial.avatarUrl ? (
                <div className="w-16 h-16 rounded-full border-4 border-neutral-900 dark:border-white overflow-hidden flex-shrink-0">
                  <ImageWithFallback src={testimonial.avatarUrl} alt={testimonial.author} className="w-full h-full object-cover grayscale" />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full border-4 border-neutral-900 dark:border-white bg-[#EC4899] flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-black text-2xl text-white">{testimonial.author.charAt(0)}</span>
                </div>
              )}
              
              <div>
                <p className="font-heading font-black text-lg uppercase text-neutral-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="font-body font-bold text-neutral-600 dark:text-neutral-400">
                  {testimonial.role} {testimonial.company ? `at ${testimonial.company}` : ''}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
