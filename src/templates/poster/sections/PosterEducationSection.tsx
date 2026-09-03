import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';

interface PosterEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
}

export const PosterEducationSection: React.FC<PosterEducationSectionProps> = ({ data, enabled = true, index }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="lavender" />
          <PosterLabel className="text-[#A79AB8] dark:text-[#B7A9C7] text-right mt-4 md:mt-12">ACADEMIC BACKGROUND</PosterLabel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
          {education.map((edu, idx) => (
            <div key={edu.id} className="flex flex-col gap-6">
              <div className="flex flex-col">
                <PosterLabel className="text-[#3157D5] dark:text-[#6E8CFF] mb-2">
                  {[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}
                </PosterLabel>
                <h4 className="font-heading font-black text-3xl md:text-5xl text-[#17191B] dark:text-[#F5F0E5] uppercase tracking-tighter leading-tight hyphens-auto">
                  {edu.institution}
                </h4>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="font-heading font-bold text-2xl text-[#17191B] dark:text-[#F5F0E5]">{edu.degree}</span>
                <span className="font-mono text-sm text-[#65635D] dark:text-[#B4B0A7]">
                  {[edu.fieldOfStudy, edu.location].filter(Boolean).join(' | ')}
                </span>
              </div>
              
              {edu.description && (
                <p className="font-body text-base text-[#65635D] dark:text-[#B4B0A7] leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </PosterBlock>
    </SectionWrapper>
  );
};
