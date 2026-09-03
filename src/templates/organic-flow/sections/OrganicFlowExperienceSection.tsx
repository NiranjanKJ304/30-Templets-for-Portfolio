import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';
import { FlowDivider } from '../components/FlowDivider';
import { FlowConnector } from '../components/FlowConnector';

interface OrganicFlowExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrganicFlowExperienceSection: React.FC<OrganicFlowExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative z-0"
      containerClassName="px-0 py-0"
    >
      <FlowDivider direction="down" color="secondary" className="absolute -top-1 left-0 z-0" />
      <div className="bg-[#E8DED0] dark:bg-[#302A26] relative z-10 pt-24 md:pt-48 pb-24 md:pb-48">
        <FlowConnector variant="wave" className="right-12 top-24 text-[#819B8A] dark:text-[#88A995] opacity-30" />
        <FlowSection title="EXPERIENCE" align="left">
          <div className="flex flex-col gap-16 md:gap-24 mt-12 md:mt-24 pl-4 md:pl-12 lg:pl-24 border-l-[3px] border-[#819B8A] dark:border-[#88A995]">
            {experience.map((job) => (
              <div key={job.id} className="flex flex-col gap-6 relative">
                {/* Timeline node */}
                <div className="absolute -left-[21px] md:-left-[53px] lg:-left-[101px] w-10 h-10 rounded-full bg-[#FBFAF5] dark:bg-[#1E2321] border-4 border-[#819B8A] dark:border-[#88A995]" aria-hidden="true" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <h4 className="font-heading font-black text-3xl md:text-4xl text-[#202321] dark:text-[#F1EFE7]">
                      {job.role}
                    </h4>
                    <span className="font-body text-xl text-[#C87558] dark:text-[#D77F63] font-medium mt-2">
                      {job.company}
                    </span>
                  </div>
                  <div className="font-mono text-sm text-[#6B706A] dark:text-[#A8ACA5] bg-[#FBFAF5] dark:bg-[#1E2321] px-4 py-2 rounded-full inline-flex self-start">
                    {job.startDate} — {job.current ? 'PRESENT' : job.endDate}
                  </div>
                </div>
                
                {job.description && (
                  <p className="font-body text-lg text-[#6B706A] dark:text-[#A8ACA5] leading-relaxed max-w-3xl">
                    {job.description}
                  </p>
                )}
                
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="flex flex-col gap-3 mt-4">
                    {job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-4 font-body text-base text-[#202321] dark:text-[#F1EFE7]">
                        <span className="text-[#819B8A] dark:text-[#88A995] select-none">~</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </FlowSection>
      </div>
      <FlowDivider direction="down" color="canvas" className="absolute bottom-0 left-0 translate-y-full z-10" />
    </SectionWrapper>
  );
};
