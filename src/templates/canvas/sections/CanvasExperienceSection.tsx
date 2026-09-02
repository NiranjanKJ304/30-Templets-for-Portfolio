/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasExperienceSection - Chronological career appointments and leadership contributions
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasExperienceSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
}

export const CanvasExperienceSection: React.FC<CanvasExperienceSectionProps> = ({
  data,
  enabled,
  sectionNumber = '05',
}) => {
  const { experience } = data;
  const hasData = hasSectionData('experience', data);

  if (!enabled || !hasData || !experience || experience.length === 0) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-32"
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Career & Leadership Story"
        subtitle="Chronological appointments, operational mandates, and institutional contributions."
        count={experience.length}
        countLabel="ROLES"
      />

      <div className="space-y-8">
        {experience.map((item, idx) => (
          <article
            key={item.id}
            className="p-8 sm:p-10 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg space-y-6 hover:border-orange-600 dark:hover:border-orange-500 transition-colors"
          >
            {/* Header: Dates + Title + Company */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <div className="space-y-1">
                <div className="font-mono text-xs text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider">
                  // APPOINTMENT 0{idx + 1}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-neutral-50">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 font-mono text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="font-bold">{item.company}</span>
                  {item.companyUrl && (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-orange-600"
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

              <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 shrink-0 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700">
                {item.startDate} — {item.current ? 'PRESENT' : item.endDate || ''}
              </div>
            </div>

            {/* Narrative Description */}
            {item.description && (
              <p className="text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
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
                  {item.highlights.map((hl, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 font-sans"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-600 dark:bg-orange-400 shrink-0 mt-2" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                {item.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 rounded"
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
