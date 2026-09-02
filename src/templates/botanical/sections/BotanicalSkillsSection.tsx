/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalSkillsSection - Botanical seed/branch skills taxonomy
 */

import React from 'react';
import type { PortfolioData, SkillGroup, SkillItem } from '../../../core/types/portfolio';
import { Leaf } from 'lucide-react';

interface BotanicalSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BotanicalSkillsSection: React.FC<BotanicalSkillsSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.skills || data.skills.length === 0) return null;

  return (
    <section
      id="skills"
      className="py-20 md:py-28 border-b border-[#D8D4C8] dark:border-[#2C3E30] bg-[#F6F5F0] dark:bg-[#101712] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
              03 / Botanical Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal">
              Technical & Creative Flora
            </h2>
          </div>
          <p className="text-sm text-[#586359] dark:text-[#9BB0A0] max-w-md font-sans">
            A diverse ecosystem of tools, technologies, and strategic methodologies cultivated through real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.skills.map((group: SkillGroup, gIdx: number) => (
            <div
              key={group.category || gIdx}
              className="p-7 rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30]"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D8D4C8]/60 dark:border-[#2C3E30]/60">
                <div className="flex items-center gap-2.5">
                  <Leaf className="w-4 h-4 text-[#4A6B53] dark:text-[#8EB697]" />
                  <h3 className="font-serif text-lg font-medium text-[#1C261E] dark:text-[#F0F5F1]">
                    {group.category}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#586359] dark:text-[#9BB0A0]">
                  {group.skills.length} Items
                </span>
              </div>

              {group.description && (
                <p className="text-xs text-[#586359] dark:text-[#9BB0A0] mb-4 font-sans">
                  {group.description}
                </p>
              )}

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill: string | SkillItem, sIdx: number) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6F5F0] dark:bg-[#202E24] border border-[#D8D4C8] dark:border-[#2C3E30] text-xs font-sans font-medium text-[#1C261E] dark:text-[#F0F5F1] hover:border-[#4A6B53] dark:hover:border-[#8EB697] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B53] dark:bg-[#8EB697]" />
                      <span>{name}</span>
                      {level !== undefined && (
                        <span className="text-[10px] text-[#586359] dark:text-[#9BB0A0] font-mono capitalize">
                          • {level}
                        </span>
                      )}
                      {years !== undefined && (
                        <span className="text-[10px] text-[#586359] dark:text-[#9BB0A0] font-mono">
                          • {years}y
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
