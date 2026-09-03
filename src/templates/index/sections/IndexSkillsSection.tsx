import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';

interface IndexSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const IndexSkillsSection: React.FC<IndexSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col">
        <IndexRow
          isHeader
          index="ID"
          title="SKILLS DIRECTORY"
          metadata="CATEGORY"
          description="COMPETENCIES"
        />
        
        <div className="flex flex-col">
          {skills.map((group, gIdx) => {
            const index = (gIdx + 1).toString().padStart(3, '0');
            
            return (
              <IndexRow
                key={gIdx}
                index={index}
                title={group.category}
                metadata={group.description || <span className="opacity-50">N/A</span>}
                description={
                  <div className="flex flex-col gap-3 w-full">
                    {group.skills.map((skill, sIdx) => {
                      const name = typeof skill === 'string' ? skill : skill.name;
                      const level = typeof skill === 'object' ? skill.level : undefined;
                      const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                      return (
                        <div key={sIdx} className="flex justify-between items-center w-full border-b border-[#D5D6D0]/50 dark:border-[#404440]/50 pb-2 last:border-0 last:pb-0">
                          <span className="font-heading font-bold text-sm uppercase tracking-tight text-[#181A19] dark:text-[#F2F1EA]">
                            {name}
                          </span>
                          {(level || years) && (
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#365F58] dark:text-[#80A99E] font-bold shrink-0 ml-4">
                              {[level, years && `${years}Y`].filter(Boolean).join(' · ')}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
