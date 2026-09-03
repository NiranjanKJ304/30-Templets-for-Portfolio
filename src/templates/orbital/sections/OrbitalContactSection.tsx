import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';

interface OrbitalContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrbitalContactSection: React.FC<OrbitalContactSectionProps> = ({ data, enabled = true }) => {
  const { contact, profile } = data;
  
  const email = contact?.email || profile.contactEmail;
  const phone = contact?.phone || profile.contactPhone;
  const location = contact?.location || profile.location;
  const hasData = Boolean(
    email || phone || location || contact?.address || contact?.calendlyUrl || contact?.messagePrompt || (contact?.customFields && contact.customFields.length > 0)
  );

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="Contact" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {contact?.messagePrompt && (
          <h3 className="font-heading font-bold text-3xl md:text-5xl text-[#172326] dark:text-[#F0F4F1] mb-12 max-w-2xl mx-auto leading-tight">
            {contact.messagePrompt}
          </h3>
        )}

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/60 dark:border-[#40504D]/60 rounded-full px-8 py-4 hover:border-[#2F7C73] dark:hover:border-[#66B8A9] transition-colors flex flex-col items-center"
            >
              <span className="font-mono text-[9px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest mb-1">Electronic Mail</span>
              <span className="font-heading font-bold text-lg md:text-xl text-[#172326] dark:text-[#F0F4F1] break-all">{email}</span>
            </a>
          )}
          
          {phone && (
            <a 
              href={`tel:${phone}`} 
              className="bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/60 dark:border-[#40504D]/60 rounded-full px-8 py-4 hover:border-[#2F7C73] dark:hover:border-[#66B8A9] transition-colors flex flex-col items-center"
            >
              <span className="font-mono text-[9px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest mb-1">Telephone</span>
              <span className="font-heading font-bold text-lg md:text-xl text-[#172326] dark:text-[#F0F4F1]">{phone}</span>
            </a>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {(location || contact?.address) && (
            <div className="flex flex-col items-center bg-[#EEF2F1] dark:bg-[#101819] px-6 py-3 rounded-full border border-[#B9C9C6]/30 dark:border-[#40504D]/30">
              <span className="font-mono text-[9px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest mb-1">Coordinates</span>
              <span className="font-body text-sm text-[#172326] dark:text-[#F0F4F1] uppercase">{contact?.address || location}</span>
            </div>
          )}

          {contact?.customFields && contact.customFields.map((field, idx) => (
            <div key={idx} className="flex flex-col items-center bg-[#EEF2F1] dark:bg-[#101819] px-6 py-3 rounded-full border border-[#B9C9C6]/30 dark:border-[#40504D]/30">
              <span className="font-mono text-[9px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest mb-1">{field.label}</span>
              <span className="font-body text-sm text-[#172326] dark:text-[#F0F4F1]">{field.value}</span>
            </div>
          ))}
        </div>

        {contact?.calendlyUrl && (
          <div className="mt-16">
            <a 
              href={contact.calendlyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#172326] text-[#FFFFFF] dark:bg-[#F0F4F1] dark:text-[#101819] px-8 py-4 rounded-full font-heading font-semibold text-sm hover:bg-[#2F7C73] dark:hover:bg-[#66B8A9] hover:text-[#FFFFFF] transition-colors"
            >
              Book Transmission Slot
            </a>
          </div>
        )}

      </div>
    </SectionWrapper>
  );
};
