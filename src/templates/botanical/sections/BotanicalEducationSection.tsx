/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalEducationSection - Foundational roots and academic development
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { GraduationCap } from 'lucide-react';

interface BotanicalEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BotanicalEducationSection: React.FC<BotanicalEducationSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.education || data.education.length === 0) return null;

  return (
    <section
      id="education"
      className="py-20 md:py-28 border-b border-[#D8D4C8] dark:border-[#2C3E30] bg-[#F6F5F0] dark:bg-[#101712] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
              06 / Academic Roots
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal">
              Educational Pedigree
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.education.map((edu, idx) => (
            <div
              key={edu.id || idx}
              className="p-7 rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-serif text-lg font-medium text-[#1C261E] dark:text-[#F0F5F1]">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <span className="text-xs font-mono text-[#586359] dark:text-[#9BB0A0]">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <p className="text-sm text-[#BF6648] dark:text-[#E58A6C] font-mono mb-2">
                  {edu.institution}
                </p>
                {edu.honors && (
                  <p className="text-xs text-[#4A6B53] dark:text-[#8EB697] font-serif italic">
                    {edu.honors}
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
