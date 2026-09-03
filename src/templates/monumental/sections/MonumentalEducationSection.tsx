import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalSurface } from '../components/MonumentalSurface';
import { MonumentalDivider } from '../components/MonumentalDivider';

interface MonumentalEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonumentalEducationSection: React.FC<MonumentalEducationSectionProps> = ({ data, enabled = true }) => {
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
      <MonumentalSection title="ACADEMICS" index="05" align="left">
        <div className="flex flex-col gap-16 md:gap-32">
          {education.map((edu, idx) => (
            <MonumentalSurface key={edu.id} variant="structural" className="p-8 md:p-16 lg:p-32">
              <div className="flex flex-col lg:flex-row justify-between gap-16">
                <div className="flex flex-col gap-8 max-w-3xl">
                  <span className="font-mono text-sm md:text-base text-[#171918] dark:text-[#F0EEE6] uppercase tracking-widest">
                    {[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h4 className="font-heading font-black text-4xl md:text-6xl text-[#171918] dark:text-[#F0EEE6] uppercase break-words leading-[1.1]">
                      {edu.degree}
                    </h4>
                    <span className="font-body text-2xl text-[#171918] dark:text-[#F0EEE6] font-light">
                      {edu.institution}
                    </span>
                  </div>
                  
                  {edu.description && (
                    <p className="font-body text-lg md:text-xl text-[#686B66] dark:text-[#A5A7A1] leading-relaxed mt-4">
                      {edu.description}
                    </p>
                  )}
                </div>
                
                {(edu.fieldOfStudy || edu.location || edu.grade) && (
                  <div className="flex flex-col gap-8 shrink-0 lg:w-1/3 lg:text-right border-t-4 lg:border-t-0 lg:border-r-4 border-[#171918] dark:border-[#F0EEE6] pt-8 lg:pt-0 lg:pr-8">
                    {edu.fieldOfStudy && (
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">Field</span>
                        <span className="font-body text-xl text-[#171918] dark:text-[#F0EEE6]">{edu.fieldOfStudy}</span>
                      </div>
                    )}
                    {edu.location && (
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">Location</span>
                        <span className="font-body text-xl text-[#171918] dark:text-[#F0EEE6]">{edu.location}</span>
                      </div>
                    )}
                    {edu.grade && (
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">Grade</span>
                        <span className="font-body text-xl text-[#171918] dark:text-[#F0EEE6]">{edu.grade}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </MonumentalSurface>
          ))}
        </div>
        <div className="mt-16 md:mt-32">
          <MonumentalDivider thickness="thick" />
        </div>
      </MonumentalSection>
    </SectionWrapper>
  );
};
