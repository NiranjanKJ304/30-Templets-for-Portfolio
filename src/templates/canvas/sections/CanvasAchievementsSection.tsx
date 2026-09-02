/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasAchievementsSection - Honors, recognitions, and significant distinctions
 */

import React from 'react';
import { Trophy, ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasAchievementsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
}

export const CanvasAchievementsSection: React.FC<CanvasAchievementsSectionProps> = ({
  data,
  enabled,
  sectionNumber = '08',
}) => {
  const { achievements } = data;
  const hasData = hasSectionData('achievements', data);

  if (!enabled || !hasData || !achievements || achievements.length === 0) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-32"
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Distinctions & Honors"
        subtitle="Public recognitions, competition milestones, and institutional distinctions."
        count={achievements.length}
        countLabel="AWARDS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {achievements.map((item, idx) => (
          <article
            key={item.id}
            className="p-8 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg space-y-4 hover:border-orange-600 dark:hover:border-orange-500 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                <span className="text-orange-600 dark:text-orange-400 font-bold">
                  // RECOG-0{idx + 1}
                </span>
                {item.date && <span>{item.date}</span>}
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-orange-600 dark:text-orange-400 shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-neutral-900 dark:text-neutral-50 leading-snug">
                    {item.title}
                  </h3>
                  {item.issuer && (
                    <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                      {item.issuer}
                    </div>
                  )}
                </div>
              </div>

              {item.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed pt-2">
                  {item.description}
                </p>
              )}
            </div>

            {item.url && (
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 hover:underline"
                >
                  <span>Recognition Record</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
