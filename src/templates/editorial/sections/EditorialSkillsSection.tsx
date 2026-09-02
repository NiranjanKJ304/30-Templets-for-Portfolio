/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialSkillsSection - Disciplines & competencies index
 */

import React from 'react';
import type { PortfolioData, SkillGroup, SkillItem } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';

interface EditorialSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const EditorialSkillsSection: React.FC<EditorialSkillsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const skillGroups = data.skills;

  if (!enabled || !skillGroups || skillGroups.length === 0) {
    return null;
  }

  // Count total skills
  const totalSkills = skillGroups.reduce((acc, g) => acc + (g.skills?.length || 0), 0);

  return (
    <section id="skills" className="pt-12 sm:pt-16 pb-12 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15">
      <EditorialSectionHeader
        index="03"
        title="Disciplines & Capabilities"
        subtitle="Taxonomy of technical faculties, tools, and domain specializations."
        count={totalSkills}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-6">
        {skillGroups.map((group: SkillGroup, gIdx: number) => {
          const groupNumber = gIdx < 9 ? `0${gIdx + 1}` : `${gIdx + 1}`;

          return (
            <div
              key={group.category || gIdx}
              className="p-6 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-[#171717]/10 dark:border-[#F5F2EA]/10 mb-4">
                  <span className="font-serif font-bold text-lg sm:text-xl text-[#171717] dark:text-[#F5F2EA]">
                    {group.category}
                  </span>
                  <span className="font-mono text-xs text-[#B42318] dark:text-[#F06A5F]">
                    {groupNumber}
                  </span>
                </div>

                {group.description && (
                  <p className="font-sans text-xs text-[#68655F] dark:text-[#B8B3AA] mb-4 italic">
                    {group.description}
                  </p>
                )}

                {/* Skills Register */}
                <ul className="divide-y divide-[#171717]/5 dark:divide-[#F5F2EA]/5">
                  {group.skills.map((skill: string | SkillItem, sIdx: number) => {
                    const skillName = typeof skill === 'string' ? skill : skill.name;
                    const level = typeof skill === 'object' ? skill.level : undefined;
                    const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                    return (
                      <li
                        key={sIdx}
                        className="py-2.5 flex items-center justify-between gap-3 text-sm"
                      >
                        <span className="font-sans text-[#171717] dark:text-[#F5F2EA]">
                          {skillName}
                        </span>

                        <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#918D85] dark:text-[#817C74]">
                          {level && (
                            <span className="px-1.5 py-0.5 border border-[#171717]/10 dark:border-[#F5F2EA]/10 text-[#68655F] dark:text-[#B8B3AA]">
                              {String(level)}
                            </span>
                          )}
                          {typeof years === 'number' && (
                            <span>{years}Y EXP</span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
