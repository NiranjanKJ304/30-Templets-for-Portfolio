import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';

interface KinshipServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KinshipServicesSection: React.FC<KinshipServicesSectionProps> = ({ data, enabled = true }) => {
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
      <KinshipSection title="Services" color="coral">
        <div className="flex flex-col gap-16 md:gap-24">
          {services.map((service, idx) => (
            <div key={service.id} className="flex flex-col relative group">
              <div className="flex items-center gap-4 mb-6">
                <KinshipAnchor color="coral" size="sm" />
                <KinshipConnector className="flex-1 opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pl-6 relative">
                <KinshipConnector orientation="vertical" className="absolute top-0 left-[3px] h-full opacity-30" />
                
                <div className="flex flex-col gap-4 lg:w-1/3 shrink-0">
                  <h4 className="font-heading font-medium text-2xl md:text-3xl text-[#202624] dark:text-[#EEF0EA] break-words">
                    {service.title}
                  </h4>
                  {(service.rate || service.timeline) && (
                    <div className="flex flex-col gap-1 mt-2">
                      {service.timeline && (
                        <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest">
                          Timeline: {service.timeline}
                        </span>
                      )}
                      {service.rate && (
                        <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest">
                          Rate: {service.rate}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col gap-8 flex-1">
                  {service.description && (
                    <p className="font-body text-lg text-[#737A75] dark:text-[#A7ADA7] leading-relaxed">
                      {service.description}
                    </p>
                  )}
                  
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="flex flex-col gap-4 mt-auto">
                      <span className="font-mono text-[10px] text-[#C86D57] dark:text-[#DD8068] uppercase tracking-widest font-bold">
                        Deliverables
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="font-body text-base text-[#202624] dark:text-[#EEF0EA] flex items-center gap-3">
                            <KinshipConnector orientation="horizontal" className="w-4 opacity-50 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
