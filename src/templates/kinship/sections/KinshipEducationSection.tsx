import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';

interface KinshipEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KinshipEducationSection: React.FC<KinshipEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <KinshipSection title="Education" color="primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative">
          {education.map((edu, idx) => (
            <div key={edu.id} className="flex flex-col gap-8 relative p-8 rounded-2xl bg-[#FCFBF7] dark:bg-[#1D211F] ring-1 ring-[rgba(168,178,172,0.2)] dark:ring-[rgba(89,98,93,0.2)]">
              <KinshipAnchor color="primary" className="absolute -top-1 -left-1" />
              <KinshipConnector orientation="horizontal" className="absolute top-0 left-0 w-8 opacity-30" />
              <KinshipConnector orientation="vertical" className="absolute top-0 left-0 h-8 opacity-30" />
              
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] md:text-xs text-[#737A75] dark:text-[#A7ADA7] uppercase tracking-widest font-bold">
                  {[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}
                </span>
                <h4 className="font-heading font-medium text-xl md:text-2xl text-[#202624] dark:text-[#EEF0EA] break-words">
                  {edu.degree}
                </h4>
                <span className="font-body text-lg text-[#356B63] dark:text-[#78A99E] font-medium">
                  {edu.institution}
                </span>
              </div>
              
              {edu.description && (
                <p className="font-body text-base text-[#737A75] dark:text-[#A7ADA7] leading-relaxed flex-1">
                  {edu.description}
                </p>
              )}

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-auto pt-6 border-t border-[rgba(168,178,172,0.2)] dark:border-[rgba(89,98,93,0.2)]">
                {edu.fieldOfStudy && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest">Field</span>
                    <span className="font-body text-sm text-[#202624] dark:text-[#EEF0EA]">{edu.fieldOfStudy}</span>
                  </div>
                )}
                {edu.grade && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest">Grade</span>
                    <span className="font-body text-sm text-[#202624] dark:text-[#EEF0EA]">{edu.grade}</span>
                  </div>
                )}
                {edu.location && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest">Location</span>
                    <span className="font-body text-sm text-[#202624] dark:text-[#EEF0EA]">{edu.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
