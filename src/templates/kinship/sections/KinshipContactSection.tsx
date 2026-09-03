import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';

interface KinshipContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KinshipContactSection: React.FC<KinshipContactSectionProps> = ({ data, enabled = true }) => {
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
      <KinshipSection title="Contact" color="primary">
        <div className="flex flex-col gap-12 w-full max-w-4xl relative">
          
          <KinshipConnector orientation="vertical" className="absolute top-0 bottom-0 left-[3px] opacity-30" />
          
          {contact?.messagePrompt && (
            <div className="relative pl-12 mb-8">
              <KinshipAnchor color="primary" className="absolute top-2 -left-1" />
              <KinshipConnector orientation="horizontal" className="absolute top-3 left-1 w-8 opacity-30" />
              <h3 className="font-heading font-medium text-3xl md:text-5xl text-[#202624] dark:text-[#EEF0EA] tracking-tight leading-[1.2]">
                {contact.messagePrompt}
              </h3>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative pl-12">
            
            {(contact?.email || contact?.phone) && (
              <div className="flex flex-col gap-8">
                {contact.email && (
                  <div className="relative group">
                    <KinshipAnchor color="primary" size="sm" className="absolute top-2 -left-[51px] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <KinshipConnector orientation="horizontal" className="absolute top-3 -left-12 w-8 opacity-30 group-hover:opacity-100 transition-opacity" />
                    
                    <span className="font-mono text-[10px] text-[#737A75] dark:text-[#A7ADA7] uppercase tracking-widest block mb-1">Email</span>
                    <a href={`mailto:${contact.email}`} className="font-body text-xl md:text-2xl text-[#202624] dark:text-[#EEF0EA] break-words hover:text-[#356B63] dark:hover:text-[#78A99E] transition-colors">
                      {contact.email}
                    </a>
                  </div>
                )}
                {contact.phone && (
                  <div className="relative group">
                    <KinshipAnchor color="primary" size="sm" className="absolute top-2 -left-[51px] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <KinshipConnector orientation="horizontal" className="absolute top-3 -left-12 w-8 opacity-30 group-hover:opacity-100 transition-opacity" />
                    
                    <span className="font-mono text-[10px] text-[#737A75] dark:text-[#A7ADA7] uppercase tracking-widest block mb-1">Phone</span>
                    <a href={`tel:${contact.phone}`} className="font-body text-xl md:text-2xl text-[#202624] dark:text-[#EEF0EA] hover:text-[#356B63] dark:hover:text-[#78A99E] transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                )}
              </div>
            )}
            
            {(contact?.address || contact?.officeHours) && (
              <div className="flex flex-col gap-8">
                {contact.address && (
                  <div className="relative">
                    <span className="font-mono text-[10px] text-[#737A75] dark:text-[#A7ADA7] uppercase tracking-widest block mb-1">Location</span>
                    <span className="font-body text-lg text-[#202624] dark:text-[#EEF0EA] leading-relaxed block">{contact.address}</span>
                  </div>
                )}
                {contact.officeHours && (
                  <div className="relative">
                    <span className="font-mono text-[10px] text-[#737A75] dark:text-[#A7ADA7] uppercase tracking-widest block mb-1">Hours</span>
                    <span className="font-body text-lg text-[#202624] dark:text-[#EEF0EA] leading-relaxed block">{contact.officeHours}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {contact?.calendlyUrl && (
            <div className="mt-8 relative pl-12">
              <KinshipAnchor color="primary" className="absolute top-1/2 -translate-y-1/2 -left-1" pulse />
              <KinshipConnector orientation="horizontal" className="absolute top-1/2 left-1 w-8 opacity-50" />
              
              <a
                href={contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#202624] dark:bg-[#EEF0EA] text-[#FCFBF7] dark:text-[#141716] font-body text-base font-medium px-6 py-3 rounded-full hover:bg-[#356B63] dark:hover:bg-[#78A99E] transition-colors"
              >
                Schedule Meeting
                <span>→</span>
              </a>
            </div>
          )}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
