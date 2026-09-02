/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirSkillsSection - Disciplines & capabilities register for Magazine Noir
 */

import React from 'react';
import type { PortfolioData, SkillGroup, SkillItem } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';

interface NoirSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NoirSkillsSection: React.FC<NoirSkillsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const skillGroups = data.skills;

  if (!enabled || !skillGroups || skillGroups.length === 0) {
    return null;
  }

  const validGroups = skillGroups.filter(
    (g) => Array.isArray(g.skills) && g.skills.length > 0
  );

  if (validGroups.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      <NoirSectionHeader
        index="03"
        title="Disciplines & Capabilities"
        subtitle="Core competencies, technical proficiencies, and creative methodologies."
        count={validGroups.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {validGroups.map((group: SkillGroup, gIdx: number) => {
          const groupNum = gIdx < 9 ? `0${gIdx + 1}` : `${gIdx + 1}`;

          return (
            <div
              key={group.category || gIdx}
              className="p-8 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10 mb-4">
                  <span className="font-mono text-xs font-semibold text-[#8B5E3C] dark:text-[#C49A6C]">
                    DOMAIN {groupNum}
                  </span>
                  <span className="font-mono text-[10px] text-[#99938A] dark:text-[#777168]">
                    [{group.skills.length}]
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight mb-2">
                  {group.category}
                </h3>

                {group.description && (
                  <p className="font-sans text-xs text-[#68645D] dark:text-[#B8B2A8] leading-relaxed mb-6 font-light">
                    {group.description}
                  </p>
                )}

                <div className="space-y-3 pt-2">
                  {group.skills.map((skill: string | SkillItem, sIdx: number) => {
                    const skillName = typeof skill === 'string' ? skill : skill.name;
                    const skillLevel = typeof skill === 'string' ? undefined : skill.level;
                    const skillExp = typeof skill === 'string' ? undefined : skill.yearsOfExperience;

                    return (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between py-2 border-b border-[#171717]/5 dark:border-[#F4F1EA]/5 last:border-b-0"
                      >
                        <span className="font-sans text-sm text-[#171717] dark:text-[#F4F1EA] font-medium">
                          {skillName}
                        </span>

                        <div className="flex items-center gap-2 font-mono text-[10px] uppercase">
                          {skillLevel && (
                            <span className="px-1.5 py-0.5 bg-[#F4F1EA] dark:bg-[#0D0D0D] border border-[#171717]/10 dark:border-[#F4F1EA]/10 text-[#8B5E3C] dark:text-[#C49A6C]">
                              {String(skillLevel)}
                            </span>
                          )}
                          {skillExp !== undefined && (
                            <span className="text-[#99938A] dark:text-[#777168]">
                              {skillExp}Y
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
