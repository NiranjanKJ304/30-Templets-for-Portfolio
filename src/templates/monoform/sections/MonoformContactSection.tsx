import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';

interface MonoformContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonoformContactSection: React.FC<MonoformContactSectionProps> = ({ data, enabled = true }) => {
  const { contact } = data;
  const hasData = Boolean(contact && (contact.email || contact.phone || contact.calendlyUrl || contact.address));

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <MonoformSurface depth="inset">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                11. Correspondence
              </h2>
            </div>

            <div className="lg:col-span-9 flex flex-col gap-16">
              
              <MonoformRule variant="subtle" />
              
              {contact?.messagePrompt && (
                <h3 className="font-heading text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-[#1D1F1E] dark:text-[#F0EEE7]">
                  {contact.messagePrompt}
                </h3>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {(contact?.email || contact?.phone) && (
                  <div className="flex flex-col gap-8">
                    {contact.email && (
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">Electronic Mail</span>
                        <a href={`mailto:${contact.email}`} className="font-body text-lg md:text-xl font-light text-[#1D1F1E] dark:text-[#F0EEE7] hover:text-[#A65A45] dark:hover:text-[#D0775E] transition-colors break-words">
                          {contact.email}
                        </a>
                      </div>
                    )}
                    {contact.phone && (
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">Telephone</span>
                        <a href={`tel:${contact.phone}`} className="font-body text-lg md:text-xl font-light text-[#1D1F1E] dark:text-[#F0EEE7] hover:text-[#A65A45] dark:hover:text-[#D0775E] transition-colors">
                          {contact.phone}
                        </a>
                      </div>
                    )}
                  </div>
                )}
                
                {(contact?.address || contact?.officeHours || contact?.calendlyUrl) && (
                  <div className="flex flex-col gap-8">
                    {contact.address && (
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">Location</span>
                        <span className="font-body text-lg font-light text-[#1D1F1E] dark:text-[#F0EEE7] leading-relaxed whitespace-pre-wrap">{contact.address}</span>
                      </div>
                    )}
                    {contact.officeHours && (
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">Availability</span>
                        <span className="font-body text-lg font-light text-[#1D1F1E] dark:text-[#F0EEE7] leading-relaxed">{contact.officeHours}</span>
                      </div>
                    )}
                    {contact.calendlyUrl && (
                      <div className="mt-4">
                        <a
                          href={contact.calendlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#1D1F1E] dark:text-[#F0EEE7] hover:text-[#A65A45] dark:hover:text-[#D0775E] transition-colors group pb-1 border-b border-current"
                        >
                          Schedule Meeting 
                          <span className="opacity-40 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </MonoformSurface>
    </SectionWrapper>
  );
};
