import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';

interface KinshipSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KinshipSkillsSection: React.FC<KinshipSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  const colors: Array<'primary' | 'coral' | 'blue' | 'gold' | 'lavender'> = ['primary', 'blue', 'coral', 'gold', 'lavender'];

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <KinshipSection title="Capabilities" color="blue">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {skills.map((group, gIdx) => {
            const groupColor = colors[gIdx % colors.length];
            
            return (
              <div key={gIdx} className="flex flex-col relative">
                {/* Category Anchor */}
                <div className="flex items-center gap-4 mb-8">
                  <KinshipAnchor color={groupColor} />
                  <KinshipConnector className="flex-1 opacity-30" />
                  <h4 className="font-heading font-medium text-lg md:text-xl text-[#202624] dark:text-[#EEF0EA]">
                    {group.category}
                  </h4>
                </div>
                
                {/* Connected Skill List */}
                <ul className="flex flex-col gap-6 relative pl-6">
                  <KinshipConnector orientation="vertical" className="absolute top-0 left-[3px] h-[calc(100%-12px)] opacity-30" />
                  
                  {group.skills.map((skill, sIdx) => {
                    const name = typeof skill === 'string' ? skill : skill.name;
                    const level = typeof skill === 'object' ? skill.level : undefined;
                    const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                    return (
                      <li key={sIdx} className="flex flex-col relative">
                        <KinshipConnector orientation="horizontal" className="absolute top-3 -left-6 w-4 opacity-30" />
                        
                        <span className="font-body text-base text-[#202624] dark:text-[#EEF0EA] font-medium leading-tight">
                          {name}
                        </span>
                        {(level || years) && (
                          <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest mt-1">
                            {[level, years && `${years}y`].filter(Boolean).join(' • ')}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
