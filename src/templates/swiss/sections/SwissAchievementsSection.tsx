/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissAchievementsSection - Structured honors & distinctions register
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissAchievementsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const SwissAchievementsSection: React.FC<SwissAchievementsSectionProps> = ({
  data,
  enabled,
  indexNumber = '08',
}) => {
  const { achievements } = data;
  const hasData = hasSectionData('achievements', data);

  if (!enabled || !hasData || !achievements || achievements.length === 0) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b border-neutral-900 dark:border-neutral-100"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Achievements & Honors"
        subtitle="Recognitions, competitive honors, fellowships, and career distinctions."
        count={achievements.length}
        countLabel="DISTINCTIONS"
      />

      <div className="border border-neutral-900 dark:border-neutral-100 divide-y divide-neutral-900 dark:divide-neutral-100">
        {achievements.map((item, idx) => (
          <div
            key={item.id || idx}
            className="grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-neutral-950 p-6 sm:p-8 items-start gap-4 lg:gap-8"
          >
            {/* Index & Date (Cols 1-3) */}
            <div className="lg:col-span-3 font-mono text-xs space-y-1">
              <div className="text-red-600 dark:text-red-500 font-bold uppercase tracking-wider">
                HONOR // 0{idx + 1}
              </div>
              {item.date && (
                <div className="font-bold text-neutral-950 dark:text-neutral-50">{item.date}</div>
              )}
              {item.issuer && <div className="text-neutral-500 uppercase">{item.issuer}</div>}
            </div>

            {/* Title & Description (Cols 4-10) */}
            <div className="lg:col-span-7 space-y-2">
              <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-50 uppercase tracking-tight">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              )}
            </div>

            {/* Link (Cols 11-12) */}
            <div className="lg:col-span-2 flex lg:justify-end">
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold text-red-600 dark:text-red-500 hover:underline uppercase"
                >
                  <span>Citation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
