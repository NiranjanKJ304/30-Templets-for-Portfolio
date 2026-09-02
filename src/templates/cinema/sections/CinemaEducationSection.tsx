/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaEducationSection - Academic formations and scholarly milestones
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaEducationSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
}

export const CinemaEducationSection: React.FC<CinemaEducationSectionProps> = ({
  data,
  enabled,
  chapterIndex = '06',
}) => {
  const { education } = data;
  const hasData = hasSectionData('education', data);

  if (!enabled || !hasData || !education || education.length === 0) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-24 sm:py-36"
      containerClassName="max-w-6xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Scholarly & Academic Foundations"
        subtitle="Higher academic preparation, institutional qualifications, and foundational study."
        count={education.length}
        countLabel="DEGREES"
      />

      <div className="space-y-10">
        {education.map((item) => (
          <article
            key={item.id}
            className="p-8 sm:p-10 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl space-y-4 hover:border-amber-500/40 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-neutral-200 dark:border-white/5 pb-4">
              <div>
                <h3 className="text-2xl font-bold font-serif text-neutral-900 dark:text-neutral-50">
                  {item.degree}
                  {item.fieldOfStudy ? ` in ${item.fieldOfStudy}` : ''}
                </h3>
                <div className="font-mono text-sm text-amber-600 dark:text-amber-400 mt-1">
                  {item.institution}
                  {item.location && ` · ${item.location}`}
                </div>
              </div>

              <div className="font-mono text-xs text-neutral-500 shrink-0">
                {item.startDate && `${item.startDate} — `}
                {item.current ? 'PRESENT' : item.endDate || ''}
              </div>
            </div>

            {item.description && (
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                {item.description}
              </p>
            )}

            {item.grade && (
              <div className="text-xs font-mono text-amber-600 dark:text-amber-400">
                GRADE / DISTINCTION: {item.grade}
              </div>
            )}

            {item.activities && item.activities.length > 0 && (
              <div className="text-xs font-mono text-neutral-500 pt-1">
                AFFILIATIONS & ACTIVITIES: {item.activities.join(' · ')}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
