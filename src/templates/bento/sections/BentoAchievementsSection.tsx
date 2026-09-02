/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoAchievementsSection - Honors and recognition tiles
 */

import React from 'react';
import type { PortfolioData, Achievement } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoSectionHeader } from '../components/BentoSectionHeader';
import { Trophy, ExternalLink, Calendar } from 'lucide-react';

interface BentoAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BentoAchievementsSection: React.FC<BentoAchievementsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const achievements = data.achievements;

  if (!enabled || !achievements || achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoSectionHeader
        label="// RECOGNITION & HONORS"
        title="Awards & Distinctions"
        subtitle="Industry citations, hackathon victories, and community leadership."
        icon={<Trophy className="w-4 h-4 text-[#3B82F6]" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 mt-4">
        {achievements.map((ach: Achievement, idx: number) => {
          const span = achievements.length === 1 ? 'col-12' : achievements.length === 2 ? 'col-6' : 'col-4';

          return (
            <BentoTile
              key={ach.id || idx}
              span={span}
              variant="default"
              padding="lg"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  {ach.issuer && (
                    <span className="font-mono text-xs font-bold text-[#3B82F6] uppercase">
                      {ach.issuer}
                    </span>
                  )}
                  {ach.date && (
                    <span className="font-mono text-xs text-[#5F6672] dark:text-[#9DA5B4] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {ach.date}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-bold text-xl text-[#171A1F] dark:text-[#F4F5F7] tracking-tight mb-2">
                  {ach.title}
                </h3>

                {ach.description && (
                  <p className="font-sans text-sm text-[#5F6672] dark:text-[#9DA5B4] leading-relaxed mb-4">
                    {ach.description}
                  </p>
                )}
              </div>

              {ach.url && (
                <div className="pt-3 border-t border-[#E2E6ED] dark:border-[#2A2E39]">
                  <a
                    href={ach.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B82F6] hover:underline"
                  >
                    <span>View Citation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </BentoTile>
          );
        })}
      </div>
    </section>
  );
};
