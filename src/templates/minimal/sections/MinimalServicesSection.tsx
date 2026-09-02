/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalServicesSection - Consulting and advisory offerings for Minimal template
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalServicesSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const MinimalServicesSection: React.FC<MinimalServicesSectionProps> = ({
  data,
  enabled,
}) => {
  const { services } = data;
  const hasData = hasSectionData('services', data);

  if (!enabled || !hasData || !services || services.length === 0) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-20"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="Services & Advisory" count={services.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((item) => (
          <article
            key={item.id}
            className="p-6 border border-[#1C1917]/10 dark:border-neutral-800 rounded-sm bg-white dark:bg-[#141210] flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                {item.rate && (
                  <span className="text-xs font-mono font-semibold text-neutral-800 dark:text-neutral-200">
                    {item.rate}
                  </span>
                )}
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.deliverables && item.deliverables.length > 0 && (
              <div className="pt-3 border-t border-[#1C1917]/5 dark:border-neutral-800">
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-2">
                  Deliverables:
                </span>
                <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {item.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-neutral-400" />
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
