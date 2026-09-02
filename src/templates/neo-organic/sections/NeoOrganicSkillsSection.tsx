/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicSkillsSection - Organic capability clusters and skills bubbles
 */

import React from 'react';
import type { PortfolioData, SkillGroup, SkillItem } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import { Layers } from 'lucide-react';

interface NeoOrganicSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NeoOrganicSkillsSection: React.FC<NeoOrganicSkillsSectionProps> = ({
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
    <section id="skills" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="Capabilities & Disciplines"
        subtitle="Technical competencies, design proficiencies, and operational frameworks."
        count={validGroups.length}
        accentColor="green"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {validGroups.map((group: SkillGroup, gIdx: number) => {
          return (
            <div
              key={group.category || gIdx}
              className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#17211B]/8 dark:border-[#F2F3ED]/8 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#79A66A] dark:bg-[#91BD82]" />
                    <h3 className="font-semibold text-lg text-[#17211B] dark:text-[#F2F3ED]">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#8A938C] dark:text-[#7F897F]">
                    {group.skills.length}
                  </span>
                </div>

                {group.description && (
                  <p className="text-xs text-[#59635C] dark:text-[#B8C0B8] mb-5 font-light leading-relaxed">
                    {group.description}
                  </p>
                )}

                {/* Soft connected skill bubbles */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill: string | SkillItem, sIdx: number) => {
                    const skillName = typeof skill === 'string' ? skill : skill.name;
                    const skillLevel = typeof skill === 'string' ? undefined : skill.level;
                    const skillExp = typeof skill === 'string' ? undefined : skill.yearsOfExperience;

                    return (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F6F5EF] dark:bg-[#111713] border border-[#17211B]/6 dark:border-[#F2F3ED]/6 text-xs text-[#17211B] dark:text-[#F2F3ED]"
                      >
                        <span className="font-medium">{skillName}</span>
                        {skillLevel && (
                          <span className="px-1.5 py-0.5 rounded-md bg-[#D9E7D0]/60 dark:bg-[#1B211D] text-[10px] text-[#59635C] dark:text-[#B8C0B8]">
                            {String(skillLevel)}
                          </span>
                        )}
                        {skillExp !== undefined && (
                          <span className="text-[10px] font-mono text-[#8A938C] dark:text-[#7F897F]">
                            {skillExp}y
                          </span>
                        )}
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
