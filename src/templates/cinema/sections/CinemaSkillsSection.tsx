/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaSkillsSection - Universal capability matrix and domain competencies
 */

import React from 'react';
import type { PortfolioData, SkillItem } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaSkillsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
}

export const CinemaSkillsSection: React.FC<CinemaSkillsSectionProps> = ({
  data,
  enabled,
  chapterIndex = '03',
}) => {
  const { skills } = data;
  const hasData = hasSectionData('skills', data);

  if (!enabled || !hasData || !skills || skills.length === 0) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-24 sm:py-32"
      containerClassName="max-w-6xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Disciplines & Competencies"
        subtitle="Universal capability domains, technical proficiencies, and strategic toolsets."
        count={skills.length}
        countLabel="DOMAINS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((group, groupIdx) => (
          <article
            key={groupIdx}
            className="p-8 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl space-y-6 hover:border-amber-500/40 transition-all group"
          >
            {/* Domain Group Header */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
                <span>DOMAIN 0{groupIdx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-neutral-900 dark:text-neutral-50">
                {group.category}
              </h3>
              {group.description && (
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans">
                  {group.description}
                </p>
              )}
            </div>

            {/* Individual Skills Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {group.skills.map((skill, idx) => {
                const isObj = typeof skill === 'object' && skill !== null;
                const name = isObj ? (skill as SkillItem).name : (skill as string);
                const level = isObj ? (skill as SkillItem).level : undefined;

                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-lg text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:border-amber-500/60 hover:text-amber-500 transition-colors"
                  >
                    <span>{name}</span>
                    {level && (
                      <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold uppercase opacity-80">
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
