/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissSkillsSection - Systematic capability taxonomy & matrix
 */

import React from 'react';
import type { PortfolioData, SkillItem } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissSkillsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const SwissSkillsSection: React.FC<SwissSkillsSectionProps> = ({
  data,
  enabled,
  indexNumber = '03',
}) => {
  const { skills } = data;
  const hasData = hasSectionData('skills', data);

  if (!enabled || !hasData || !skills || skills.length === 0) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b border-neutral-900 dark:border-neutral-100"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Capability Matrix & Taxonomy"
        subtitle="Structured domain capabilities, methodological proficiencies, and specialized tools."
        count={skills.reduce((acc, g) => acc + g.skills.length, 0)}
        countLabel="CAPABILITIES"
      />

      <div className="border border-neutral-900 dark:border-neutral-100 divide-y divide-neutral-900 dark:divide-neutral-100">
        {skills.map((group, gIdx) => (
          <div
            key={gIdx}
            className="grid grid-cols-1 md:grid-cols-12 bg-white dark:bg-neutral-950 divide-y md:divide-y-0 md:divide-x divide-neutral-900 dark:divide-neutral-100"
          >
            {/* Category Column (Cols 1-4) */}
            <div className="md:col-span-4 p-6 bg-neutral-50 dark:bg-neutral-900 space-y-2">
              <div className="font-mono text-xs text-red-600 dark:text-red-500 font-bold uppercase tracking-widest">
                // TAXONOMY 0{gIdx + 1}
              </div>
              <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-50 uppercase tracking-tight">
                {group.category}
              </h3>
              {group.description && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  {group.description}
                </p>
              )}
            </div>

            {/* Skills List Column (Cols 5-12) */}
            <div className="md:col-span-8 p-6 flex flex-wrap gap-2.5 items-center">
              {group.skills.map((skill, sIdx) => {
                const isObj = typeof skill === 'object' && skill !== null;
                const name = isObj ? (skill as SkillItem).name : (skill as string);
                const level = isObj ? (skill as SkillItem).level : undefined;

                return (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 font-mono text-xs text-neutral-900 dark:text-neutral-100"
                  >
                    <span className="font-semibold">{name}</span>
                    {level && (
                      <span className="text-red-600 dark:text-red-500 text-[10px] font-bold">
                        [{level}]
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
