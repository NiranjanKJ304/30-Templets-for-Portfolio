import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';

interface PaperCollageContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperCollageContactSection: React.FC<PaperCollageContactSectionProps> = ({ data, enabled = true }) => {
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
      customHeader={<PaperCollageSectionHeader title="Contact" number="11" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="max-w-3xl mx-auto relative">
        {/* Shadow/Offset layer */}
        <div className="absolute inset-0 bg-[#F26B5B] opacity-10 dark:opacity-20 transform rotate-1 -translate-x-2 translate-y-2"></div>
        
        {/* Main contact card */}
        <div className="relative bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-10 md:p-16 shadow-[4px_4px_24px_rgba(0,0,0,0.06)] transform -rotate-1">
          
          {/* Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#315CFF]/30 backdrop-blur-sm transform rotate-2 mix-blend-multiply dark:mix-blend-screen"></div>

          {contact?.messagePrompt && (
            <h3 className="font-heading font-black text-3xl md:text-5xl text-[#171717] dark:text-white mb-10 leading-tight">
              {contact.messagePrompt}
            </h3>
          )}

          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="space-y-8 flex-1">
              {email && (
                <div>
                  <span className="block font-mono text-[10px] text-[#737373] dark:text-[#A0A5B5] uppercase tracking-widest mb-2">Email</span>
                  <a href={`mailto:${email}`} className="font-heading font-bold text-xl md:text-2xl text-[#171717] dark:text-white hover:text-[#F26B5B] dark:hover:text-[#F26B5B] transition-colors border-b border-[#171717] dark:border-white pb-1">
                    {email}
                  </a>
                </div>
              )}
              {phone && (
                <div>
                  <span className="block font-mono text-[10px] text-[#737373] dark:text-[#A0A5B5] uppercase tracking-widest mb-2">Phone</span>
                  <a href={`tel:${phone}`} className="font-body text-lg text-[#171717] dark:text-white hover:text-[#315CFF] transition-colors">
                    {phone}
                  </a>
                </div>
              )}
              {(location || contact?.address) && (
                <div>
                  <span className="block font-mono text-[10px] text-[#737373] dark:text-[#A0A5B5] uppercase tracking-widest mb-2">Location</span>
                  <p className="font-body text-lg text-[#171717] dark:text-white">
                    {contact?.address || location}
                  </p>
                </div>
              )}
              {contact?.customFields && contact.customFields.length > 0 && (
                <div className="pt-6 border-t border-[#E5E1D8] dark:border-[#3A3F4C] space-y-6">
                  {contact.customFields.map((field, idx) => (
                    <div key={idx}>
                      <span className="block font-mono text-[10px] text-[#737373] dark:text-[#A0A5B5] uppercase tracking-widest mb-2">{field.label}</span>
                      <p className="font-body text-lg text-[#171717] dark:text-white">{field.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {contact?.calendlyUrl && (
              <div className="flex flex-col justify-center items-start md:items-end border-t md:border-t-0 md:border-l border-[#E5E1D8] dark:border-[#3A3F4C] pt-8 md:pt-0 md:pl-12">
                <a 
                  href={contact.calendlyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#171717] dark:bg-[#FFFDF8] text-[#FFFDF8] dark:text-[#171717] font-heading font-bold uppercase tracking-widest px-8 py-4 transform hover:-translate-y-1 transition-transform shadow-md"
                >
                  Schedule a Call
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};
