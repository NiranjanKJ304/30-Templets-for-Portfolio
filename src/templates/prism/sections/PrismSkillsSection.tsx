import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismFacet } from '../components/PrismFacet';
import { PrismDivider } from '../components/PrismDivider';

interface PrismSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PrismSkillsSection: React.FC<PrismSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  const colors: Array<'blue' | 'coral' | 'violet' | 'cyan' | 'gold' | 'rose'> = ['blue', 'cyan', 'violet', 'rose', 'coral', 'gold'];

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <PrismSection title="Capabilities" align="right" colorFacet="cyan">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {skills.map((group, gIdx) => {
            const colorHint = colors[gIdx % colors.length];
            const cutType = gIdx % 2 === 0 ? 'top-right' : 'bottom-left';

            return (
              <PrismFacet key={gIdx} cut={cutType} colorHint={colorHint} variant="outline" className="flex flex-col gap-8 h-full">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rotate-45 bg-${colorHint}-500`} style={{ backgroundColor: 'currentColor' }} />
                  <h4 className="font-heading font-extrabold text-2xl md:text-3xl text-[#171A1B] dark:text-[#F1F0EA] uppercase break-words">
                    {group.category}
                  </h4>
                </div>

                <ul className="flex flex-col gap-4 flex-1 mt-4">
                  {group.skills.map((skill, sIdx) => {
                    const name = typeof skill === 'string' ? skill : skill.name;
                    const level = typeof skill === 'object' ? skill.level : undefined;
                    const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                    return (
                      <li key={sIdx} className="flex flex-col">
                        <span className="font-body font-medium text-lg text-[#171A1B] dark:text-[#F1F0EA] break-words">
                          {name}
                        </span>
                        {(level || years) && (
                          <span className="font-mono text-[10px] text-[#6B706F] dark:text-[#A8ADA9] uppercase tracking-widest mt-1 flex items-center gap-2">
                            <span className="w-1 h-1 bg-[rgba(23,26,27,0.2)] dark:bg-[rgba(241,240,234,0.2)]" />
                            {[level, years && `${years} YRS`].filter(Boolean).join(' • ')}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </PrismFacet>
            );
          })}
        </div>
        <div className="mt-24 md:mt-40">
          <PrismDivider direction="right-to-left" />
        </div>
      </PrismSection>
    </SectionWrapper>
  );
};
