import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';
import { ArchiveMeta } from '../components/ArchiveMeta';

interface ArchiveExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
}

export const ArchiveExperienceSection: React.FC<ArchiveExperienceSectionProps> = ({ data, enabled = true, index }) => {
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
      <ArchiveEntry index={index} title="Experience" className="mt-8">
        <div className="flex flex-col gap-12 mt-8">
          {experience.map((job) => (
            <div key={job.id} className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              <div className="w-full lg:w-1/4 shrink-0 flex flex-col gap-4">
                <div className="font-heading font-black text-2xl uppercase tracking-tighter text-[#20211F] dark:text-[#F1EEE5]">
                  {job.company}
                </div>
                
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#C8C5BA] dark:border-[#464943]">
                  <ArchiveMeta label="Period" value={`${job.startDate} — ${job.current ? 'PRESENT' : job.endDate}`} />
                  {job.location && <ArchiveMeta label="Location" value={job.location} />}
                  {job.employmentType && <ArchiveMeta label="Type" value={job.employmentType} />}
                </div>
              </div>
              
              <div className="w-full flex-1 flex flex-col gap-6">
                <h4 className="font-heading font-bold text-xl uppercase tracking-tight text-[#20211F] dark:text-[#F1EEE5]">
                  {job.role}
                </h4>
                
                {job.description && (
                  <p className="font-body text-base text-[#686861] dark:text-[#AAA9A0] leading-relaxed">
                    {job.description}
                  </p>
                )}
                
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="flex flex-col gap-2 list-none">
                    {job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="font-body text-base text-[#20211F] dark:text-[#F1EEE5] flex gap-3">
                        <span className="text-[#C8C5BA] dark:text-[#464943] select-none">/</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
