/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraEducationSection - Luminous academic background presentation
 */

import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import type { PortfolioData, Education } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraEducationSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const AuroraEducationSection: React.FC<AuroraEducationSectionProps> = ({
  data,
  enabled,
}) => {
  const { education } = data;
  const hasData = hasSectionData('education', data);

  if (!enabled || !hasData || !education || education.length === 0) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="Academic History"
        title="Scholastic degrees and specialized education."
        subtitle="Foundational studies and institutional achievements."
        count={education.length}
        countLabel="DEGREES"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {education.map((item: Education, idx: number) => (
          <div
            key={item.id || idx}
            className="rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800/80 shadow-md shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-200/60 dark:border-purple-800/60">
                  <GraduationCap className="w-5 h-5" />
                </div>
                {(item.startDate || item.endDate) && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {item.startDate && `${item.startDate} — `}
                      {item.current ? 'Present' : (item.endDate || 'Present')}
                    </span>
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight">
                  {item.degree}
                  {item.fieldOfStudy && ` in ${item.fieldOfStudy}`}
                </h3>
                <div className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                  {item.institution}
                </div>
              </div>

              {item.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              )}
            </div>

            {/* Honors & Activities if present */}
            {((item.grade) || (item.activities && item.activities.length > 0)) && (
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
                {item.grade && (
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <Award className="w-3.5 h-3.5 text-amber-500 mr-1" />
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
                      {item.grade}
                    </span>
                  </div>
                )}

                {item.activities && item.activities.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.activities.map((act, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
