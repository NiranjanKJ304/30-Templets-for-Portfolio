import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface OrbitalTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrbitalTestimonialsSection: React.FC<OrbitalTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="Endorsements" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={t.id || idx} className="bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/50 dark:border-[#40504D]/50 rounded-[2rem] p-10 md:p-12 relative flex flex-col items-center text-center">
             
             <div className="font-heading text-6xl text-[#B9C9C6]/30 dark:text-[#40504D]/30 absolute top-8 left-8 select-none pointer-events-none">
               "
             </div>

             <p className="font-body text-lg md:text-xl leading-relaxed text-[#172326] dark:text-[#F0F4F1] whitespace-pre-wrap mb-10 relative z-10">
               {t.quote}
             </p>

             <div className="mt-auto flex flex-col items-center">
               {t.avatarUrl && (
                 <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#EEF2F1] dark:border-[#101819] shadow-sm mb-4">
                   <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover" />
                 </div>
               )}
               <h4 className="font-heading font-bold text-lg text-[#172326] dark:text-[#F0F4F1] mb-1">
                 {t.author}
               </h4>
               <p className="font-mono text-[10px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest">
                 {t.role} {t.company && `at ${t.company}`}
               </p>
             </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
