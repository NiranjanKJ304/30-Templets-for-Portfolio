import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';

interface MonochromeServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonochromeServicesSection: React.FC<MonochromeServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MonochromeSectionHeader title="Services" number="06" subtitle="Professional Provision" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="flex flex-col">
        {services.map((service, idx) => (
          <div key={service.id || idx} className="border-t border-[#C9C6BE]/60 dark:border-[#3A3A37]/60 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xl text-[#C9C6BE] dark:text-[#3A3A37] font-light leading-none mb-4 block">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-4xl md:text-5xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight mb-6">
                  {service.title}
                </h3>
              </div>
              
              {(service.rate || service.timeline) && (
                <div className="flex flex-wrap gap-8 font-mono text-[10px] uppercase tracking-widest pt-8 border-t border-[#C9C6BE]/30 dark:border-[#3A3A37]/30">
                  {service.rate && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[#8A8A84] dark:text-[#777770]">Est. Rate</span>
                      <span className="text-[#151515] dark:text-[#F2F0E9] text-xs">{service.rate}</span>
                    </div>
                  )}
                  {service.timeline && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[#8A8A84] dark:text-[#777770]">Timeline</span>
                      <span className="text-[#151515] dark:text-[#F2F0E9] text-xs">{service.timeline}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="lg:col-span-7">
              {service.description && (
                <p className="font-body text-lg text-[#555555] dark:text-[#B5B3AC] leading-relaxed mb-10">
                  {service.description}
                </p>
              )}

              {service.deliverables && service.deliverables.length > 0 && (
                <div>
                  <h4 className="font-mono text-[10px] text-[#151515] dark:text-[#F2F0E9] uppercase tracking-widest mb-6 border-b border-[#C9C6BE]/30 dark:border-[#3A3A37]/30 pb-2">
                    Scope & Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.deliverables.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start font-body text-sm text-[#555555] dark:text-[#B5B3AC]">
                        <span className="font-mono text-[#B44A35] dark:text-[#D06A52] mr-3 mt-1 select-none">/</span>
                        <span>{item}</span>
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
