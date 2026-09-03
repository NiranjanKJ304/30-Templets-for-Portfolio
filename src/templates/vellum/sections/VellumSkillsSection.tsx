import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';
import { VellumRule } from '../components/VellumRule';

interface VellumSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const VellumSkillsSection: React.FC<VellumSkillsSectionProps> = ({ data, enabled = true }) => {
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
      <VellumSection title="Capabilities" number="02">
        <div className="flex flex-col gap-16 pt-4">
          {skills.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col relative">
              <VellumAnnotation marker={`cat.${gIdx + 1}`} color="olive" position="left">
                <h4 className="font-heading italic text-2xl text-[#242522] dark:text-[#F0EDE3] mb-6">
                  {group.category}
                </h4>
              </VellumAnnotation>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {group.skills.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <div key={sIdx} className="flex flex-col relative">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="font-body text-base text-[#242522] dark:text-[#F0EDE3]">
                          {name}
                        </span>
                        {(level || years) && (
                          <span className="font-mono text-[10px] text-[#A94F3E] dark:text-[#D27661] uppercase tracking-widest pl-4">
                            {[level, years && `${years}y`].filter(Boolean).join(' / ')}
                          </span>
                        )}
                      </div>
                      <VellumRule dashed />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
