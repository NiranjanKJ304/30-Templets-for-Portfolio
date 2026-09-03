import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';

interface BlueprintServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintServicesSection: React.FC<BlueprintServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      customHeader={<BlueprintSectionHeader title="Service Provisions" number="06" description="Standardized Technical Offerings" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <div key={service.id || idx} className="bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] flex flex-col">
            
            {/* Header */}
            <div className="border-b-2 border-[#2E6FBB] dark:border-[#5DA9E9] p-6 bg-[#2E6FBB]/5 dark:bg-[#5DA9E9]/5 flex justify-between items-start">
              <h3 className="font-heading font-bold text-2xl text-[#173A5E] dark:text-[#EAF2F7] uppercase max-w-[80%]">
                {service.title}
              </h3>
              <span className="font-mono text-[10px] text-[#73808C] uppercase tracking-widest border border-[#73808C] px-2 py-1">
                SVC-{String(idx + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              {service.description && (
                <p className="font-body text-[#17202A] dark:text-[#EAF2F7] mb-8 leading-relaxed">
                  {service.description}
                </p>
              )}

              {service.deliverables && service.deliverables.length > 0 && (
                <div className="mb-8">
                  <span className="block font-mono text-[10px] text-[#2E6FBB] dark:text-[#5DA9E9] uppercase tracking-widest mb-4 border-b border-dashed border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30 pb-2">
                    DELIVERABLES
                  </span>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start font-body text-[#17202A] dark:text-[#EAF2F7] text-sm">
                        <span className="font-mono text-[#E8893A] dark:text-[#F0A35B] mr-3 mt-0.5 select-none">[+]</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rate & Timeline block */}
              {(service.rate || service.timeline) && (
                <div className="mt-auto pt-6 border-t-2 border-[#2E6FBB] dark:border-[#5DA9E9] flex flex-wrap gap-6">
                  {service.rate && (
                    <div className="flex-1 min-w-[120px]">
                      <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-1">EST. RATE</span>
                      <div className="font-mono text-[#173A5E] dark:text-[#EAF2F7] font-bold uppercase">{service.rate}</div>
                    </div>
                  )}
                  {service.timeline && (
                    <div className="flex-1 min-w-[120px]">
                      <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-1">TIMELINE</span>
                      <div className="font-mono text-[#173A5E] dark:text-[#EAF2F7] font-bold uppercase">{service.timeline}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
