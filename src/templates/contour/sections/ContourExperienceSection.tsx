import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';

interface ContourExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ContourExperienceSection: React.FC<ContourExperienceSectionProps> = ({ data, enabled = true }) => {
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
      <ContourField label="Professional Stratigraphy" contourVariant="strong">
        <div className="flex flex-col relative before:absolute before:left-[11px] lg:before:left-1/2 lg:before:-ml-px before:top-2 before:bottom-2 before:w-px before:bg-[#C7C9B9] dark:before:bg-[#46504A]">
          {experience.map((job, idx) => (
            <div key={job.id} className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 md:py-16 group">
              
              <div className="absolute left-[7px] lg:left-1/2 lg:-ml-[5px] top-12 md:top-16 w-[9px] h-[9px] bg-[#F2F0E7] dark:bg-[#151918] border-2 border-[#202523] dark:border-[#EEF0E8] rounded-full z-10 group-hover:bg-[#879A82] dark:group-hover:bg-[#78947D] group-hover:border-[#879A82] dark:group-hover:border-[#78947D] transition-colors" />

              <div className="lg:w-1/2 flex flex-col gap-4 pl-8 lg:pl-0 lg:pr-16 lg:text-right pt-[-6px]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#202523] dark:text-[#EEF0E8]">
                    {job.company}
                  </span>
                  <span className="hidden lg:inline text-[#C7C9B9] dark:text-[#46504A]">—</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6]">
                    {[job.startDate, job.current ? 'Present' : job.endDate].filter(Boolean).join(' to ')}
                  </span>
                </div>
                
                <h4 className="font-heading text-4xl md:text-5xl font-normal text-[#202523] dark:text-[#EEF0E8]">
                  {job.role}
                </h4>
                
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6]">
                  {[job.location, job.employmentType].filter(Boolean).join(' • ')}
                </span>
              </div>

              <div className="lg:w-1/2 flex flex-col gap-6 pl-8 lg:pl-16 pt-2">
                {job.description && (
                  <p className="font-body text-lg font-light leading-relaxed text-[#6E746E] dark:text-[#A8AEA6]">
                    {job.description}
                  </p>
                )}
                
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="flex flex-col gap-3">
                    {job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="font-body text-base font-light text-[#202523] dark:text-[#EEF0E8] flex items-start gap-4">
                        <span className="text-[#879A82] dark:text-[#78947D] mt-1 text-sm">+</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
