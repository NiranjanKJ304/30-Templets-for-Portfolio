import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';

interface PosterContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
}

export const PosterContactSection: React.FC<PosterContactSectionProps> = ({ data, enabled = true, index }) => {
  const { contact } = data;
  const hasData = Boolean(contact && (contact.email || contact.phone || contact.calendlyUrl || contact.address));

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="vermilion" />
          <PosterLabel className="text-[#D94B36] dark:text-[#F07761] text-right mt-4 md:mt-12">DISPATCH</PosterLabel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mt-8">
          <div className="md:col-span-8 flex flex-col gap-12">
            <h3 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-[0.85] uppercase tracking-tighter text-[#17191B] dark:text-[#F5F0E5] hyphens-auto">
              {contact?.messagePrompt || "SAY HELLO"}
            </h3>
            
            {contact?.calendlyUrl && (
              <a
                href={contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center self-start font-heading font-bold text-2xl uppercase text-[#FFFDF7] dark:text-[#17191B] bg-[#17191B] dark:bg-[#F5F0E5] px-8 py-4 hover:bg-[#D94B36] dark:hover:bg-[#F07761] hover:text-[#FFFDF7] transition-colors"
              >
                SCHEDULE A MEETING
              </a>
            )}
          </div>

          <div className="md:col-span-4 flex flex-col gap-12 font-mono text-sm uppercase">
            {contact?.email && (
              <div className="flex flex-col gap-2">
                <PosterLabel className="text-[#65635D] dark:text-[#B4B0A7]">E-MAIL</PosterLabel>
                <a href={`mailto:${contact.email}`} className="text-lg text-[#17191B] dark:text-[#F5F0E5] hover:text-[#D94B36] dark:hover:text-[#F07761] transition-colors break-all font-bold">
                  {contact.email}
                </a>
              </div>
            )}
            
            {contact?.phone && (
              <div className="flex flex-col gap-2">
                <PosterLabel className="text-[#65635D] dark:text-[#B4B0A7]">TELEPHONE</PosterLabel>
                <a href={`tel:${contact.phone}`} className="text-lg text-[#17191B] dark:text-[#F5F0E5] hover:text-[#D94B36] dark:hover:text-[#F07761] transition-colors font-bold">
                  {contact.phone}
                </a>
              </div>
            )}
            
            {contact?.address && (
              <div className="flex flex-col gap-2">
                <PosterLabel className="text-[#65635D] dark:text-[#B4B0A7]">LOCATION</PosterLabel>
                <span className="text-[#17191B] dark:text-[#F5F0E5] leading-relaxed">{contact.address}</span>
              </div>
            )}
            
            {contact?.officeHours && (
              <div className="flex flex-col gap-2">
                <PosterLabel className="text-[#65635D] dark:text-[#B4B0A7]">HOURS</PosterLabel>
                <span className="text-[#17191B] dark:text-[#F5F0E5]">{contact.officeHours}</span>
              </div>
            )}
          </div>
        </div>
      </PosterBlock>
    </SectionWrapper>
  );
};
