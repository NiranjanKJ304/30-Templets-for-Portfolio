import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismDivider } from '../components/PrismDivider';

interface PrismExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PrismExperienceSection: React.FC<PrismExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <PrismSection title="Experience" align="right" colorFacet="violet">
        <div className="flex flex-col gap-12 w-full max-w-5xl">
          {experience.map((job, idx) => (
            <div key={job.id} className="relative pl-8 md:pl-12 py-8 group">
              {/* Vertical timeline edge / facet marker */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[rgba(23,26,27,0.1)] dark:bg-[rgba(241,240,234,0.1)]">
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FCFBF7] dark:bg-[#1A1E1F] border-2 border-[#8069AA] dark:border-[#A28AC7] rotate-45 group-hover:bg-[#8069AA] dark:group-hover:bg-[#A28AC7] transition-colors" />
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-baseline">
                <div className="flex flex-col gap-2 md:w-1/3 shrink-0">
                  <span className="font-mono text-xs md:text-sm text-[#8069AA] dark:text-[#A28AC7] uppercase tracking-widest font-bold">
                    {job.startDate} — {job.current ? 'PRESENT' : job.endDate}
                  </span>
                  <span className="font-mono text-[10px] text-[#6B706F] dark:text-[#A8ADA9] uppercase tracking-widest">
                    {[job.location, job.employmentType].filter(Boolean).join(' • ')}
                  </span>
                </div>
                
                <div className="flex flex-col gap-6 md:w-2/3">
                  <div className="flex flex-col">
                    <h4 className="font-heading font-extrabold text-2xl md:text-4xl text-[#171A1B] dark:text-[#F1F0EA] uppercase break-words leading-[1.1]">
                      {job.role}
                    </h4>
                    <span className="font-body text-xl text-[#171A1B] dark:text-[#F1F0EA] mt-2 font-light">
                      {job.company}
                    </span>
                  </div>
                  
                  {job.description && (
                    <p className="font-body text-lg text-[#6B706F] dark:text-[#A8ADA9] leading-relaxed">
                      {job.description}
                    </p>
                  )}
                  
                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="flex flex-col gap-3 mt-2">
                      {job.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-4 font-body text-base text-[#171A1B] dark:text-[#F1F0EA]">
                          <span className="text-[#8069AA] dark:text-[#A28AC7] font-mono text-[10px] mt-1.5 shrink-0 rotate-45 border border-current w-2 h-2" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 md:mt-40">
          <PrismDivider direction="right-to-left" />
        </div>
      </PrismSection>
    </SectionWrapper>
  );
};
