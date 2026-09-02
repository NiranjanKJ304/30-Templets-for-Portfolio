/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistEducationSection - Academic credentials register
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';

interface BrutalistEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BrutalistEducationSection: React.FC<BrutalistEducationSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.education || data.education.length === 0) return null;

  return (
    <section
      id="education"
      className="py-16 md:py-24 border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="06"
          title="Education"
          subtitle="ACADEMIC DEGREES & INSTITUTIONAL RECORD"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.education.map((edu, idx) => {
            const dateStr =
              edu.startDate || edu.endDate
                ? `${edu.startDate || ''} — ${edu.endDate || ''}`
                : undefined;

            return (
              <div
                key={edu.id || idx}
                className="p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[5px_5px_0px_0px_#111111] dark:shadow-[5px_5px_0px_0px_#F4F1E8]"
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[#111111] dark:border-[#F4F1E8]">
                  <span className="font-mono text-xs font-bold text-[#2563EB]">
                    ACAD_{String(idx + 1).padStart(2, '0')}
                  </span>
                  {dateStr && (
                    <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#F4F1E8] dark:bg-[#111111] text-[#111111] dark:text-[#F4F1E8] border border-[#111111] dark:border-[#F4F1E8]">
                      {dateStr}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-black text-xl uppercase tracking-tight text-[#111111] dark:text-[#F4F1E8] mb-1">
                  {edu.degree} {edu.fieldOfStudy && `IN ${edu.fieldOfStudy}`}
                </h3>
                <div className="font-mono text-xs font-bold text-[#EF4444] uppercase mb-4">
                  {edu.institution}
                </div>

                {edu.description && (
                  <p className="font-sans text-xs sm:text-sm text-[#444444] dark:text-[#CCCCCC] leading-relaxed mb-4">
                    {edu.description}
                  </p>
                )}

                {edu.grade && (
                  <div className="mb-3">
                    <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 bg-[#2563EB] text-white">
                      GRADE: {edu.grade}
                    </span>
                  </div>
                )}

                {edu.activities && edu.activities.length > 0 && (
                  <div className="pt-3 border-t border-[#111111]/20 dark:border-[#F4F1E8]/20 flex flex-wrap gap-1.5">
                    {edu.activities.map((act, aIdx) => (
                      <span
                        key={aIdx}
                        className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 bg-[#F4F1E8] dark:bg-[#111111] text-[#111111] dark:text-[#F4F1E8] border border-[#111111] dark:border-[#F4F1E8]"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                )}

                {edu.courses && edu.courses.length > 0 && (
                  <div className="pt-3 border-t border-[#111111]/20 dark:border-[#F4F1E8]/20 flex flex-wrap gap-1.5">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 bg-[#F4F1E8] dark:bg-[#111111] text-[#111111] dark:text-[#F4F1E8] border border-[#111111] dark:border-[#F4F1E8]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
