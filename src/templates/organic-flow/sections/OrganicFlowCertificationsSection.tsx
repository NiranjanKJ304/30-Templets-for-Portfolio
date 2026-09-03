import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';
import { FlowSurface } from '../components/FlowSurface';

interface OrganicFlowCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrganicFlowCertificationsSection: React.FC<OrganicFlowCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative z-0 pb-24 md:pb-48"
      containerClassName="px-0 py-0"
    >
      <FlowSection title="CERTIFICATIONS" align="right">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-24">
          {certifications.map((cert, idx) => (
            <FlowSurface 
              key={cert.id} 
              variant="secondary" 
              className="p-8 shadow-sm flex flex-col gap-4"
              curveTop={idx % 2 === 0 ? 'both' : 'none'}
              curveBottom={idx % 2 !== 0 ? 'both' : 'none'}
            >
              <div className="font-mono text-[10px] text-[#C87558] dark:text-[#D77F63] uppercase">
                {cert.issuer}
              </div>
              <h4 className="font-heading font-bold text-xl text-[#202321] dark:text-[#F1EFE7]">
                {cert.name}
              </h4>
              <div className="flex flex-col gap-1 mt-4 font-mono text-xs text-[#6B706A] dark:text-[#A8ACA5]">
                <span>ISSUED: {cert.issueDate}</span>
                {cert.credentialId && <span>ID: {cert.credentialId}</span>}
              </div>
            </FlowSurface>
          ))}
        </div>
      </FlowSection>
    </SectionWrapper>
  );
};
