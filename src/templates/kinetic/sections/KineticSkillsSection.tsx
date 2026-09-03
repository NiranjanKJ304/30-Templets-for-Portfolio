import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';
import { ArrowRight } from 'lucide-react';

interface KineticSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KineticSkillsSection: React.FC<KineticSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-6 sm:px-12 max-w-[1600px] mx-auto"
      className="py-16 md:py-32"
    >
      <KineticSectionHeader title="Expertise" index={2} align="right" />
      
      <div className="flex flex-col">
        {skills.map((group, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 border-b border-[#BDB7AA]/40 dark:border-[#454846]/40 group/row">
            
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              <h3 className="font-heading font-black text-4xl uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8] flex items-center gap-4">
                {group.category}
                <ArrowRight className="text-[#E84F3D] dark:text-[#FF715D] opacity-0 group-hover/row:opacity-100 motion-safe:-translate-x-4 motion-safe:group-hover/row:translate-x-0 transition-all duration-300" />
              </h3>
              {group.description && (
                <p className="font-body text-base text-[#555555] dark:text-[#B4B4AE]">
                  {group.description}
                </p>
              )}
            </div>
            
            <div className="w-full lg:w-2/3 flex flex-wrap gap-x-12 gap-y-6">
              {group.skills.map((skill, sIdx) => {
                const name = typeof skill === 'string' ? skill : skill.name;
                const level = typeof skill === 'object' ? skill.level : undefined;
                const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                return (
                  <div key={sIdx} className="flex flex-col gap-1 group/skill cursor-default">
                    <span className="font-heading font-bold text-2xl uppercase tracking-tight text-[#171717] dark:text-[#F3F0E8] group-hover/skill:text-[#E84F3D] dark:group-hover/skill:text-[#FF715D] transition-colors">
                      {name}
                    </span>
                    {(level || years) && (
                      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-[#285B63] dark:text-[#6FA9B0]">
                        {level && <span>{level}</span>}
                        {years && <span>{years} YRS</span>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
