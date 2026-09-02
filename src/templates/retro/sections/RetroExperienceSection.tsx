/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroExperienceSection - Graphic editorial career register
 */

import React from 'react';
import { Building2, MapPin, Calendar, ExternalLink } from 'lucide-react';
import type { PortfolioData, Experience } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroExperienceSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const RetroExperienceSection: React.FC<RetroExperienceSectionProps> = ({
  data,
  enabled,
  indexNumber = '05',
}) => {
  const { experience } = data;
  const hasData = hasSectionData('experience', data);

  if (!enabled || !hasData || !experience || experience.length === 0) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="CHRONOLOGY"
        title="Experience & Roles"
        subtitle="Historical career register, leadership positions, and organizational impacts."
        accentColor="mustard"
      />

      <div className="space-y-6 sm:space-y-8">
        {experience.map((exp: Experience, idx: number) => {
          const numStr = String(idx + 1).padStart(2, '0');
          const dateRange = `${exp.startDate} — ${exp.current ? 'PRESENT' : exp.endDate || ''}`;

          return (
            <div
              key={exp.id || idx}
              className="bg-[#FFF9EA] dark:bg-[#362E28] border-3 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#29231F] dark:shadow-[6px_6px_0px_0px_rgba(255,244,214,0.15)] transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Left Role Header & Meta (Cols 1-4) */}
                <div className="lg:w-1/3 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] font-mono font-black text-xs flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                      {numStr}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#29231F] text-[#FFF4D6] dark:bg-[#FFF4D6] dark:text-[#29231F] font-mono text-xs font-bold uppercase tracking-wider">
                      <Calendar className="w-3 h-3 text-[#E76F2E]" />
                      <span>{dateRange}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#29231F] dark:text-[#FFF4D6]">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-bold text-[#E76F2E]">
                    <Building2 className="w-4 h-4" />
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>

                  {exp.location && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#665D55] dark:text-[#A89B8E]">
                      <MapPin className="w-3.5 h-3.5 text-[#477A8A]" />
                      <span>{exp.location} {exp.locationType ? `(${exp.locationType})` : ''}</span>
                    </div>
                  )}

                  {exp.employmentType && (
                    <span className="inline-block px-2 py-0.5 rounded bg-[#FFF4D6] dark:bg-[#29231F] border border-[#29231F]/20 font-mono text-[11px] font-bold text-[#665D55] dark:text-[#A89B8E] uppercase">
                      {exp.employmentType}
                    </span>
                  )}
                </div>

                {/* Right Description & Highlights (Cols 5-12) */}
                <div className="lg:w-2/3 space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15 lg:pl-8">
                  {exp.description && (
                    <p className="text-sm sm:text-base text-[#29231F] dark:text-[#FFF4D6] leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#665D55] dark:text-[#A89B8E] block">
                        // KEY MILESTONES:
                      </span>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((item, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#665D55] dark:text-[#D8CBB7] font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-sm bg-[#E76F2E] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-[#FFF4D6] dark:bg-[#29231F] border border-[#29231F]/20 font-mono text-xs font-bold text-[#29231F] dark:text-[#FFF4D6]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
