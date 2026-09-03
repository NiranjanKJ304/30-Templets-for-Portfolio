import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';
import { ChromaBoundary } from '../components/ChromaBoundary';

interface ChromaSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChromaSkillsSection: React.FC<ChromaSkillsSectionProps> = ({ data, enabled = true }) => {
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
      <ChromaField color="sage">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="font-mono text-sm uppercase tracking-widest opacity-60">Capabilities</h2>
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              {skills.map((group, gIdx) => (
                <div key={gIdx} className="flex flex-col gap-6">
                  <h4 className="font-heading text-3xl font-medium tracking-tight">
                    {group.category}
                  </h4>
                  
                  <ChromaBoundary variant="subtle" />
                  
                  <ul className="flex flex-col gap-4">
                    {group.skills.map((skill, sIdx) => {
                      const name = typeof skill === 'string' ? skill : skill.name;
                      const level = typeof skill === 'object' ? skill.level : undefined;
                      const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                      return (
                        <li key={sIdx} className="flex flex-col">
                          <span className="font-body text-xl opacity-90">{name}</span>
                          {(level || years) && (
                            <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 mt-1">
                              {[level, years && `${years}y`].filter(Boolean).join(' • ')}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </ChromaField>
    </SectionWrapper>
  );
};
