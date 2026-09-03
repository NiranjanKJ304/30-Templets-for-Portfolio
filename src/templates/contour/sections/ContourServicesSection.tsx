import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';

interface ContourServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ContourServicesSection: React.FC<ContourServicesSectionProps> = ({ data, enabled = true }) => {
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
      <ContourField label="Service Landscape" contourVariant="subtle">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {services.map((service, idx) => (
            <div key={service.id} className="flex flex-col gap-8 pb-12 border-b border-[#C7C9B9]/30 dark:border-[#46504A]/30">
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C57659] dark:bg-[#D17C63]"></span>
                  <h4 className="font-heading text-3xl md:text-4xl font-normal text-[#202523] dark:text-[#EEF0E8]">
                    {service.title}
                  </h4>
                </div>
                {(service.rate || service.timeline) && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6] pl-4.5">
                    {[service.timeline, service.rate].filter(Boolean).join(' · ')}
                  </span>
                )}
              </div>
              
              {service.description && (
                <p className="font-body text-lg font-light leading-relaxed text-[#6E746E] dark:text-[#A8AEA6] pl-4.5">
                  {service.description}
                </p>
              )}
              
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="flex flex-col gap-4 pl-4.5">
                  <ul className="flex flex-col gap-3">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="font-body text-base font-light text-[#202523] dark:text-[#EEF0E8] flex items-start gap-3">
                        <span className="text-[#879A82] dark:text-[#78947D] mt-0.5 text-xs">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ))}
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
