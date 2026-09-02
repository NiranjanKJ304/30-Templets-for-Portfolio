/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistExperienceSection - Raw career ledger & operational history
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';

interface BrutalistExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BrutalistExperienceSection: React.FC<BrutalistExperienceSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.experience || data.experience.length === 0) return null;

  return (
    <section
      id="experience"
      className="py-16 md:py-24 border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="05"
          title="Career Register"
          subtitle="CHRONOLOGICAL APPOINTMENTS & RECORDED HIGHLIGHTS"
        />

        <div className="flex flex-col gap-6">
          {data.experience.map((exp, idx) => {
            const dateStr =
              exp.startDate || exp.endDate
                ? `${exp.startDate || ''} — ${exp.current ? 'PRESENT' : exp.endDate || ''}`
                : undefined;

            return (
              <div
                key={exp.id || idx}
                className="p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[5px_5px_0px_0px_#111111] dark:shadow-[5px_5px_0px_0px_#F4F1E8]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Date & Metadata Column */}
                  <div className="lg:col-span-4 flex flex-col gap-2">
                    {dateStr && (
                      <span className="font-mono text-xs font-black uppercase px-2.5 py-1 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] inline-block self-start">
                        {dateStr}
                      </span>
                    )}
                    <span className="font-mono text-xs font-bold text-[#2563EB]">
                      // EXP_{String(idx + 1).padStart(2, '0')}
                    </span>
                    {exp.location && (
                      <span className="font-mono text-xs text-[#666666] dark:text-[#999999]">
                        LOC: {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Role & Description Column */}
                  <div className="lg:col-span-8">
                    <h3 className="font-sans font-black text-2xl uppercase tracking-tight text-[#111111] dark:text-[#F4F1E8] mb-1">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-sm font-bold text-[#EF4444] uppercase mb-4">
                      @ {exp.company}
                    </div>

                    {exp.description && (
                      <p className="font-sans text-sm sm:text-base text-[#333333] dark:text-[#CCCCCC] leading-relaxed mb-4">
                        {exp.description}
                      </p>
                    )}

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-2 pt-3 border-t border-[#111111]/20 dark:border-[#F4F1E8]/20">
                        {exp.highlights.map((item, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-[#444444] dark:text-[#BBBBBB]"
                          >
                            <span className="font-mono text-[#2563EB] font-bold mt-0.5">►</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
