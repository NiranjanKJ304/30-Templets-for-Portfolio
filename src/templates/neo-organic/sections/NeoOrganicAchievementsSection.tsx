/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicAchievementsSection - Recognition, honors, and awards
 */

import React from 'react';
import type { PortfolioData, Achievement } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import { Trophy, ExternalLink, Calendar } from 'lucide-react';

interface NeoOrganicAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NeoOrganicAchievementsSection: React.FC<NeoOrganicAchievementsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const achievements = data.achievements;

  if (!enabled || !achievements || achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="Honors & Distinctions"
        subtitle="Industry recognition, competitive awards, and community acknowledgments."
        count={achievements.length}
        accentColor="orange"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {achievements.map((item: Achievement, index: number) => {
          return (
            <div
              key={item.id || index}
              className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-[#E58B5B]/15 flex items-center justify-center text-[#E58B5B] dark:text-[#F0A078]">
                    <Trophy className="w-4 h-4" />
                  </div>
                  {item.date && (
                    <div className="inline-flex items-center gap-1 text-xs font-mono text-[#8A938C] dark:text-[#7F897F]">
                      <Calendar className="w-3 h-3 text-[#E58B5B]" />
                      <span>{item.date}</span>
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-lg text-[#17211B] dark:text-[#F2F3ED] mb-1">
                  {item.title}
                </h3>

                {item.issuer && (
                  <p className="text-xs font-medium text-[#79A66A] dark:text-[#91BD82] mb-3">
                    Conferred by {item.issuer}
                  </p>
                )}

                {item.category && (
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#F6F5EF] dark:bg-[#111713] text-[11px] text-[#59635C] dark:text-[#B8C0B8] mb-3">
                    {item.category}
                  </span>
                )}

                {item.description && (
                  <p className="text-xs sm:text-sm text-[#59635C] dark:text-[#B8C0B8] font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}
              </div>

              {item.url && (
                <div className="pt-3 border-t border-[#17211B]/6 dark:border-[#F2F3ED]/6">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4169E1] dark:text-[#7F9CFF] hover:underline"
                  >
                    <span>View Distinction</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
