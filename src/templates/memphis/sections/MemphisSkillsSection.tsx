import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';

interface MemphisSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MemphisSkillsSection: React.FC<MemphisSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  
  const hasData = Array.isArray(skills) && skills.length > 0 && skills.some(group => Array.isArray(group.skills) && group.skills.length > 0);

  const colors = ['#2563EB', '#EC4899', '#FACC15', '#34D399', '#F97316', '#8B5CF6'];

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MemphisSectionHeader title="Skills" number="02" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {skills?.map((group, groupIdx) => {
          if (!group.skills || group.skills.length === 0) return null;
          const color = colors[groupIdx % colors.length];

          return (
            <div 
              key={groupIdx}
              className="bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white p-6 md:p-8 shadow-[8px_8px_0_0_#202124] dark:shadow-[8px_8px_0_0_#FFFFFF] relative"
            >
              <div 
                className="absolute top-0 right-0 w-8 h-8 border-l-4 border-b-4 border-neutral-900 dark:border-white"
                style={{ backgroundColor: color }}
              />
              
              <h3 className="font-heading font-black text-2xl uppercase text-neutral-900 dark:text-white mb-2">
                {group.category}
              </h3>
              {group.description && (
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 font-bold">{group.description}</p>
              )}

              <div className="flex flex-wrap gap-3 mt-6">
                {group.skills.map((skill, skillIdx) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  const skillLevel = typeof skill !== 'string' ? skill.level : undefined;
                  const skillYears = typeof skill !== 'string' ? skill.yearsOfExperience : undefined;
                  
                  return (
                    <div 
                      key={skillIdx}
                      className="inline-flex flex-col border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-900 hover:-translate-y-1 hover:translate-x-1 transition-transform group"
                      style={{ boxShadow: `4px 4px 0 0 ${color}` }}
                    >
                      <div className="px-4 py-2 font-heading font-bold text-neutral-900 dark:text-white group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800">
                        {skillName}
                      </div>
                      {(skillLevel || skillYears) && (
                        <div className="flex border-t-2 border-neutral-900 dark:border-white text-xs font-bold divide-x-2 divide-neutral-900 dark:divide-white">
                          {skillLevel && (
                            <span className="px-2 py-1 text-neutral-600 dark:text-neutral-400 capitalize">
                              {skillLevel}
                            </span>
                          )}
                          {skillYears && (
                            <span className="px-2 py-1 text-neutral-600 dark:text-neutral-400">
                              {skillYears}y
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
