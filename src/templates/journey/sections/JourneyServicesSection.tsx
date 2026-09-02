/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyServicesSection - Offerings and advisory practices
 */

import React from 'react';
import { CheckCircle2, Layers } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { JourneySectionHeader } from '../components/JourneySectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface JourneyServicesSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterNumber?: string;
}

export const JourneyServicesSection: React.FC<JourneyServicesSectionProps> = ({
  data,
  enabled,
  chapterNumber = '02',
}) => {
  const { services } = data;
  const hasData = hasSectionData('services', data);

  if (!enabled || !hasData || !services || services.length === 0) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800"
      containerClassName="max-w-5xl"
    >
      <JourneySectionHeader
        chapterNumber={chapterNumber}
        title="Services & Capabilities"
        subtitle="Specialized capabilities, strategic advisory, and engagement scopes."
        count={services.length}
        countLabel="OFFERINGS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {services.map((item, idx) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xs space-y-4 hover:border-teal-500 transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
              <span className="text-teal-700 dark:text-teal-400 font-semibold">
                // SERVICE-0{idx + 1}
              </span>
              {item.timeline && <span>{item.timeline}</span>}
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  {item.title}
                </h3>
                {item.rate && (
                  <div className="font-mono text-xs text-teal-600 dark:text-teal-400 mt-0.5">
                    {item.rate}
                  </div>
                )}
              </div>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {item.description}
            </p>

            {item.deliverables && item.deliverables.length > 0 && (
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  Deliverables
                </div>
                <ul className="space-y-1.5">
                  {item.deliverables.map((deliv, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
