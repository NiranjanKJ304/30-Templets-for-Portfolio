/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoServicesSection - Advisory, consulting, and client service tiles
 */

import React from 'react';
import type { PortfolioData, Service } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoSectionHeader } from '../components/BentoSectionHeader';
import { Layers, CheckCircle2, Clock, DollarSign } from 'lucide-react';

interface BentoServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BentoServicesSection: React.FC<BentoServicesSectionProps> = ({
  data,
  enabled = true,
}) => {
  const services = data.services;

  if (!enabled || !services || services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoSectionHeader
        label="// COMMISSIONS & SERVICES"
        title="Consulting & Solutions"
        subtitle="Strategic engagements, architecture reviews, and bespoke implementation."
        icon={<Layers className="w-4 h-4 text-[#3B82F6]" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 mt-4">
        {services.map((service: Service, idx: number) => {
          const span = services.length === 1 ? 'col-12' : services.length === 2 ? 'col-6' : 'col-4';

          return (
            <BentoTile
              key={service.id || idx}
              span={span}
              variant="default"
              padding="lg"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-[#3B82F6] uppercase mb-2">
                  [0{idx + 1}] SERVICE
                </div>

                <h3 className="font-sans font-bold text-xl text-[#171A1F] dark:text-[#F4F5F7] tracking-tight mb-2">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-[#5F6672] dark:text-[#9DA5B4] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Deliverables */}
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="space-y-2 mb-4 pt-3 border-t border-[#E2E6ED] dark:border-[#2A2E39]">
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8E95A3]">
                      DELIVERABLES:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#171A1F] dark:text-[#F4F5F7]">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Rate & Timeline if canonical */}
              {(service.rate || service.timeline) && (
                <div className="pt-4 border-t border-[#E2E6ED] dark:border-[#2A2E39] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  {service.rate && (
                    <div className="flex items-center gap-1 text-[#171A1F] dark:text-[#F4F5F7] font-semibold">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{service.rate}</span>
                    </div>
                  )}
                  {service.timeline && (
                    <div className="flex items-center gap-1 text-[#5F6672] dark:text-[#9DA5B4]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.timeline}</span>
                    </div>
                  )}
                </div>
              )}
            </BentoTile>
          );
        })}
      </div>
    </section>
  );
};
