import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';

interface OrbitalServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrbitalServicesSection: React.FC<OrbitalServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="Services" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {services.map((service, idx) => (
          <div key={service.id || idx} className="bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/50 dark:border-[#40504D]/50 rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-10 md:gap-16">
            
            <div className="md:w-1/3 flex flex-col">
              <h3 className="font-heading font-bold text-3xl text-[#172326] dark:text-[#F0F4F1] mb-6">
                {service.title}
              </h3>
              
              {(service.rate || service.timeline) && (
                <div className="flex flex-col gap-4 mt-auto">
                  {service.rate && (
                    <div>
                      <div className="font-mono text-[9px] text-[#9BAAA9] dark:text-[#40504D] uppercase tracking-widest mb-1">Rate</div>
                      <div className="font-mono text-sm text-[#526467] dark:text-[#AABAB7] uppercase">{service.rate}</div>
                    </div>
                  )}
                  {service.timeline && (
                    <div>
                      <div className="font-mono text-[9px] text-[#9BAAA9] dark:text-[#40504D] uppercase tracking-widest mb-1">Timeline</div>
                      <div className="font-mono text-sm text-[#526467] dark:text-[#AABAB7] uppercase">{service.timeline}</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="md:w-2/3">
              {service.description && (
                <p className="font-body text-lg text-[#526467] dark:text-[#AABAB7] leading-relaxed mb-10">
                  {service.description}
                </p>
              )}

              {service.deliverables && service.deliverables.length > 0 && (
                <div>
                  <h4 className="font-mono text-[10px] text-[#2F7C73] dark:text-[#66B8A9] uppercase tracking-widest mb-6 border-b border-[#B9C9C6]/30 dark:border-[#40504D]/30 pb-2 inline-block">
                    Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.deliverables.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start font-body text-sm text-[#172326] dark:text-[#F0F4F1]">
                        <div className="w-1.5 h-1.5 rounded-full border border-[#2F7C73] dark:border-[#66B8A9] shrink-0 mt-1.5 mr-3"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
