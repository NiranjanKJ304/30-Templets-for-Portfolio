/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraSkillsSection - Luminous capability clusters with faithful level badges
 */

import React from 'react';
import type { PortfolioData, SkillGroup, SkillItem } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraSkillsSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const AuroraSkillsSection: React.FC<AuroraSkillsSectionProps> = ({
  data,
  enabled,
}) => {
  const { skills } = data;
  const hasData = hasSectionData('skills', data);

  if (!enabled || !hasData || !skills || skills.length === 0) return null;

  // Calculate total skill items count
  const totalSkillsCount = skills.reduce((total, group) => total + group.skills.length, 0);

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="Skills & Competencies"
        title="Technical tools, methodologies, and domains."
        subtitle="Core proficiencies and applied toolchains."
        count={totalSkillsCount}
        countLabel="SKILLS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skills.map((group: SkillGroup, idx: number) => (
          <div
            key={idx}
            className="rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800/80 shadow-md shadow-purple-500/5 backdrop-blur-xl space-y-6"
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <div>
                <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-50 tracking-tight">
                  {group.category}
                </h3>
                {group.description && (
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {group.description}
                  </p>
                )}
              </div>
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-full">
                {group.skills.length}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skillItem: string | SkillItem, sIdx: number) => {
                const isObj = typeof skillItem === 'object' && skillItem !== null;
                const skillName = isObj ? (skillItem as SkillItem).name : (skillItem as string);
                const skillLevel = isObj ? (skillItem as SkillItem).level : undefined;

                return (
                  <div
                    key={sIdx}
                    className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-50 dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all shadow-2xs"
                  >
                    <span className="font-medium">{skillName}</span>
                    {skillLevel !== undefined && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">
                        {String(skillLevel)}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
