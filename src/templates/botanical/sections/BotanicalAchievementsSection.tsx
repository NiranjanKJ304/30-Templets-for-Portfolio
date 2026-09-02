/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalAchievementsSection - Recognition and distinguished honors
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { Trophy } from 'lucide-react';

interface BotanicalAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BotanicalAchievementsSection: React.FC<BotanicalAchievementsSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.achievements || data.achievements.length === 0) return null;

  return (
    <section
      id="achievements"
      className="py-20 md:py-28 border-b border-[#D8D4C8] dark:border-[#2C3E30] bg-[#F6F5F0] dark:bg-[#101712] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
            08 / Distinctions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal">
            Honors & Laurels
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.achievements.map((ach, idx) => (
            <div
              key={ach.id || idx}
              className="p-7 rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#F2E5DC] dark:bg-[#2A1D18] text-[#BF6648] dark:text-[#E58A6C] flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-serif text-lg font-medium text-[#1C261E] dark:text-[#F0F5F1]">
                    {ach.title}
                  </h3>
                  {ach.date && (
                    <span className="text-xs font-mono text-[#586359] dark:text-[#9BB0A0]">
                      {ach.date}
                    </span>
                  )}
                </div>
                {ach.organization && (
                  <p className="text-xs font-mono text-[#4A6B53] dark:text-[#8EB697] mb-2">
                    Conferred by {ach.organization}
                  </p>
                )}
                {ach.description && (
                  <p className="text-xs sm:text-sm text-[#586359] dark:text-[#9BB0A0] leading-relaxed font-sans">
                    {ach.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
