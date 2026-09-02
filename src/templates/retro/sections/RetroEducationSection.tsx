/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroEducationSection - Graphic academic register
 */

import React from 'react';
import { GraduationCap, MapPin, Calendar, ExternalLink } from 'lucide-react';
import type { PortfolioData, Education } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroEducationSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const RetroEducationSection: React.FC<RetroEducationSectionProps> = ({
  data,
  enabled,
  indexNumber = '06',
}) => {
  const { education } = data;
  const hasData = hasSectionData('education', data);

  if (!enabled || !hasData || !education || education.length === 0) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="ACADEMIA"
        title="Education & Degrees"
        subtitle="Academic foundations, institutional degrees, and scholastic focus."
        accentColor="petrol"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {education.map((edu: Education, idx: number) => {
          const numStr = String(idx + 1).padStart(2, '0');
          const dateRange = `${edu.startDate || ''}${edu.startDate && edu.endDate ? ' — ' : ''}${edu.current ? 'PRESENT' : edu.endDate || ''}`;

          return (
            <div
              key={edu.id || idx}
              className="bg-[#FFF9EA] dark:bg-[#362E28] border-3 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#477A8A] dark:shadow-[6px_6px_0px_0px_rgba(71,122,138,0.3)] flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-[#477A8A] text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 font-mono font-black text-xs flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                    {numStr}
                  </span>
                  {dateRange && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FFF4D6] dark:bg-[#29231F] border border-[#29231F]/20 font-mono text-xs font-bold text-[#665D55] dark:text-[#A89B8E]">
                      <Calendar className="w-3 h-3 text-[#E76F2E]" />
                      <span>{dateRange}</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#29231F] dark:text-[#FFF4D6]">
                    {edu.degree}
                  </h3>
                  {edu.fieldOfStudy && (
                    <p className="text-sm sm:text-base font-bold text-[#E76F2E] mt-0.5">
                      {edu.fieldOfStudy}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-[#29231F] dark:text-[#FFF4D6]">
                  <GraduationCap className="w-4 h-4 text-[#477A8A]" />
                  {edu.institutionUrl ? (
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      <span>{edu.institution}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span>{edu.institution}</span>
                  )}
                </div>

                {edu.location && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#665D55] dark:text-[#A89B8E]">
                    <MapPin className="w-3.5 h-3.5 text-[#E76F2E]" />
                    <span>{edu.location}</span>
                  </div>
                )}

                {edu.grade && (
                  <div className="inline-block px-2.5 py-1 rounded bg-[#E9B949] text-[#29231F] border border-[#29231F] font-mono text-xs font-bold">
                    GRADE / DISTINCTION: {edu.grade}
                  </div>
                )}

                {edu.description && (
                  <p className="text-xs sm:text-sm text-[#665D55] dark:text-[#D8CBB7] leading-relaxed pt-2">
                    {edu.description}
                  </p>
                )}
              </div>

              {/* Activities or Courses */}
              {((edu.activities && edu.activities.length > 0) ||
                (edu.courses && edu.courses.length > 0)) && (
                <div className="pt-4 border-t-2 border-[#29231F]/10 dark:border-[#FFF4D6]/10 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#665D55] dark:text-[#A89B8E] block">
                    // FOCUS & ACTIVITIES:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(edu.activities || edu.courses || []).map((item, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2 py-0.5 rounded bg-[#FFF4D6] dark:bg-[#29231F] border border-[#29231F]/20 font-mono text-[11px] font-medium text-[#29231F] dark:text-[#FFF4D6]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
