import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FolioSheet } from '../components/FolioSheet';
import { FolioMeta } from '../components/FolioMeta';

interface FolioExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  pageNum: string;
}

export const FolioExperienceSection: React.FC<FolioExperienceSectionProps> = ({ data, enabled = true, pageNum }) => {
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
      <FolioSheet pageNum={pageNum} title="PROFESSIONAL RECORD" offset="left">
        <div className="flex flex-col gap-16 md:gap-24">
          {experience.map((job, idx) => (
            <div key={job.id} className="flex flex-col gap-8 pb-16 border-b border-[#C9C5BA]/50 dark:border-[#444A45]/50 last:border-0 last:pb-0">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <h4 className="font-heading text-4xl md:text-5xl font-normal text-[#1D2020] dark:text-[#F0EEE6]">
                    {job.role}
                  </h4>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#1D2020] dark:text-[#F0EEE6]">
                    {job.company}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-6">
                  <FolioMeta label="Term" value={[job.startDate, job.current ? 'Present' : job.endDate].filter(Boolean).join(' — ')} />
                  {job.location && <FolioMeta label="Location" value={job.location} />}
                  {job.employmentType && <FolioMeta label="Type" value={job.employmentType} />}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-[#C9C5BA]/20 dark:border-[#444A45]/20">
                {job.description && (
                  <div className="lg:col-span-5">
                    <p className="font-body text-lg font-light leading-relaxed text-[#70736F] dark:text-[#A5AAA3]">
                      {job.description}
                    </p>
                  </div>
                )}
                
                {job.highlights && job.highlights.length > 0 && (
                  <div className="lg:col-span-7">
                    <ul className="flex flex-col gap-4">
                      {job.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="font-body text-base font-light text-[#1D2020] dark:text-[#F0EEE6] flex items-start gap-4">
                          <span className="font-mono text-[#70736F] dark:text-[#A5AAA3] mt-1 select-none">/</span>
                          <span className="flex-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </FolioSheet>
    </SectionWrapper>
  );
};
