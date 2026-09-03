import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';

interface PosterSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
}

export const PosterSkillsSection: React.FC<PosterSkillsSectionProps> = ({ data, enabled = true, index }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="mint" />
          <PosterLabel className="text-[#9DB9A6] dark:text-[#9FC2AD] text-right mt-4 md:mt-12">CAPABILITIES</PosterLabel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-8">
          {skills.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col gap-6 border-t border-[#C9C3B7] dark:border-[#4A4A47] pt-4">
              <h4 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter text-[#17191B] dark:text-[#F5F0E5]">
                {group.category}
              </h4>
              
              <ul className="flex flex-col gap-4">
                {group.skills.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <li key={sIdx} className="flex flex-col items-start gap-1">
                      <span className="font-body font-bold text-lg text-[#17191B] dark:text-[#F5F0E5]">{name}</span>
                      {(level || years) && (
                        <span className="font-mono text-xs text-[#65635D] dark:text-[#B4B0A7] uppercase">
                          {[level, years && `${years}YRS`].filter(Boolean).join(' | ')}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </PosterBlock>
    </SectionWrapper>
  );
};
