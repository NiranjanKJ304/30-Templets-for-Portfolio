import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';
import { TerminalRow } from '../components/TerminalRow';

interface TerminalSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TerminalSkillsSection: React.FC<TerminalSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="ls -la ./skills" isSectionHeader />
        
        <div className="flex flex-col gap-8 pl-0 md:pl-4">
          {skills.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col gap-4">
              <div className="font-mono font-bold text-[#347A84] dark:text-[#69B7C4]">
                ./{group.category.toLowerCase().replace(/\s+/g, '_')}
              </div>
              
              <div className="flex flex-col gap-3">
                {group.skills.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  const meta = [level, years && `${years}Y`].filter(Boolean).join(' | ');

                  return (
                    <TerminalRow
                      key={sIdx}
                      title={`-rwxr-xr-x  ${name}`}
                      metadata={meta || undefined}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
