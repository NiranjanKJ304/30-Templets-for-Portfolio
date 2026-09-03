import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';

interface IndexContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const IndexContactSection: React.FC<IndexContactSectionProps> = ({ data, enabled = true }) => {
  const { contact } = data;
  const hasData = Boolean(contact && (contact.email || contact.phone || contact.calendlyUrl || contact.address));

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col">
        <IndexRow
          isHeader
          title="CONTACT REGISTRY"
          metadata="COMMUNICATION"
          description="DETAILS"
        />
        
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-[#D5D6D0] dark:border-[#404440]">
          <div className="md:col-span-5 flex flex-col gap-8">
            <h3 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tighter text-[#181A19] dark:text-[#F2F1EA] leading-none">
              {contact?.messagePrompt || "COMMUNICATE"}
            </h3>
            
            {contact?.calendlyUrl && (
              <a
                href={contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex self-start px-6 py-3 bg-[#181A19] text-[#FFFFFF] dark:bg-[#F2F1EA] dark:text-[#121514] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#365F58] hover:text-[#FFFFFF] dark:hover:bg-[#80A99E] dark:hover:text-[#121514] transition-colors"
              >
                SCHEDULE MEETING
              </a>
            )}
          </div>
          
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contact?.email && (
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C] font-bold">EMAIL</span>
                <a 
                  href={`mailto:${contact.email}`}
                  className="font-heading font-bold text-lg sm:text-xl text-[#181A19] dark:text-[#F2F1EA] hover:text-[#365F58] dark:hover:text-[#80A99E] transition-colors break-all"
                >
                  {contact.email}
                </a>
              </div>
            )}
            
            {contact?.phone && (
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C] font-bold">PHONE</span>
                <a 
                  href={`tel:${contact.phone}`}
                  className="font-heading font-bold text-lg sm:text-xl text-[#181A19] dark:text-[#F2F1EA] hover:text-[#365F58] dark:hover:text-[#80A99E] transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            )}

            {contact?.address && (
              <div className="flex flex-col gap-2 sm:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C] font-bold">ADDRESS</span>
                <address className="font-body text-sm text-[#696C67] dark:text-[#A8ABA4] not-italic">
                  {contact.address}
                </address>
              </div>
            )}

            {contact?.officeHours && (
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C] font-bold">OFFICE HOURS</span>
                <span className="font-body text-sm text-[#696C67] dark:text-[#A8ABA4]">
                  {contact.officeHours}
                </span>
              </div>
            )}
            
            {contact?.customFields && contact.customFields.length > 0 && (
              <div className="sm:col-span-2 flex flex-col gap-4 mt-4">
                {contact.customFields.map((field, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C] font-bold">{field.label}</span>
                    <span className="font-body text-sm text-[#696C67] dark:text-[#A8ABA4]">{field.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
