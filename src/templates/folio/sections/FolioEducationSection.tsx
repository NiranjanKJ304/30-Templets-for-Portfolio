import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FolioSheet } from '../components/FolioSheet';
import { FolioMeta } from '../components/FolioMeta';

interface FolioEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  pageNum: string;
}

export const FolioEducationSection: React.FC<FolioEducationSectionProps> = ({ data, enabled = true, pageNum }) => {
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
      <FolioSheet pageNum={pageNum} title="ACADEMIC RECORD" alternate offset="right">
        <div className="flex flex-col gap-16 md:gap-24">
          {education.map((edu, idx) => (
            <div key={edu.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 md:pb-24 border-b border-[#C9C5BA]/50 dark:border-[#444A45]/50 last:border-0 last:pb-0">
              
              <div className="lg:col-span-4 flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1D2020] dark:text-[#F0EEE6]">
                  {edu.institution}
                </span>
                <FolioMeta label="Duration" value={[edu.startDate, edu.current ? 'Present' : edu.endDate].filter(Boolean).join(' — ')} />
                {edu.location && <FolioMeta label="Location" value={edu.location} />}
              </div>

              <div className="lg:col-span-8 flex flex-col gap-6">
                <h4 className="font-heading text-3xl md:text-4xl font-normal text-[#1D2020] dark:text-[#F0EEE6]">
                  {edu.degree}
                </h4>
                
                {edu.description && (
                  <p className="font-body text-lg font-light leading-relaxed text-[#70736F] dark:text-[#A5AAA3] max-w-3xl">
                    {edu.description}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-8 mt-4 pt-4 border-t border-[#C9C5BA]/20 dark:border-[#444A45]/20">
                  {edu.fieldOfStudy && <FolioMeta label="Field" value={edu.fieldOfStudy} />}
                  {edu.grade && <FolioMeta label="Grade" value={edu.grade} />}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </FolioSheet>
    </SectionWrapper>
  );
};
