import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';

interface ChronicleContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChronicleContactSection: React.FC<ChronicleContactSectionProps> = ({ data, enabled = true }) => {
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
      <ChronicleBand label="Correspondence">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-12 flex flex-col gap-16 md:gap-24">
            
            {contact?.messagePrompt && (
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#202321] dark:text-[#F0EEE6] max-w-4xl">
                {contact.messagePrompt}
              </h3>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {(contact?.email || contact?.phone) && (
                <div className="flex flex-col gap-12">
                  {contact.email && (
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">Electronic Mail</span>
                      <a href={`mailto:${contact.email}`} className="font-body text-xl md:text-2xl font-light text-[#202321] dark:text-[#F0EEE6] hover:text-[#B96852] dark:hover:text-[#D07861] transition-colors break-words">
                        {contact.email}
                      </a>
                    </div>
                  )}
                  {contact.phone && (
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">Telephone</span>
                      <a href={`tel:${contact.phone}`} className="font-body text-xl md:text-2xl font-light text-[#202321] dark:text-[#F0EEE6] hover:text-[#B96852] dark:hover:text-[#D07861] transition-colors">
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
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">Location</span>
                      <span className="font-body text-xl font-light text-[#202321] dark:text-[#F0EEE6] leading-relaxed whitespace-pre-wrap">{contact.address}</span>
                    </div>
                  )}
                  {contact.officeHours && (
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">Availability</span>
                      <span className="font-body text-xl font-light text-[#202321] dark:text-[#F0EEE6] leading-relaxed">{contact.officeHours}</span>
                    </div>
                  )}
                  {contact.calendlyUrl && (
                    <div className="mt-4">
                      <a
                        href={contact.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-[#F0EEE6] bg-[#202321] dark:bg-[#F0EEE6] dark:text-[#202321] hover:bg-[#B96852] dark:hover:bg-[#D07861] hover:text-white dark:hover:text-white transition-colors px-8 py-5"
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
      </ChronicleBand>
    </SectionWrapper>
  );
};
