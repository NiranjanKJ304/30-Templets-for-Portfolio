import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';

interface MonochromeSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonochromeSkillsSection: React.FC<MonochromeSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MonochromeSectionHeader title="Capabilities" number="02" subtitle="Index of Competencies" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="flex flex-col">
        {skills.map((group, idx) => (
          <div key={idx} className="border-t border-[#C9C6BE]/60 dark:border-[#3A3A37]/60 py-10 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 group">
            
            <div className="md:col-span-1">
              <h3 className="font-heading text-2xl md:text-3xl text-[#151515] dark:text-[#F2F0E9] group-hover:text-[#B44A35] dark:group-hover:text-[#D06A52] transition-colors uppercase tracking-tight">
                {group.name}
              </h3>
            </div>
            
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col border-b border-[#C9C6BE]/30 dark:border-[#3A3A37]/30 pb-3">
                    <span className="font-body text-base font-medium text-[#151515] dark:text-[#F2F0E9] uppercase tracking-wider">
                      {skill.name}
                    </span>
                    {(skill.level || skill.yearsOfExperience) && (
                      <div className="flex gap-4 mt-2 font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest">
                        {skill.level && <span>{skill.level}</span>}
                        {skill.yearsOfExperience && <span>{skill.yearsOfExperience} YRS</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
