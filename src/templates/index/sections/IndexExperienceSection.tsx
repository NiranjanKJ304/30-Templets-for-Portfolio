import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';

interface IndexExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const IndexExperienceSection: React.FC<IndexExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col">
        <IndexRow
          isHeader
          index="ID"
          title="EXPERIENCE RECORD"
          metadata="ROLE / TIMELINE"
          description="RESPONSIBILITIES"
        />
        
        <div className="flex flex-col">
          {experience.map((job, idx) => {
            const index = (idx + 1).toString().padStart(3, '0');
            
            return (
              <IndexRow
                key={job.id}
                index={index}
                title={
                  <div className="flex flex-col gap-1">
                    <span>{job.company}</span>
                    {job.location && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C]">
                        {job.location}
                      </span>
                    )}
                  </div>
                }
                metadata={
                  <div className="flex flex-col gap-1">
                    <span>{job.role}</span>
                    <span className="text-[#365F58] dark:text-[#80A99E]">
                      {job.startDate} — {job.current ? 'PRESENT' : job.endDate}
                    </span>
                    {job.employmentType && (
                      <span className="text-[#696C67] dark:text-[#A8ABA4] mt-1">
                        {job.employmentType}
                      </span>
                    )}
                  </div>
                }
                description={
                  <div className="flex flex-col gap-4">
                    {job.description && (
                      <p className="font-body text-sm text-[#696C67] dark:text-[#A8ABA4] leading-relaxed">
                        {job.description}
                      </p>
                    )}
                    {job.highlights && job.highlights.length > 0 && (
                      <ul className="flex flex-col gap-2">
                        {job.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="font-body text-sm text-[#181A19] dark:text-[#F2F1EA] flex gap-2">
                            <span className="text-[#D5D6D0] dark:text-[#404440] select-none">-</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
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
