import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';

interface ContourCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ContourCertificationsSection: React.FC<ContourCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <ContourField label="Credential Elevation" contourVariant="sparse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col gap-6 relative group">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-[#C7C9B9]/30 dark:bg-[#46504A]/30 group-hover:bg-[#879A82] dark:group-hover:bg-[#78947D] transition-colors" />
              
              {cert.issueDate && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C7C9B9] dark:text-[#46504A]">
                  {cert.issueDate}
                </span>
              )}
              
              <div className="flex flex-col gap-2">
                <h4 className="font-heading text-2xl font-normal text-[#202523] dark:text-[#EEF0E8]">
                  {cert.name}
                </h4>
                <span className="font-body text-base text-[#6E746E] dark:text-[#A8AEA6]">
                  {cert.issuer}
                </span>
              </div>
              
              {cert.credentialId && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#202523] dark:text-[#EEF0E8]">
                  ID: {cert.credentialId}
                </span>
              )}
            </div>
          ))}
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
