import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';
import { ArrowRight } from 'lucide-react';

interface PaperfoldContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperfoldContactSection: React.FC<PaperfoldContactSectionProps> = ({ data, enabled = true }) => {
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
      customHeader={<PaperfoldSectionHeader title="Correspondence" number="11" subtitle="Direct Channels" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="max-w-5xl bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
        
        {/* Large bottom fold corner */}
        <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none">
           <div className="absolute bottom-0 right-0 w-full h-full bg-[#F3EFE7] dark:bg-[#151719] transform -rotate-45 translate-x-12 translate-y-12 shadow-[-4px_-4px_10px_rgba(0,0,0,0.03)] border-t border-l border-[#E8E3D8] dark:border-[#202020]"></div>
        </div>

        <div className="p-10 md:p-16 lg:p-24 relative z-10">
          {contact?.messagePrompt && (
            <h3 className="font-heading font-normal text-3xl md:text-5xl text-[#202020] dark:text-[#F3F0E8] leading-tight mb-16 max-w-2xl">
              {contact.messagePrompt}
            </h3>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-10">
              {email && (
                <div>
                  <span className="block font-mono text-[10px] text-[#7D9EAF] dark:text-[#8EADBD] uppercase tracking-widest mb-3">Electronic Mail</span>
                  <a href={`mailto:${email}`} className="font-heading text-xl md:text-2xl text-[#202020] dark:text-[#F3F0E8] hover:text-[#C86B52] dark:hover:text-[#D47A61] transition-colors border-b border-[#202020]/20 dark:border-[#F3F0E8]/20 hover:border-[#C86B52] dark:hover:border-[#D47A61] pb-1 break-all">
                    {email}
                  </a>
                </div>
              )}
              
              {phone && (
                <div>
                  <span className="block font-mono text-[10px] text-[#7D9EAF] dark:text-[#8EADBD] uppercase tracking-widest mb-3">Telephone</span>
                  <a href={`tel:${phone}`} className="font-heading text-xl md:text-2xl text-[#202020] dark:text-[#F3F0E8] hover:text-[#C86B52] dark:hover:text-[#D47A61] transition-colors">
                    {phone}
                  </a>
                </div>
              )}
              
              {(location || contact?.address) && (
                <div>
                  <span className="block font-mono text-[10px] text-[#7D9EAF] dark:text-[#8EADBD] uppercase tracking-widest mb-3">Location</span>
                  <p className="font-heading text-xl text-[#66717A] dark:text-[#AAB3B8] leading-relaxed max-w-sm">
                    {contact?.address || location}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-12">
              {contact?.customFields && contact.customFields.length > 0 && (
                <div className="space-y-8">
                  {contact.customFields.map((field, idx) => (
                    <div key={idx} className="border-l-2 border-[#E8E3D8] dark:border-[#202020] pl-6">
                      <span className="block font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest mb-2">{field.label}</span>
                      <p className="font-body font-light text-[#202020] dark:text-[#F3F0E8] text-lg">{field.value}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {contact?.calendlyUrl && (
                <div className="pt-4">
                  <span className="block font-mono text-[10px] text-[#66717A] dark:text-[#AAB3B8] uppercase tracking-widest mb-6">Schedule Time</span>
                  <a 
                    href={contact.calendlyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-[#202020] text-[#FFFDF7] dark:bg-[#F3F0E8] dark:text-[#151719] px-8 py-4 font-mono text-[10px] uppercase tracking-widest hover:bg-[#C86B52] dark:hover:bg-[#D47A61] hover:text-[#FFFDF7] transition-all group"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
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
