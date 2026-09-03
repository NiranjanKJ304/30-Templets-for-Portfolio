import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';
import { FlowSurface } from '../components/FlowSurface';
import { FlowConnector } from '../components/FlowConnector';

interface OrganicFlowSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrganicFlowSkillsSection: React.FC<OrganicFlowSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative z-0 pt-24 md:pt-48 pb-24"
      containerClassName="px-0 py-0"
    >
      <FlowConnector variant="wave" className="right-0 top-1/4" />
      <FlowSection title="CAPABILITIES" align="right">
        <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-end mt-12 md:mt-24">
          {skills.map((group, gIdx) => (
            <FlowSurface 
              key={gIdx} 
              variant="primary" 
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 md:p-12 shadow-lg"
              curveTop={gIdx % 2 === 0 ? 'left' : 'right'}
              curveBottom={gIdx % 3 === 0 ? 'both' : 'none'}
            >
              <h4 className="font-heading font-black text-2xl text-[#202321] dark:text-[#F1EFE7] mb-6">
                {group.category}
              </h4>
              <ul className="flex flex-col gap-4">
                {group.skills.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <li key={sIdx} className="flex flex-col items-start font-body text-base text-[#6B706A] dark:text-[#A8ACA5]">
                      <span className="text-[#202321] dark:text-[#F1EFE7] font-medium">{name}</span>
                      {(level || years) && (
                        <span className="font-mono text-[10px] uppercase opacity-70 mt-1">
                          {[level, years && `${years} YRS`].filter(Boolean).join(' • ')}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </FlowSurface>
          ))}
        </div>
      </FlowSection>
    </SectionWrapper>
  );
};
