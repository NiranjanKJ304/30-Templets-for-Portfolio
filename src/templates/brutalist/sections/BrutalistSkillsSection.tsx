/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistSkillsSection - Typographic capability index & taxonomy
 */

import React from 'react';
import type { PortfolioData, SkillGroup, SkillItem } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';

interface BrutalistSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BrutalistSkillsSection: React.FC<BrutalistSkillsSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.skills || data.skills.length === 0) return null;

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="03"
          title="Skills & Tooling"
          subtitle="SYSTEMIC CAPABILITIES & SPECIALIZATIONS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.skills.map((group: SkillGroup, gIdx: number) => (
            <div
              key={group.category || gIdx}
              className="p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[5px_5px_0px_0px_#111111] dark:shadow-[5px_5px_0px_0px_#F4F1E8]"
            >
              <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-[#111111] dark:border-[#F4F1E8]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#EF4444]" />
                  <h3 className="font-sans font-black text-xl uppercase tracking-tight text-[#111111] dark:text-[#F4F1E8]">
                    {group.category}
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold text-[#777777] dark:text-[#A0A0A0]">
                  [{group.skills.length} UNITS]
                </span>
              </div>

              {group.description && (
                <p className="font-sans text-xs text-[#555555] dark:text-[#AAAAAA] mb-5">
                  {group.description}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill: string | SkillItem, sIdx: number) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F4F1E8] dark:bg-[#111111] border-2 border-[#111111] dark:border-[#F4F1E8] text-xs font-mono font-bold uppercase text-[#111111] dark:text-[#F4F1E8] hover:bg-[#111111] hover:text-[#F4F1E8] dark:hover:bg-[#F4F1E8] dark:hover:text-[#111111] transition-colors"
                    >
                      <span>■</span>
                      <span>{name}</span>
                      {level && (
                        <span className="text-[10px] text-[#2563EB] dark:text-[#60A5FA]">
                          ({level})
                        </span>
                      )}
                      {years !== undefined && (
                        <span className="text-[10px] opacity-60">
                          {years}y
                        </span>
                      )}
                    </div>
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
