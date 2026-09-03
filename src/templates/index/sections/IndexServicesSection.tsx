import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';

interface IndexServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const IndexServicesSection: React.FC<IndexServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col">
        <IndexRow
          isHeader
          index="ID"
          title="SERVICES DIRECTORY"
          metadata="RATE / TIMELINE"
          description="DELIVERABLES"
        />
        
        <div className="flex flex-col">
          {services.map((service, idx) => {
            const index = (idx + 1).toString().padStart(3, '0');
            
            return (
              <IndexRow
                key={service.id}
                index={index}
                title={service.title}
                metadata={
                  <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-widest text-[#181A19] dark:text-[#F2F1EA]">
                    {service.rate && <span>{service.rate}</span>}
                    {service.timeline && <span className="text-[#696C67] dark:text-[#A8ABA4]">{service.timeline}</span>}
                  </div>
                }
                description={
                  <div className="flex flex-col gap-4">
                    {service.description && (
                      <p className="font-body text-sm text-[#696C67] dark:text-[#A8ABA4] leading-relaxed">
                        {service.description}
                      </p>
                    )}
                    {service.deliverables && service.deliverables.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C] font-bold">DELIVERABLES:</span>
                        <ul className="flex flex-col gap-1">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="font-body text-sm text-[#181A19] dark:text-[#F2F1EA] flex gap-2">
                              <span className="text-[#D5D6D0] dark:text-[#404440] select-none">-</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
