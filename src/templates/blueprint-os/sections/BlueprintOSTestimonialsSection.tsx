import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface BlueprintOSTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintOSTestimonialsSection: React.FC<BlueprintOSTestimonialsSectionProps> = ({ data, enabled = true }) => {
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
      <WorkspaceWindow title="ENDORSEMENTS_REGISTRY" id="testimonials" bodyClassName="bg-[#E9ECE8] dark:bg-[#111615]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col gap-6 bg-[#F8FAF7] dark:bg-[#181E1C] p-6 shadow-sm border border-[#CBD2CD] dark:border-[#3A4340]">
              <div className="flex gap-4 items-center">
                {t.avatarUrl ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#CBD2CD] dark:border-[#3A4340]">
                    <ImageWithFallback
                      src={t.avatarUrl}
                      alt={t.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#E9ECE8] dark:bg-[#111615] border border-[#CBD2CD] dark:border-[#3A4340] flex items-center justify-center font-heading font-bold text-sm text-[#1D2523] dark:text-[#EEF2EC] shrink-0 select-none">
                    {t.author.charAt(0)}
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm text-[#1D2523] dark:text-[#EEF2EC]">{t.author}</span>
                  {(t.role || t.company) && (
                    <span className="font-mono text-[10px] text-[#68716D] dark:text-[#A6ADA8]">
                      {[t.role, t.company].filter(Boolean).join(' @ ')}
                    </span>
                  )}
                </div>
              </div>
              <blockquote className="font-body text-sm text-[#68716D] dark:text-[#A6ADA8] leading-relaxed italic border-l-2 border-[#CBD2CD] dark:border-[#3A4340] pl-4">
                "{t.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
