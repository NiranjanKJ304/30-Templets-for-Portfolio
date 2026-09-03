import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismDivider } from '../components/PrismDivider';

interface PrismCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PrismCertificationsSection: React.FC<PrismCertificationsSectionProps> = ({ data, enabled = true }) => {
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
      <PrismSection title="Credentials" align="right" colorFacet="rose">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl ml-auto">
          {certifications.map((cert) => (
            <div key={cert.id} className="group relative bg-[#FCFBF7] dark:bg-[#1A1E1F] p-8 border-l-4 border-transparent hover:border-[#B58D9B] dark:hover:border-[#C29FAA] transition-colors shadow-sm">
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#F4F2EC] dark:bg-[#111415]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} aria-hidden="true" />
              
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] md:text-xs text-[#B58D9B] dark:text-[#C29FAA] uppercase tracking-widest font-bold">
                  {cert.issueDate}
                </span>
                <div className="flex flex-col gap-1">
                  <h4 className="font-heading font-extrabold text-xl md:text-2xl text-[#171A1B] dark:text-[#F1F0EA] uppercase break-words leading-tight">
                    {cert.name}
                  </h4>
                  <span className="font-body text-base text-[#6B706F] dark:text-[#A8ADA9]">
                    {cert.issuer}
                  </span>
                </div>
                {cert.credentialId && (
                  <span className="font-mono text-[10px] text-[#6B706F] dark:text-[#A8ADA9] uppercase tracking-widest mt-2 border-t border-[rgba(23,26,27,0.1)] dark:border-[rgba(241,240,234,0.1)] pt-4">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 md:mt-40">
          <PrismDivider direction="right-to-left" />
        </div>
      </PrismSection>
    </SectionWrapper>
  );
};
