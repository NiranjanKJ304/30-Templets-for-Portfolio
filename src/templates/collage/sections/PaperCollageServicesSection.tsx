import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';

interface PaperCollageServicesSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperCollageServicesSection: React.FC<PaperCollageServicesSectionProps> = ({ data, enabled = true }) => {
  const { services } = data;
  const hasData = Array.isArray(services) && services.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="services"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperCollageSectionHeader title="Services" number="06" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {services.map((service, idx) => (
          <div key={service.id || idx} className="relative">
            {/* Offset color block */}
            <div className="absolute inset-0 bg-[#C8E64A] opacity-30 dark:opacity-10 transform -rotate-2 -translate-x-3 translate-y-3"></div>
            
            <div className="relative bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-8 md:p-10 shadow-sm h-full flex flex-col">
               <h3 className="font-heading font-black text-2xl text-[#171717] dark:text-white mb-4">
                 {service.title}
               </h3>
               
               {service.description && (
                 <p className="font-body text-[#4A4A4A] dark:text-[#E0E0E0] mb-8 flex-grow">
                   {service.description}
                 </p>
               )}

               {service.deliverables && service.deliverables.length > 0 && (
                 <div className="mb-8">
                   <span className="block font-mono text-xs font-bold text-[#171717] dark:text-white uppercase tracking-widest mb-3">
                     Deliverables
                   </span>
                   <ul className="space-y-2">
                     {service.deliverables.map((item, iIdx) => (
                       <li key={iIdx} className="flex items-start font-body text-[#4A4A4A] dark:text-[#E0E0E0]">
                         <span className="text-[#315CFF] mr-3 mt-1 text-xs">■</span>
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               )}

               {(service.rate || service.timeline) && (
                 <div className="flex flex-wrap justify-between items-center pt-6 border-t border-[#E5E1D8] dark:border-[#3A3F4C] mt-auto">
                   {service.rate && (
                     <div className="font-mono text-[#171717] dark:text-white font-bold bg-[#F7F3EA] dark:bg-[#1A1C23] px-3 py-1 transform rotate-1">
                       {service.rate}
                     </div>
                   )}
                   {service.timeline && (
                     <div className="font-mono text-[#737373] dark:text-[#A0A5B5] text-sm tracking-wider uppercase">
                       {service.timeline}
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
