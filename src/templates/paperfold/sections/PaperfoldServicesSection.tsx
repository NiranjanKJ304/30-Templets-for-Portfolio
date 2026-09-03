import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';

interface PaperfoldServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperfoldServicesSection: React.FC<PaperfoldServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperfoldSectionHeader title="Services" number="06" subtitle="Professional Offerings" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="flex flex-col gap-10">
        {services.map((service, idx) => (
          <div key={service.id || idx} className="bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 lg:gap-16">
            
            {/* Center vertical crease for larger screens */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#202020]/10 dark:via-[#F3F0E8]/10 to-transparent"></div>

            <div className="flex-1 md:max-w-[40%]">
              <h3 className="font-heading font-normal text-3xl md:text-4xl text-[#202020] dark:text-[#F3F0E8] mb-6 leading-tight">
                {service.title}
              </h3>
              
              {(service.rate || service.timeline) && (
                <div className="flex flex-wrap gap-6 mt-8">
                  {service.rate && (
                    <div>
                      <span className="block font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest mb-1">Rate</span>
                      <span className="font-mono text-sm text-[#202020] dark:text-[#F3F0E8]">{service.rate}</span>
                    </div>
                  )}
                  {service.timeline && (
                    <div>
                      <span className="block font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest mb-1">Timeline</span>
                      <span className="font-mono text-sm text-[#202020] dark:text-[#F3F0E8]">{service.timeline}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex-1">
              {service.description && (
                <p className="font-body font-light text-lg text-[#66717A] dark:text-[#AAB3B8] leading-[1.8] mb-8">
                  {service.description}
                </p>
              )}

              {service.deliverables && service.deliverables.length > 0 && (
                <div>
                  <span className="block font-mono text-[10px] text-[#C86B52] dark:text-[#D47A61] uppercase tracking-widest mb-4">
                    Deliverables
                  </span>
                  <ul className="space-y-4">
                    {service.deliverables.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start font-body font-light text-[#202020] dark:text-[#F3F0E8]">
                        <span className="font-mono text-[#7D9EAF] dark:text-[#8EADBD] mr-4 mt-1 select-none">+</span>
                        <span className="leading-relaxed">{item}</span>
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
