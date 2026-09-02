/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalServicesSection - Offerings and craft areas
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { Flower2, Check } from 'lucide-react';

interface BotanicalServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BotanicalServicesSection: React.FC<BotanicalServicesSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.services || data.services.length === 0) return null;

  return (
    <section
      id="services"
      className="py-20 md:py-28 border-b border-[#D8D4C8] dark:border-[#2C3E30] bg-[#EBE9DF]/60 dark:bg-[#141E17] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
              02 / Disciplines & Practices
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal">
              Cultivated Offerings
            </h2>
          </div>
          <p className="text-sm text-[#586359] dark:text-[#9BB0A0] max-w-md font-sans">
            Tailored capabilities engineered to nurture long-term vitality, scalability, and aesthetic clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Flower2 className="w-5 h-5 text-[#4A6B53] dark:text-[#8EB697]" />
                </div>
                <h3 className="font-serif text-xl text-[#1C261E] dark:text-[#F0F5F1] font-medium mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#586359] dark:text-[#9BB0A0] leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
              </div>

              {service.deliverables && service.deliverables.length > 0 && (
                <div className="pt-4 border-t border-[#D8D4C8]/60 dark:border-[#2C3E30]/60 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#586359] dark:text-[#9BB0A0] block">
                    Key Outcomes:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#1C261E] dark:text-[#F0F5F1]">
                      <Check className="w-3.5 h-3.5 text-[#BF6648] dark:text-[#E58A6C] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
