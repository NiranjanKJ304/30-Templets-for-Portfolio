import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';

interface MosaicContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MosaicContactSection: React.FC<MosaicContactSectionProps> = ({ data, enabled = true }) => {
  const { contact } = data;
  const hasData = Boolean(contact && (contact.email || contact.phone || contact.calendlyUrl || contact.address));

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="Contact" />
        </div>
        
        <MosaicTile span="two-thirds" padding="xl" surface="warm" className="flex flex-col justify-center">
          <h3 className="font-heading font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] leading-[0.9] mb-12">
            {contact?.messagePrompt || "Let's work together"}
          </h3>
          
          <div className="flex flex-col gap-6 font-heading font-bold text-2xl sm:text-4xl tracking-tighter">
            {contact?.email && (
              <a 
                href={`mailto:${contact.email}`}
                className="text-[#D66B4D] dark:text-[#E27A5A] hover:text-[#1B1B1A] dark:hover:text-[#F1EEE7] transition-colors break-all"
              >
                {contact.email}
              </a>
            )}
            
            {contact?.phone && (
              <a 
                href={`tel:${contact.phone}`}
                className="text-[#D66B4D] dark:text-[#E27A5A] hover:text-[#1B1B1A] dark:hover:text-[#F1EEE7] transition-colors"
              >
                {contact.phone}
              </a>
            )}
          </div>
        </MosaicTile>
        
        <MosaicTile span="third" padding="xl" surface="primary" className="flex flex-col gap-12">
          {(contact?.location || contact?.address || contact?.officeHours) && (
            <div className="flex flex-col gap-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#65645F] dark:text-[#B3B1AA] font-bold">Details</div>
              <div className="flex flex-col gap-2 font-body text-lg text-[#1B1B1A] dark:text-[#F1EEE7]">
                {contact?.location && <span>{contact.location}</span>}
                {contact?.address && <span>{contact.address}</span>}
                {contact?.officeHours && <span>{contact.officeHours}</span>}
              </div>
            </div>
          )}
          
          {contact?.calendlyUrl && (
            <a 
              href={contact.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 bg-[#1B1B1A] dark:bg-[#F1EEE7] text-[#FFFDF8] dark:text-[#1B1E1E] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#D66B4D] dark:hover:bg-[#E27A5A] hover:text-white transition-colors"
            >
              Book a Meeting
            </a>
          )}
          
          {contact?.customFields && contact.customFields.length > 0 && (
            <div className="flex flex-col gap-6 mt-4 pt-8 border-t border-[#CBC5BB] dark:border-[#444744]">
              {contact.customFields.map((field, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#65645F] dark:text-[#B3B1AA] font-bold">{field.label}</span>
                  <span className="font-body text-base font-bold text-[#1B1B1A] dark:text-[#F1EEE7]">{field.value}</span>
                </div>
              ))}
            </div>
          )}
        </MosaicTile>
      </div>
    </SectionWrapper>
  );
};
