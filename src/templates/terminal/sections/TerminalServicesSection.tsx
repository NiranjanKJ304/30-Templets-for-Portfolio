import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';
import { TerminalRow } from '../components/TerminalRow';

interface TerminalServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TerminalServicesSection: React.FC<TerminalServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="systemctl list-units --type=service" isSectionHeader />
        
        <div className="flex flex-col gap-8 pl-0 md:pl-4">
          {services.map((service, idx) => {
            const index = (idx + 1).toString().padStart(2, '0');
            
            return (
              <TerminalRow
                key={service.id}
                index={`[${index}]`}
                title={`${service.title.toLowerCase().replace(/\s+/g, '-')}.service`}
                metadata={
                  <div className="flex gap-2">
                    {service.rate && <span className="text-[#347A84] dark:text-[#69B7C4]">{service.rate}</span>}
                    {service.timeline && <span className="text-[#397A4A] dark:text-[#79C98B]">{service.timeline}</span>}
                  </div>
                }
              >
                <div className="flex flex-col gap-3">
                  {service.description && (
                    <p>{service.description}</p>
                  )}
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="flex flex-col gap-1 mt-1">
                      <div className="font-mono text-[10px] text-[#967126] dark:text-[#D4AD68]">
                        Outputs:
                      </div>
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex gap-2">
                          <span className="text-[#5F6861] dark:text-[#9CA39D] select-none">|</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TerminalRow>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
