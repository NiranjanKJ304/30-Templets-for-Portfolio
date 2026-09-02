/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneySkillsSection - Competency clusters and capability nodes
 */

import React from 'react';
import type { PortfolioData, SkillItem } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { JourneySectionHeader } from '../components/JourneySectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface JourneySkillsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterNumber?: string;
}

export const JourneySkillsSection: React.FC<JourneySkillsSectionProps> = ({
  data,
  enabled,
  chapterNumber = '03',
}) => {
  const { skills } = data;
  const hasData = hasSectionData('skills', data);

  if (!enabled || !hasData || !skills || skills.length === 0) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800"
      containerClassName="max-w-5xl"
    >
      <JourneySectionHeader
        chapterNumber={chapterNumber}
        title="Skills & Capability Clusters"
        subtitle="Domains of technical mastery, specialized methods, and operative tools."
        count={skills.length}
        countLabel="CLUSTERS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, idx) => (
          <div
            key={group.category || idx}
            className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xs space-y-4 hover:border-teal-500 transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-xs text-neutral-400 pb-2 border-b border-neutral-100 dark:border-neutral-800">
              <span className="text-teal-700 dark:text-teal-400 font-semibold uppercase tracking-wider">
                CLUSTER // 0{idx + 1}
              </span>
              <span>{group.skills.length} Items</span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                {group.category}
              </h3>
              {group.description && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {group.description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {group.skills.map((skill, sIdx) => {
                const skillName = typeof skill === 'string' ? skill : skill.name;
                const skillLevel = typeof skill === 'object' ? (skill as SkillItem).level : undefined;

                return (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/80 text-neutral-800 dark:text-neutral-200"
                  >
                    <span>{skillName}</span>
                    {skillLevel !== undefined && (
                      <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400 font-semibold">
                        [{skillLevel}]
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
