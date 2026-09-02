/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraServicesSection - Luminous service offerings & practice areas
 */

import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraServicesSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const AuroraServicesSection: React.FC<AuroraServicesSectionProps> = ({
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
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="Services & Practices"
        title="Consulting, advisory, and specialized solutions."
        subtitle="End-to-end capability areas tailored to strategic organizational objectives."
        count={services.length}
        countLabel="AREAS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800/80 shadow-md shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500/15 via-sky-500/15 to-rose-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-200/60 dark:border-purple-800/60 shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>
            </div>

            {service.deliverables && service.deliverables.length > 0 && (
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Key Deliverables
                </div>
                <ul className="space-y-2">
                  {service.deliverables.map((item, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-xs text-neutral-600 dark:text-neutral-300 flex items-start gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
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
