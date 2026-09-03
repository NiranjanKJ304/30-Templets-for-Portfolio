import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismFacet } from '../components/PrismFacet';

interface PrismContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PrismContactSection: React.FC<PrismContactSectionProps> = ({ data, enabled = true }) => {
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
      <PrismSection title="Contact" align="right" colorFacet="coral">
        <PrismFacet cut="both-left" colorHint="neutral" className="bg-[#FCFBF7] dark:bg-[#1A1E1F] p-8 md:p-16 lg:p-24 border-t-8 border-[#D46750] dark:border-[#E17A63]">
          <div className="flex flex-col gap-16 w-full">
            {contact?.messagePrompt && (
              <h3 className="font-heading font-extrabold text-4xl md:text-6xl text-[#171A1B] dark:text-[#F1F0EA] uppercase tracking-tight leading-[1.1] max-w-4xl">
                {contact.messagePrompt}
              </h3>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 border-t-2 border-[rgba(23,26,27,0.1)] dark:border-[rgba(241,240,234,0.1)] pt-16">
              {contact?.email && (
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-[10px] text-[#6B706F] dark:text-[#A8ADA9] uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D46750] dark:bg-[#E17A63]" />
                    Email
                  </span>
                  <a href={`mailto:${contact.email}`} className="font-heading font-extrabold text-xl md:text-3xl text-[#171A1B] dark:text-[#F1F0EA] break-words hover:text-[#D46750] dark:hover:text-[#E17A63] transition-colors leading-[1.2]">
                    {contact.email}
                  </a>
                </div>
              )}
              {contact?.phone && (
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-[10px] text-[#6B706F] dark:text-[#A8ADA9] uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D46750] dark:bg-[#E17A63]" />
                    Phone
                  </span>
                  <a href={`tel:${contact.phone}`} className="font-heading font-extrabold text-xl md:text-3xl text-[#171A1B] dark:text-[#F1F0EA] hover:text-[#D46750] dark:hover:text-[#E17A63] transition-colors leading-[1.2]">
                    {contact.phone}
                  </a>
                </div>
              )}
              
              <div className="flex flex-col gap-12">
                {contact?.address && (
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[10px] text-[#6B706F] dark:text-[#A8ADA9] uppercase tracking-widest">Location</span>
                    <span className="font-body text-lg text-[#171A1B] dark:text-[#F1F0EA] leading-relaxed">{contact.address}</span>
                  </div>
                )}
                {contact?.officeHours && (
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[10px] text-[#6B706F] dark:text-[#A8ADA9] uppercase tracking-widest">Hours</span>
                    <span className="font-body text-lg text-[#171A1B] dark:text-[#F1F0EA] leading-relaxed">{contact.officeHours}</span>
                  </div>
                )}
              </div>
            </div>

            {contact?.calendlyUrl && (
              <div className="mt-8">
                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-[#171A1B] dark:bg-[#F1F0EA] text-[#F4F2EC] dark:text-[#111415] font-heading font-bold text-lg uppercase tracking-widest px-8 py-5 hover:bg-[#D46750] dark:hover:bg-[#E17A63] transition-colors"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)' }}
                >
                  Schedule Meeting
                  <span className="font-mono text-sm">↗</span>
                </a>
              </div>
            )}
          </div>
        </PrismFacet>
      </PrismSection>
    </SectionWrapper>
  );
};
