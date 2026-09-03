import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';
import { ArchiveMeta } from '../components/ArchiveMeta';

interface ArchiveEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
}

export const ArchiveEducationSection: React.FC<ArchiveEducationSectionProps> = ({ data, enabled = true, index }) => {
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
      <ArchiveEntry index={index} title="Education" className="mt-8">
        <div className="flex flex-col gap-12 mt-8">
          {education.map((edu) => (
            <div key={edu.id} className="flex flex-col lg:flex-row gap-6 lg:gap-12 pb-12 border-b border-[#C8C5BA] dark:border-[#464943] last:border-0 last:pb-0">
              <div className="w-full lg:w-1/4 shrink-0 flex flex-col gap-4">
                <div className="font-heading font-black text-xl uppercase tracking-tighter text-[#20211F] dark:text-[#F1EEE5]">
                  {edu.institution}
                </div>
                
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#C8C5BA] dark:border-[#464943]">
                  <ArchiveMeta label="Period" value={[edu.startDate, edu.endDate].filter(Boolean).join(' — ')} />
                  {edu.location && <ArchiveMeta label="Location" value={edu.location} />}
                  {edu.grade && <ArchiveMeta label="Grade/GPA" value={edu.grade} />}
                </div>
              </div>
              
              <div className="w-full flex-1 flex flex-col gap-6">
                <h4 className="font-heading font-bold text-2xl uppercase tracking-tight text-[#20211F] dark:text-[#F1EEE5]">
                  {edu.degree}
                </h4>
                
                {edu.fieldOfStudy && (
                  <div className="font-mono text-sm uppercase tracking-widest text-[#9D4937] dark:text-[#D4755D] font-bold">
                    {edu.fieldOfStudy}
                  </div>
                )}
                
                {edu.description && (
                  <p className="font-body text-base text-[#686861] dark:text-[#AAA9A0] leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
