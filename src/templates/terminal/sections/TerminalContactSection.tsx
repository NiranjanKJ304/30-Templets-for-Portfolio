import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';

interface TerminalContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TerminalContactSection: React.FC<TerminalContactSectionProps> = ({ data, enabled = true }) => {
  const { contact } = data;
  const hasData = Boolean(contact && (contact.email || contact.phone || contact.calendlyUrl || contact.address));

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="ping contact_host" isSectionHeader />
        
        <div className="flex flex-col gap-6 pl-0 md:pl-4 border border-dashed border-[#C9D0C9] dark:border-[#303833] p-6 bg-[#FAFBF7] dark:bg-[#151A18]">
          <h3 className="font-heading font-bold text-2xl text-[#18201B] dark:text-[#DCE4DC]">
            {contact?.messagePrompt || "INITIATE CONNECTION"}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
            {contact?.email && (
              <div className="flex flex-col gap-1">
                <span className="text-[#967126] dark:text-[#D4AD68]">SMTP:</span>
                <a href={`mailto:${contact.email}`} className="text-[#347A84] dark:text-[#69B7C4] hover:text-[#397A4A] dark:hover:text-[#79C98B] transition-colors break-all">
                  {contact.email}
                </a>
              </div>
            )}
            
            {contact?.phone && (
              <div className="flex flex-col gap-1">
                <span className="text-[#967126] dark:text-[#D4AD68]">TEL:</span>
                <a href={`tel:${contact.phone}`} className="text-[#347A84] dark:text-[#69B7C4] hover:text-[#397A4A] dark:hover:text-[#79C98B] transition-colors">
                  {contact.phone}
                </a>
              </div>
            )}
            
            {contact?.address && (
              <div className="flex flex-col gap-1 sm:col-span-2 mt-2">
                <span className="text-[#967126] dark:text-[#D4AD68]">LOC:</span>
                <span className="text-[#5F6861] dark:text-[#9CA39D]">{contact.address}</span>
              </div>
            )}
            
            {contact?.officeHours && (
              <div className="flex flex-col gap-1 mt-2">
                <span className="text-[#967126] dark:text-[#D4AD68]">UPTIME:</span>
                <span className="text-[#5F6861] dark:text-[#9CA39D]">{contact.officeHours}</span>
              </div>
            )}
          </div>
          
          {contact?.calendlyUrl && (
            <div className="mt-4">
              <a
                href={contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-mono text-xs uppercase text-[#0D1110] bg-[#79C98B] hover:bg-[#DCE4DC] px-4 py-2 font-bold transition-colors"
              >
                EXECUTE ./schedule.sh
              </a>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
