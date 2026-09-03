import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';
import { TerminalRow } from '../components/TerminalRow';

interface TerminalExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TerminalExperienceSection: React.FC<TerminalExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="history | grep experience" isSectionHeader />
        
        <div className="flex flex-col gap-8 pl-0 md:pl-4">
          {experience.map((job, idx) => {
            const index = (idx + 1).toString().padStart(2, '0');
            
            return (
              <TerminalRow
                key={job.id}
                index={`[${index}]`}
                title={job.role}
                metadata={
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-[#397A4A] dark:text-[#79C98B]">
                      {job.startDate} -{'>'} {job.current ? 'PRESENT' : job.endDate}
                    </span>
                    <span className="text-[#967126] dark:text-[#D4AD68]">@{job.company}</span>
                  </div>
                }
              >
                <div className="flex flex-col gap-3">
                  <div className="font-mono text-xs text-[#347A84] dark:text-[#69B7C4]">
                    {[job.location, job.employmentType].filter(Boolean).join(' | ')}
                  </div>
                  {job.description && (
                    <p>{job.description}</p>
                  )}
                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="flex flex-col gap-1 mt-1">
                      {job.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex gap-2">
                          <span className="text-[#9B463F] dark:text-[#C97065] select-none">{'>'}</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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
