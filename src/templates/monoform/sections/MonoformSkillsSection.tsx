import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';

interface MonoformSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonoformSkillsSection: React.FC<MonoformSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <MonoformSurface depth="surface" borderBottom>
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                02. Competencies
              </h2>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-col">
                <MonoformRule variant="subtle" />
                {skills.map((group, gIdx) => (
                  <div key={gIdx} className="flex flex-col lg:flex-row py-8 gap-8 lg:gap-16 border-b border-[#C8C7BF]/40 dark:border-[#444844]/40">
                    <div className="w-full lg:w-1/4 shrink-0">
                      <h4 className="font-heading text-xl font-light text-[#1D1F1E] dark:text-[#F0EEE7]">
                        {group.category}
                      </h4>
                    </div>
                    
                    <div className="w-full flex-1">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                        {group.skills.map((skill, sIdx) => {
                          const name = typeof skill === 'string' ? skill : skill.name;
                          const level = typeof skill === 'object' ? skill.level : undefined;
                          const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                          return (
                            <li key={sIdx} className="flex items-baseline justify-between">
                              <span className="font-body text-base text-[#6C706B] dark:text-[#A7AAA4]">{name}</span>
                              {(level || years) && (
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B]/60 dark:text-[#A7AAA4]/60 text-right pl-4">
                                  {[level, years && `${years}y`].filter(Boolean).join(' · ')}
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </MonoformSurface>
    </SectionWrapper>
  );
};
