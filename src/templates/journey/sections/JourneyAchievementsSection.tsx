/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyAchievementsSection - Verified distinctions and milestones
 */

import React from 'react';
import { Trophy, ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { JourneySectionHeader } from '../components/JourneySectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface JourneyAchievementsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterNumber?: string;
}

export const JourneyAchievementsSection: React.FC<JourneyAchievementsSectionProps> = ({
  data,
  enabled,
  chapterNumber = '08',
}) => {
  const { achievements } = data;
  const hasData = hasSectionData('achievements', data);

  if (!enabled || !hasData || !achievements || achievements.length === 0) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800"
      containerClassName="max-w-5xl"
    >
      <JourneySectionHeader
        chapterNumber={chapterNumber}
        title="Achievements & Honors"
        subtitle="Public recognitions, institutional distinctions, and notable milestones."
        count={achievements.length}
        countLabel="AWARDS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <div
            key={item.id || idx}
            className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xs space-y-4 hover:border-teal-500 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                <span className="text-teal-700 dark:text-teal-400 font-bold">
                  // RECOG-0{idx + 1}
                </span>
                {item.date && <span>{item.date}</span>}
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 leading-snug">
                    {item.title}
                  </h3>
                  {item.issuer && (
                    <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mt-0.5">
                      {item.issuer}
                    </div>
                  )}
                </div>
              </div>

              {item.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
                  {item.description}
                </p>
              )}
            </div>

            {item.url && (
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 hover:underline"
                >
                  <span>View Recognition</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
