import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';

interface OrbitalSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrbitalSkillsSection: React.FC<OrbitalSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="Skills" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="flex flex-col items-center gap-16 md:gap-24 max-w-5xl mx-auto">
        {skills.map((group, idx) => (
          <div key={idx} className="relative w-full flex flex-col items-center">
            
            {/* Category Center Node */}
            <div className="relative z-20 bg-[#FFFFFF] dark:bg-[#182221] border border-[#2F7C73] dark:border-[#66B8A9] rounded-full px-8 py-3 shadow-md mb-12">
              <h3 className="font-heading font-bold text-lg text-[#172326] dark:text-[#F0F4F1] uppercase tracking-wide">
                {group.name}
              </h3>
            </div>

            {/* Orbit paths for skills */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] border border-[#B9C9C6]/30 dark:border-[#40504D]/30 rounded-[100%] pointer-events-none opacity-50 hidden md:block"></div>
            
            {/* Skills arranged in a flow that mimics orbital scattering */}
            <div className="flex flex-wrap justify-center gap-6 relative z-10 w-full md:px-12">
              {group.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="bg-[#FFFFFF]/80 dark:bg-[#182221]/80 backdrop-blur-sm border border-[#B9C9C6]/60 dark:border-[#40504D]/60 rounded-full px-5 py-2.5 flex flex-col items-center hover:border-[#2F7C73] dark:hover:border-[#66B8A9] transition-colors"
                >
                  <span className="font-body text-sm font-medium text-[#172326] dark:text-[#F0F4F1]">
                    {skill.name}
                  </span>
                  {(skill.level || skill.yearsOfExperience) && (
                    <div className="flex items-center gap-2 mt-1 opacity-70">
                      {skill.level && <span className="font-mono text-[9px] text-[#526467] dark:text-[#AABAB7] uppercase">{skill.level}</span>}
                      {skill.level && skill.yearsOfExperience && <span className="w-1 h-1 rounded-full bg-[#B9C9C6] dark:bg-[#40504D]"></span>}
                      {skill.yearsOfExperience && <span className="font-mono text-[9px] text-[#526467] dark:text-[#AABAB7] uppercase">{skill.yearsOfExperience}y</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
