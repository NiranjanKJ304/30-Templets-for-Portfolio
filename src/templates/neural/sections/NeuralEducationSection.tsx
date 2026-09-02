/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralEducationSection - Structured academic ledger nodes
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralEducationSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const NeuralEducationSection: React.FC<NeuralEducationSectionProps> = ({
  data,
  enabled,
  indexStr = '06',
}) => {
  const { education } = data;
  const hasData = hasSectionData('education', data);

  if (!enabled || !hasData || !education || education.length === 0) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <NeuralSectionHeader
        index={indexStr}
        title="Academic Credentials & Formations"
        subtitle="Formal academic preparation, institutional qualifications, and scholarly foundations."
        count={education.length}
      />

      <div className="space-y-8">
        {education.map((item) => (
          <article
            key={item.id}
            className="p-6 sm:p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 space-y-4 hover:border-cyan-500/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-neutral-100 dark:border-white/5 pb-3">
              <div>
                <h3 className="text-xl font-bold font-sans text-neutral-900 dark:text-neutral-50">
                  {item.degree}
                  {item.fieldOfStudy ? ` in ${item.fieldOfStudy}` : ''}
                </h3>
                <div className="font-mono text-sm text-cyan-600 dark:text-cyan-400 mt-0.5">
                  {item.institution}
                  {item.location && ` · ${item.location}`}
                </div>
              </div>

              <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 shrink-0">
                {item.startDate && `${item.startDate} — `}
                {item.current ? 'PRESENT' : item.endDate || ''}
              </div>
            </div>

            {item.description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                {item.description}
              </p>
            )}

            {item.grade && (
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                GRADE / DISTINCTION: {item.grade}
              </div>
            )}

            {item.activities && item.activities.length > 0 && (
              <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 pt-1">
                AFFILIATIONS: {item.activities.join(' · ')}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
