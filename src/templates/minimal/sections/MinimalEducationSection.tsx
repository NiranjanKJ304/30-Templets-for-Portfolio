/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalEducationSection - Academic background and honors for Minimal template
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalEducationSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const MinimalEducationSection: React.FC<MinimalEducationSectionProps> = ({
  data,
  enabled,
}) => {
  const { education } = data;
  const hasData = hasSectionData('education', data);

  if (!enabled || !hasData || !education || education.length === 0) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-20"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="Education" count={education.length} />

      <div className="space-y-8">
        {education.map((item) => (
          <article
            key={item.id}
            className="border-b border-[#1C1917]/5 dark:border-neutral-800 pb-8 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                {item.degree}
                {item.fieldOfStudy ? ` in ${item.fieldOfStudy}` : ''}
              </h3>

              <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
                {item.startDate && `${item.startDate} — `}
                {item.current ? 'Present' : item.endDate || ''}
              </div>
            </div>

            <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
              {item.institution}
              {item.location ? `, ${item.location}` : ''}
              {item.grade ? ` · ${item.grade}` : ''}
            </div>

            {item.description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans leading-relaxed">
                {item.description}
              </p>
            )}

            {item.activities && item.activities.length > 0 && (
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 font-mono">
                Activities: {item.activities.join(', ')}
              </p>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
