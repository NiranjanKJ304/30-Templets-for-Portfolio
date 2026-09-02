/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistServicesSection - Raw service capabilities & offering blocks
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';
import { ArrowRight, Check } from 'lucide-react';

interface BrutalistServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BrutalistServicesSection: React.FC<BrutalistServicesSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.services || data.services.length === 0) return null;

  return (
    <section
      id="services"
      className="py-16 md:py-24 border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="02"
          title="Services & Capabilities"
          subtitle="COMMISSION DIRECTIVES & DELIVERABLES"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((service, idx) => (
            <div
              key={service.id || idx}
              className="p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[5px_5px_0px_0px_#111111] dark:shadow-[5px_5px_0px_0px_#F4F1E8] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-[#111111] dark:border-[#F4F1E8]">
                  <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#2563EB] text-white">
                    SRV_{String(idx + 1).padStart(2, '0')}
                  </span>
                  {service.rate && (
                    <span className="font-mono text-xs font-bold text-[#111111] dark:text-[#F4F1E8]">
                      {service.rate}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-black text-xl uppercase tracking-tight text-[#111111] dark:text-[#F4F1E8] mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-[#444444] dark:text-[#CCCCCC] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {service.deliverables && service.deliverables.length > 0 && (
                <div className="pt-4 border-t-2 border-[#111111] dark:border-[#F4F1E8]">
                  <div className="font-mono text-[11px] font-bold uppercase text-[#777777] dark:text-[#999999] mb-2">
                    DELIVERABLE MANIFEST:
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-center gap-2 font-mono text-xs text-[#111111] dark:text-[#F4F1E8]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
