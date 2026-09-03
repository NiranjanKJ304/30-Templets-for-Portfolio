import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';
import { TerminalRow } from '../components/TerminalRow';

interface TerminalEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TerminalEducationSection: React.FC<TerminalEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="cat /var/log/education.log" isSectionHeader />
        
        <div className="flex flex-col gap-8 pl-0 md:pl-4">
          {education.map((edu, idx) => {
            const index = (idx + 1).toString().padStart(2, '0');
            
            return (
              <TerminalRow
                key={edu.id}
                index={`[${index}]`}
                title={edu.degree}
                metadata={
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-[#397A4A] dark:text-[#79C98B]">
                      {[edu.startDate, edu.endDate].filter(Boolean).join(' -{">"} ')}
                    </span>
                    <span className="text-[#967126] dark:text-[#D4AD68]">@{edu.institution}</span>
                  </div>
                }
              >
                <div className="flex flex-col gap-3">
                  <div className="font-mono text-xs text-[#347A84] dark:text-[#69B7C4]">
                    {[edu.fieldOfStudy, edu.location].filter(Boolean).join(' | ')}
                  </div>
                  {edu.description && (
                    <p>{edu.description}</p>
                  )}
                  {edu.grade && (
                    <div className="font-mono text-[10px] text-[#5F6861] dark:text-[#9CA39D]">
                      grade: {edu.grade}
                    </div>
                  )}
                </div>
              </TerminalRow>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
