/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicEducationSection - Academic and institutional foundations
 */

import React from 'react';
import type { PortfolioData, Education } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import { GraduationCap, ExternalLink, Calendar, MapPin, Award } from 'lucide-react';

interface NeoOrganicEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NeoOrganicEducationSection: React.FC<NeoOrganicEducationSectionProps> = ({
  data,
  enabled = true,
}) => {
  const educationList = data.education;

  if (!enabled || !educationList || educationList.length === 0) {
    return null;
  }

  return (
    <section id="education" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="Education & Research"
        subtitle="Academic backgrounds, degrees, and foundational research."
        count={educationList.length}
        accentColor="green"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {educationList.map((edu: Education, index: number) => {
          const dateRange = edu.startDate
            ? `${edu.startDate} – ${edu.current ? 'Present' : edu.endDate || 'Completed'}`
            : edu.endDate || '';

          return (
            <div
              key={edu.id || index}
              className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#17211B]/6 dark:border-[#F2F3ED]/6 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-[#79A66A] dark:text-[#91BD82]" />
                      <h3 className="text-xl font-bold text-[#17211B] dark:text-[#F2F3ED]">
                        {edu.degree}
                      </h3>
                    </div>
                    {edu.fieldOfStudy && (
                      <p className="text-sm font-medium text-[#59635C] dark:text-[#B8C0B8]">
                        {edu.fieldOfStudy}
                      </p>
                    )}
                  </div>

                  {dateRange && (
                    <div className="inline-flex items-center gap-1 text-xs font-mono text-[#8A938C] dark:text-[#7F897F] shrink-0">
                      <Calendar className="w-3 h-3 text-[#79A66A]" />
                      <span>{dateRange}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  {edu.institutionUrl ? (
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sm text-[#4169E1] dark:text-[#7F9CFF] hover:underline inline-flex items-center gap-1"
                    >
                      <span>{edu.institution}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="font-medium text-sm text-[#17211B] dark:text-[#F2F3ED]">
                      {edu.institution}
                    </span>
                  )}

                  {edu.location && (
                    <div className="flex items-center gap-1 text-xs text-[#8A938C] dark:text-[#7F897F]">
                      <MapPin className="w-3 h-3 text-[#E58B5B]" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>

                {edu.grade && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9E7D0]/60 dark:bg-[#111713] text-xs text-[#17211B] dark:text-[#F2F3ED] mb-4">
                    <Award className="w-3.5 h-3.5 text-[#79A66A]" />
                    <span>Grade / Honor: {edu.grade}</span>
                  </div>
                )}

                {edu.description && (
                  <p className="text-xs sm:text-sm text-[#59635C] dark:text-[#B8C0B8] font-light leading-relaxed mb-4">
                    {edu.description}
                  </p>
                )}

                {/* Courses */}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-[#17211B]/6 dark:border-[#F2F3ED]/6">
                    <span className="text-xs text-[#8A938C] dark:text-[#7F897F] font-mono">
                      Selected Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {edu.courses.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded-lg bg-[#F6F5EF] dark:bg-[#111713] text-[11px] text-[#59635C] dark:text-[#B8C0B8]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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
