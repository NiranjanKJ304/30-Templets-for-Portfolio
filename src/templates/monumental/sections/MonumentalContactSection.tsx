import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalSurface } from '../components/MonumentalSurface';

interface MonumentalContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonumentalContactSection: React.FC<MonumentalContactSectionProps> = ({ data, enabled = true }) => {
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
      <MonumentalSection title="INITIATE" index="11" align="right">
        <MonumentalSurface variant="primary" className="p-16 md:p-32 flex flex-col gap-16 md:gap-32 border-8 border-[#171918] dark:border-[#F0EEE6]">
          {contact?.messagePrompt && (
            <h3 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-[#171918] dark:text-[#F0EEE6] uppercase tracking-tighter leading-[1] max-w-5xl">
              {contact.messagePrompt}
            </h3>
          )}
          
          <div className="flex flex-col lg:flex-row justify-between gap-16 border-t-8 border-[#171918] dark:border-[#F0EEE6] pt-16">
            <div className="flex flex-col gap-16">
              {contact?.email && (
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-sm text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                    EMAIL
                  </span>
                  <a href={`mailto:${contact.email}`} className="font-heading font-black text-3xl md:text-5xl text-[#171918] dark:text-[#F0EEE6] uppercase break-words hover:text-[#B94F38] dark:hover:text-[#D16A52] transition-colors">
                    {contact.email}
                  </a>
                </div>
              )}
              {contact?.phone && (
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-sm text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                    PHONE
                  </span>
                  <a href={`tel:${contact.phone}`} className="font-heading font-black text-3xl md:text-5xl text-[#171918] dark:text-[#F0EEE6] uppercase hover:text-[#B94F38] dark:hover:text-[#D16A52] transition-colors">
                    {contact.phone}
                  </a>
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-16 lg:text-right">
              {contact?.address && (
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-sm text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                    LOCATION
                  </span>
                  <span className="font-body text-xl text-[#686B66] dark:text-[#A5A7A1] uppercase max-w-sm">
                    {contact.address}
                  </span>
                </div>
              )}
              {contact?.officeHours && (
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-sm text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                    HOURS
                  </span>
                  <span className="font-body text-xl text-[#686B66] dark:text-[#A5A7A1] uppercase max-w-sm">
                    {contact.officeHours}
                  </span>
                </div>
              )}
              {contact?.calendlyUrl && (
                <div className="mt-8">
                  <a
                    href={contact.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#171918] dark:bg-[#F0EEE6] text-[#ECE9E1] dark:text-[#121514] font-heading font-black text-2xl uppercase tracking-widest px-12 py-6 hover:bg-[#B94F38] dark:hover:bg-[#D16A52] transition-colors"
                  >
                    SCHEDULE
                  </a>
                </div>
              )}
            </div>
          </div>
        </MonumentalSurface>
      </MonumentalSection>
    </SectionWrapper>
  );
};
