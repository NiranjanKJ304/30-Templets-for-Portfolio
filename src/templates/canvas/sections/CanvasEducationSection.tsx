/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasEducationSection - Academic foundations and degrees
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasEducationSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
}

export const CanvasEducationSection: React.FC<CanvasEducationSectionProps> = ({
  data,
  enabled,
  sectionNumber = '06',
}) => {
  const { education } = data;
  const hasData = hasSectionData('education', data);

  if (!enabled || !hasData || !education || education.length === 0) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-32"
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Academic & Scholarly Foundations"
        subtitle="Higher academic preparation, institutional qualifications, and foundational study."
        count={education.length}
        countLabel="DEGREES"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item, idx) => (
          <article
            key={item.id}
            className="p-8 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg space-y-4 hover:border-orange-600 dark:hover:border-orange-500 transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
              <span className="text-orange-600 dark:text-orange-400 font-bold">
                // ACADEMY 0{idx + 1}
              </span>
              <span>
                {item.startDate && `${item.startDate} — `}
                {item.current ? 'PRESENT' : item.endDate || ''}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-neutral-900 dark:text-neutral-50">
                {item.degree}
                {item.fieldOfStudy ? ` in ${item.fieldOfStudy}` : ''}
              </h3>
              <div className="font-mono text-sm text-neutral-700 dark:text-neutral-300">
                {item.institution}
                {item.location && ` · ${item.location}`}
              </div>
            </div>

            {item.description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                {item.description}
              </p>
            )}

            {item.grade && (
              <div className="text-xs font-mono text-orange-600 dark:text-orange-400 font-bold">
                DISTINCTION / GRADE: {item.grade}
              </div>
            )}

            {item.activities && item.activities.length > 0 && (
              <div className="text-xs font-mono text-neutral-500 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                ACTIVITIES: {item.activities.join(' · ')}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
