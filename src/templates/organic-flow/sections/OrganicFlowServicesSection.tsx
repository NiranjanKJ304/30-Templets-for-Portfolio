import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';
import { FlowSurface } from '../components/FlowSurface';

interface OrganicFlowServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrganicFlowServicesSection: React.FC<OrganicFlowServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative z-0 pb-24 md:pb-48"
      containerClassName="px-0 py-0"
    >
      <FlowSection title="SERVICES" align="left">
        <div className="flex flex-col gap-12 mt-12 md:mt-24 max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FlowSurface 
                key={service.id} 
                variant="primary" 
                className="p-8 md:p-12 shadow-sm"
                curveTop={isEven ? 'both' : 'left'}
                curveBottom={!isEven ? 'both' : 'right'}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h4 className="font-heading font-black text-2xl md:text-3xl text-[#202321] dark:text-[#F1EFE7]">
                      {service.title}
                    </h4>
                    {(service.rate || service.timeline) && (
                      <div className="font-mono text-sm text-[#819B8A] dark:text-[#88A995] bg-[#FBFAF5] dark:bg-[#1E2321] px-4 py-2 rounded-full inline-flex self-start md:self-auto">
                        {[service.rate, service.timeline].filter(Boolean).join(' | ')}
                      </div>
                    )}
                  </div>
                  
                  {service.description && (
                    <p className="font-body text-base md:text-lg text-[#6B706A] dark:text-[#A8ACA5] leading-relaxed max-w-3xl">
                      {service.description}
                    </p>
                  )}
                  
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="flex flex-col gap-3 mt-2">
                      <span className="font-mono text-[10px] text-[#C87558] dark:text-[#D77F63] uppercase">Deliverables</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="font-body text-sm text-[#202321] dark:text-[#F1EFE7] flex items-start gap-3">
                            <span className="text-[#819B8A] dark:text-[#88A995] mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </FlowSurface>
            );
          })}
        </div>
      </FlowSection>
    </SectionWrapper>
  );
};
