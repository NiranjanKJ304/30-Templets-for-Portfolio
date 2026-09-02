/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraAchievementsSection - Luminous recognition & honors register
 */

import React from 'react';
import { Trophy, Calendar, Award } from 'lucide-react';
import type { PortfolioData, Achievement } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraAchievementsSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const AuroraAchievementsSection: React.FC<AuroraAchievementsSectionProps> = ({
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
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="Honors & Distinctions"
        title="Key recognitions, awards, and distinctions."
        subtitle="Noteworthy industry citations and career milestones."
        count={achievements.length}
        countLabel="HONORS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {achievements.map((item: Achievement, idx: number) => (
          <div
            key={item.id || idx}
            className="rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800/80 shadow-md shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200/60 dark:border-amber-800/60">
                  <Trophy className="w-5 h-5" />
                </div>
                {item.date && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight">
                  {item.title}
                </h3>
                {item.issuer && (
                  <div className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                    {item.issuer}
                  </div>
                )}
              </div>

              {item.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
