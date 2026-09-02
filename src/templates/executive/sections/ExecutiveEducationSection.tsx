/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveEducationSection - Refined credentials and academic history
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveEducationSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const ExecutiveEducationSection: React.FC<ExecutiveEducationSectionProps> = ({
  data,
  enabled,
  indexStr = '06',
}) => {
  const { education } = data;
  const hasData = hasSectionData('education', data);

  if (!enabled || !hasData || !education || education.length === 0) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <ExecutiveSectionHeader
        index={indexStr}
        title="Academic Credentials & Formative Honors"
        subtitle="Formal academic preparation, institutional qualifications, and scholarly foundations."
        count={education.length}
      />

      <div className="space-y-8">
        {education.map((item) => (
          <article
            key={item.id}
            className="p-8 sm:p-10 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
              {/* Left Column: Dates & Institutional Info (4 cols) */}
              <div className="lg:col-span-4 space-y-1 border-b lg:border-b-0 lg:border-r border-[#1A1A19]/10 dark:border-neutral-800 pb-4 lg:pb-0 lg:pr-6">
                <div className="text-xs font-mono font-bold tracking-widest text-neutral-900 dark:text-neutral-100 uppercase">
                  {item.startDate && `${item.startDate} — `}
                  {item.current ? 'PRESENT' : item.endDate || ''}
                </div>

                <div className="text-sm font-serif text-neutral-700 dark:text-neutral-300 font-medium">
                  {item.institution}
                </div>

                {item.location && (
                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {item.location}
                  </div>
                )}

                {item.grade && (
                  <div className="pt-2 text-xs font-mono text-neutral-800 dark:text-neutral-200">
                    HONOR / GRADE: {item.grade}
                  </div>
                )}
              </div>

              {/* Right Column: Degree & Activities (8 cols) */}
              <div className="lg:col-span-8 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                  {item.degree}
                  {item.fieldOfStudy ? ` in ${item.fieldOfStudy}` : ''}
                </h3>

                {item.description && (
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.activities && item.activities.length > 0 && (
                  <div className="pt-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                      AFFILIATIONS & ACTIVITIES
                    </div>
                    <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                      {item.activities.join(' · ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
