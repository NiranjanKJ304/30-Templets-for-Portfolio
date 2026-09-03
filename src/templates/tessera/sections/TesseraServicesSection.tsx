import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';

interface TesseraServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TesseraServicesSection: React.FC<TesseraServicesSectionProps> = ({ data, enabled = true }) => {
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
      <TesseraSection title="Services" accent="blue">
        <div className="flex flex-col border-t border-[#C8C4B9] dark:border-[#4A4D48] relative">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block z-0" />
          
          {services.map((service, idx) => (
            <TesseraModule 
              key={service.id}
              elevation="flat"
              tab={idx % 2 !== 0 ? 'top' : 'none'}
              className="flex flex-col lg:flex-row gap-0 border-b border-[#C8C4B9] dark:border-[#4A4D48]"
            >
              <div className="flex flex-col gap-4 lg:w-1/3 shrink-0 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#C8C4B9] dark:border-[#4A4D48] bg-[#F2EFE7] dark:bg-[#151716]">
                <h4 className="font-heading font-medium text-2xl md:text-3xl text-[#242522] dark:text-[#F0EEE5] break-words">
                  {service.title}
                </h4>
                {(service.rate || service.timeline) && (
                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#C8C4B9] dark:border-[#4A4D48]">
                    {service.timeline && (
                      <span className="font-mono text-[10px] text-[#718B98] dark:text-[#91A9B4] uppercase tracking-widest font-bold">
                        Timeline: {service.timeline}
                      </span>
                    )}
                    {service.rate && (
                      <span className="font-mono text-[10px] text-[#718B98] dark:text-[#91A9B4] uppercase tracking-widest font-bold">
                        Rate: {service.rate}
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-8 flex-1 p-8 md:p-12">
                {service.description && (
                  <p className="font-body text-lg text-[#73756E] dark:text-[#A5A7A0] leading-relaxed">
                    {service.description}
                  </p>
                )}
                
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="flex flex-col gap-4 mt-auto">
                    <span className="font-mono text-[10px] text-[#242522] dark:text-[#F0EEE5] uppercase tracking-widest font-bold">
                      Deliverables
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="font-body text-base text-[#242522] dark:text-[#F0EEE5] flex items-start gap-3">
                          <div className="w-1.5 h-1.5 mt-2 shrink-0 bg-[#C8C4B9] dark:bg-[#4A4D48]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </TesseraModule>
          ))}
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
