/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialServicesSection - Advisory & practice commission index
 */

import React from 'react';
import type { PortfolioData, Service } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';
import { Clock, DollarSign, Check } from 'lucide-react';

interface EditorialServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const EditorialServicesSection: React.FC<EditorialServicesSectionProps> = ({
  data,
  enabled = true,
}) => {
  const services = data.services;

  if (!enabled || !services || services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="pt-12 sm:pt-16 pb-12 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15">
      <EditorialSectionHeader
        index="05"
        title="Areas of Practice & Advisory"
        subtitle="Professional mandates, specialized consulting offerings, and creative commissions."
        count={services.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {services.map((service: Service, idx: number) => {
          const serviceIndex = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;

          return (
            <div
              key={service.id || idx}
              className="p-6 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-[#171717]/10 dark:border-[#F5F2EA]/10 mb-4">
                  <span className="font-mono text-xs text-[#B42318] dark:text-[#F06A5F] font-bold">
                    PRACTICE {serviceIndex}
                  </span>
                  {service.timeline && (
                    <span className="flex items-center gap-1 font-mono text-[10px] uppercase text-[#918D85] dark:text-[#817C74]">
                      <Clock className="w-3 h-3" />
                      {service.timeline}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#171717] dark:text-[#F5F2EA] font-normal tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-[#68655F] dark:text-[#B8B3AA] leading-relaxed mb-6">
                  {service.description}
                </p>

                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="pt-4 border-t border-[#171717]/5 dark:border-[#F5F2EA]/5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74] mb-2">
                      SCOPE & DELIVERABLES:
                    </div>
                    <ul className="space-y-1.5 font-sans text-xs text-[#171717]/85 dark:text-[#F5F2EA]/85">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#B42318] dark:text-[#F06A5F] mt-0.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {service.rate && (
                <div className="mt-6 pt-4 border-t border-[#171717]/10 dark:border-[#F5F2EA]/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#918D85] dark:text-[#817C74] uppercase">TERMS / RATE:</span>
                  <span className="font-bold text-[#171717] dark:text-[#F5F2EA]">{service.rate}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
