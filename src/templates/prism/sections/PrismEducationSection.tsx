import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismFacet } from '../components/PrismFacet';
import { PrismDivider } from '../components/PrismDivider';

interface PrismEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PrismEducationSection: React.FC<PrismEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <PrismSection title="Education" colorFacet="gold">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {education.map((edu, idx) => (
            <PrismFacet key={edu.id} cut={idx % 2 === 0 ? 'top-left' : 'bottom-right'} colorHint="neutral" className="bg-white dark:bg-[#1A1E1F] shadow-sm">
              <div className="flex flex-col gap-8 h-full">
                <div className="flex flex-col gap-2 border-b-2 border-[rgba(23,26,27,0.1)] dark:border-[rgba(241,240,234,0.1)] pb-6">
                  <span className="font-mono text-xs text-[#D2B45C] dark:text-[#D9C276] uppercase tracking-widest font-bold">
                    {[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}
                  </span>
                  <h4 className="font-heading font-extrabold text-2xl md:text-3xl text-[#171A1B] dark:text-[#F1F0EA] uppercase break-words leading-[1.1]">
                    {edu.degree}
                  </h4>
                  <span className="font-body text-lg text-[#6B706F] dark:text-[#A8ADA9] font-light">
                    {edu.institution}
                  </span>
                </div>
                
                {edu.description && (
                  <p className="font-body text-base text-[#6B706F] dark:text-[#A8ADA9] leading-relaxed flex-1">
                    {edu.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-auto pt-6">
                  {edu.fieldOfStudy && (
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-[#D2B45C] dark:text-[#D9C276] uppercase tracking-widest">Field</span>
                      <span className="font-mono text-xs text-[#171A1B] dark:text-[#F1F0EA] uppercase">{edu.fieldOfStudy}</span>
                    </div>
                  )}
                  {edu.grade && (
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-[#D2B45C] dark:text-[#D9C276] uppercase tracking-widest">Grade</span>
                      <span className="font-mono text-xs text-[#171A1B] dark:text-[#F1F0EA] uppercase">{edu.grade}</span>
                    </div>
                  )}
                  {edu.location && (
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-[#D2B45C] dark:text-[#D9C276] uppercase tracking-widest">Location</span>
                      <span className="font-mono text-xs text-[#171A1B] dark:text-[#F1F0EA] uppercase">{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </PrismFacet>
          ))}
        </div>
        <div className="mt-24 md:mt-40">
          <PrismDivider direction="left-to-right" />
        </div>
      </PrismSection>
    </SectionWrapper>
  );
};
