/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyExperienceSection - Chronological career appointments and roles
 */

import React from 'react';
import { Building2, MapPin, ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { JourneySectionHeader } from '../components/JourneySectionHeader';
import { JourneyTimelineNode } from '../components/JourneyTimelineSpine';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface JourneyExperienceSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterNumber?: string;
}

export const JourneyExperienceSection: React.FC<JourneyExperienceSectionProps> = ({
  data,
  enabled,
  chapterNumber = '05',
}) => {
  const { experience } = data;
  const hasData = hasSectionData('experience', data);

  if (!enabled || !hasData || !experience || experience.length === 0) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800"
      containerClassName="max-w-5xl"
    >
      <JourneySectionHeader
        chapterNumber={chapterNumber}
        title="Experience & Career Chronology"
        subtitle="Chronological sequence of leadership posts, engineering appointments, and professional tenures."
        count={experience.length}
        countLabel="ROLES"
      />

      <div className="space-y-8 sm:space-y-10">
        {experience.map((item, idx) => {
          const dateString = `${item.startDate} — ${item.current ? 'Present' : item.endDate || 'Present'}`;

          return (
            <JourneyTimelineNode
              key={item.id || idx}
              date={dateString}
              isCurrent={item.current}
            >
              <div className="p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xs space-y-4 hover:border-teal-500 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-teal-700 dark:text-teal-400">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4 text-neutral-400" />
                        {item.companyUrl ? (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline inline-flex items-center gap-1"
                          >
                            <span>{item.company}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span>{item.company}</span>
                        )}
                      </span>
                      {item.location && (
                        <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                          · <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.current && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 uppercase tracking-wider">
                      Current Post
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2 pt-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </JourneyTimelineNode>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
