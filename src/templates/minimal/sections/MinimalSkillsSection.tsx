/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalSkillsSection - Categorized capabilities and competencies for Minimal template
 */

import React from 'react';
import type { PortfolioData, SkillGroup, SkillItem } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalSkillsSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const MinimalSkillsSection: React.FC<MinimalSkillsSectionProps> = ({ data, enabled }) => {
  const { skills } = data;
  const hasData = hasSectionData('skills', data);

  if (!enabled || !hasData || !skills || skills.length === 0) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-20"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="Skills & Capabilities" count={skills.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {skills.map((group: SkillGroup, groupIdx) => (
          <div key={groupIdx} className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              {group.category}
            </h3>

            {group.description && (
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {group.description}
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill: string | SkillItem, idx) => {
                const name = typeof skill === 'string' ? skill : skill.name;
                const level = typeof skill === 'object' ? skill.level : undefined;

                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-2xs text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60"
                  >
                    <span>{name}</span>
                    {level && (
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-normal">
                        ({level})
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
