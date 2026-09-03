import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';

interface ArchiveSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
}

export const ArchiveSkillsSection: React.FC<ArchiveSkillsSectionProps> = ({ data, enabled = true, index }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <ArchiveEntry index={index} title="Skills" className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {skills.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 border-b border-[#C8C5BA] dark:border-[#464943] pb-4">
                <h4 className="font-heading font-bold text-xl uppercase tracking-tight text-[#20211F] dark:text-[#F1EEE5]">
                  {group.category}
                </h4>
                {group.description && (
                  <p className="font-mono text-xs text-[#686861] dark:text-[#AAA9A0]">
                    {group.description}
                  </p>
                )}
              </div>
              
              <ul className="flex flex-col gap-3">
                {group.skills.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <li key={sIdx} className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#C8C5BA] dark:border-[#464943] pb-2 last:border-0 last:pb-0">
                      <span className="font-body text-[#20211F] dark:text-[#F1EEE5] text-base">
                        {name}
                      </span>
                      {(level || years) && (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D4937] dark:text-[#D4755D] font-bold">
                          {[level, years && `${years}Y`].filter(Boolean).join(' · ')}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
