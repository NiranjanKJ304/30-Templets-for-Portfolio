import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';

interface KinshipExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KinshipExperienceSection: React.FC<KinshipExperienceSectionProps> = ({ data, enabled = true }) => {
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
      <KinshipSection title="Experience" color="lavender">
        <div className="flex flex-col w-full relative">
          <KinshipConnector orientation="vertical" className="absolute top-4 bottom-4 left-[3px] opacity-30 hidden md:block" />
          
          {experience.map((job, idx) => (
            <div key={job.id} className="relative md:pl-16 py-12 md:py-16 group flex flex-col md:flex-row gap-8">
              {/* Connector and Anchor */}
              <div className="hidden md:flex absolute left-0 top-16 items-center w-16">
                <KinshipAnchor color="lavender" className="absolute left-[-2px]" />
                <KinshipConnector className="w-full opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex flex-col gap-2 md:w-1/3 shrink-0">
                <span className="font-mono text-xs md:text-sm text-[#958BA5] dark:text-[#B2A7BF] uppercase tracking-widest font-bold">
                  {job.startDate} — {job.current ? 'PRESENT' : job.endDate}
                </span>
                <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest mt-1">
                  {[job.location, job.employmentType].filter(Boolean).join(' • ')}
                </span>
              </div>
              
              <div className="flex flex-col gap-6 md:w-2/3">
                <div className="flex flex-col">
                  <h4 className="font-heading font-medium text-2xl md:text-3xl text-[#202624] dark:text-[#EEF0EA] break-words">
                    {job.role}
                  </h4>
                  <span className="font-body text-xl text-[#737A75] dark:text-[#A7ADA7] mt-1 font-normal">
                    {job.company}
                  </span>
                </div>
                
                {job.description && (
                  <p className="font-body text-base text-[#737A75] dark:text-[#A7ADA7] leading-relaxed">
                    {job.description}
                  </p>
                )}
                
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="flex flex-col gap-4 mt-2">
                    {job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-4 font-body text-base text-[#202624] dark:text-[#EEF0EA]">
                        <KinshipAnchor size="sm" color="lavender" className="mt-2 opacity-50 shrink-0" />
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
