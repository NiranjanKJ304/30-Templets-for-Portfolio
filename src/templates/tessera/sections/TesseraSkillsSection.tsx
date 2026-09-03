import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';

interface TesseraSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TesseraSkillsSection: React.FC<TesseraSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  const accents: Array<'primary' | 'teal' | 'terracotta' | 'mustard' | 'blue' | 'plum'> = ['primary', 'mustard', 'blue', 'terracotta', 'plum', 'teal'];

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <TesseraSection title="Skills" accent="mustard">
        <div className="flex flex-col p-0 w-full relative">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[#C8C4B9] dark:border-[#4A4D48]">
            {skills.map((group, gIdx) => {
              const accent = accents[gIdx % accents.length];
              
              return (
                <TesseraModule 
                  key={gIdx}
                  elevation="flat"
                  tab="top"
                  accent={accent}
                  className="p-8 border-b border-[#C8C4B9] dark:border-[#4A4D48] md:odd:border-r lg:odd:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
                >
                  <h4 className="font-heading font-medium text-xl text-[#242522] dark:text-[#F0EEE5] mb-6">
                    {group.category}
                  </h4>
                  
                  <ul className="flex flex-col gap-4">
                    {group.skills.map((skill, sIdx) => {
                      const name = typeof skill === 'string' ? skill : skill.name;
                      const level = typeof skill === 'object' ? skill.level : undefined;
                      const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                      return (
                        <li key={sIdx} className="flex flex-col">
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#C8C4B9] dark:bg-[#4A4D48]" aria-hidden="true" />
                            <span className="font-body text-base text-[#242522] dark:text-[#F0EEE5] font-medium leading-tight">
                              {name}
                            </span>
                          </div>
                          {(level || years) && (
                            <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest mt-1 pl-4.5">
                              {[level, years && `${years}y`].filter(Boolean).join(' • ')}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </TesseraModule>
              );
            })}
          </div>
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
