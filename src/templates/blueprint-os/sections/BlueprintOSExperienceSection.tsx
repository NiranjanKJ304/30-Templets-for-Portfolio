import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';

interface BlueprintOSExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintOSExperienceSection: React.FC<BlueprintOSExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <WorkspaceWindow title="EMPLOYMENT_RECORDS.csv" id="experience">
        <div className="flex flex-col gap-10">
          {experience.map((job) => (
            <div key={job.id} className="flex flex-col gap-4 relative pb-10 border-b border-[#CBD2CD] dark:border-[#3A4340] last:border-b-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex flex-col">
                  <h4 className="font-heading font-bold text-xl text-[#1D2523] dark:text-[#EEF2EC]">
                    {job.role}
                  </h4>
                  <span className="font-body text-base text-[#356B63] dark:text-[#75A89E] font-medium mt-1">
                    {job.company}
                  </span>
                </div>
                <div className="flex flex-col md:items-end font-mono text-[10px] uppercase text-[#68716D] dark:text-[#A6ADA8]">
                  <span>{job.startDate} — {job.current ? 'PRESENT' : job.endDate}</span>
                  <span className="mt-1">{[job.location, job.employmentType].filter(Boolean).join(' | ')}</span>
                </div>
              </div>
              
              {job.description && (
                <p className="font-body text-sm text-[#68716D] dark:text-[#A6ADA8] leading-relaxed max-w-3xl">
                  {job.description}
                </p>
              )}
              
              {job.highlights && job.highlights.length > 0 && (
                <ul className="flex flex-col gap-2 mt-2">
                  {job.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-3 text-sm text-[#1D2523] dark:text-[#EEF2EC]">
                      <span className="text-[#829BA8] dark:text-[#8BAAB8] select-none">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
