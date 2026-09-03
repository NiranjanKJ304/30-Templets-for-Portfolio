import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';

interface MosaicServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MosaicServicesSection: React.FC<MosaicServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="Services" />
        </div>
        
        {services.map((service, idx) => (
          <MosaicTile 
            key={service.id} 
            span={idx % 2 === 0 ? "two-thirds" : "full"} 
            padding="lg" 
            surface={idx % 2 === 0 ? "soft" : "primary"}
            className="flex flex-col md:flex-row gap-8 lg:gap-12"
          >
            <div className="w-full md:w-[40%] flex flex-col gap-4">
              <h3 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] leading-[0.9]">
                {service.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 mt-4">
                {service.rate && (
                  <div className="font-mono text-xs uppercase tracking-widest bg-[#1B1B1A] dark:bg-[#F1EEE7] text-[#FFFDF8] dark:text-[#1B1E1E] px-3 py-1 font-bold">
                    {service.rate}
                  </div>
                )}
                {service.timeline && (
                  <div className="font-mono text-xs uppercase tracking-widest border border-[#1B1B1A] dark:border-[#F1EEE7] text-[#1B1B1A] dark:text-[#F1EEE7] px-3 py-1 font-bold">
                    {service.timeline}
                  </div>
                )}
              </div>
            </div>
            
            <div className="w-full md:w-[60%] flex flex-col gap-6">
              <p className="font-body text-lg text-[#1B1B1A] dark:text-[#F1EEE7] leading-relaxed max-w-2xl font-medium">
                {service.description}
              </p>
              
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="bg-[#FFFDF8] dark:bg-[#121414] border border-[#CBC5BB] dark:border-[#444744] px-4 py-2 text-[#1B1B1A] dark:text-[#F1EEE7] font-body text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </MosaicTile>
        ))}
      </div>
    </SectionWrapper>
  );
};
