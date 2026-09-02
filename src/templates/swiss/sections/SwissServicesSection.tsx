/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissServicesSection - Structured practice & advisory register
 */

import React from 'react';
import { Check } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissServicesSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const SwissServicesSection: React.FC<SwissServicesSectionProps> = ({
  data,
  enabled,
  indexNumber = '02',
}) => {
  const { services } = data;
  const hasData = hasSectionData('services', data);

  if (!enabled || !hasData || !services || services.length === 0) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b border-neutral-900 dark:border-neutral-100"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Services & Practice Areas"
        subtitle="Specialized capabilities, strategic advisory, and engagement models."
        count={services.length}
        countLabel="PRACTICES"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={service.id || idx}
            className="border border-neutral-900 dark:border-neutral-100 p-6 bg-white dark:bg-neutral-900 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-500 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-red-600 dark:text-red-500 font-bold">
                  // 0{idx + 1}
                </span>
                {service.timeline && (
                  <span className="uppercase">{service.timeline}</span>
                )}
              </div>

              <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-50 uppercase tracking-tight">
                {service.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {service.description}
              </p>

              {service.deliverables && service.deliverables.length > 0 && (
                <div className="pt-2 space-y-2">
                  <div className="font-mono text-[11px] font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
                    DELIVERABLES:
                  </div>
                  <ul className="space-y-1.5 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {service.rate && (
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 font-mono text-xs flex justify-between items-baseline">
                <span className="text-neutral-500 uppercase">ENGAGEMENT:</span>
                <span className="font-bold text-neutral-950 dark:text-neutral-50">{service.rate}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
