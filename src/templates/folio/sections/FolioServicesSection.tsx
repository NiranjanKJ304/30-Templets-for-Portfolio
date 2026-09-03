import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FolioSheet } from '../components/FolioSheet';
import { FolioMeta } from '../components/FolioMeta';

interface FolioServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  pageNum: string;
}

export const FolioServicesSection: React.FC<FolioServicesSectionProps> = ({ data, enabled = true, pageNum }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <FolioSheet pageNum={pageNum} title="OFFERINGS" alternate offset="left">
        <div className="flex flex-col gap-12 lg:gap-16">
          {services.map((service, idx) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 border-b border-[#C9C5BA]/50 dark:border-[#444A45]/50 last:border-0 last:pb-0">
              
              <div className="lg:col-span-4 flex flex-col gap-6">
                <h4 className="font-heading text-3xl font-normal text-[#1D2020] dark:text-[#F0EEE6]">
                  {service.title}
                </h4>
                <div className="flex flex-wrap gap-6">
                  {service.timeline && <FolioMeta label="Timeline" value={service.timeline} />}
                  {service.rate && <FolioMeta label="Rate" value={service.rate} />}
                </div>
              </div>
              
              <div className="lg:col-span-8 flex flex-col gap-8">
                {service.description && (
                  <p className="font-body text-lg font-light leading-relaxed text-[#70736F] dark:text-[#A5AAA3]">
                    {service.description}
                  </p>
                )}
                
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#1D2020] dark:text-[#F0EEE6]">Deliverables</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="font-body text-base text-[#1D2020] dark:text-[#F0EEE6] flex items-start gap-3">
                          <span className="font-mono text-[#70736F] dark:text-[#A5AAA3] select-none">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </FolioSheet>
    </SectionWrapper>
  );
};
