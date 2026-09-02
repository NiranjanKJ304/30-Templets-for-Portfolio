/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralServicesSection - Universal advisory and offerings nodes
 */

import React from 'react';
import { Check } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralServicesSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const NeuralServicesSection: React.FC<NeuralServicesSectionProps> = ({
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
      <NeuralSectionHeader
        index={indexStr}
        title="Services & Practice Offerings"
        subtitle="Specialized capabilities, strategic advisory, and collaborative engagements."
        count={services.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item) => (
          <article
            key={item.id}
            className="p-6 sm:p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 flex flex-col justify-between space-y-6 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-2 h-2 bg-cyan-500 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                {item.timeline && (
                  <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                    {item.timeline}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold font-sans text-neutral-900 dark:text-neutral-50 group-hover:text-cyan-500 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                {item.description}
              </p>

              {item.deliverables && item.deliverables.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-white/5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    KEY DELIVERABLES
                  </div>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((deliv, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs font-sans text-neutral-700 dark:text-neutral-300"
                      >
                        <Check className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {item.rate && (
              <div className="pt-3 border-t border-neutral-100 dark:border-white/5 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                {item.rate}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
