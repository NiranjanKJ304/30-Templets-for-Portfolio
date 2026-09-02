/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasSkillsSection - Modular capability matrix and domain competencies
 */

import React from 'react';
import type { PortfolioData, SkillItem } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasSkillsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
}

export const CanvasSkillsSection: React.FC<CanvasSkillsSectionProps> = ({
  data,
  enabled,
  sectionNumber = '03',
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
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Disciplines & Competencies"
        subtitle="Universal capability domains, strategic skillsets, and technical proficiencies."
        count={skills.length}
        countLabel="CATEGORIES"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skills.map((group, gIdx) => (
          <article
            key={gIdx}
            className="p-8 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg space-y-6 hover:border-orange-600 dark:hover:border-orange-500 transition-colors"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between font-mono text-xs text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider">
                <span>SECTOR // 0{gIdx + 1}</span>
                <span className="w-1.5 h-1.5 bg-orange-600 dark:bg-orange-400" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 dark:text-neutral-50">
                {group.category}
              </h3>
              {group.description && (
                <p className="text-xs sm:text-sm text-neutral-500 font-sans">
                  {group.description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
              {group.skills.map((skill, sIdx) => {
                const isObj = typeof skill === 'object' && skill !== null;
                const name = isObj ? (skill as SkillItem).name : (skill as string);
                const level = isObj ? (skill as SkillItem).level : undefined;

                return (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:border-orange-600 hover:text-orange-600 transition-colors"
                  >
                    <span>{name}</span>
                    {level && (
                      <span className="text-[10px] text-orange-600 dark:text-orange-400 font-semibold uppercase opacity-90">
                        [{String(level)}]
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
