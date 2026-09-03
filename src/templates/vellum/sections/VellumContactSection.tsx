import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';

interface VellumContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const VellumContactSection: React.FC<VellumContactSectionProps> = ({ data, enabled = true }) => {
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
      <VellumSection title="Correspondence" number="11">
        <div className="flex flex-col gap-12 pt-4">
          
          {contact?.messagePrompt && (
            <VellumAnnotation marker="note" color="inkBlue" position="left">
              <h3 className="font-heading font-medium text-3xl md:text-4xl text-[#242522] dark:text-[#F0EDE3] leading-tight">
                {contact.messagePrompt}
              </h3>
            </VellumAnnotation>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {(contact?.email || contact?.phone) && (
              <div className="flex flex-col gap-8">
                {contact.email && (
                  <VellumAnnotation marker="email" color="primary" position="left">
                    <a href={`mailto:${contact.email}`} className="font-body text-xl text-[#242522] dark:text-[#F0EDE3] break-words font-medium hover:text-[#A94F3E] dark:hover:text-[#D27661] transition-colors underline decoration-1 underline-offset-4">
                      {contact.email}
                    </a>
                  </VellumAnnotation>
                )}
                {contact.phone && (
                  <VellumAnnotation marker="phone" color="primary" position="left">
                    <a href={`tel:${contact.phone}`} className="font-mono text-lg text-[#242522] dark:text-[#F0EDE3] hover:text-[#A94F3E] dark:hover:text-[#D27661] transition-colors">
                      {contact.phone}
                    </a>
                  </VellumAnnotation>
                )}
              </div>
            )}
            
            {(contact?.address || contact?.officeHours || contact?.calendlyUrl) && (
              <div className="flex flex-col gap-8">
                {contact.address && (
                  <VellumAnnotation marker="address" color="primary" position="left">
                    <span className="font-body text-lg text-[#242522] dark:text-[#F0EDE3] leading-relaxed block whitespace-pre-wrap">{contact.address}</span>
                  </VellumAnnotation>
                )}
                {contact.officeHours && (
                  <VellumAnnotation marker="hours" color="primary" position="left">
                    <span className="font-body text-lg text-[#242522] dark:text-[#F0EDE3] leading-relaxed block">{contact.officeHours}</span>
                  </VellumAnnotation>
                )}
                {contact.calendlyUrl && (
                  <div className="mt-4">
                    <a
                      href={contact.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-sm text-[#242522] dark:text-[#F0EDE3] uppercase tracking-widest hover:text-[#A94F3E] dark:hover:text-[#D27661] transition-colors group"
                    >
                      <span className="underline decoration-1 underline-offset-4">Schedule Meeting</span>
                      <span className="text-[#A94F3E] dark:text-[#D27661]">↗</span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
