import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';

interface BlueprintOSServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintOSServicesSection: React.FC<BlueprintOSServicesSectionProps> = ({ data, enabled = true }) => {
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
      <WorkspaceWindow title="SERVICE_MODULES.sys" id="services">
        <div className="flex flex-col gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col gap-4 bg-[#FFFFFF] dark:bg-[#202725] p-6 border-l-4 border-[#356B63] dark:border-[#75A89E] shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h4 className="font-heading font-bold text-lg text-[#1D2523] dark:text-[#EEF2EC]">
                  {service.title}
                </h4>
                {(service.rate || service.timeline) && (
                  <div className="font-mono text-xs text-[#829BA8] dark:text-[#8BAAB8]">
                    {[service.rate, service.timeline].filter(Boolean).join(' | ')}
                  </div>
                )}
              </div>
              
              {service.description && (
                <p className="font-body text-sm text-[#68716D] dark:text-[#A6ADA8] leading-relaxed">
                  {service.description}
                </p>
              )}
              
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="flex flex-col gap-2 mt-2">
                  <span className="font-mono text-[10px] text-[#1D2523] dark:text-[#EEF2EC] uppercase">Deliverables:</span>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item, dIdx) => (
                      <span key={dIdx} className="font-body text-xs px-2 py-1 bg-[#E9ECE8] dark:bg-[#111615] text-[#68716D] dark:text-[#A6ADA8]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
