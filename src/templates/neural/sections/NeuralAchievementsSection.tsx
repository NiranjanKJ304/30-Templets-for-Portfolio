/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralAchievementsSection - Indexed distinctions and recognitions ledger
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralAchievementsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const NeuralAchievementsSection: React.FC<NeuralAchievementsSectionProps> = ({
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
      <NeuralSectionHeader
        index={indexStr}
        title="Distinctions & Key Recognitions"
        subtitle="Public recognitions, published contributions, key awards, and honors."
        count={achievements.length}
      />

      <div className="bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 divide-y divide-neutral-200 dark:divide-white/5">
        {achievements.map((item, idx) => (
          <article
            key={item.id}
            className="p-6 sm:p-8 hover:bg-cyan-500/[0.03] transition-colors flex flex-col md:flex-row md:items-baseline justify-between gap-4 group"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                  // {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold font-sans text-neutral-900 dark:text-neutral-50 group-hover:text-cyan-500 transition-colors">
                  {item.title}
                </h3>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-cyan-500"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {item.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans pl-8">
                  {item.description}
                </p>
              )}
            </div>

            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0 pl-8 md:pl-0 md:text-right">
              {item.issuer && <div className="text-neutral-700 dark:text-neutral-300 font-semibold">{item.issuer}</div>}
              {item.date && <div>{item.date}</div>}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
