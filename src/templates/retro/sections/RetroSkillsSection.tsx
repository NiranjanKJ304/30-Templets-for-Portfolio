/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroSkillsSection - Graphic color-blocked capability clusters
 */

import React from 'react';
import type { PortfolioData, SkillGroup, SkillItem } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroSkillsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const RetroSkillsSection: React.FC<RetroSkillsSectionProps> = ({
  data,
  enabled,
  indexNumber = '03',
}) => {
  const { skills } = data;
  const hasData = hasSectionData('skills', data);

  if (!enabled || !hasData || !skills || skills.length === 0) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="EXPERTISE"
        title="Skills & Competencies"
        subtitle="Operational toolkit, specialized technologies, and domain competencies."
        accentColor="petrol"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skills.map((group: SkillGroup, gIdx: number) => {
          const accentColorClass = [
            'border-[#E76F2E] shadow-[6px_6px_0px_0px_#E76F2E]',
            'border-[#E9B949] shadow-[6px_6px_0px_0px_#E9B949]',
            'border-[#477A8A] shadow-[6px_6px_0px_0px_#477A8A]',
          ][gIdx % 3];

          const headerBadgeColor = [
            'bg-[#E76F2E] text-[#FFF4D6]',
            'bg-[#E9B949] text-[#29231F]',
            'bg-[#477A8A] text-[#FFF4D6]',
          ][gIdx % 3];

          return (
            <div
              key={group.category || gIdx}
              className={`bg-[#FFF9EA] dark:bg-[#362E28] border-3 rounded-2xl p-6 sm:p-8 ${accentColorClass} flex flex-col justify-between space-y-6 transition-all`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-md font-mono font-bold text-xs uppercase tracking-wider border-2 border-[#29231F] ${headerBadgeColor}`}>
                    GRP.{String(gIdx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#665D55] dark:text-[#A89B8E]">
                    {group.skills.length} ITEMS
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#29231F] dark:text-[#FFF4D6]">
                  {group.category}
                </h3>

                {group.description && (
                  <p className="text-xs sm:text-sm text-[#665D55] dark:text-[#D8CBB7] leading-relaxed">
                    {group.description}
                  </p>
                )}
              </div>

              {/* Skill Tags Cloud */}
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-[#29231F]/10 dark:border-[#FFF4D6]/10">
                {group.skills.map((skill: string | SkillItem, sIdx: number) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const level = typeof skill === 'object' ? skill.level : undefined;
                  const years = typeof skill === 'object' ? skill.yearsOfExperience : undefined;

                  return (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFF4D6] dark:bg-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 shadow-[2px_2px_0px_0px_#29231F] text-xs font-mono font-bold text-[#29231F] dark:text-[#FFF4D6] hover:bg-[#E9B949] hover:text-[#29231F] transition-all"
                    >
                      <span>{name}</span>
                      {level !== undefined && (
                        <span className="text-[10px] opacity-75 font-normal">
                          [{level}]
                        </span>
                      )}
                      {years !== undefined && (
                        <span className="text-[10px] opacity-75 font-normal">
                          [{years}y]
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
