/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialAchievementsSection - Honors, distinctions & public recognition register
 */

import React from 'react';
import type { PortfolioData, Achievement } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface EditorialAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const EditorialAchievementsSection: React.FC<EditorialAchievementsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const achievements = data.achievements;

  if (!enabled || !achievements || achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="pt-12 sm:pt-16 pb-12 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15">
      <EditorialSectionHeader
        index="08"
        title="Distinctions & Honors"
        subtitle="Public recognitions, jury citations, industry awards, and formal achievements."
        count={achievements.length}
      />

      <div className="divide-y divide-[#171717]/10 dark:divide-[#F5F2EA]/10 mt-6">
        {achievements.map((item: Achievement, idx: number) => {
          return (
            <article
              key={item.id || idx}
              className="py-6 first:pt-2 last:pb-2 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-baseline"
            >
              <div className="lg:col-span-3 font-mono text-xs text-[#918D85] dark:text-[#817C74]">
                {item.date && <div className="font-bold text-[#171717] dark:text-[#F5F2EA]">{item.date}</div>}
                {item.category && <div className="uppercase text-[10px]">{item.category}</div>}
              </div>

              <div className="lg:col-span-9">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#171717] dark:text-[#F5F2EA] font-normal tracking-tight">
                    {item.title}
                  </h3>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase text-[#B42318] dark:text-[#F06A5F] hover:underline"
                    >
                      <span>CITATION</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {item.issuer && (
                  <div className="font-sans font-semibold text-xs sm:text-sm text-[#68655F] dark:text-[#B8B3AA] mb-2">
                    CONFERRED BY: {item.issuer}
                  </div>
                )}

                {item.description && (
                  <p className="font-sans text-xs sm:text-sm text-[#68655F] dark:text-[#B8B3AA] leading-relaxed">
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
