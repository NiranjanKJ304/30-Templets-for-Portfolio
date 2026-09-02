/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicExperienceSection - Soft connected experience modules
 */

import React from 'react';
import type { PortfolioData, Experience } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import { Building2, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface NeoOrganicExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NeoOrganicExperienceSection: React.FC<NeoOrganicExperienceSectionProps> = ({
  data,
  enabled = true,
}) => {
  const experiences = data.experience;

  if (!enabled || !experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="Experience"
        subtitle="Professional history, leadership roles, and organisational contributions."
        count={experiences.length}
        accentColor="blue"
      />

      <div className="space-y-6">
        {experiences.map((exp: Experience, index: number) => {
          const dateRange = `${exp.startDate} – ${exp.current ? 'Present' : exp.endDate || 'Present'}`;

          return (
            <div
              key={exp.id || index}
              className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-[#17211B]/6 dark:border-[#F2F3ED]/6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4169E1] dark:bg-[#7F9CFF]" />
                    <h3 className="text-xl sm:text-2xl font-bold text-[#17211B] dark:text-[#F2F3ED]">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#D9E7D0]/70 dark:bg-[#111713] text-[#79A66A] dark:text-[#91BD82] text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#59635C] dark:text-[#B8C0B8]">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#4169E1] dark:text-[#7F9CFF] hover:underline inline-flex items-center gap-1"
                      >
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="font-medium text-[#17211B] dark:text-[#F2F3ED] inline-flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#59635C]" />
                        <span>{exp.company}</span>
                      </span>
                    )}

                    {exp.location && (
                      <span className="inline-flex items-center gap-1 text-xs text-[#8A938C] dark:text-[#7F897F]">
                        <MapPin className="w-3 h-3 text-[#E58B5B]" />
                        <span>{exp.location}</span>
                      </span>
                    )}

                    {exp.employmentType && (
                      <span className="text-xs text-[#8A938C] dark:text-[#7F897F] capitalize">
                        • {exp.employmentType}
                      </span>
                    )}
                  </div>
                </div>

                {/* Date range badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F6F5EF] dark:bg-[#111713] border border-[#17211B]/6 dark:border-[#F2F3ED]/6 text-xs font-mono text-[#59635C] dark:text-[#B8C0B8] shrink-0 self-start">
                  <Calendar className="w-3 h-3 text-[#4169E1]" />
                  <span>{dateRange}</span>
                </div>
              </div>

              {/* Description */}
              {exp.description && (
                <p className="text-sm sm:text-base text-[#59635C] dark:text-[#B8C0B8] font-light leading-relaxed mt-4">
                  {exp.description}
                </p>
              )}

              {/* Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-[#59635C] dark:text-[#B8C0B8] font-light">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#79A66A] mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-[#17211B]/6 dark:border-[#F2F3ED]/6">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-xl bg-[#F6F5EF] dark:bg-[#111713] text-xs text-[#59635C] dark:text-[#B8C0B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
