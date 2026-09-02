/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalAchievementsSection - Honors, recognitions, and publications for Minimal template
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalAchievementsSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const MinimalAchievementsSection: React.FC<MinimalAchievementsSectionProps> = ({
  data,
  enabled,
}) => {
  const { achievements } = data;
  const hasData = hasSectionData('achievements', data);

  if (!enabled || !hasData || !achievements || achievements.length === 0) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-20"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="Achievements & Honors" count={achievements.length} />

      <div className="space-y-6">
        {achievements.map((item) => (
          <article
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#1C1917]/5 dark:border-neutral-800 pb-5 last:border-b-0 last:pb-0"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                  {item.title}
                </h3>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {item.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              )}
            </div>

            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0 text-left sm:text-right">
              {item.issuer && <div>{item.issuer}</div>}
              {item.date && <div>{item.date}</div>}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
