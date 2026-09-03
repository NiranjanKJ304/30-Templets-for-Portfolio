import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';

interface ArchiveServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
}

export const ArchiveServicesSection: React.FC<ArchiveServicesSectionProps> = ({ data, enabled = true, index }) => {
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
      <ArchiveEntry index={index} title="Services" className="mt-8">
        <div className="flex flex-col gap-12 mt-8">
          {services.map((service, sIdx) => (
            <div key={service.id} className="flex flex-col lg:flex-row gap-6 lg:gap-12 pb-12 border-b border-[#C8C5BA] dark:border-[#464943] last:border-0 last:pb-0">
              <div className="w-full lg:w-1/3 xl:w-1/4 shrink-0 flex flex-col gap-4">
                <div className="font-heading font-black text-2xl uppercase tracking-tighter text-[#20211F] dark:text-[#F1EEE5] leading-[1.1]">
                  {service.title}
                </div>
                
                <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-[#20211F] dark:text-[#F1EEE5]">
                  {service.rate && <div className="border border-[#C8C5BA] dark:border-[#464943] px-3 py-2 bg-[#FAF8F2] dark:bg-[#1D201E]">{service.rate}</div>}
                  {service.timeline && <div className="border border-[#C8C5BA] dark:border-[#464943] px-3 py-2 bg-[#FAF8F2] dark:bg-[#1D201E]">{service.timeline}</div>}
                </div>
              </div>
              
              <div className="w-full flex-1 flex flex-col gap-6">
                {service.description && (
                  <p className="font-body text-base lg:text-lg text-[#686861] dark:text-[#AAA9A0] leading-relaxed max-w-3xl">
                    {service.description}
                  </p>
                )}
                
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="mt-2 flex flex-col gap-2 border-l border-[#C8C5BA] dark:border-[#464943] pl-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#686861] dark:text-[#AAA9A0] font-bold mb-2">
                      DELIVERABLES
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="font-body text-base text-[#20211F] dark:text-[#F1EEE5]">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
