/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirServicesSection - Areas of practice & advisory for Magazine Noir
 */

import React from 'react';
import type { PortfolioData, Service } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';
import { Clock, Check } from 'lucide-react';

interface NoirServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NoirServicesSection: React.FC<NoirServicesSectionProps> = ({
  data,
  enabled = true,
}) => {
  const services = data.services;

  if (!enabled || !services || services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      <NoirSectionHeader
        index="05"
        title="Practice & Advisory"
        subtitle="Specialized consulting mandates, creative commissions, and executive engagements."
        count={services.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {services.map((service: Service, idx: number) => {
          const serviceNum = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;

          return (
            <div
              key={service.id || idx}
              className="p-8 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10 mb-4">
                  <span className="font-mono text-xs font-semibold text-[#8B5E3C] dark:text-[#C49A6C]">
                    MANDATE {serviceNum}
                  </span>
                  {service.timeline && (
                    <span className="flex items-center gap-1 font-mono text-[10px] uppercase text-[#99938A] dark:text-[#777168]">
                      <Clock className="w-3 h-3" />
                      {service.timeline}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-[#68645D] dark:text-[#B8B2A8] font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="pt-4 border-t border-[#171717]/5 dark:border-[#F4F1EA]/5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#99938A] dark:text-[#777168] block mb-2">
                      SPECIFICATION:
                    </span>
                    <ul className="space-y-1.5 font-sans text-xs text-[#171717]/85 dark:text-[#F4F1EA]/85">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#8B5E3C] dark:text-[#C49A6C] mt-0.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {service.rate && (
                <div className="mt-8 pt-4 border-t border-[#171717]/10 dark:border-[#F4F1EA]/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#99938A] dark:text-[#777168] uppercase">TERMS / RATE:</span>
                  <span className="font-bold text-[#171717] dark:text-[#F4F1EA]">{service.rate}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
