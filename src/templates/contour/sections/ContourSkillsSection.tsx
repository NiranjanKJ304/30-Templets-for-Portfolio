import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';

interface ContourSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ContourSkillsSection: React.FC<ContourSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <ContourField label="Capability Elevations" contourVariant="dense">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10 bg-[#F9F8F1]/80 dark:bg-[#1D2320]/80 backdrop-blur-md p-8 md:p-12 border border-[#C7C9B9]/50 dark:border-[#46504A]/50">
          {skills.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col gap-8">
              <h4 className="font-heading text-3xl font-normal text-[#202523] dark:text-[#EEF0E8] flex items-center gap-3">
                <span className="font-mono text-xs text-[#6E746E] dark:text-[#A8AEA6]">{(gIdx + 1).toString().padStart(2, '0')}</span>
                {group.category}
              </h4>
              
              <ul className="flex flex-wrap gap-x-4 gap-y-3">
                {group.skills.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <li key={sIdx} className="inline-flex items-center gap-2 group">
                      <span className="font-body text-lg font-light text-[#202523] dark:text-[#EEF0E8]">
                        {name}
                      </span>
                      {(level || years) && (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6] opacity-0 group-hover:opacity-100 transition-opacity">
                          {[level, years && `${years}y`].filter(Boolean).join('·')}
                        </span>
                      )}
                      {sIdx < group.skills.length - 1 && (
                        <span className="text-[#C7C9B9] dark:text-[#46504A] ml-2 select-none">/</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
