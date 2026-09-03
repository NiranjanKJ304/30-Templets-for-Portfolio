import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';

interface MosaicSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MosaicSkillsSection: React.FC<MosaicSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="Expertise" />
        </div>
        
        {skills.map((group, idx) => {
          // Calculate span based on index to create an irregular mosaic
          // Patterns: full (12), two-thirds (8), third (4), half (6)
          const pattern = [ 'two-thirds', 'third', 'half', 'half', 'full' ];
          const span = pattern[idx % pattern.length] as any;
          
          const surfacePattern = ['primary', 'warm', 'canvas', 'soft'];
          const surface = surfacePattern[idx % surfacePattern.length] as any;
          
          return (
            <MosaicTile key={idx} span={span} padding="lg" surface={surface} className="flex flex-col h-full">
              <div className="mb-8 border-b border-[#CBC5BB] dark:border-[#444744] pb-4">
                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7]">
                  {group.category}
                </h3>
                {group.description && (
                  <p className="font-body text-sm text-[#65645F] dark:text-[#B3B1AA] mt-2">
                    {group.description}
                  </p>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-auto">
                {group.skills.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <div key={sIdx} className="bg-[#FFFDF8] dark:bg-[#121414] border border-[#CBC5BB] dark:border-[#444744] px-4 py-2 flex flex-col">
                      <span className="font-heading font-bold text-sm uppercase tracking-tight text-[#1B1B1A] dark:text-[#F1EEE7]">
                        {name}
                      </span>
                      {(level || years) && (
                        <div className="flex gap-2 font-mono text-[10px] uppercase tracking-widest text-[#D66B4D] dark:text-[#E27A5A] font-bold mt-1">
                          {level && <span>{level}</span>}
                          {years && <span>{years}Y</span>}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </MosaicTile>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
