import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';

interface ChronicleServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChronicleServicesSection: React.FC<ChronicleServicesSectionProps> = ({ data, enabled = true }) => {
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
      <ChronicleBand label="Offerings">
        <div className="flex flex-col gap-16 md:gap-20">
          {services.map((service, idx) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 md:pb-20 border-b border-[#C9C5BB]/30 dark:border-[#474B47]/30 last:border-0 last:pb-0">
              
              <div className="lg:col-span-4 flex flex-col gap-2">
                <h4 className="font-heading text-3xl font-normal text-[#202321] dark:text-[#F0EEE6]">
                  {service.title}
                </h4>
                {(service.rate || service.timeline) && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
                    {[service.timeline, service.rate].filter(Boolean).join(' · ')}
                  </span>
                )}
              </div>
              
              <div className="lg:col-span-8 flex flex-col gap-8">
                {service.description && (
                  <p className="font-body text-xl font-light leading-relaxed text-[#6F746F] dark:text-[#A6ABA5] max-w-3xl">
                    {service.description}
                  </p>
                )}
                
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6]">Deliverables</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 max-w-3xl">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="font-body text-base text-[#202321] dark:text-[#F0EEE6] flex items-start gap-3">
                          <span className="opacity-30 mt-1.5">—</span>
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
      </ChronicleBand>
    </SectionWrapper>
  );
};
