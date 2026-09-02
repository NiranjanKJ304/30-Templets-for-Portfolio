/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroServicesSection - Bold graphic capability panels
 */

import React from 'react';
import { CheckSquare, Clock, DollarSign } from 'lucide-react';
import type { PortfolioData, Service } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroServicesSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const RetroServicesSection: React.FC<RetroServicesSectionProps> = ({
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
      className="py-16 sm:py-24 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="CAPABILITIES"
        title="Services & Advisory"
        subtitle="Specialized engagements, consulting offerings, and functional expertise."
        accentColor="mustard"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service: Service, idx: number) => {
          const numStr = String(idx + 1).padStart(2, '0');
          return (
            <div
              key={service.id || idx}
              className="bg-[#FFF9EA] dark:bg-[#362E28] border-3 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#29231F] dark:shadow-[6px_6px_0px_0px_rgba(255,244,214,0.15)] flex flex-col justify-between space-y-6 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#29231F]"
            >
              <div className="space-y-4">
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-lg bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] font-mono font-black text-sm flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                    {numStr}
                  </span>
                  {service.rate && (
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#FFF4D6] dark:bg-[#29231F] border border-[#29231F]/20 text-[#29231F] dark:text-[#FFF4D6]">
                      <DollarSign className="w-3 h-3 text-[#E76F2E]" />
                      <span>{service.rate}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#29231F] dark:text-[#FFF4D6]">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[#665D55] dark:text-[#D8CBB7] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables & Metadata */}
              <div className="pt-4 border-t-2 border-[#29231F]/10 dark:border-[#FFF4D6]/10 space-y-4">
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#665D55] dark:text-[#A89B8E] block">
                      // DELIVERABLES:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#29231F] dark:text-[#FFF4D6] font-medium"
                        >
                          <CheckSquare className="w-4 h-4 text-[#E76F2E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.timeline && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#665D55] dark:text-[#A89B8E]">
                    <Clock className="w-3.5 h-3.5 text-[#477A8A]" />
                    <span>TIMELINE: {service.timeline}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
