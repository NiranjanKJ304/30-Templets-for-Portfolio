/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveSkillsSection - Structured competency matrix with categorized domains
 */

import React from 'react';
import type { PortfolioData, SkillGroup, SkillItem } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveSkillsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const ExecutiveSkillsSection: React.FC<ExecutiveSkillsSectionProps> = ({
  data,
  enabled,
  indexStr = '03',
}) => {
  const { skills } = data;
  const hasData = hasSectionData('skills', data);

  if (!enabled || !hasData || !skills || skills.length === 0) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <ExecutiveSectionHeader
        index={indexStr}
        title="Core Competencies & Capabilities"
        subtitle="Structured domain capabilities, operational proficiencies, and strategic skillsets."
        count={skills.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((group: SkillGroup, groupIdx) => (
          <div
            key={groupIdx}
            className="p-6 sm:p-8 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                DOMAIN 0{groupIdx + 1}
              </div>

              <h3 className="font-serif text-xl font-bold text-neutral-950 dark:text-neutral-50">
                {group.category}
              </h3>

              {group.description && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  {group.description}
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
              <ul className="space-y-2">
                {group.skills.map((skill: string | SkillItem, idx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;

                  return (
                    <li
                      key={idx}
                      className="flex items-center justify-between text-xs font-sans text-neutral-800 dark:text-neutral-200 py-1 border-b border-neutral-50 dark:border-neutral-850 last:border-b-0"
                    >
                      <span className="font-medium">{name}</span>
                      {level && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5">
                          {String(level)}
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
    </SectionWrapper>
  );
};
