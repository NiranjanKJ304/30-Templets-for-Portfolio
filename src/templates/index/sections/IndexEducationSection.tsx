import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';

interface IndexEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const IndexEducationSection: React.FC<IndexEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col">
        <IndexRow
          isHeader
          index="ID"
          title="EDUCATION DIRECTORY"
          metadata="DEGREE / TIMELINE"
          description="DETAILS"
        />
        
        <div className="flex flex-col">
          {education.map((edu, idx) => {
            const index = (idx + 1).toString().padStart(3, '0');
            
            return (
              <IndexRow
                key={edu.id}
                index={index}
                title={
                  <div className="flex flex-col gap-1">
                    <span>{edu.institution}</span>
                    {edu.location && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C]">
                        {edu.location}
                      </span>
                    )}
                  </div>
                }
                metadata={
                  <div className="flex flex-col gap-1">
                    <span>{edu.degree}</span>
                    <span className="text-[#365F58] dark:text-[#80A99E]">
                      {[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}
                    </span>
                  </div>
                }
                description={
                  <div className="flex flex-col gap-4">
                    {edu.fieldOfStudy && (
                      <div className="font-heading font-bold text-sm uppercase tracking-tight text-[#181A19] dark:text-[#F2F1EA]">
                        {edu.fieldOfStudy}
                      </div>
                    )}
                    {edu.description && (
                      <p className="font-body text-sm text-[#696C67] dark:text-[#A8ABA4] leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                    {edu.grade && (
                      <div className="font-mono text-[10px] uppercase tracking-widest bg-[#F6F5F1] dark:bg-[#1A1E1C] px-2 py-1 border border-[#D5D6D0] dark:border-[#404440] text-[#696C67] dark:text-[#A8ABA4] self-start">
                        GRADE: {edu.grade}
                      </div>
                    )}
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
