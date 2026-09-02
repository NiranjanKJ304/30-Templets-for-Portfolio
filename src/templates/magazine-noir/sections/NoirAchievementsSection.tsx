/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirAchievementsSection - Honors & distinctions register for Magazine Noir
 */

import React from 'react';
import type { PortfolioData, Achievement } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface NoirAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NoirAchievementsSection: React.FC<NoirAchievementsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const achievements = data.achievements;

  if (!enabled || !achievements || achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-16 sm:py-24 lg:py-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      <NoirSectionHeader
        index="08"
        title="Distinctions & Honors"
        subtitle="Jury citations, public recognitions, institutional awards, and editorial honors."
        count={achievements.length}
      />

      <div className="space-y-8">
        {achievements.map((item: Achievement, idx: number) => {
          return (
            <article
              key={item.id || idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-baseline pb-8 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10 last:border-b-0 last:pb-0"
            >
              <div className="lg:col-span-3 font-mono text-xs text-[#99938A] dark:text-[#777168]">
                {item.date && (
                  <div className="font-bold text-[#171717] dark:text-[#F4F1EA] text-sm">
                    {item.date}
                  </div>
                )}
                {item.category && <div className="uppercase text-[10px]">{item.category}</div>}
              </div>

              <div className="lg:col-span-9">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight">
                    {item.title}
                  </h3>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase text-[#8B5E3C] dark:text-[#C49A6C] hover:underline"
                    >
                      <span>CITATION</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {item.issuer && (
                  <div className="font-sans font-semibold text-xs sm:text-sm text-[#68645D] dark:text-[#B8B2A8] mb-2">
                    CONFERRED BY: {item.issuer}
                  </div>
                )}

                {item.description && (
                  <p className="font-sans text-xs sm:text-sm text-[#68645D] dark:text-[#B8B2A8] font-light leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
