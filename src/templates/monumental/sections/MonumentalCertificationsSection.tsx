import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalDivider } from '../components/MonumentalDivider';

interface MonumentalCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonumentalCertificationsSection: React.FC<MonumentalCertificationsSectionProps> = ({ data, enabled = true }) => {
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
      <MonumentalSection title="CERTIFIED" index="06" align="right">
        <div className="flex flex-col border-t-8 border-[#171918] dark:border-[#F0EEE6]">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 py-16 border-b-4 border-[#D8D4C9] dark:border-[#303430]">
              <div className="flex flex-col gap-2 max-w-3xl">
                <span className="font-mono text-sm text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                  {cert.issuer}
                </span>
                <h4 className="font-heading font-black text-3xl md:text-5xl text-[#171918] dark:text-[#F0EEE6] uppercase break-words">
                  {cert.name}
                </h4>
              </div>
              <div className="flex flex-col gap-2 shrink-0 lg:text-right">
                <span className="font-mono text-sm text-[#171918] dark:text-[#F0EEE6] uppercase tracking-widest">
                  {cert.issueDate}
                </span>
                {cert.credentialId && (
                  <span className="font-mono text-[10px] text-[#686B66] dark:text-[#A5A7A1] uppercase tracking-widest">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-32">
          <MonumentalDivider thickness="thick" />
        </div>
      </MonumentalSection>
    </SectionWrapper>
  );
};
