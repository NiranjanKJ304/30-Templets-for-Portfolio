import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';

interface TesseraCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TesseraCertificationsSection: React.FC<TesseraCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <TesseraSection title="Credentials" accent="teal">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[#C8C4B9] dark:border-[#4A4D48] relative w-full">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block z-0" />
          
          {certifications.map((cert) => (
            <TesseraModule 
              key={cert.id}
              elevation="inset"
              notch="bottom"
              className="flex flex-col gap-4 p-8 border-b border-[#C8C4B9] dark:border-[#4A4D48] sm:odd:border-r lg:odd:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
            >
              <span className="font-mono text-[10px] md:text-xs text-[#315F5A] dark:text-[#6E9D94] uppercase tracking-widest font-bold">
                {cert.issueDate}
              </span>
              
              <div className="flex flex-col gap-1">
                <h4 className="font-heading font-medium text-xl text-[#242522] dark:text-[#F0EEE5] break-words">
                  {cert.name}
                </h4>
                <span className="font-body text-base text-[#73756E] dark:text-[#A5A7A0]">
                  {cert.issuer}
                </span>
                
                {cert.credentialId && (
                  <span className="font-mono text-[10px] text-[#C8C4B9] dark:text-[#4A4D48] uppercase tracking-widest mt-4 pt-4 border-t border-[#C8C4B9] dark:border-[#4A4D48]">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </TesseraModule>
          ))}
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
