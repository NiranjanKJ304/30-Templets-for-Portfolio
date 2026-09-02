/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirExperienceSection - Curated Career Archive for Magazine Noir
 */

import React from 'react';
import type { PortfolioData, Experience } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface NoirExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NoirExperienceSection: React.FC<NoirExperienceSectionProps> = ({
  data,
  enabled = true,
}) => {
  const experiences = data.experience;

  if (!enabled || !experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      <NoirSectionHeader
        index="04"
        title="Chronology & Appointments"
        subtitle="Institutional roles, directorial appointments, and leadership mandates."
        count={experiences.length}
      />

      <div className="space-y-12 sm:space-y-16">
        {experiences.map((exp: Experience, idx: number) => {
          const dateStr = [exp.startDate, exp.current ? 'PRESENT' : exp.endDate]
            .filter(Boolean)
            .join(' — ');

          const expNum = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;

          return (
            <article
              key={exp.id || idx}
              className="group pb-12 sm:pb-16 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10 last:border-b-0 last:pb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                {/* Meta Column */}
                <div className="lg:col-span-4 font-mono text-xs text-[#99938A] dark:text-[#777168] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#8B5E3C] dark:text-[#C49A6C]">
                      RECORD {expNum}
                    </span>
                    {exp.current && (
                      <span className="px-2 py-0.5 bg-[#8B5E3C]/10 text-[#8B5E3C] dark:bg-[#C49A6C]/20 dark:text-[#C49A6C] text-[9px] uppercase font-bold">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <div className="font-bold text-[#171717] dark:text-[#F4F1EA] text-sm">
                    {dateStr}
                  </div>

                  {exp.location && <div>LOCATION: {exp.location}</div>}
                  {exp.employmentType && <div className="uppercase">TYPE: {exp.employmentType}</div>}
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight mb-2">
                    {exp.role}
                  </h3>

                  <div className="font-sans font-semibold text-base sm:text-lg text-[#68645D] dark:text-[#B8B2A8] mb-4">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors"
                      >
                        <span>{exp.company}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    ) : (
                      exp.company
                    )}
                  </div>

                  {exp.description && (
                    <p className="font-sans text-sm sm:text-base text-[#68645D] dark:text-[#B8B2A8] font-light leading-relaxed mb-6">
                      {exp.description}
                    </p>
                  )}

                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="space-y-2 pt-4 border-t border-[#171717]/5 dark:border-[#F4F1EA]/5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#99938A] dark:text-[#777168] block mb-2">
                        RECORD DELIVERABLES:
                      </span>
                      <ul className="space-y-2">
                        {exp.highlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-[#171717]/85 dark:text-[#F4F1EA]/85 font-light"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C] dark:bg-[#C49A6C] mt-2 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 font-mono text-[10px] uppercase text-[#68645D] dark:text-[#B8B2A8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
