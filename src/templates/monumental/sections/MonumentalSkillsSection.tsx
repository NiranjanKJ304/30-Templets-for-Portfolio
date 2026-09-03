import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalFrame } from '../components/MonumentalFrame';
import { MonumentalDivider } from '../components/MonumentalDivider';

interface MonumentalSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonumentalSkillsSection: React.FC<MonumentalSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <MonumentalSection title="CAPABILITIES" index="02" align="left">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-16">
          {skills.map((group, gIdx) => (
            <MonumentalFrame key={gIdx} variant={gIdx % 2 === 0 ? 'inset' : 'outline'}>
              <div className="flex flex-col gap-12 h-full justify-between">
                <h4 className="font-heading font-black text-3xl md:text-5xl text-[#171918] dark:text-[#F0EEE6] uppercase break-words border-b-4 border-[#171918] dark:border-[#F0EEE6] pb-4">
                  {group.category}
                </h4>
                
                <ul className="flex flex-col gap-6">
                  {group.skills.map((skill, sIdx) => {
                    const name = typeof skill === 'string' ? skill : skill.name;
                    const level = typeof skill === 'object' ? skill.level : undefined;
                    const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                    return (
                      <li key={sIdx} className="flex flex-col">
                        <span className="font-body text-xl md:text-2xl text-[#171918] dark:text-[#F0EEE6] font-medium break-words">
                          {name}
                        </span>
                        {(level || years) && (
                          <span className="font-mono text-[10px] md:text-xs text-[#686B66] dark:text-[#A5A7A1] uppercase tracking-widest mt-1">
                            {[level, years && `${years} YRS`].filter(Boolean).join(' • ')}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </MonumentalFrame>
          ))}
        </div>
        <div className="mt-16 md:mt-32">
          <MonumentalDivider thickness="thick" />
        </div>
      </MonumentalSection>
    </SectionWrapper>
  );
};
