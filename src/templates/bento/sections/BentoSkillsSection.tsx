/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoSkillsSection - Categorized modular capability tiles
 */

import React from 'react';
import type { PortfolioData, SkillGroup, SkillItem } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoTileHeader } from '../components/BentoTileHeader';
import { BentoSectionHeader } from '../components/BentoSectionHeader';
import { Cpu } from 'lucide-react';

interface BentoSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BentoSkillsSection: React.FC<BentoSkillsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const rawSkills = data.skills;

  if (!enabled || !rawSkills || rawSkills.length === 0) {
    return null;
  }

  // Normalize SkillGroup vs flat SkillItem
  const groups: SkillGroup[] = rawSkills.map((item, idx) => {
    if ('category' in item && 'skills' in item) {
      return item as SkillGroup;
    }
    return {
      category: `Domain 0${idx + 1}`,
      skills: [item],
    };
  });

  const validGroups = groups.filter((g) => g.skills && g.skills.length > 0);

  if (validGroups.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoSectionHeader
        label="// CAPABILITY MATRIX"
        title="Technical & Domain Expertise"
        subtitle="Specialized competencies, tooling, and frameworks."
        icon={<Cpu className="w-4 h-4 text-[#3B82F6]" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 mt-4">
        {validGroups.map((group, gIdx) => {
          // Dynamic span based on group count
          const span = validGroups.length === 1 ? 'col-12' : validGroups.length === 2 ? 'col-6' : 'col-4';

          return (
            <BentoTile key={gIdx} span={span} variant="default" padding="md">
              <BentoTileHeader
                label={`[0${gIdx + 1}]`}
                title={group.category}
                badge={`${group.skills.length} skills`}
                badgeVariant="blue"
              />

              <div className="flex flex-wrap gap-2 mt-2">
                {group.skills.map((skill, sIdx) => {
                  const isObj = typeof skill === 'object' && skill !== null;
                  const name = isObj ? (skill as SkillItem).name : (skill as string);
                  const level = isObj ? (skill as SkillItem).level : undefined;
                  const years = isObj ? (skill as SkillItem).yearsOfExperience : undefined;

                  return (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EEF1F5] dark:bg-[#222630] border border-[#E2E6ED] dark:border-[#2D3340] text-xs font-medium text-[#171A1F] dark:text-[#F4F5F7]"
                    >
                      <span className="font-semibold">{name}</span>
                      {level && (
                        <span className="text-[10px] uppercase font-bold text-[#3B82F6] px-1.5 py-0.2 bg-blue-100/80 dark:bg-blue-900/40 rounded-sm">
                          {level}
                        </span>
                      )}
                      {years !== undefined && (
                        <span className="text-[10px] text-[#5F6672] dark:text-[#9DA5B4]">
                          {years}y
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </BentoTile>
          );
        })}
      </div>
    </section>
  );
};
