/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoEducationSection - Academic and institutional records
 */

import React from 'react';
import type { PortfolioData, Education } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoSectionHeader } from '../components/BentoSectionHeader';
import { GraduationCap, Calendar } from 'lucide-react';

interface BentoEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BentoEducationSection: React.FC<BentoEducationSectionProps> = ({
  data,
  enabled = true,
}) => {
  const education = data.education;

  if (!enabled || !education || education.length === 0) {
    return null;
  }

  return (
    <section id="education" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoSectionHeader
        label="// ACADEMIC BACKGROUND"
        title="Education & Formal Studies"
        subtitle="Degrees, research concentrations, and institutional certifications."
        icon={<GraduationCap className="w-4 h-4 text-[#3B82F6]" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 mt-4">
        {education.map((edu: Education, idx: number) => {
          const span = education.length === 1 ? 'col-12' : 'col-6';
          const dateStr = `${edu.startDate} — ${edu.current ? 'Present' : edu.endDate || ''}`;

          return (
            <BentoTile
              key={edu.id || idx}
              span={span}
              variant="default"
              padding="lg"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#3B82F6] uppercase">
                    {edu.institution}
                  </span>
                  {edu.startDate && (
                    <span className="font-mono text-xs text-[#5F6672] dark:text-[#9DA5B4] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {dateStr}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-bold text-xl text-[#171A1F] dark:text-[#F4F5F7] tracking-tight mb-1">
                  {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </h3>

                {edu.description && (
                  <p className="font-sans text-sm text-[#5F6672] dark:text-[#9DA5B4] leading-relaxed mt-2 mb-3">
                    {edu.description}
                  </p>
                )}

                {/* Grade / GPA if present in canonical data */}
                {edu.grade && (
                  <div className="mt-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                      Grade: {edu.grade}
                    </span>
                  </div>
                )}

                {/* Activities if present */}
                {edu.activities && edu.activities.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-[#E2E6ED] dark:border-[#2A2E39] flex flex-wrap gap-1.5">
                    {edu.activities.map((act, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] bg-[#EEF1F5] dark:bg-[#222630] text-[#5F6672] dark:text-[#9DA5B4]"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                )}

                {/* Courses if present */}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-[#E2E6ED] dark:border-[#2A2E39] flex flex-wrap gap-1.5">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] bg-[#EEF1F5] dark:bg-[#222630] text-[#5F6672] dark:text-[#9DA5B4]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </BentoTile>
          );
        })}
      </div>
    </section>
  );
};
