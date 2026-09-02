/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralExperienceSection - Chronological career record with vertical signal line
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralExperienceSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const NeuralExperienceSection: React.FC<NeuralExperienceSectionProps> = ({
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
      <NeuralSectionHeader
        index={indexStr}
        title="Experience & Career History"
        subtitle="Chronological appointments, leadership mandates, and organizational contributions."
        count={experience.length}
      />

      <div className="relative pl-6 sm:pl-10 space-y-12 border-l border-neutral-300 dark:border-white/10">
        {experience.map((item) => (
          <article
            key={item.id}
            className="relative p-6 sm:p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 space-y-4 hover:border-cyan-500/40 transition-colors"
          >
            {/* Timeline Glowing Beacon Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-7 w-3.5 h-3.5 bg-neutral-900 dark:bg-[#08090C] border-2 border-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />

            {/* Header: Date + Company + Role */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-neutral-100 dark:border-white/5 pb-3">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-sans text-neutral-900 dark:text-neutral-50">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 font-mono text-sm text-cyan-600 dark:text-cyan-400">
                  <span>{item.company}</span>
                  {item.companyUrl && (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-cyan-500"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {item.location && (
                    <span className="text-neutral-400 dark:text-neutral-500 text-xs">
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
              <p className="text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Highlights List */}
            {item.highlights && item.highlights.length > 0 && (
              <div className="space-y-2 pt-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  MANDATE HIGHLIGHTS
                </div>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 shrink-0 mt-1.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies / Competencies */}
            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-white/5">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
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
