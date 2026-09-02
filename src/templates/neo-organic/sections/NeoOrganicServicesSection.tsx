/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicServicesSection - Soft organic service offerings
 */

import React from 'react';
import type { PortfolioData, Service } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import { Sparkles, Check, Clock, Tag } from 'lucide-react';

interface NeoOrganicServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NeoOrganicServicesSection: React.FC<NeoOrganicServicesSectionProps> = ({
  data,
  enabled = true,
}) => {
  const services = data.services;

  if (!enabled || !services || services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="Services & Advisory"
        subtitle="Specialized capabilities, consulting offerings, and creative execution models."
        count={services.length}
        accentColor="green"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service: Service, index: number) => {
          return (
            <div
              key={service.id || index}
              className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#17211B]/6 dark:border-[#F2F3ED]/6 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#D9E7D0]/60 dark:bg-[#111713] flex items-center justify-center text-[#79A66A] dark:text-[#91BD82]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-bold text-[#17211B] dark:text-[#F2F3ED]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#59635C] dark:text-[#B8C0B8] font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8A938C] dark:text-[#7F897F] block">
                      Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-[#17211B] dark:text-[#F2F3ED]"
                        >
                          <Check className="w-3.5 h-3.5 text-[#79A66A] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Rate & Timeline Meta */}
              {(service.rate || service.timeline) && (
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#17211B]/6 dark:border-[#F2F3ED]/6 text-xs text-[#59635C] dark:text-[#B8C0B8]">
                  {service.rate && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F5EF] dark:bg-[#111713]">
                      <Tag className="w-3.5 h-3.5 text-[#E58B5B]" />
                      <span className="font-medium text-[#17211B] dark:text-[#F2F3ED]">{service.rate}</span>
                    </div>
                  )}
                  {service.timeline && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F5EF] dark:bg-[#111713]">
                      <Clock className="w-3.5 h-3.5 text-[#4169E1]" />
                      <span>{service.timeline}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
