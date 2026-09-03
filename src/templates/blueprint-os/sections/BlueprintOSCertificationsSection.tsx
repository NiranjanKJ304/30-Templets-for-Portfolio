import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';

interface BlueprintOSCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintOSCertificationsSection: React.FC<BlueprintOSCertificationsSectionProps> = ({ data, enabled = true }) => {
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
      <WorkspaceWindow title="CREDENTIALS_DB" id="certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col gap-2 p-4 border border-[#CBD2CD] dark:border-[#3A4340]">
              <span className="font-mono text-[10px] text-[#C87945] dark:text-[#D98B61] uppercase">{cert.issuer}</span>
              <h4 className="font-heading font-bold text-sm text-[#1D2523] dark:text-[#EEF2EC]">
                {cert.name}
              </h4>
              <div className="flex justify-between items-center mt-2 font-mono text-[10px] text-[#68716D] dark:text-[#A6ADA8]">
                <span>{cert.issueDate}</span>
                {cert.credentialId && <span>ID: {cert.credentialId}</span>}
              </div>
            </div>
          ))}
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
