import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';

interface TesseraContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TesseraContactSection: React.FC<TesseraContactSectionProps> = ({ data, enabled = true }) => {
  const { contact } = data;
  const hasData = Boolean(contact && (contact.email || contact.phone || contact.calendlyUrl || contact.address));

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <TesseraSection title="Contact" accent="terracotta">
        <div className="flex flex-col border-t border-[#C8C4B9] dark:border-[#4A4D48] relative w-full lg:max-w-4xl">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block z-0" />
          
          {contact?.messagePrompt && (
            <TesseraModule 
              elevation="flat"
              accent="terracotta"
              tab="left"
              className="p-8 md:p-12 border-b border-[#C8C4B9] dark:border-[#4A4D48]"
            >
              <h3 className="font-heading font-medium text-3xl md:text-5xl text-[#242522] dark:text-[#F0EEE5] tracking-tight leading-[1.2]">
                {contact.messagePrompt}
              </h3>
            </TesseraModule>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-[#C8C4B9] dark:border-[#4A4D48]">
            
            {(contact?.email || contact?.phone) && (
              <TesseraModule elevation="inset" className="flex flex-col gap-8 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#C8C4B9] dark:border-[#4A4D48]">
                {contact.email && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest">Email</span>
                    <a href={`mailto:${contact.email}`} className="font-body text-xl text-[#242522] dark:text-[#F0EEE5] break-words font-medium hover:text-[#C6654F] dark:hover:text-[#D67A62] transition-colors">
                      {contact.email}
                    </a>
                  </div>
                )}
                {contact.phone && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest">Phone</span>
                    <a href={`tel:${contact.phone}`} className="font-body text-xl text-[#242522] dark:text-[#F0EEE5] font-medium hover:text-[#C6654F] dark:hover:text-[#D67A62] transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                )}
              </TesseraModule>
            )}
            
            {(contact?.address || contact?.officeHours || contact?.calendlyUrl) && (
              <TesseraModule elevation="inset" className="flex flex-col gap-8 p-8 md:p-12">
                {contact.address && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest">Location</span>
                    <span className="font-body text-lg text-[#242522] dark:text-[#F0EEE5] leading-relaxed block">{contact.address}</span>
                  </div>
                )}
                {contact.officeHours && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest">Hours</span>
                    <span className="font-body text-lg text-[#242522] dark:text-[#F0EEE5] leading-relaxed block">{contact.officeHours}</span>
                  </div>
                )}
                {contact.calendlyUrl && (
                  <div className="mt-auto pt-4">
                    <a
                      href={contact.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#242522] dark:bg-[#F0EEE5] text-[#FBF9F3] dark:text-[#1E2220] font-heading text-sm font-bold uppercase tracking-wider px-6 py-4 hover:bg-[#C6654F] dark:hover:bg-[#D67A62] transition-colors"
                    >
                      Schedule Meeting
                    </a>
                  </div>
                )}
              </TesseraModule>
            )}
          </div>
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
