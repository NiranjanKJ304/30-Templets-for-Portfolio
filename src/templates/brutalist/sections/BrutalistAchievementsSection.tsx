/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistAchievementsSection - Honors & distinction index
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';

interface BrutalistAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BrutalistAchievementsSection: React.FC<BrutalistAchievementsSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.achievements || data.achievements.length === 0) return null;

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="08"
          title="Honors & Awards"
          subtitle="PUBLIC DISTINCTIONS & INDUSTRY RECOGNITION"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.achievements.map((item, idx) => (
            <div
              key={item.id || idx}
              className="p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[5px_5px_0px_0px_#111111] dark:shadow-[5px_5px_0px_0px_#F4F1E8]"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[#111111] dark:border-[#F4F1E8]">
                <span className="font-mono text-xs font-bold text-[#EAB308]">
                  AWARD_{String(idx + 1).padStart(2, '0')}
                </span>
                {item.date && (
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#F4F1E8] dark:bg-[#111111] text-[#111111] dark:text-[#F4F1E8] border border-[#111111] dark:border-[#F4F1E8]">
                    {item.date}
                  </span>
                )}
              </div>

              <h3 className="font-sans font-black text-xl uppercase tracking-tight text-[#111111] dark:text-[#F4F1E8] mb-1">
                {item.title}
              </h3>
              {item.issuer && (
                <div className="font-mono text-xs font-bold text-[#2563EB] uppercase mb-4">
                  CONFERRED BY: {item.issuer}
                </div>
              )}

              {item.description && (
                <p className="font-sans text-xs sm:text-sm text-[#444444] dark:text-[#CCCCCC] leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
