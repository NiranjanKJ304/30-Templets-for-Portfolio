/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveAchievementsSection - Structured honors and publication ledger
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveAchievementsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const ExecutiveAchievementsSection: React.FC<ExecutiveAchievementsSectionProps> = ({
  data,
  enabled,
  indexStr = '08',
}) => {
  const { achievements } = data;
  const hasData = hasSectionData('achievements', data);

  if (!enabled || !hasData || !achievements || achievements.length === 0) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <ExecutiveSectionHeader
        index={indexStr}
        title="Distinctions & Key Recognitions"
        subtitle="Public honors, published works, industry recognitions, and competitive awards."
        count={achievements.length}
      />

      <div className="border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800">
        {achievements.map((item, idx) => (
          <article
            key={item.id}
            className="p-6 sm:p-8 hover:bg-neutral-50/60 dark:hover:bg-neutral-850/60 transition-colors flex flex-col md:flex-row md:items-baseline justify-between gap-4"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-neutral-400">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <h3 className="font-serif text-xl font-bold text-neutral-950 dark:text-neutral-50">
                  {item.title}
                </h3>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {item.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans pl-7">
                  {item.description}
                </p>
              )}
            </div>

            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0 pl-7 md:pl-0 md:text-right">
              {item.issuer && <div className="font-semibold">{item.issuer}</div>}
              {item.date && <div>{item.date}</div>}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
