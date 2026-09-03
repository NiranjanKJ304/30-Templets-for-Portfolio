import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';

interface KinshipCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KinshipCertificationsSection: React.FC<KinshipCertificationsSectionProps> = ({ data, enabled = true }) => {
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
      <KinshipSection title="Credentials" color="blue">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {certifications.map((cert) => (
            <div key={cert.id} className="group relative flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <KinshipAnchor color="blue" size="sm" />
                <KinshipConnector className="flex-1 opacity-30 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-[10px] md:text-xs text-[#6C8797] dark:text-[#8FAAB8] uppercase tracking-widest">
                  {cert.issueDate}
                </span>
              </div>
              
              <div className="flex flex-col gap-1 pl-6 relative">
                <KinshipConnector orientation="vertical" className="absolute top-0 left-[3px] h-full opacity-30" />
                
                <h4 className="font-heading font-medium text-xl text-[#202624] dark:text-[#EEF0EA] break-words">
                  {cert.name}
                </h4>
                <span className="font-body text-base text-[#737A75] dark:text-[#A7ADA7]">
                  {cert.issuer}
                </span>
                
                {cert.credentialId && (
                  <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest mt-2">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
