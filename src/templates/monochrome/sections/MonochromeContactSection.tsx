import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';

interface MonochromeContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonochromeContactSection: React.FC<MonochromeContactSectionProps> = ({ data, enabled = true }) => {
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
      customHeader={<MonochromeSectionHeader title="Contact" number="11" subtitle="Direct Inquiry" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        <div className="lg:col-span-7 flex flex-col">
          {contact?.messagePrompt && (
            <h3 className="font-heading text-4xl md:text-5xl lg:text-7xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight leading-none mb-12 lg:mb-20">
              {contact.messagePrompt}
            </h3>
          )}

          <div className="flex flex-col gap-10">
            {email && (
              <div>
                <span className="block font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest mb-2 border-b border-[#C9C6BE]/30 dark:border-[#3A3A37]/30 pb-2">Electronic Mail</span>
                <a href={`mailto:${email}`} className="font-heading text-3xl md:text-4xl text-[#151515] dark:text-[#F2F0E9] hover:text-[#B44A35] dark:hover:text-[#D06A52] transition-colors break-all">
                  {email}
                </a>
              </div>
            )}
            
            {phone && (
              <div>
                <span className="block font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest mb-2 border-b border-[#C9C6BE]/30 dark:border-[#3A3A37]/30 pb-2">Telephone</span>
                <a href={`tel:${phone}`} className="font-heading text-3xl md:text-4xl text-[#151515] dark:text-[#F2F0E9] hover:text-[#B44A35] dark:hover:text-[#D06A52] transition-colors">
                  {phone}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-12 lg:pt-12">
          {(location || contact?.address) && (
            <div>
              <span className="block font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest mb-4">Location</span>
              <p className="font-body text-xl text-[#151515] dark:text-[#F2F0E9] leading-relaxed uppercase">
                {contact?.address || location}
              </p>
            </div>
          )}

          {contact?.customFields && contact.customFields.length > 0 && (
            <div className="flex flex-col gap-8">
              {contact.customFields.map((field, idx) => (
                <div key={idx}>
                  <span className="block font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest mb-2">{field.label}</span>
                  <p className="font-body text-lg text-[#151515] dark:text-[#F2F0E9]">{field.value}</p>
                </div>
              ))}
            </div>
          )}
          
          {contact?.calendlyUrl && (
            <div className="pt-8">
              <a 
                href={contact.calendlyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block font-body text-sm font-medium uppercase tracking-widest text-[#151515] dark:text-[#F2F0E9] border-b-2 border-[#151515] dark:border-[#F2F0E9] pb-1 hover:text-[#B44A35] dark:hover:text-[#D06A52] hover:border-[#B44A35] dark:hover:border-[#D06A52] transition-colors"
              >
                Schedule Appointment
              </a>
            </div>
          )}
        </div>

      </div>
    </SectionWrapper>
  );
};
