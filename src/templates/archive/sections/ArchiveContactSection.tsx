import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';

interface ArchiveContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
}

export const ArchiveContactSection: React.FC<ArchiveContactSectionProps> = ({ data, enabled = true, index }) => {
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
      <ArchiveEntry index={index} title="Contact" className="mt-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mt-8">
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="font-heading font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#20211F] dark:text-[#F1EEE5] leading-none">
              {contact?.messagePrompt || "Initiate Communication"}
            </h3>
            
            <div className="flex flex-col gap-4 mt-4">
              {contact?.email && (
                <a 
                  href={`mailto:${contact.email}`}
                  className="font-heading font-bold text-2xl sm:text-3xl text-[#9D4937] dark:text-[#D4755D] hover:text-[#20211F] dark:hover:text-[#F1EEE5] transition-colors break-all"
                >
                  {contact.email}
                </a>
              )}
              {contact?.phone && (
                <a 
                  href={`tel:${contact.phone}`}
                  className="font-heading font-bold text-2xl sm:text-3xl text-[#9D4937] dark:text-[#D4755D] hover:text-[#20211F] dark:hover:text-[#F1EEE5] transition-colors"
                >
                  {contact.phone}
                </a>
              )}
            </div>
            
            {contact?.calendlyUrl && (
              <div className="mt-4">
                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#20211F] dark:border-[#F1EEE5] text-[#20211F] dark:text-[#F1EEE5] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#20211F] hover:text-[#FAF8F2] dark:hover:bg-[#F1EEE5] dark:hover:text-[#151716] transition-colors"
                >
                  Schedule Meeting
                </a>
              </div>
            )}
          </div>
          
          <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-6 font-mono text-xs uppercase tracking-widest text-[#20211F] dark:text-[#F1EEE5]">
            {(contact?.location || contact?.address || contact?.officeHours) && (
              <div className="flex flex-col gap-4 bg-[#FAF8F2] dark:bg-[#1D201E] p-6 border border-[#C8C5BA] dark:border-[#464943]">
                <div className="text-[#686861] dark:text-[#AAA9A0] font-bold mb-2">DIRECTORY</div>
                {contact?.location && <div className="flex flex-col"><span>REGION:</span><span>{contact.location}</span></div>}
                {contact?.address && <div className="flex flex-col"><span>ADDRESS:</span><span>{contact.address}</span></div>}
                {contact?.officeHours && <div className="flex flex-col"><span>HOURS:</span><span>{contact.officeHours}</span></div>}
              </div>
            )}
            
            {contact?.customFields && contact.customFields.length > 0 && (
              <div className="flex flex-col gap-4 border-l border-[#C8C5BA] dark:border-[#464943] pl-4 py-2 mt-4">
                {contact.customFields.map((field, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-[#686861] dark:text-[#AAA9A0] font-bold">{field.label}</span>
                    <span>{field.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
