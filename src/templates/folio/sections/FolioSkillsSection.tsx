import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FolioSheet } from '../components/FolioSheet';

interface FolioSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  pageNum: string;
}

export const FolioSkillsSection: React.FC<FolioSkillsSectionProps> = ({ data, enabled = true, pageNum }) => {
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
      <FolioSheet pageNum={pageNum} title="CAPABILITIES" offset="right">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {skills.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col gap-8">
              <h4 className="font-heading text-3xl font-normal text-[#1D2020] dark:text-[#F0EEE6] pb-4 border-b border-[#C9C5BA]/50 dark:border-[#444A45]/50">
                {group.category}
              </h4>
              
              <ul className="flex flex-col gap-2">
                {group.skills.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <li key={sIdx} className="flex items-center justify-between py-2 group">
                      <span className="font-body text-lg font-light text-[#1D2020] dark:text-[#F0EEE6]">
                        {name}
                      </span>
                      {(level || years) && (
                        <div className="flex items-center gap-4">
                          <span className="flex-1 border-b border-dotted border-[#C9C5BA] dark:border-[#444A45] opacity-30 mx-4 w-12 hidden sm:block"></span>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#70736F] dark:text-[#A5AAA3]">
                            {[level, years && `${years}y`].filter(Boolean).join(' · ')}
                          </span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </FolioSheet>
    </SectionWrapper>
  );
};
