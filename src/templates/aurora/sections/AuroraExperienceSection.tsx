/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraExperienceSection - Flowing career chapters with alternating soft surfaces
 */

import React from 'react';
import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';
import type { PortfolioData, Experience } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraExperienceSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const AuroraExperienceSection: React.FC<AuroraExperienceSectionProps> = ({
  data,
  enabled,
}) => {
  const { experience } = data;
  const hasData = hasSectionData('experience', data);

  if (!enabled || !hasData || !experience || experience.length === 0) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="Career Chapters"
        title="Leadership appointments and engineering tenures."
        subtitle="Chronological milestones of institutional contributions and direct impacts."
        count={experience.length}
        countLabel="ROLES"
      />

      <div className="space-y-6 sm:space-y-8">
        {experience.map((item: Experience, idx: number) => (
          <div
            key={item.id || idx}
            className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-white/80 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800/80 shadow-md shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 backdrop-blur-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Role Header & Organization (Cols 1-4) */}
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {item.startDate} &mdash; {item.current ? 'Present' : (item.endDate || 'Present')}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-neutral-950 dark:text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-1">
                    {item.company}
                  </div>
                </div>

                {item.location && (
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>

              {/* Highlights & Scope (Cols 5-12) */}
              <div className="lg:col-span-8 space-y-4">
                {item.description && (
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2.5 pt-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-sm text-neutral-600 dark:text-neutral-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
