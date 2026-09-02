/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveExperienceSection - Chronological leadership history with two-column editorial split
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveExperienceSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const ExecutiveExperienceSection: React.FC<ExecutiveExperienceSectionProps> = ({
  data,
  enabled,
  indexStr = '05',
}) => {
  const { experience } = data;
  const hasData = hasSectionData('experience', data);

  if (!enabled || !hasData || !experience || experience.length === 0) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <ExecutiveSectionHeader
        index={indexStr}
        title="Executive & Leadership Career Record"
        subtitle="Chronological appointments, institutional mandates, and organizational transformations."
        count={experience.length}
      />

      <div className="space-y-10">
        {experience.map((item) => (
          <article
            key={item.id}
            className="p-8 sm:p-10 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
              {/* Left Column: Dates & Company (4 cols) */}
              <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-[#1A1A19]/10 dark:border-neutral-800 pb-4 lg:pb-0 lg:pr-6">
                <div className="text-xs font-mono font-bold tracking-widest text-neutral-900 dark:text-neutral-100 uppercase">
                  {item.startDate} — {item.current ? 'PRESENT' : item.endDate || ''}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-bold text-neutral-950 dark:text-neutral-50">
                    {item.company}
                  </span>
                  {item.companyUrl && (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {item.location && (
                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {item.location}
                  </div>
                )}

                {item.current && (
                  <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700">
                    CURRENT APPOINTMENT
                  </span>
                )}
              </div>

              {/* Right Column: Title & Responsibilities (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                  {item.role}
                </h3>

                {item.description && (
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      KEY OUTCOMES & MANDATES
                    </div>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200"
                        >
                          <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white shrink-0 mt-1.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
