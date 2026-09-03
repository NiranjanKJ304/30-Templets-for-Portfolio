import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalSurface } from '../components/MonumentalSurface';
import { MonumentalDivider } from '../components/MonumentalDivider';

interface MonumentalServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonumentalServicesSection: React.FC<MonumentalServicesSectionProps> = ({ data, enabled = true }) => {
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
      <MonumentalSection title="SERVICES" index="07" align="center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          {services.map((service, idx) => (
            <MonumentalSurface 
              key={service.id} 
              variant={idx % 2 === 0 ? 'secondary' : 'primary'} 
              className="p-8 md:p-16 flex flex-col gap-12 border-t-8 border-[#171918] dark:border-[#F0EEE6]"
            >
              <div className="flex flex-col gap-4">
                <h4 className="font-heading font-black text-4xl md:text-5xl text-[#171918] dark:text-[#F0EEE6] uppercase break-words leading-[1.1]">
                  {service.title}
                </h4>
                {(service.rate || service.timeline) && (
                  <span className="font-mono text-sm text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                    {[service.rate, service.timeline].filter(Boolean).join(' | ')}
                  </span>
                )}
              </div>
              
              {service.description && (
                <p className="font-body text-xl text-[#686B66] dark:text-[#A5A7A1] leading-relaxed">
                  {service.description}
                </p>
              )}
              
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="flex flex-col gap-6 pt-8 border-t-4 border-[#D8D4C9] dark:border-[#303430]">
                  <span className="font-mono text-[10px] text-[#171918] dark:text-[#F0EEE6] uppercase tracking-widest">
                    DELIVERABLES
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="font-body text-lg text-[#171918] dark:text-[#F0EEE6] flex items-start gap-4">
                        <span className="text-[#B94F38] dark:text-[#D16A52] font-mono select-none">■</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </MonumentalSurface>
          ))}
        </div>
        <div className="mt-16 md:mt-32">
          <MonumentalDivider thickness="thick" />
        </div>
      </MonumentalSection>
    </SectionWrapper>
  );
};
