import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';

interface ContourEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ContourEducationSection: React.FC<ContourEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <ContourField label="Foundational Terrain" contourVariant="subtle">
        <div className="flex flex-col gap-16 md:gap-24">
          {education.map((edu, idx) => (
            <div key={edu.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 md:pb-24 border-b border-[#C7C9B9]/30 dark:border-[#46504A]/30 last:border-0 last:pb-0">
              
              <div className="lg:col-span-4 flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6]">
                  {edu.institution}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C7C9B9] dark:text-[#46504A]">
                  {[edu.startDate, edu.current ? 'Present' : edu.endDate].filter(Boolean).join(' to ')}
                </span>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-4">
                <h4 className="font-heading text-3xl md:text-4xl font-normal text-[#202523] dark:text-[#EEF0E8]">
                  {edu.degree}
                </h4>
                
                {edu.description && (
                  <p className="font-body text-lg font-light leading-relaxed text-[#6E746E] dark:text-[#A8AEA6] max-w-3xl">
                    {edu.description}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 pt-4 border-t border-[#C7C9B9]/20 dark:border-[#46504A]/20">
                  {edu.fieldOfStudy && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#202523] dark:text-[#EEF0E8] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#879A82] dark:bg-[#78947D]"></span>
                      {edu.fieldOfStudy}
                    </span>
                  )}
                  {edu.grade && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#202523] dark:text-[#EEF0E8] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A45F] dark:bg-[#D0B86D]"></span>
                      Grade: {edu.grade}
                    </span>
                  )}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
