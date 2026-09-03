import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';

interface BlueprintOSEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintOSEducationSection: React.FC<BlueprintOSEducationSectionProps> = ({ data, enabled = true }) => {
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
      <WorkspaceWindow title="ACADEMIC_HISTORY.txt" id="education">
        <div className="grid grid-cols-1 gap-8">
          {education.map((edu) => (
            <div key={edu.id} className="flex flex-col gap-3 p-6 bg-[#E9ECE8] dark:bg-[#111615] border border-[#CBD2CD] dark:border-[#3A4340]">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex flex-col">
                  <h4 className="font-heading font-bold text-lg text-[#1D2523] dark:text-[#EEF2EC]">
                    {edu.degree}
                  </h4>
                  <span className="font-body text-sm text-[#1D2523] dark:text-[#EEF2EC] font-medium mt-1">
                    {edu.institution}
                  </span>
                </div>
                <div className="flex flex-col md:items-end font-mono text-[10px] uppercase text-[#68716D] dark:text-[#A6ADA8]">
                  <span>{[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}</span>
                  <span className="mt-1">{[edu.fieldOfStudy, edu.location].filter(Boolean).join(' | ')}</span>
                </div>
              </div>
              
              {edu.description && (
                <p className="font-body text-sm text-[#68716D] dark:text-[#A6ADA8] leading-relaxed max-w-2xl mt-2">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
