import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';
import { ChronicleDate } from '../components/ChronicleDate';

interface ChronicleEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChronicleEducationSection: React.FC<ChronicleEducationSectionProps> = ({ data, enabled = true }) => {
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
      <ChronicleBand label="Academic History">
        <div className="flex flex-col gap-16 md:gap-24">
          {education.map((edu, idx) => {
            const endYear = edu.endDate?.split(' ').pop();
            
            return (
              <div key={edu.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                
                <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-4">
                  <ChronicleDate 
                    date={endYear || edu.endDate || 'Era'} 
                    label="Completion"
                  />
                </div>

                <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
                      {edu.institution}
                    </span>
                    <h4 className="font-heading text-3xl md:text-4xl font-normal text-[#202321] dark:text-[#F0EEE6]">
                      {edu.degree}
                    </h4>
                  </div>
                  
                  {edu.description && (
                    <p className="font-body text-lg font-light leading-relaxed text-[#6F746F] dark:text-[#A6ABA5] max-w-3xl">
                      {edu.description}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                    {edu.fieldOfStudy && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6]">
                        Field: {edu.fieldOfStudy}
                      </span>
                    )}
                    {edu.grade && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6]">
                        Grade: {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </ChronicleBand>
    </SectionWrapper>
  );
};
