import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';

interface VellumServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const VellumServicesSection: React.FC<VellumServicesSectionProps> = ({ data, enabled = true }) => {
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
      <VellumSection title="Offerings" number="07">
        <div className="flex flex-col gap-12 pt-4">
          {services.map((service, idx) => (
            <VellumAnnotation 
              key={service.id}
              marker={`svc.${idx + 1}`} 
              color="dustRose" 
              position="left"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-baseline gap-4">
                  <h4 className="font-heading font-medium text-2xl md:text-3xl text-[#242522] dark:text-[#F0EDE3]">
                    {service.title}
                  </h4>
                  {(service.rate || service.timeline) && (
                    <span className="font-mono text-[10px] text-[#9D7776] dark:text-[#C19B9B] uppercase tracking-widest">
                      {[service.timeline, service.rate].filter(Boolean).join(' / ')}
                    </span>
                  )}
                </div>
                
                {service.description && (
                  <p className="font-body text-base text-[#6D6D66] dark:text-[#AAA99F] leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                )}
                
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="mt-4 flex flex-col gap-3">
                    <span className="font-mono text-[10px] text-[#6D6D66] dark:text-[#AAA99F] uppercase tracking-widest border-b border-[#C8C2B5] dark:border-[#4A4B46] border-dashed pb-2 inline-block self-start">
                      Deliverables
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="font-body text-sm text-[#242522] dark:text-[#F0EDE3] flex items-baseline gap-3">
                          <span className="font-mono text-[10px] text-[#9D7776] dark:text-[#C19B9B]">*</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </VellumAnnotation>
          ))}
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
