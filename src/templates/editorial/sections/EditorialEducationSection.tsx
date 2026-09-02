/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialEducationSection - Academic background & scholastic record
 */

import React from 'react';
import type { PortfolioData, Education } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface EditorialEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const EditorialEducationSection: React.FC<EditorialEducationSectionProps> = ({
  data,
  enabled = true,
}) => {
  const educations = data.education;

  if (!enabled || !educations || educations.length === 0) {
    return null;
  }

  return (
    <section id="education" className="pt-12 sm:pt-16 pb-12 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15">
      <EditorialSectionHeader
        index="06"
        title="Scholastic Foundation"
        subtitle="Formal academic degrees, research foundations, and institutional study."
        count={educations.length}
      />

      <div className="divide-y divide-[#171717]/10 dark:divide-[#F5F2EA]/10 mt-6">
        {educations.map((edu: Education, idx: number) => {
          const dateStr = [edu.startDate, edu.current ? 'Present' : edu.endDate]
            .filter(Boolean)
            .join(' — ');

          return (
            <div
              key={edu.id || idx}
              className="py-8 first:pt-2 last:pb-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              {/* Date & Institution Meta */}
              <div className="lg:col-span-4 font-mono text-xs text-[#918D85] dark:text-[#817C74]">
                {dateStr && (
                  <div className="font-bold text-[#171717] dark:text-[#F5F2EA] text-sm mb-1">
                    {dateStr}
                  </div>
                )}
                {edu.location && <div>{edu.location}</div>}
                {edu.grade && (
                  <div className="mt-2 text-[#B42318] dark:text-[#F06A5F] font-bold">
                    HONORS / GRADE: {edu.grade}
                  </div>
                )}
              </div>

              {/* Degree & Field */}
              <div className="lg:col-span-8">
                <h3 className="font-serif text-2xl text-[#171717] dark:text-[#F5F2EA] font-normal tracking-tight mb-1">
                  {edu.degree}
                  {edu.fieldOfStudy && (
                    <span className="font-serif italic text-[#68655F] dark:text-[#B8B3AA]">
                      {' '}
                      in {edu.fieldOfStudy}
                    </span>
                  )}
                </h3>

                <div className="font-sans font-bold text-base text-[#171717] dark:text-[#F5F2EA] mb-3">
                  {edu.institutionUrl ? (
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#B42318] dark:hover:text-[#F06A5F] transition-colors"
                    >
                      <span>{edu.institution}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ) : (
                    edu.institution
                  )}
                </div>

                {edu.description && (
                  <p className="font-sans text-sm text-[#68655F] dark:text-[#B8B3AA] leading-relaxed mb-4">
                    {edu.description}
                  </p>
                )}

                {/* Courses / Activities */}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase text-[#68655F] dark:text-[#B8B3AA]">
                    <span className="text-[#918D85] dark:text-[#817C74]">CURRICULUM:</span>
                    {edu.courses.map((c, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-1.5 py-0.5 border border-[#171717]/10 dark:border-[#F5F2EA]/10"
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
