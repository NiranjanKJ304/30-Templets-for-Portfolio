import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';

interface BlueprintSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintSkillsSection: React.FC<BlueprintSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      customHeader={<BlueprintSectionHeader title="Technical Requirements" number="02" description="System Competencies and Tooling" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((group, idx) => (
          <div key={idx} className="bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] relative">
            
            {/* Header Block */}
            <div className="border-b-2 border-[#2E6FBB] dark:border-[#5DA9E9] p-4 bg-[#2E6FBB]/5 dark:bg-[#5DA9E9]/5 flex justify-between items-center">
              <h3 className="font-heading font-bold text-[#173A5E] dark:text-[#EAF2F7] uppercase tracking-wider">
                {group.name}
              </h3>
              <span className="font-mono text-[10px] text-[#73808C] uppercase tracking-widest">
                GRP {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="font-mono text-xs font-bold px-3 py-2 border border-[#2E6FBB]/40 dark:border-[#5DA9E9]/40 text-[#17202A] dark:text-[#EAF2F7] bg-transparent"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
