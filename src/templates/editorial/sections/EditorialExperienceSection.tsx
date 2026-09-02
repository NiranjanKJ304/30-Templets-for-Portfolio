/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialExperienceSection - Chronological career history & appointment register
 */

import React from 'react';
import type { PortfolioData, Experience } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface EditorialExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const EditorialExperienceSection: React.FC<EditorialExperienceSectionProps> = ({
  data,
  enabled = true,
}) => {
  const experiences = data.experience;

  if (!enabled || !experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="pt-12 sm:pt-16 pb-12 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15">
      <EditorialSectionHeader
        index="04"
        title="Chronology & Practice"
        subtitle="Historical appointments, leadership mandates, and institutional engagements."
        count={experiences.length}
      />

      <div className="divide-y divide-[#171717]/10 dark:divide-[#F5F2EA]/10 mt-6">
        {experiences.map((exp: Experience, idx: number) => {
          const dateStr = `${exp.startDate} — ${exp.current ? 'Present' : exp.endDate || 'Present'}`;

          return (
            <article
              key={exp.id || idx}
              className="py-8 sm:py-12 first:pt-4 last:pb-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              {/* Left Column: Dates & Location */}
              <div className="lg:col-span-4 font-mono text-xs text-[#918D85] dark:text-[#817C74]">
                <div className="font-bold text-[#171717] dark:text-[#F5F2EA] text-sm mb-1">
                  {dateStr}
                </div>
                {exp.current && (
                  <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-[#B42318] dark:text-[#F06A5F] font-bold mb-2">
                    [ACTIVE APPOINTMENT]
                  </span>
                )}
                {exp.location && (
                  <div className="flex items-center gap-1 mt-1 text-[#68655F] dark:text-[#B8B3AA]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                )}
              </div>

              {/* Right Column: Role, Company, Description & Highlights */}
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] dark:text-[#F5F2EA] font-normal tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="font-serif italic text-lg text-[#68655F] dark:text-[#B8B3AA]">
                    at
                  </span>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-sans font-bold text-lg text-[#171717] dark:text-[#F5F2EA] hover:text-[#B42318] dark:hover:text-[#F06A5F] transition-colors"
                    >
                      <span>{exp.company}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <span className="font-sans font-bold text-lg text-[#171717] dark:text-[#F5F2EA]">
                      {exp.company}
                    </span>
                  )}
                </div>

                {exp.description && (
                  <p className="font-sans text-sm sm:text-base text-[#68655F] dark:text-[#B8B3AA] leading-relaxed mb-4">
                    {exp.description}
                  </p>
                )}

                {/* Highlights / Deliverables */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-[#171717]/5 dark:border-[#F5F2EA]/5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74] mb-2">
                      KEY DELIVERABLES:
                    </div>
                    <ul className="space-y-1.5 font-sans text-sm text-[#171717]/85 dark:text-[#F5F2EA]/85">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="font-mono text-xs text-[#B42318] dark:text-[#F06A5F] leading-none mt-1">
                            —
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
