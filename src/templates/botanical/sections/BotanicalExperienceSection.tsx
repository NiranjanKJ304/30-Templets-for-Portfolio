/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalExperienceSection - Organic growth milestones & career trajectory
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { Sprout, Briefcase } from 'lucide-react';

interface BotanicalExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BotanicalExperienceSection: React.FC<BotanicalExperienceSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.experience || data.experience.length === 0) return null;

  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-b border-[#D8D4C8] dark:border-[#2C3E30] bg-[#EBE9DF]/50 dark:bg-[#141E17] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
              05 / Growth & Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal">
              Professional Evolution
            </h2>
          </div>
          <p className="text-sm text-[#586359] dark:text-[#9BB0A0] max-w-md font-sans">
            A chronological narrative of strategic leadership, systemic problem solving, and organic growth across roles.
          </p>
        </div>

        <div className="space-y-6">
          {data.experience.map((exp, idx) => (
            <div
              key={exp.id || idx}
              className="p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-7 h-7 rounded-lg bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#1C261E] dark:text-[#F0F5F1]">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-sm text-[#BF6648] dark:text-[#E58A6C] font-mono">
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </p>
                </div>

                <span className="inline-block px-3.5 py-1 rounded-full bg-[#F6F5F0] dark:bg-[#202E24] border border-[#D8D4C8] dark:border-[#2C3E30] text-xs font-mono text-[#586359] dark:text-[#9BB0A0] self-start">
                  {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>

              {exp.description && (
                <p className="text-sm text-[#586359] dark:text-[#9BB0A0] leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>
              )}

              {exp.highlights && exp.highlights.length > 0 && (
                <div className="pt-4 border-t border-[#D8D4C8]/50 dark:border-[#2C3E30]/50 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#586359] dark:text-[#9BB0A0] block">
                    Cultivated Impact:
                  </span>
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#1C261E] dark:text-[#F0F5F1]">
                      <Sprout className="w-3.5 h-3.5 text-[#4A6B53] dark:text-[#8EB697] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
