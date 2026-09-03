import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';

interface MemphisContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MemphisContactSection: React.FC<MemphisContactSectionProps> = ({ data, enabled = true }) => {
  const { contact, profile } = data;
  
  // Combine contact info for validation
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
      customHeader={<MemphisSectionHeader title="Contact" number="11" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white p-8 md:p-16 shadow-[12px_12px_0_0_#2563EB] relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#34D399] border-l-4 border-b-4 border-neutral-900 dark:border-white"></div>
        <div className="absolute -left-6 top-1/2 w-12 h-12 bg-[#FACC15] border-4 border-neutral-900 dark:border-white transform -translate-y-1/2 rotate-45"></div>

        <div className="relative z-10 flex flex-col md:flex-row gap-12 justify-between">
          
          <div className="flex-1">
            {contact?.messagePrompt && (
              <h3 className="font-heading font-black text-3xl md:text-5xl uppercase text-neutral-900 dark:text-white mb-8 leading-tight">
                {contact.messagePrompt}
              </h3>
            )}

            <div className="space-y-6">
              {email && (
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm uppercase text-[#EC4899] mb-1">Email</span>
                  <a href={`mailto:${email}`} className="font-body font-bold text-xl text-neutral-900 dark:text-white hover:underline decoration-4 underline-offset-4 decoration-[#EC4899]">
                    {email}
                  </a>
                </div>
              )}
              {phone && (
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm uppercase text-[#2563EB] mb-1">Phone</span>
                  <a href={`tel:${phone}`} className="font-body font-bold text-xl text-neutral-900 dark:text-white hover:underline decoration-4 underline-offset-4 decoration-[#2563EB]">
                    {phone}
                  </a>
                </div>
              )}
              {(location || contact?.address) && (
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm uppercase text-[#34D399] mb-1">Location</span>
                  <p className="font-body font-bold text-xl text-neutral-900 dark:text-white">
                    {contact?.address || location}
                  </p>
                </div>
              )}
              
              {contact?.customFields && contact.customFields.length > 0 && (
                <div className="pt-6 border-t-4 border-neutral-900 dark:border-white space-y-4">
                  {contact.customFields.map((field, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-heading font-bold text-sm uppercase text-neutral-500 mb-1">{field.label}</span>
                      <p className="font-body font-bold text-lg text-neutral-900 dark:text-white">{field.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {contact?.calendlyUrl && (
            <div className="w-full md:w-auto flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-neutral-900 dark:border-white pt-8 md:pt-0 md:pl-12">
               <a 
                 href={contact.calendlyUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center bg-[#FACC15] text-neutral-900 font-heading font-black text-xl uppercase px-8 py-6 border-4 border-neutral-900 shadow-[6px_6px_0_0_#202124] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#202124] transition-all text-center"
               >
                 Schedule a Call
               </a>
            </div>
          )}

        </div>
      </div>
    </SectionWrapper>
  );
};
