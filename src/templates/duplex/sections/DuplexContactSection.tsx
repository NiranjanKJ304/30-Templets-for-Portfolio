import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';

interface DuplexContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const DuplexContactSection: React.FC<DuplexContactSectionProps> = ({ data, enabled = true }) => {
  const { contact } = data;
  const hasData = Boolean(contact && (contact.email || contact.phone || contact.calendlyUrl || contact.address));

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="Contact" />}
      containerClassName="px-6 sm:px-12"
      className="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        <div className="flex flex-col gap-8">
          <h3 className="font-heading font-bold text-4xl sm:text-5xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7] leading-none">
            {contact?.messagePrompt || "Let's collaborate on your next project."}
          </h3>
          
          <div className="flex flex-col gap-6 mt-4">
            {contact?.email && (
              <a 
                href={`mailto:${contact.email}`}
                className="font-mono text-lg md:text-xl text-[#181818] dark:text-[#F1EEE7] hover:text-[#D35F43] dark:hover:text-[#E0795D] transition-colors border-b-2 border-transparent hover:border-[#D35F43] dark:hover:border-[#E0795D] self-start"
              >
                {contact.email}
              </a>
            )}
            
            {contact?.phone && (
              <a 
                href={`tel:${contact.phone}`}
                className="font-mono text-lg md:text-xl text-[#181818] dark:text-[#F1EEE7] hover:text-[#D35F43] dark:hover:text-[#E0795D] transition-colors self-start"
              >
                {contact.phone}
              </a>
            )}
          </div>
        </div>
        
        <div className="flex flex-col gap-10">
          {(contact?.location || contact?.address || contact?.officeHours) && (
            <div className="flex flex-col gap-4 border-l-2 border-[#181818] dark:border-[#F1EEE7] pl-6">
              <div className="font-mono text-sm font-bold uppercase tracking-widest text-[#181818] dark:text-[#F1EEE7]">Details</div>
              <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wider text-[#5F625F] dark:text-[#A9AAA4]">
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
              className="inline-flex items-center justify-center px-8 py-5 bg-[#181818] dark:bg-[#E8E2D7] text-[#F5F1E9] dark:text-[#171717] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#D35F43] dark:hover:bg-[#E0795D] hover:text-white transition-colors mt-4 self-start"
            >
              Schedule a Meeting
            </a>
          )}
          
          {contact?.customFields && contact.customFields.length > 0 && (
            <div className="flex flex-col gap-6 mt-4">
              {contact.customFields.map((field, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B7B0A5] dark:text-[#5F625F]">{field.label}</span>
                  <span className="font-mono text-sm uppercase text-[#181818] dark:text-[#F1EEE7]">{field.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </SectionWrapper>
  );
};
