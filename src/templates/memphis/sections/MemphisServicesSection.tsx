import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';

interface MemphisServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MemphisServicesSection: React.FC<MemphisServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  const getAccent = (idx: number) => {
    const accents = ['bg-[#8B5CF6]', 'bg-[#F97316]', 'bg-[#2563EB]', 'bg-[#EC4899]'];
    return accents[idx % accents.length];
  };

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MemphisSectionHeader title="Services" number="06" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div 
            key={service.id}
            className="group relative bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white p-6 md:p-8 flex flex-col hover:-translate-y-2 transition-transform"
            style={{ boxShadow: '6px 6px 0 0 #202124' }}
          >
            <div className={`w-12 h-12 ${getAccent(idx)} border-2 border-neutral-900 dark:border-white rounded-full flex items-center justify-center mb-6 shadow-[2px_2px_0_0_#202124] text-white`}>
              <span className="font-heading font-black text-xl">{idx + 1}</span>
            </div>
            
            <h3 className="font-heading font-black text-2xl uppercase text-neutral-900 dark:text-white mb-4">
              {service.title}
            </h3>
            
            <p className="text-neutral-600 dark:text-neutral-400 font-bold mb-6 flex-1">
              {service.description}
            </p>
            
            {service.deliverables && service.deliverables.length > 0 && (
              <ul className="mb-6 space-y-2">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 font-bold">
                    <span className="text-[#34D399]">✓</span> {item}
                  </li>
                ))}
              </ul>
            )}
            
            {(service.rate || service.timeline) && (
              <div className="pt-6 border-t-4 border-neutral-900 dark:border-white flex flex-wrap items-center justify-between gap-4">
                {service.rate && (
                  <span className="font-heading font-black text-lg text-[#2563EB]">
                    {service.rate}
                  </span>
                )}
                {service.timeline && (
                  <span className="bg-neutral-100 dark:bg-neutral-900 px-3 py-1 font-bold text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 border-2 border-neutral-900 dark:border-white">
                    {service.timeline}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
