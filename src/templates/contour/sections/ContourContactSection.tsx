import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';

interface ContourContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ContourContactSection: React.FC<ContourContactSectionProps> = ({ data, enabled = true }) => {
  const { contact } = data;
  const hasData = Boolean(contact && (contact.email || contact.phone || contact.calendlyUrl || contact.address));

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <ContourField label="Communications" contourVariant="strong">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          <div className="lg:col-span-12 flex flex-col gap-16 md:gap-24 bg-[#F9F8F1]/80 dark:bg-[#1D2320]/80 backdrop-blur-md p-8 md:p-12 lg:p-16 border border-[#C7C9B9]/50 dark:border-[#46504A]/50">
            
            {contact?.messagePrompt && (
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#202523] dark:text-[#EEF0E8] max-w-4xl">
                {contact.messagePrompt}
              </h3>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {(contact?.email || contact?.phone) && (
                <div className="flex flex-col gap-12">
                  {contact.email && (
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C7C9B9] dark:bg-[#46504A]"></span>
                        Electronic Mail
                      </span>
                      <a href={`mailto:${contact.email}`} className="font-body text-xl md:text-2xl font-light text-[#202523] dark:text-[#EEF0E8] hover:text-[#C57659] dark:hover:text-[#D17C63] transition-colors break-words">
                        {contact.email}
                      </a>
                    </div>
                  )}
                  {contact.phone && (
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C7C9B9] dark:bg-[#46504A]"></span>
                        Telephone
                      </span>
                      <a href={`tel:${contact.phone}`} className="font-body text-xl md:text-2xl font-light text-[#202523] dark:text-[#EEF0E8] hover:text-[#C57659] dark:hover:text-[#D17C63] transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  )}
                </div>
              )}
              
              {(contact?.address || contact?.officeHours || contact?.calendlyUrl) && (
                <div className="flex flex-col gap-12">
                  {contact.address && (
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C7C9B9] dark:bg-[#46504A]"></span>
                        Location
                      </span>
                      <span className="font-body text-xl font-light text-[#202523] dark:text-[#EEF0E8] leading-relaxed whitespace-pre-wrap">{contact.address}</span>
                    </div>
                  )}
                  {contact.officeHours && (
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C7C9B9] dark:bg-[#46504A]"></span>
                        Availability
                      </span>
                      <span className="font-body text-xl font-light text-[#202523] dark:text-[#EEF0E8] leading-relaxed">{contact.officeHours}</span>
                    </div>
                  )}
                  {contact.calendlyUrl && (
                    <div className="mt-4">
                      <a
                        href={contact.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-[#F9F8F1] bg-[#202523] dark:bg-[#EEF0E8] dark:text-[#151918] hover:bg-[#879A82] dark:hover:bg-[#78947D] hover:text-[#F9F8F1] transition-colors px-8 py-4"
                      >
                        Schedule Meeting 
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
