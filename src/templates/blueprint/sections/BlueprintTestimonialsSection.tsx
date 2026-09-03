import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface BlueprintTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintTestimonialsSection: React.FC<BlueprintTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      customHeader={<BlueprintSectionHeader title="Peer Reviews" number="09" description="External Verification and Endorsements" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div key={t.id || idx} className="bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] relative">
             
             {/* Review ID */}
             <div className="absolute top-0 right-0 bg-[#2E6FBB]/10 dark:bg-[#5DA9E9]/10 text-[#2E6FBB] dark:text-[#5DA9E9] px-2 py-1 font-mono text-[10px] uppercase tracking-widest border-b-2 border-l-2 border-[#2E6FBB] dark:border-[#5DA9E9]">
               REV-{String(idx + 1).padStart(3, '0')}
             </div>

             <div className="p-8">
                <p className="font-mono text-sm leading-relaxed text-[#173A5E] dark:text-[#EAF2F7] whitespace-pre-wrap mb-8">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-dashed border-[#2E6FBB]/40 dark:border-[#5DA9E9]/40">
                  {t.avatarUrl && (
                    <div className="w-12 h-12 border-2 border-[#173A5E] dark:border-[#5DA9E9] overflow-hidden flex-shrink-0">
                      <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover filter grayscale" />
                    </div>
                  )}
                  <div>
                    <h4 className="font-heading font-bold text-[#173A5E] dark:text-[#EAF2F7] uppercase tracking-wider text-sm">
                      {t.author}
                    </h4>
                    <p className="font-mono text-[10px] text-[#73808C] uppercase tracking-widest mt-1">
                      {t.role} {t.company && `// ${t.company}`}
                    </p>
                  </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
