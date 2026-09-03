import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';

interface TesseraExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TesseraExperienceSection: React.FC<TesseraExperienceSectionProps> = ({ data, enabled = true }) => {
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
      <TesseraSection title="Experience" accent="dustyBlue" as any> 
        {/* We use `as any` or fix the accent types. Actually accent="blue" is in the map */}
        <div className="flex flex-col relative w-full border-t border-[#C8C4B9] dark:border-[#4A4D48]">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block" />
          
          {experience.map((job, idx) => (
            <div key={job.id} className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-[#C8C4B9] dark:border-[#4A4D48]">
              
              <TesseraModule 
                elevation="inset"
                className="md:col-span-3 lg:col-span-2 p-6 md:p-8 flex flex-col gap-2 border-b md:border-b-0 md:border-r border-[#C8C4B9] dark:border-[#4A4D48]"
              >
                <span className="font-mono text-xs md:text-sm text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest font-bold">
                  {job.startDate} — {job.current ? 'PRESENT' : job.endDate}
                </span>
                <span className="font-mono text-[10px] text-[#C6654F] dark:text-[#D67A62] uppercase tracking-widest mt-1">
                  {[job.location, job.employmentType].filter(Boolean).join(' • ')}
                </span>
              </TesseraModule>
              
              <TesseraModule 
                elevation="flat"
                notch={idx % 2 === 0 ? 'top' : 'bottom'}
                className="md:col-span-9 lg:col-span-10 p-6 md:p-10 flex flex-col gap-6"
              >
                <div className="flex flex-col">
                  <h4 className="font-heading font-medium text-2xl md:text-3xl text-[#242522] dark:text-[#F0EEE5] break-words">
                    {job.role}
                  </h4>
                  <span className="font-body text-xl text-[#315F5A] dark:text-[#6E9D94] mt-1 font-medium">
                    {job.company}
                  </span>
                </div>
                
                {job.description && (
                  <p className="font-body text-base text-[#73756E] dark:text-[#A5A7A0] leading-relaxed">
                    {job.description}
                  </p>
                )}
                
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="flex flex-col gap-4 mt-2">
                    {job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-4 font-body text-base text-[#242522] dark:text-[#F0EEE5]">
                        <div className="w-2 h-2 mt-2 shrink-0 bg-[#C8C4B9] dark:bg-[#4A4D48]" aria-hidden="true" />
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </TesseraModule>

            </div>
          ))}
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
