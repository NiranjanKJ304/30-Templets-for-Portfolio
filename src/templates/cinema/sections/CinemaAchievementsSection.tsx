/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaAchievementsSection - Meaningful distinctions and public honors
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaAchievementsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
}

export const CinemaAchievementsSection: React.FC<CinemaAchievementsSectionProps> = ({
  data,
  enabled,
  chapterIndex = '08',
}) => {
  const { achievements } = data;
  const hasData = hasSectionData('achievements', data);

  if (!enabled || !hasData || !achievements || achievements.length === 0) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="py-24 sm:py-36"
      containerClassName="max-w-6xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Distinctions & Key Recognitions"
        subtitle="Public recognitions, published contributions, key honors, and awards."
        count={achievements.length}
        countLabel="HONORS"
      />

      <div className="bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl divide-y divide-neutral-200 dark:divide-white/5 overflow-hidden">
        {achievements.map((item, idx) => (
          <article
            key={item.id}
            className="p-8 hover:bg-amber-500/[0.04] transition-colors flex flex-col md:flex-row md:items-baseline justify-between gap-6 group"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-bold">
                  // 0{idx + 1}
                </span>
                <h3 className="text-2xl font-bold font-serif text-neutral-900 dark:text-neutral-50 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-amber-500"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {item.description && (
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans pl-8 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>

            <div className="text-xs font-mono text-neutral-500 shrink-0 pl-8 md:pl-0 md:text-right">
              {item.issuer && (
                <div className="text-neutral-800 dark:text-neutral-200 font-bold">
                  {item.issuer}
                </div>
              )}
              {item.date && <div>{item.date}</div>}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
