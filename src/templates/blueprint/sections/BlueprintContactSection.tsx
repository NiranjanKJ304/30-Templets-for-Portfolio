import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';

interface BlueprintContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintContactSection: React.FC<BlueprintContactSectionProps> = ({ data, enabled = true }) => {
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
      customHeader={<BlueprintSectionHeader title="Initialization" number="11" description="Direct Communication Protocols" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="max-w-4xl bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] relative">
        
        {/* Contact Title Block */}
        <div className="border-b-2 border-[#2E6FBB] dark:border-[#5DA9E9] flex flex-wrap bg-[#2E6FBB]/5 dark:bg-[#5DA9E9]/5">
           <div className="flex-1 p-4 border-r-2 border-[#2E6FBB] dark:border-[#5DA9E9] min-w-[200px]">
             <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-1">Target Subject</span>
             <span className="font-mono text-sm text-[#173A5E] dark:text-[#EAF2F7] font-bold uppercase">{profile.name}</span>
           </div>
           <div className="p-4 min-w-[150px]">
             <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-1">Status</span>
             <span className="font-mono text-sm text-[#3DA9C9] uppercase font-bold animate-pulse">RECEIVING</span>
           </div>
        </div>

        <div className="p-8 md:p-12">
          {contact?.messagePrompt && (
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-[#173A5E] dark:text-[#EAF2F7] uppercase mb-10 max-w-2xl">
              {contact.messagePrompt}
            </h3>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              {email && (
                <div>
                  <span className="flex items-center gap-2 font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-2">
                    <div className="w-1 h-1 bg-[#2E6FBB] dark:bg-[#5DA9E9]"></div> PRIMARY RELAY
                  </span>
                  <a href={`mailto:${email}`} className="font-mono text-lg md:text-xl font-bold text-[#2E6FBB] dark:text-[#5DA9E9] hover:text-[#E8893A] dark:hover:text-[#F0A35B] transition-colors break-all">
                    {email}
                  </a>
                </div>
              )}
              
              {phone && (
                <div>
                  <span className="flex items-center gap-2 font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-2">
                    <div className="w-1 h-1 bg-[#2E6FBB] dark:bg-[#5DA9E9]"></div> VOICE LINK
                  </span>
                  <a href={`tel:${phone}`} className="font-mono text-lg font-bold text-[#17202A] dark:text-[#EAF2F7] hover:text-[#2E6FBB] dark:hover:text-[#5DA9E9] transition-colors">
                    {phone}
                  </a>
                </div>
              )}
              
              {(location || contact?.address) && (
                <div>
                  <span className="flex items-center gap-2 font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-2">
                    <div className="w-1 h-1 bg-[#2E6FBB] dark:bg-[#5DA9E9]"></div> PHYSICAL COORD
                  </span>
                  <p className="font-mono text-lg text-[#17202A] dark:text-[#EAF2F7] uppercase">
                    {contact?.address || location}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-8">
              {contact?.customFields && contact.customFields.length > 0 && (
                <div className="space-y-6 pb-8 border-b border-dashed border-[#2E6FBB]/40 dark:border-[#5DA9E9]/40">
                  {contact.customFields.map((field, idx) => (
                    <div key={idx}>
                      <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-1">{field.label}</span>
                      <p className="font-mono text-sm text-[#17202A] dark:text-[#EAF2F7]">{field.value}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {contact?.calendlyUrl && (
                <div>
                  <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-3">SYNC SCHEDULER</span>
                  <a 
                    href={contact.calendlyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex bg-[#2E6FBB] dark:bg-[#5DA9E9] text-[#FAFCFD] dark:text-[#0D1620] px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-[#173A5E] dark:hover:bg-[#EAF2F7] transition-colors"
                  >
                    Schedule Initialization
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
