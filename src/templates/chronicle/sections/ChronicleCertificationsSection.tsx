import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';
import { ChronicleDate } from '../components/ChronicleDate';

interface ChronicleCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChronicleCertificationsSection: React.FC<ChronicleCertificationsSectionProps> = ({ data, enabled = true }) => {
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
      <ChronicleBand label="Credentials">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {certifications.map((cert) => {
            const issueYear = cert.issueDate?.split(' ').pop();
            
            return (
              <div key={cert.id} className="flex flex-col gap-6">
                {issueYear && (
                  <ChronicleDate date={issueYear} label={cert.issueDate} className="mb-2" />
                )}
                
                <div className="flex flex-col gap-2">
                  <h4 className="font-heading text-2xl font-normal text-[#202321] dark:text-[#F0EEE6]">
                    {cert.name}
                  </h4>
                  <span className="font-body text-base text-[#6F746F] dark:text-[#A6ABA5]">
                    {cert.issuer}
                  </span>
                </div>
                
                {cert.credentialId && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6]">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </ChronicleBand>
    </SectionWrapper>
  );
};
