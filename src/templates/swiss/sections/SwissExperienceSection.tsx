/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissExperienceSection - Systematic career & employment index
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissExperienceSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const SwissExperienceSection: React.FC<SwissExperienceSectionProps> = ({
  data,
  enabled,
  indexNumber = '05',
}) => {
  const { experience } = data;
  const hasData = hasSectionData('experience', data);

  if (!enabled || !hasData || !experience || experience.length === 0) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b border-neutral-900 dark:border-neutral-100"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Experience & Appointments"
        subtitle="Chronological career appointments, leadership roles, and operational history."
        count={experience.length}
        countLabel="APPOINTMENTS"
      />

      <div className="border border-neutral-900 dark:border-neutral-100 divide-y divide-neutral-900 dark:divide-neutral-100">
        {experience.map((item, idx) => (
          <div
            key={item.id || idx}
            className="grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-neutral-950 divide-y lg:divide-y-0 lg:divide-x divide-neutral-900 dark:divide-neutral-100 p-6 sm:p-8 items-start gap-6 lg:gap-0"
          >
            {/* Date & Period (Cols 1-3) */}
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

            {/* Role & Company (Cols 4-7) */}
            <div className="lg:col-span-4 space-y-2 lg:px-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-neutral-50 uppercase tracking-tight">
                {item.role}
              </h3>
              <div className="flex items-center gap-2 font-mono text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                <span>{item.company}</span>
                {item.companyUrl && (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 dark:text-red-500 hover:underline"
                    aria-label={`Visit ${item.company} website`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Description & Highlights (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-4 lg:pl-6">
              {item.description && (
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <ul className="space-y-1.5 font-sans text-xs text-neutral-600 dark:text-neutral-400">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-500 font-mono font-bold">―</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono text-[10px] text-neutral-600 dark:text-neutral-400 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
