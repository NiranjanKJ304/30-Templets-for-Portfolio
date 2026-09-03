import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';

interface PosterServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
}

export const PosterServicesSection: React.FC<PosterServicesSectionProps> = ({ data, enabled = true, index }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="butter" />
          <PosterLabel className="text-[#E6C95C] dark:text-[#E0C96D] text-right mt-4 md:mt-12">OFFERINGS</PosterLabel>
        </div>

        <div className="flex flex-col gap-16 mt-8">
          {services.map((service, idx) => (
            <div key={service.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4 flex flex-col gap-2">
                <h4 className="font-heading font-black text-3xl md:text-5xl text-[#17191B] dark:text-[#F5F0E5] uppercase tracking-tighter leading-tight hyphens-auto">
                  {service.title}
                </h4>
                {(service.rate || service.timeline) && (
                  <PosterLabel className="text-[#3157D5] dark:text-[#6E8CFF] mt-2">
                    {[service.rate, service.timeline].filter(Boolean).join(' // ')}
                  </PosterLabel>
                )}
              </div>
              <div className="md:col-span-8 flex flex-col gap-8">
                {service.description && (
                  <p className="font-body text-xl text-[#65635D] dark:text-[#B4B0A7] leading-relaxed">
                    {service.description}
                  </p>
                )}
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <PosterLabel className="text-[#17191B] dark:text-[#F5F0E5]">DELIVERABLES</PosterLabel>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="font-mono text-sm text-[#65635D] dark:text-[#B4B0A7] flex gap-4">
                          <span className="text-[#D94B36] dark:text-[#F07761]">+</span>
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
      </PosterBlock>
    </SectionWrapper>
  );
};
