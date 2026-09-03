import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';
import { KineticMarquee } from '../components/KineticMarquee';
import { ArrowRight } from 'lucide-react';

interface KineticContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KineticContactSection: React.FC<KineticContactSectionProps> = ({ data, enabled = true }) => {
  const { contact } = data;
  const hasData = Boolean(contact && (contact.email || contact.phone || contact.calendlyUrl || contact.address));

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-0"
      className="pt-16 md:pt-32 pb-0"
    >
      <div className="px-6 sm:px-12 max-w-[1600px] mx-auto pb-16 md:pb-32">
        <KineticSectionHeader title="Contact" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="flex flex-col gap-12">
            <h3 className="font-heading font-black text-5xl sm:text-6xl uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8] leading-[0.9]">
              {contact?.messagePrompt || "Initiate Protocol."}
            </h3>
            
            <div className="flex flex-col gap-6 font-heading font-bold text-2xl sm:text-3xl lg:text-4xl">
              {contact?.email && (
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-[#E84F3D] dark:text-[#FF715D] hover:text-[#171717] dark:hover:text-[#F3F0E8] transition-colors flex items-center gap-4 group"
                >
                  <ArrowRight className="w-8 h-8 motion-safe:group-hover:translate-x-2 transition-transform" />
                  {contact.email}
                </a>
              )}
              
              {contact?.phone && (
                <a 
                  href={`tel:${contact.phone}`}
                  className="text-[#E84F3D] dark:text-[#FF715D] hover:text-[#171717] dark:hover:text-[#F3F0E8] transition-colors flex items-center gap-4 group"
                >
                  <ArrowRight className="w-8 h-8 motion-safe:group-hover:translate-x-2 transition-transform" />
                  {contact.phone}
                </a>
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-12 p-8 md:p-12 border-4 border-[#171717] dark:border-[#F3F0E8] bg-[#E8E3D8] dark:bg-[#1C2020]">
            {(contact?.location || contact?.address || contact?.officeHours) && (
              <div className="flex flex-col gap-4">
                <div className="font-mono text-sm font-bold uppercase tracking-widest text-[#285B63] dark:text-[#6FA9B0]">Coordinates</div>
                <div className="flex flex-col gap-2 font-body text-xl font-bold text-[#171717] dark:text-[#F3F0E8]">
                  {contact?.location && <span>{contact.location}</span>}
                  {contact?.address && <span>{contact.address}</span>}
                  {contact?.officeHours && <span>{contact.officeHours}</span>}
                </div>
              </div>
            )}
            
            {contact?.calendlyUrl && (
              <a 
                href={contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-8 py-6 bg-[#171717] dark:bg-[#F3F0E8] text-[#F3F0E8] dark:text-[#171717] font-heading font-black text-2xl uppercase tracking-tighter hover:bg-[#E84F3D] dark:hover:bg-[#FF715D] hover:text-white transition-colors group"
              >
                Schedule Connect
                <ArrowRight className="motion-safe:group-hover:translate-x-2 transition-transform" />
              </a>
            )}
            
            {contact?.customFields && contact.customFields.length > 0 && (
              <div className="flex flex-col gap-6 mt-4">
                {contact.customFields.map((field, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#555555] dark:text-[#B4B4AE] font-bold">{field.label}</span>
                    <span className="font-body text-lg font-bold text-[#171717] dark:text-[#F3F0E8]">{field.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </div>
      
      {/* Footer Marquee */}
      <div className="w-full py-6 bg-[#E84F3D] dark:bg-[#FF715D] overflow-hidden">
        <KineticMarquee text="AVAILABLE FOR COLLABORATION • OPEN FOR INQUIRIES • " speed={15} className="text-white" textClassName="text-2xl" />
      </div>
    </SectionWrapper>
  );
};
