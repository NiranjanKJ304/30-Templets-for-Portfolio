/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasServicesSection - Modular capability blocks and service offerings
 */

import React from 'react';
import { Check } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasServicesSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
}

export const CanvasServicesSection: React.FC<CanvasServicesSectionProps> = ({
  data,
  enabled,
  sectionNumber = '02',
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
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Services & Strategic Engagements"
        subtitle="Specialized practice offerings, technical advisory, and collaborative mandates."
        count={services.length}
        countLabel="SERVICES"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((item, idx) => (
          <article
            key={item.id}
            className="p-8 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg flex flex-col justify-between space-y-6 hover:border-orange-600 dark:hover:border-orange-500 transition-colors group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                <span className="text-orange-600 dark:text-orange-400 font-bold">
                  // MOD-0{idx + 1}
                </span>
                {item.timeline && <span>{item.timeline}</span>}
              </div>

              <h3 className="text-2xl font-black text-neutral-900 dark:text-neutral-50 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                {item.description}
              </p>

              {item.deliverables && item.deliverables.length > 0 && (
                <div className="space-y-2 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    KEY DELIVERABLES
                  </div>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((deliv, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans"
                      >
                        <Check className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {item.rate && (
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 font-mono text-xs text-orange-600 dark:text-orange-400 font-bold">
                RATE: {item.rate}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
