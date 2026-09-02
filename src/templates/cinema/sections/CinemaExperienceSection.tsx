/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaExperienceSection - Chronological career story and leadership history
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaExperienceSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
}

export const CinemaExperienceSection: React.FC<CinemaExperienceSectionProps> = ({
  data,
  enabled,
  chapterIndex = '05',
}) => {
  const { experience } = data;
  const hasData = hasSectionData('experience', data);

  if (!enabled || !hasData || !experience || experience.length === 0) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="py-24 sm:py-36"
      containerClassName="max-w-6xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Career & Leadership Story"
        subtitle="Chronological appointments, executive mandates, and institutional contributions."
        count={experience.length}
        countLabel="APPOINTMENTS"
      />

      <div className="space-y-12">
        {experience.map((item) => (
          <article
            key={item.id}
            className="p-8 sm:p-10 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl space-y-6 hover:border-amber-500/40 transition-all group"
          >
            {/* Header: Date + Role + Company */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-200 dark:border-white/5 pb-4">
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-neutral-900 dark:text-neutral-50">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 font-mono text-sm text-amber-600 dark:text-amber-400">
                  <span>{item.company}</span>
                  {item.companyUrl && (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-amber-500"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {item.location && (
                    <span className="text-neutral-500 text-xs">
                      · {item.location}
                    </span>
                  )}
                </div>
              </div>

              <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 shrink-0">
                {item.startDate} — {item.current ? 'PRESENT' : item.endDate || ''}
              </div>
            </div>

            {/* Narrative Description */}
            {item.description && (
              <p className="text-base text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Highlights List */}
            {item.highlights && item.highlights.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  KEY CONTRIBUTIONS
                </div>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 font-sans"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies & Domain Tools */}
            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-white/5">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
