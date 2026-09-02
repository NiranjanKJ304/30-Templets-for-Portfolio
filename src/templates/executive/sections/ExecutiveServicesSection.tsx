/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveServicesSection - Strategic services and structured deliverables
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveServicesSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const ExecutiveServicesSection: React.FC<ExecutiveServicesSectionProps> = ({
  data,
  enabled,
  indexStr = '02',
}) => {
  const { services } = data;
  const hasData = hasSectionData('services', data);

  if (!enabled || !hasData || !services || services.length === 0) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <ExecutiveSectionHeader
        index={indexStr}
        title="Advisory Offerings & Engagements"
        subtitle="Structured advisory capabilities, specialized project engagements, and strategic services."
        count={services.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((item) => (
          <article
            key={item.id}
            className="p-8 sm:p-10 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-baseline justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                <h3 className="font-serif text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                  {item.title}
                </h3>
                {item.rate && (
                  <span className="text-xs font-mono font-bold text-neutral-900 dark:text-neutral-100 uppercase">
                    {item.rate}
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.deliverables && item.deliverables.length > 0 && (
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  KEY DELIVERABLES
                </div>
                <ul className="space-y-1.5 text-xs font-sans text-neutral-700 dark:text-neutral-300">
                  {item.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
