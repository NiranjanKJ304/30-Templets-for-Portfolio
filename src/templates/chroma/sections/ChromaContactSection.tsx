import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';
import { ChromaBoundary } from '../components/ChromaBoundary';

interface ChromaContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChromaContactSection: React.FC<ChromaContactSectionProps> = ({ data, enabled = true }) => {
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
      <ChromaField color="deep" className="pt-24 md:pt-32 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24">
          
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="font-mono text-sm uppercase tracking-widest opacity-60">Correspondence</h2>
          </div>

          <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-16">
            
            {contact?.messagePrompt && (
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight max-w-4xl">
                {contact.messagePrompt}
              </h3>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {(contact?.email || contact?.phone) && (
                <div className="flex flex-col gap-8">
                  {contact.email && (
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">Email</span>
                      <a href={`mailto:${contact.email}`} className="font-body text-xl font-medium hover:opacity-70 transition-opacity break-words">
                        {contact.email}
                      </a>
                    </div>
                  )}
                  {contact.phone && (
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">Phone</span>
                      <a href={`tel:${contact.phone}`} className="font-body text-xl font-medium hover:opacity-70 transition-opacity">
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
                      <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">Location</span>
                      <span className="font-body text-lg opacity-90 leading-relaxed whitespace-pre-wrap">{contact.address}</span>
                    </div>
                  )}
                  {contact.officeHours && (
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">Hours</span>
                      <span className="font-body text-lg opacity-90 leading-relaxed">{contact.officeHours}</span>
                    </div>
                  )}
                  {contact.calendlyUrl && (
                    <div className="mt-4">
                      <a
                        href={contact.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 font-mono text-xs uppercase tracking-widest px-8 py-4 border border-current rounded-full hover:bg-white hover:text-black dark:hover:bg-white transition-colors duration-500"
                      >
                        Schedule Meeting 
                        <span className="text-[10px]">↗</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
          
        </div>
        
        <ChromaBoundary variant="subtle" />
        
      </ChromaField>
    </SectionWrapper>
  );
};
