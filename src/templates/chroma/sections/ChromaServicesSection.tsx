import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';

interface ChromaServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChromaServicesSection: React.FC<ChromaServicesSectionProps> = ({ data, enabled = true }) => {
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
      <ChromaField color="butter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="font-mono text-sm uppercase tracking-widest opacity-60">Services</h2>
          </div>

          <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-16">
            {services.map((service, idx) => (
              <div key={service.id} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h4 className="font-heading text-3xl md:text-4xl font-medium tracking-tight">
                    {service.title}
                  </h4>
                  {(service.rate || service.timeline) && (
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">
                      {[service.timeline, service.rate].filter(Boolean).join(' • ')}
                    </span>
                  )}
                </div>
                
                {service.description && (
                  <p className="font-body text-lg font-light leading-relaxed opacity-80 max-w-3xl">
                    {service.description}
                  </p>
                )}
                
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="mt-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 block mb-4">Deliverables</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="font-body text-base opacity-90 flex items-start gap-3">
                          <span className="opacity-40 mt-1">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
        </div>
      </ChromaField>
    </SectionWrapper>
  );
};
