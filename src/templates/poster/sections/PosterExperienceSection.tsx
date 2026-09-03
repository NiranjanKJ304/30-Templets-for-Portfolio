import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';

interface PosterExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
}

export const PosterExperienceSection: React.FC<PosterExperienceSectionProps> = ({ data, enabled = true, index }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="vermilion" />
          <PosterLabel className="text-[#D94B36] dark:text-[#F07761] text-right mt-4 md:mt-12">PROFESSIONAL TIMELINE</PosterLabel>
        </div>

        <div className="flex flex-col mt-8">
          {experience.map((job, idx) => (
            <div key={job.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-12 md:py-16 border-t border-[#C9C3B7] dark:border-[#4A4A47] first:border-t-0">
              <div className="md:col-span-3 flex flex-col">
                <h4 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-[#17191B] dark:text-[#F5F0E5] uppercase tracking-tighter leading-none break-all">
                  {job.company}
                </h4>
                <PosterLabel className="text-[#3157D5] dark:text-[#6E8CFF] mt-4">
                  {job.startDate} — {job.current ? 'PRESENT' : job.endDate}
                </PosterLabel>
              </div>
              
              <div className="md:col-span-9 flex flex-col gap-6">
                <div className="flex flex-col">
                  <h5 className="font-heading font-bold text-2xl md:text-4xl text-[#17191B] dark:text-[#F5F0E5] uppercase">
                    {job.role}
                  </h5>
                  <span className="font-mono text-sm text-[#65635D] dark:text-[#B4B0A7] mt-2">
                    {[job.location, job.employmentType].filter(Boolean).join(' | ')}
                  </span>
                </div>
                
                {job.description && (
                  <p className="font-body text-lg text-[#65635D] dark:text-[#B4B0A7] leading-relaxed max-w-4xl">
                    {job.description}
                  </p>
                )}
                
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="flex flex-col gap-2 mt-4 max-w-4xl">
                    {job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-4 font-body text-base text-[#17191B] dark:text-[#F5F0E5]">
                        <span className="text-[#D94B36] dark:text-[#F07761] mt-1 select-none">×</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </PosterBlock>
    </SectionWrapper>
  );
};
