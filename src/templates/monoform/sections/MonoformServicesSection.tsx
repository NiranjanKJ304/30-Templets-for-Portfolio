import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';

interface MonoformServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonoformServicesSection: React.FC<MonoformServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <MonoformSurface depth="inset" borderBottom>
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                07. Offerings
              </h2>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-col">
                <MonoformRule variant="subtle" />
                {services.map((service, idx) => (
                  <div key={service.id} className="flex flex-col py-12 border-b border-[#C8C7BF]/40 dark:border-[#444844]/40">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 flex flex-col gap-2">
                        <h4 className="font-heading text-2xl font-light text-[#1D1F1E] dark:text-[#F0EEE7]">
                          {service.title}
                        </h4>
                        {(service.rate || service.timeline) && (
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                            {[service.timeline, service.rate].filter(Boolean).join(' · ')}
                          </span>
                        )}
                      </div>
                      
                      <div className="md:col-span-8 flex flex-col gap-6">
                        {service.description && (
                          <p className="font-body text-base font-light leading-relaxed text-[#6C706B] dark:text-[#A7AAA4]">
                            {service.description}
                          </p>
                        )}
                        
                        {service.deliverables && service.deliverables.length > 0 && (
                          <div className="flex flex-col gap-4 mt-2">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#1D1F1E] dark:text-[#F0EEE7]">Deliverables</span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                              {service.deliverables.map((item, dIdx) => (
                                <li key={dIdx} className="font-body text-sm font-light text-[#6C706B] dark:text-[#A7AAA4] flex items-start gap-3">
                                  <span className="opacity-40 mt-1">—</span>
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
            </div>
            
          </div>
        </div>
      </MonoformSurface>
    </SectionWrapper>
  );
};
