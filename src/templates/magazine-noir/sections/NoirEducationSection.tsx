/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirEducationSection - Scholastic background for Magazine Noir
 */

import React from 'react';
import type { PortfolioData, Education } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface NoirEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NoirEducationSection: React.FC<NoirEducationSectionProps> = ({
  data,
  enabled = true,
}) => {
  const educations = data.education;

  if (!enabled || !educations || educations.length === 0) {
    return null;
  }

  return (
    <section id="education" className="py-16 sm:py-24 lg:py-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      <NoirSectionHeader
        index="06"
        title="Scholastic Foundation"
        subtitle="Formal academic degrees, research foundations, and institutional credentials."
        count={educations.length}
      />

      <div className="space-y-12">
        {educations.map((edu: Education, idx: number) => {
          const dateStr = [edu.startDate, edu.current ? 'PRESENT' : edu.endDate]
            .filter(Boolean)
            .join(' — ');

          const eduNum = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;

          return (
            <div
              key={edu.id || idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pb-12 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10 last:border-b-0 last:pb-0"
            >
              {/* Meta Column */}
              <div className="lg:col-span-4 font-mono text-xs text-[#99938A] dark:text-[#777168] space-y-2">
                <div className="font-bold text-[#8B5E3C] dark:text-[#C49A6C]">
                  ACADEMIA {eduNum}
                </div>
                {dateStr && (
                  <div className="font-bold text-[#171717] dark:text-[#F4F1EA] text-sm">
                    {dateStr}
                  </div>
                )}
                {edu.location && <div>{edu.location}</div>}
                {edu.grade && (
                  <div className="text-[#8B5E3C] dark:text-[#C49A6C] font-semibold mt-1">
                    HONORS / GRADE: {edu.grade}
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div className="lg:col-span-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight mb-2">
                  {edu.degree}
                  {edu.fieldOfStudy && (
                    <span className="font-serif italic text-[#68645D] dark:text-[#B8B2A8]">
                      {' '}
                      in {edu.fieldOfStudy}
                    </span>
                  )}
                </h3>

                <div className="font-sans font-semibold text-base text-[#171717] dark:text-[#F4F1EA] mb-4">
                  {edu.institutionUrl ? (
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors"
                    >
                      <span>{edu.institution}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ) : (
                    edu.institution
                  )}
                </div>

                {edu.description && (
                  <p className="font-sans text-sm sm:text-base text-[#68645D] dark:text-[#B8B2A8] font-light leading-relaxed mb-4">
                    {edu.description}
                  </p>
                )}

                {edu.courses && edu.courses.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase text-[#68645D] dark:text-[#B8B2A8]">
                    <span className="text-[#99938A] dark:text-[#777168]">CURRICULUM:</span>
                    {edu.courses.map((c, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
