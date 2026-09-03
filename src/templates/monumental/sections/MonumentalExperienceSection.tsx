import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalDivider } from '../components/MonumentalDivider';

interface MonumentalExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonumentalExperienceSection: React.FC<MonumentalExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <MonumentalSection title="HISTORY" index="04" align="right">
        <div className="flex flex-col">
          {experience.map((job, idx) => (
            <div key={job.id} className="flex flex-col lg:flex-row gap-8 lg:gap-32 py-16 md:py-32 border-b-8 border-[#D8D4C9] dark:border-[#303430] last:border-b-0">
              <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-4">
                <span className="font-mono text-sm md:text-base text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                  {job.startDate} — {job.current ? 'PRESENT' : job.endDate}
                </span>
                <span className="font-mono text-xs text-[#686B66] dark:text-[#A5A7A1] uppercase tracking-widest">
                  {[job.location, job.employmentType].filter(Boolean).join(' • ')}
                </span>
              </div>
              
              <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className="flex flex-col">
                  <h4 className="font-heading font-black text-4xl md:text-5xl text-[#171918] dark:text-[#F0EEE6] uppercase leading-[1.1] break-words">
                    {job.role}
                  </h4>
                  <span className="font-body text-xl md:text-2xl text-[#171918] dark:text-[#F0EEE6] mt-4 font-light">
                    {job.company}
                  </span>
                </div>
                
                {job.description && (
                  <p className="font-body text-lg md:text-xl text-[#686B66] dark:text-[#A5A7A1] leading-relaxed">
                    {job.description}
                  </p>
                )}
                
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="flex flex-col gap-4 mt-4">
                    {job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-6 font-body text-base md:text-lg text-[#171918] dark:text-[#F0EEE6]">
                        <span className="text-[#B94F38] dark:text-[#D16A52] font-mono text-xs mt-1.5 shrink-0">■</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-32">
          <MonumentalDivider thickness="thick" />
        </div>
      </MonumentalSection>
    </SectionWrapper>
  );
};
