/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaServicesSection - Professional offerings and collaborative engagements
 */

import React from 'react';
import { Check } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaServicesSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
}

export const CinemaServicesSection: React.FC<CinemaServicesSectionProps> = ({
  data,
  enabled,
  chapterIndex = '02',
}) => {
  const { services } = data;
  const hasData = hasSectionData('services', data);

  if (!enabled || !hasData || !services || services.length === 0) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="py-24 sm:py-32"
      containerClassName="max-w-6xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Services & Capabilities"
        subtitle="Specialized practice offerings, strategic advisory, and collaborative engagements."
        count={services.length}
        countLabel="SERVICES"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item) => (
          <article
            key={item.id}
            className="p-8 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl flex flex-col justify-between space-y-6 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                {item.timeline && (
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                    {item.timeline}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold font-serif text-neutral-900 dark:text-neutral-50 group-hover:text-amber-500 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                {item.description}
              </p>

              {/* Deliverables List */}
              {item.deliverables && item.deliverables.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-white/5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    DELIVERABLE FOCUS
                  </div>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((deliv, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-neutral-700 dark:text-neutral-300"
                      >
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Rate terms rendered ONLY if actual rate exists */}
            {item.rate && (
              <div className="pt-4 border-t border-neutral-200 dark:border-white/5 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                {item.rate}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
