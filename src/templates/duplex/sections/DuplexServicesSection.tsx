import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';
import { cn } from '../../../core/utils/cn';

interface DuplexServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const DuplexServicesSection: React.FC<DuplexServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="Services" align="right" />}
      containerClassName="px-6 sm:px-12"
      className="py-16 md:py-24 bg-[#E5DED2] dark:bg-[#1B1F1E]"
    >
      <div className="flex flex-col gap-8 lg:gap-12">
        {services.map((service, idx) => (
          <div key={service.id} className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-t-2 border-[#181818] dark:border-[#F1EEE7] pt-8">
            
            <div className="w-full lg:w-[40%] flex flex-col gap-4">
              <h3 className="font-heading font-bold text-3xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7] leading-tight">
                {service.title}
              </h3>
              
              <div className="flex flex-wrap gap-6 mt-2">
                {service.rate && (
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B7B0A5] dark:text-[#5F625F] mb-1">Rate</span>
                    <span className="font-mono text-xs uppercase font-bold text-[#D35F43] dark:text-[#E0795D]">{service.rate}</span>
                  </div>
                )}
                {service.timeline && (
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B7B0A5] dark:text-[#5F625F] mb-1">Timeline</span>
                    <span className="font-mono text-xs uppercase font-bold text-[#D35F43] dark:text-[#E0795D]">{service.timeline}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="w-full lg:w-[60%] flex flex-col gap-6">
              <p className="font-body text-base lg:text-lg text-[#5F625F] dark:text-[#A9AAA4] leading-relaxed">
                {service.description}
              </p>
              
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="mt-4 pt-6 border-t border-[#B7B0A5]/30 dark:border-[#414542]/30">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[#181818] dark:text-[#F1EEE7] font-bold mb-4">
                    Key Deliverables
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <span className="font-mono text-[10px] text-[#D35F43] dark:text-[#E0795D] mt-1 shrink-0">→</span>
                        <span className="font-body text-sm text-[#5F625F] dark:text-[#A9AAA4]">{item}</span>
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
