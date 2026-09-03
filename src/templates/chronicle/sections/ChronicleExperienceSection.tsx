import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';
import { ChronicleDate } from '../components/ChronicleDate';

interface ChronicleExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChronicleExperienceSection: React.FC<ChronicleExperienceSectionProps> = ({ data, enabled = true }) => {
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
      <ChronicleBand label="Chronology">
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          {experience.map((job, idx) => {
            const startYear = job.startDate?.split(' ').pop(); // rudimentary year extraction
            
            return (
              <div key={job.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                
                <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-4">
                  <ChronicleDate 
                    date={startYear || job.startDate || 'Era'} 
                    label={job.current ? 'Present' : job.endDate} 
                  />
                  <div className="flex flex-col gap-1 mt-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6]">
                      {job.company}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
                      {[job.location, job.employmentType].filter(Boolean).join(' • ')}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
                  <h4 className="font-heading text-4xl md:text-5xl font-normal text-[#202321] dark:text-[#F0EEE6]">
                    {job.role}
                  </h4>
                  
                  {job.description && (
                    <p className="font-body text-xl font-light leading-relaxed text-[#6F746F] dark:text-[#A6ABA5] max-w-4xl">
                      {job.description}
                    </p>
                  )}
                  
                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="flex flex-col gap-3 mt-4 max-w-4xl">
                      {job.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="font-body text-base font-light text-[#202321] dark:text-[#F0EEE6] flex items-start gap-4">
                          <span className="opacity-30 mt-1">—</span>
                          <span className="flex-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
              </div>
            );
          })}
        </div>
      </ChronicleBand>
    </SectionWrapper>
  );
};
