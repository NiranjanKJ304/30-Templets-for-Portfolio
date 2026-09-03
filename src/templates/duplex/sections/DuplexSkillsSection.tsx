import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';

interface DuplexSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const DuplexSkillsSection: React.FC<DuplexSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="Expertise" index={2} align="right" />}
      containerClassName="px-6 sm:px-12"
      className="py-16 md:py-24 bg-[#E5DED2] dark:bg-[#1B1F1E]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {skills.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-6 border-t-2 border-[#181818] dark:border-[#F1EEE7] pt-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading font-bold text-2xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7]">
                {group.category}
              </h3>
              {group.description && (
                <p className="font-body text-sm text-[#5F625F] dark:text-[#A9AAA4]">
                  {group.description}
                </p>
              )}
            </div>
            
            <ul className="flex flex-col gap-4">
              {group.skills.map((skill, sIdx) => {
                const name = typeof skill === 'string' ? skill : skill.name;
                const level = typeof skill === 'object' ? skill.level : undefined;
                const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                return (
                  <li key={sIdx} className="flex flex-col border-b border-[#B7B0A5]/30 dark:border-[#414542]/30 pb-3">
                    <div className="flex justify-between items-baseline gap-4">
                      <span className="font-mono text-sm font-bold uppercase tracking-wider text-[#181818] dark:text-[#F1EEE7]">
                        {name}
                      </span>
                      {(level || years) && (
                        <div className="flex gap-3 font-mono text-[10px] text-[#587A72] dark:text-[#76A69C] uppercase tracking-widest text-right">
                          {level && <span>{level}</span>}
                          {years && <span>{years}Y</span>}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
