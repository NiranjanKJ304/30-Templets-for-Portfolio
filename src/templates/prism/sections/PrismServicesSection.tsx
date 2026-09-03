import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismFacet } from '../components/PrismFacet';
import { PrismDivider } from '../components/PrismDivider';

interface PrismServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PrismServicesSection: React.FC<PrismServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <PrismSection title="Services" colorFacet="violet">
        <div className="flex flex-col gap-8 md:gap-16">
          {services.map((service, idx) => (
            <PrismFacet key={service.id} cut={idx % 2 === 0 ? 'top-right' : 'bottom-left'} colorHint="neutral" className="bg-[#FCFBF7] dark:bg-[#1A1E1F] shadow-sm">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start h-full">
                <div className="flex flex-col gap-6 lg:w-1/3 shrink-0">
                  <h4 className="font-heading font-extrabold text-3xl md:text-4xl text-[#171A1B] dark:text-[#F1F0EA] uppercase break-words leading-[1.1]">
                    {service.title}
                  </h4>
                  {(service.rate || service.timeline) && (
                    <div className="flex flex-col gap-2 border-t-2 border-[rgba(23,26,27,0.1)] dark:border-[rgba(241,240,234,0.1)] pt-4">
                      {service.timeline && (
                        <span className="font-mono text-xs text-[#8069AA] dark:text-[#A28AC7] uppercase tracking-widest font-bold">
                          Timeline: {service.timeline}
                        </span>
                      )}
                      {service.rate && (
                        <span className="font-mono text-xs text-[#8069AA] dark:text-[#A28AC7] uppercase tracking-widest font-bold">
                          Rate: {service.rate}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col gap-8 flex-1">
                  {service.description && (
                    <p className="font-body text-lg text-[#6B706F] dark:text-[#A8ADA9] leading-relaxed">
                      {service.description}
                    </p>
                  )}
                  
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="flex flex-col gap-4 mt-auto">
                      <span className="font-mono text-[10px] text-[#171A1B] dark:text-[#F1F0EA] uppercase tracking-widest bg-[rgba(23,26,27,0.05)] dark:bg-[rgba(241,240,234,0.05)] px-3 py-1.5 self-start">
                        Deliverables
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="font-body text-base text-[#171A1B] dark:text-[#F1F0EA] flex items-start gap-3">
                            <span className="text-[#8069AA] dark:text-[#A28AC7] font-mono mt-1 shrink-0 select-none border border-current w-1.5 h-1.5 rotate-45" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </PrismFacet>
          ))}
        </div>
        <div className="mt-24 md:mt-40">
          <PrismDivider direction="left-to-right" />
        </div>
      </PrismSection>
    </SectionWrapper>
  );
};
