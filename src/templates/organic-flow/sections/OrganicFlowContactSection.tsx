import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';
import { FlowSurface } from '../components/FlowSurface';

interface OrganicFlowContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrganicFlowContactSection: React.FC<OrganicFlowContactSectionProps> = ({ data, enabled = true }) => {
  const { contact } = data;
  const hasData = Boolean(contact && (contact.email || contact.phone || contact.calendlyUrl || contact.address));

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative z-0 pb-24 md:pb-48"
      containerClassName="px-0 py-0"
    >
      <FlowSection title="SAY HELLO" align="center">
        <FlowSurface 
          variant="accent" 
          curveTop="both" 
          curveBottom="none" 
          className="mt-12 md:mt-24 p-12 md:p-24 lg:p-32 rounded-b-[4rem] md:rounded-b-[8rem]"
        >
          <div className="flex flex-col items-center text-center gap-16 max-w-4xl mx-auto">
            {contact?.messagePrompt && (
              <h3 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-[#FBFAF5] dark:text-[#151817] leading-tight">
                {contact.messagePrompt}
              </h3>
            )}
            
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start w-full justify-center">
              {contact?.email && (
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-mono text-[10px] uppercase text-[#FBFAF5]/70 dark:text-[#151817]/70">Email</span>
                  <a href={`mailto:${contact.email}`} className="font-body text-xl md:text-2xl text-[#FBFAF5] dark:text-[#151817] font-medium hover:opacity-80 transition-opacity">
                    {contact.email}
                  </a>
                </div>
              )}
              
              {contact?.phone && (
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-mono text-[10px] uppercase text-[#FBFAF5]/70 dark:text-[#151817]/70">Phone</span>
                  <a href={`tel:${contact.phone}`} className="font-body text-xl md:text-2xl text-[#FBFAF5] dark:text-[#151817] font-medium hover:opacity-80 transition-opacity">
                    {contact.phone}
                  </a>
                </div>
              )}
            </div>
            
            {(contact?.address || contact?.officeHours) && (
              <div className="flex flex-col md:flex-row gap-12 items-center text-center">
                {contact?.address && (
                  <div className="flex flex-col gap-2 items-center">
                    <span className="font-mono text-[10px] uppercase text-[#FBFAF5]/70 dark:text-[#151817]/70">Location</span>
                    <span className="font-body text-lg text-[#FBFAF5] dark:text-[#151817]">{contact.address}</span>
                  </div>
                )}
                {contact?.officeHours && (
                  <div className="flex flex-col gap-2 items-center">
                    <span className="font-mono text-[10px] uppercase text-[#FBFAF5]/70 dark:text-[#151817]/70">Hours</span>
                    <span className="font-body text-lg text-[#FBFAF5] dark:text-[#151817]">{contact.officeHours}</span>
                  </div>
                )}
              </div>
            )}
            
            {contact?.calendlyUrl && (
              <div className="mt-8">
                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FBFAF5] dark:bg-[#151817] text-[#819B8A] dark:text-[#88A995] font-heading font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform"
                >
                  Schedule a Meeting
                </a>
              </div>
            )}
          </div>
        </FlowSurface>
      </FlowSection>
    </SectionWrapper>
  );
};
