/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalExperienceSection - Chronological career and roles timeline for Minimal template
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalExperienceSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const MinimalExperienceSection: React.FC<MinimalExperienceSectionProps> = ({
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
      className="py-16 sm:py-20"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="Experience" count={experience.length} />

      <div className="space-y-12">
        {experience.map((item) => (
          <article
            key={item.id}
            className="border-b border-[#1C1917]/5 dark:border-neutral-800 pb-10 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 font-sans flex items-center gap-2">
                <span>{item.role}</span>
                <span className="text-neutral-400 font-normal">at</span>
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline text-neutral-800 dark:text-neutral-200"
                  >
                    <span>{item.company}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                ) : (
                  <span className="text-neutral-800 dark:text-neutral-200">{item.company}</span>
                )}
              </h3>

              <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
                <span>
                  {item.startDate} — {item.current ? 'Present' : item.endDate || 'Present'}
                </span>
                {item.location && <span className="ml-2">({item.location})</span>}
              </div>
            </div>

            {item.description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans leading-relaxed">
                {item.description}
              </p>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-400 select-none mt-0.5">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {item.technologies && item.technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-2xs text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
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
