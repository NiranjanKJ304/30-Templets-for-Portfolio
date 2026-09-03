import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';
import { FlowSurface } from '../components/FlowSurface';

interface OrganicFlowEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrganicFlowEducationSection: React.FC<OrganicFlowEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative z-0 pt-24 md:pt-48 pb-24"
      containerClassName="px-0 py-0"
    >
      <FlowSection title="EDUCATION" align="center">
        <div className="flex flex-col gap-12 mt-12 md:mt-24 max-w-5xl mx-auto">
          {education.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FlowSurface 
                key={edu.id} 
                variant="primary" 
                className="p-8 md:p-12 shadow-md"
                curveTop={isEven ? 'left' : 'right'}
                curveBottom={isEven ? 'right' : 'left'}
              >
                <div className="flex flex-col gap-4 text-center">
                  <span className="font-mono text-xs text-[#819B8A] dark:text-[#88A995] uppercase">
                    {[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}
                  </span>
                  <h4 className="font-heading font-black text-2xl md:text-4xl text-[#202321] dark:text-[#F1EFE7]">
                    {edu.degree}
                  </h4>
                  <span className="font-body text-lg text-[#C87558] dark:text-[#D77F63] font-medium">
                    {edu.institution}
                  </span>
                  
                  {edu.description && (
                    <p className="font-body text-base text-[#6B706A] dark:text-[#A8ACA5] leading-relaxed max-w-2xl mx-auto mt-4">
                      {edu.description}
                    </p>
                  )}
                </div>
              </FlowSurface>
            );
          })}
        </div>
      </FlowSection>
    </SectionWrapper>
  );
};
