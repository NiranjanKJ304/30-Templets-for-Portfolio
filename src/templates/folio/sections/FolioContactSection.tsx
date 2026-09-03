import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FolioSheet } from '../components/FolioSheet';
import { FolioMeta } from '../components/FolioMeta';

interface FolioContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  pageNum: string;
}

export const FolioContactSection: React.FC<FolioContactSectionProps> = ({ data, enabled = true, pageNum }) => {
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
      <FolioSheet pageNum={pageNum} title="CORRESPONDENCE" offset="none" alternate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-12 flex flex-col gap-16 md:gap-24">
            
            {contact?.messagePrompt && (
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#1D2020] dark:text-[#F0EEE6] max-w-4xl pb-12 border-b border-[#C9C5BA]/50 dark:border-[#444A45]/50">
                {contact.messagePrompt}
              </h3>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {(contact?.email || contact?.phone) && (
                <div className="flex flex-col gap-12">
                  {contact.email && (
                    <div className="flex flex-col gap-4">
                      <FolioMeta label="Electronic Mail" value="" />
                      <a href={`mailto:${contact.email}`} className="font-body text-xl md:text-2xl font-light text-[#1D2020] dark:text-[#F0EEE6] hover:text-[#B85F49] dark:hover:text-[#D07961] transition-colors break-words">
                        {contact.email}
                      </a>
                    </div>
                  )}
                  {contact.phone && (
                    <div className="flex flex-col gap-4">
                      <FolioMeta label="Telephone" value="" />
                      <a href={`tel:${contact.phone}`} className="font-body text-xl md:text-2xl font-light text-[#1D2020] dark:text-[#F0EEE6] hover:text-[#B85F49] dark:hover:text-[#D07961] transition-colors">
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
                      <FolioMeta label="Location" value="" />
                      <span className="font-body text-xl font-light text-[#1D2020] dark:text-[#F0EEE6] leading-relaxed whitespace-pre-wrap">{contact.address}</span>
                    </div>
                  )}
                  {contact.officeHours && (
                    <div className="flex flex-col gap-4">
                      <FolioMeta label="Availability" value="" />
                      <span className="font-body text-xl font-light text-[#1D2020] dark:text-[#F0EEE6] leading-relaxed">{contact.officeHours}</span>
                    </div>
                  )}
                  {contact.calendlyUrl && (
                    <div className="mt-4">
                      <a
                        href={contact.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-widest text-[#FAF8F1] bg-[#1D2020] dark:bg-[#F0EEE6] dark:text-[#141716] hover:bg-[#B85F49] dark:hover:bg-[#D07961] hover:text-[#FAF8F1] transition-colors px-8 py-4 border border-[#1D2020] dark:border-[#F0EEE6]"
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
      </FolioSheet>
    </SectionWrapper>
  );
};
