import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';

interface BlueprintOSSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintOSSkillsSection: React.FC<BlueprintOSSkillsSectionProps> = ({ data, enabled = true }) => {
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
      <WorkspaceWindow title="CAPABILITIES_MATRIX.json" id="skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {skills.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col gap-4">
              <h4 className="font-heading font-bold text-lg text-[#1D2523] dark:text-[#EEF2EC] uppercase border-b border-[#CBD2CD] dark:border-[#3A4340] pb-2">
                {group.category}
              </h4>
              
              <ul className="flex flex-col gap-3">
                {group.skills.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <li key={sIdx} className="flex items-center justify-between group">
                      <span className="font-body text-base text-[#68716D] dark:text-[#A6ADA8] group-hover:text-[#356B63] dark:group-hover:text-[#75A89E] transition-colors">{name}</span>
                      {(level || years) && (
                        <span className="font-mono text-[10px] text-[#68716D] dark:text-[#A6ADA8] opacity-60 uppercase bg-[#E9ECE8] dark:bg-[#111615] px-2 py-1">
                          {[level, years && `${years}Y`].filter(Boolean).join(' | ')}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
