/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyEducationSection - Academic foundations and institutional milestones
 */

import React from 'react';
import { GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { JourneySectionHeader } from '../components/JourneySectionHeader';
import { JourneyTimelineNode } from '../components/JourneyTimelineSpine';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface JourneyEducationSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterNumber?: string;
}

export const JourneyEducationSection: React.FC<JourneyEducationSectionProps> = ({
  data,
  enabled,
  chapterNumber = '06',
}) => {
  const { education } = data;
  const hasData = hasSectionData('education', data);

  if (!enabled || !hasData || !education || education.length === 0) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800"
      containerClassName="max-w-5xl"
    >
      <JourneySectionHeader
        chapterNumber={chapterNumber}
        title="Education & Academic Foundations"
        subtitle="Scholastic qualifications, degrees, and foundational institutional studies."
        count={education.length}
        countLabel="DEGREES"
      />

      <div className="space-y-8 sm:space-y-10">
        {education.map((item, idx) => {
          const dateString = item.startDate
            ? `${item.startDate} — ${item.current ? 'Present' : item.endDate || ''}`
            : item.endDate;

          return (
            <JourneyTimelineNode
              key={item.id || idx}
              date={dateString}
              isCurrent={item.current}
            >
              <div className="p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xs space-y-4 hover:border-teal-500 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                      {item.degree} {item.fieldOfStudy ? `in ${item.fieldOfStudy}` : ''}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      {item.institutionUrl ? (
                        <a
                          href={item.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-teal-600 inline-flex items-center gap-1"
                        >
                          <span>{item.institution}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span>{item.institution}</span>
                      )}
                      {item.location && (
                        <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                          · <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {item.description && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.grade && (
                  <div className="font-mono text-xs text-teal-700 dark:text-teal-400 font-semibold">
                    Honors / Grade: {item.grade}
                  </div>
                )}

                {item.activities && item.activities.length > 0 && (
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 space-y-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                      Activities & Distinctions
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.activities.map((act, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 rounded-md text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                          {act}
                        </span>
                      ))}
                    </div>
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
