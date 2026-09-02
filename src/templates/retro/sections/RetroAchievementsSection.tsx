/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroAchievementsSection - Poster recognition blocks
 */

import React from 'react';
import { Trophy, ExternalLink, Calendar } from 'lucide-react';
import type { PortfolioData, Achievement } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroAchievementsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const RetroAchievementsSection: React.FC<RetroAchievementsSectionProps> = ({
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
      className="py-16 sm:py-24 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="DISTINCTION"
        title="Honors & Awards"
        subtitle="Competitive distinctions, keynotes, published patents, and recognitions."
        accentColor="mustard"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item: Achievement, idx: number) => {
          const numStr = String(idx + 1).padStart(2, '0');

          return (
            <div
              key={item.id || idx}
              className="bg-[#FFF9EA] dark:bg-[#362E28] border-3 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#E9B949] flex flex-col justify-between space-y-4 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] font-mono font-black text-xs flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                    {numStr}
                  </span>
                  {item.date && (
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#665D55] dark:text-[#A89B8E]">
                      <Calendar className="w-3 h-3 text-[#E76F2E]" />
                      <span>{item.date}</span>
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-2">
                  <Trophy className="w-5 h-5 text-[#E9B949] shrink-0 mt-0.5" />
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#29231F] dark:text-[#FFF4D6]">
                    {item.title}
                  </h3>
                </div>

                {item.issuer && (
                  <div className="font-mono text-xs font-bold text-[#E76F2E]">
                    AWARDED BY: {item.issuer}
                  </div>
                )}

                {item.category && (
                  <div className="inline-block px-2 py-0.5 rounded bg-[#FFF4D6] dark:bg-[#29231F] border border-[#29231F]/20 font-mono text-[11px] font-bold text-[#665D55] dark:text-[#A89B8E]">
                    [{item.category}]
                  </div>
                )}

                {item.description && (
                  <p className="text-sm text-[#665D55] dark:text-[#D8CBB7] leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              {item.url && (
                <div className="pt-3 border-t border-[#29231F]/10 dark:border-[#FFF4D6]/10">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#29231F] dark:text-[#FFF4D6] hover:text-[#E76F2E] transition-colors"
                  >
                    <span>View Recognition</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
