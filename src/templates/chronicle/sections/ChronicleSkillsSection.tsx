import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';

interface ChronicleSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChronicleSkillsSection: React.FC<ChronicleSkillsSectionProps> = ({ data, enabled = true }) => {
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
      <ChronicleBand label="Capabilities">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {skills.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col gap-6">
              <h4 className="font-heading text-3xl font-normal text-[#202321] dark:text-[#F0EEE6]">
                {group.category}
              </h4>
              
              <ul className="flex flex-col gap-4">
                {group.skills.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <li key={sIdx} className="flex items-baseline justify-between py-2 border-b border-[#C9C5BB]/30 dark:border-[#474B47]/30 group">
                      <span className="font-body text-lg text-[#202321] dark:text-[#F0EEE6] transition-colors">
                        {name}
                      </span>
                      {(level || years) && (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
                          {[level, years && `${years}y`].filter(Boolean).join(' • ')}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </ChronicleBand>
    </SectionWrapper>
  );
};
