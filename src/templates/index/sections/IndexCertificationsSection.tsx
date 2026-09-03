import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';

interface IndexCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const IndexCertificationsSection: React.FC<IndexCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col">
        <IndexRow
          isHeader
          index="ID"
          title="CERTIFICATION REGISTRY"
          metadata="ISSUER"
          description="DETAILS"
        />
        
        <div className="flex flex-col">
          {certifications.map((cert, idx) => {
            const index = (idx + 1).toString().padStart(3, '0');
            
            return (
              <IndexRow
                key={cert.id}
                index={index}
                title={cert.name}
                metadata={cert.issuer}
                description={
                  <div className="flex flex-col gap-2 font-mono text-[10px] uppercase tracking-widest text-[#696C67] dark:text-[#A8ABA4]">
                    <div className="flex gap-4">
                      <span>ISSUED: {cert.issueDate}</span>
                      {cert.expiryDate && <span>EXPIRES: {cert.expiryDate}</span>}
                    </div>
                    {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
