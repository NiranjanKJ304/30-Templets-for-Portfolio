import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';

interface BlueprintOSContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintOSContactSection: React.FC<BlueprintOSContactSectionProps> = ({ data, enabled = true }) => {
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
      <WorkspaceWindow title="COMMUNICATIONS_PORT" id="contact" bodyClassName="bg-[#E9ECE8] dark:bg-[#111615]">
        <div className="flex flex-col md:flex-row gap-8 bg-[#F8FAF7] dark:bg-[#181E1C] border border-[#CBD2CD] dark:border-[#3A4340] p-6 shadow-sm">
          <div className="md:w-1/2 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-[#CBD2CD] dark:border-[#3A4340] pb-6 md:pb-0 md:pr-6">
            <h3 className="font-heading font-bold text-2xl text-[#1D2523] dark:text-[#EEF2EC] leading-snug">
              {contact?.messagePrompt || "INITIATE COMMUNICATION"}
            </h3>
            
            {contact?.calendlyUrl && (
              <a
                href={contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-heading font-bold text-sm bg-[#356B63] hover:bg-[#1D2523] text-[#FFFFFF] dark:bg-[#75A89E] dark:hover:bg-[#EEF2EC] dark:text-[#111615] px-6 py-3 transition-colors self-start shadow-sm"
              >
                SCHEDULE SESSION
              </a>
            )}
          </div>
          
          <div className="md:w-1/2 flex flex-col gap-6 justify-center">
            {contact?.email && (
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#68716D] dark:text-[#A6ADA8] uppercase">E-MAIL ADDRESS</span>
                <a href={`mailto:${contact.email}`} className="font-body text-base text-[#1D2523] dark:text-[#EEF2EC] hover:text-[#356B63] dark:hover:text-[#75A89E] transition-colors font-medium break-all">
                  {contact.email}
                </a>
              </div>
            )}
            
            {contact?.phone && (
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#68716D] dark:text-[#A6ADA8] uppercase">TELEPHONE</span>
                <a href={`tel:${contact.phone}`} className="font-body text-base text-[#1D2523] dark:text-[#EEF2EC] hover:text-[#356B63] dark:hover:text-[#75A89E] transition-colors font-medium">
                  {contact.phone}
                </a>
              </div>
            )}
            
            {(contact?.address || contact?.officeHours) && (
              <div className="flex flex-col gap-4 mt-2 pt-4 border-t border-[#CBD2CD] dark:border-[#3A4340]">
                {contact?.address && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#68716D] dark:text-[#A6ADA8] uppercase">LOCATION</span>
                    <span className="font-body text-sm text-[#1D2523] dark:text-[#EEF2EC]">{contact.address}</span>
                  </div>
                )}
                {contact?.officeHours && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#68716D] dark:text-[#A6ADA8] uppercase">HOURS</span>
                    <span className="font-body text-sm text-[#1D2523] dark:text-[#EEF2EC]">{contact.officeHours}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
