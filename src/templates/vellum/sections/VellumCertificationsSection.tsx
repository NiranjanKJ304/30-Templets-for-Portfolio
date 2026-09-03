import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';

interface VellumCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const VellumCertificationsSection: React.FC<VellumCertificationsSectionProps> = ({ data, enabled = true }) => {
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
      <VellumSection title="Credentials" number="06">
        <div className="flex flex-col gap-8 pt-4">
          {certifications.map((cert) => (
            <VellumAnnotation 
              key={cert.id}
              marker={cert.issueDate} 
              color="inkBlue" 
              position="left"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8 pb-4 border-b border-[#C8C2B5] dark:border-[#4A4B46] border-dashed">
                <div className="flex flex-col">
                  <h4 className="font-heading font-medium text-xl text-[#242522] dark:text-[#F0EDE3]">
                    {cert.name}
                  </h4>
                  <span className="font-heading italic text-lg text-[#6D6D66] dark:text-[#AAA99F]">
                    {cert.issuer}
                  </span>
                </div>
                {cert.credentialId && (
                  <span className="font-mono text-[10px] text-[#425C72] dark:text-[#7E9CAF] uppercase tracking-widest text-left md:text-right">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </VellumAnnotation>
          ))}
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
