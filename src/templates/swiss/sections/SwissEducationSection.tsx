/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissEducationSection - Systematic academic register
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissEducationSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const SwissEducationSection: React.FC<SwissEducationSectionProps> = ({
  data,
  enabled,
  indexNumber = '06',
}) => {
  const { education } = data;
  const hasData = hasSectionData('education', data);

  if (!enabled || !hasData || !education || education.length === 0) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b border-neutral-900 dark:border-neutral-100"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Education & Scholastic Record"
        subtitle="Academic foundations, degree qualifications, and institutional research."
        count={education.length}
        countLabel="ACADEMIC RECORDS"
      />

      <div className="border border-neutral-900 dark:border-neutral-100 divide-y divide-neutral-900 dark:divide-neutral-100">
        {education.map((item, idx) => (
          <div
            key={item.id || idx}
            className="grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-neutral-950 divide-y lg:divide-y-0 lg:divide-x divide-neutral-900 dark:divide-neutral-100 p-6 sm:p-8 items-start gap-6 lg:gap-0"
          >
            {/* Period & Location (Cols 1-3) */}
            <div className="lg:col-span-3 space-y-2 lg:pr-6 font-mono text-xs">
              <div className="text-red-600 dark:text-red-500 font-bold uppercase tracking-wider">
                // PERIOD
              </div>
              <div className="text-sm sm:text-base font-black text-neutral-950 dark:text-neutral-50">
                {item.startDate} — {item.current ? 'PRESENT' : item.endDate || 'N/A'}
              </div>
              {item.location && (
                <div className="text-neutral-500 uppercase">{item.location}</div>
              )}
            </div>

            {/* Institution & Degree (Cols 4-7) */}
            <div className="lg:col-span-4 space-y-2 lg:px-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-neutral-50 uppercase tracking-tight">
                {item.institution}
              </h3>
              <div className="font-mono text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                {item.degree}
                {item.fieldOfStudy ? ` in ${item.fieldOfStudy}` : ''}
              </div>
              {item.institutionUrl && (
                <a
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-red-600 dark:text-red-500 hover:underline pt-1"
                >
                  <span>Institution Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Description & Activities (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-3 lg:pl-6">
              {item.description && (
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              )}

              {item.grade && (
                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="font-bold text-neutral-950 dark:text-neutral-50 uppercase">GRADE / HONORS:</span> {item.grade}
                </div>
              )}

              {item.activities && (
                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="font-bold text-neutral-950 dark:text-neutral-50 uppercase">ACTIVITIES:</span> {item.activities}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
