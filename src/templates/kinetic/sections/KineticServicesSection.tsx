import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';

interface KineticServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KineticServicesSection: React.FC<KineticServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-6 sm:px-12 max-w-[1600px] mx-auto"
      className="py-16 md:py-32"
    >
      <KineticSectionHeader title="Services" align="right" />
      
      <div className="flex flex-col gap-12 lg:gap-20">
        {services.map((service, idx) => (
          <div key={service.id} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start group">
            
            <div className="w-full lg:w-[40%] flex flex-col gap-4">
              <h3 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8] leading-[0.9] motion-safe:group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>
              
              <div className="flex flex-wrap gap-6 mt-4">
                {service.rate && (
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#BDB7AA] dark:text-[#454846] mb-1">Rate</span>
                    <span className="font-mono text-sm uppercase font-bold text-[#E84F3D] dark:text-[#FF715D]">{service.rate}</span>
                  </div>
                )}
                {service.timeline && (
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#BDB7AA] dark:text-[#454846] mb-1">Timeline</span>
                    <span className="font-mono text-sm uppercase font-bold text-[#285B63] dark:text-[#6FA9B0]">{service.timeline}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="w-full lg:w-[60%] flex flex-col gap-6">
              <p className="font-body text-lg lg:text-xl text-[#555555] dark:text-[#B4B4AE] leading-relaxed max-w-2xl">
                {service.description}
              </p>
              
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="mt-4 pt-6 border-t-2 border-[#171717] dark:border-[#F3F0E8]">
                  <span className="block font-mono text-xs uppercase tracking-widest text-[#171717] dark:text-[#F3F0E8] font-bold mb-4">
                    Deliverables
                  </span>
                  <ul className="flex flex-col gap-3">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-4">
                        <span className="font-mono text-[10px] text-[#E84F3D] dark:text-[#FF715D] mt-1 shrink-0">++</span>
                        <span className="font-body text-base text-[#171717] dark:text-[#F3F0E8] font-bold">{item}</span>
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
