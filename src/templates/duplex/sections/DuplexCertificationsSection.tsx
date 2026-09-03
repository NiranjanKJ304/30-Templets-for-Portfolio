import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';

interface DuplexCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const DuplexCertificationsSection: React.FC<DuplexCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="Certifications" />}
      containerClassName="px-6 sm:px-12"
      className="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {certifications.map((cert) => (
          <div key={cert.id} className="flex flex-col gap-4 p-8 border border-[#B7B0A5]/40 dark:border-[#414542]/40 hover:border-[#181818] dark:hover:border-[#F1EEE7] transition-colors">
            
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#587A72] dark:text-[#76A69C] font-bold">
                {cert.issueDate} {cert.expiryDate ? `— ${cert.expiryDate}` : ''}
              </span>
              <h3 className="font-heading font-bold text-xl lg:text-2xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7] leading-none mt-1">
                {cert.name}
              </h3>
              <div className="font-heading text-base uppercase tracking-tight text-[#5F625F] dark:text-[#A9AAA4]">
                {cert.issuer}
              </div>
            </div>
            
            {cert.credentialId && (
              <div className="mt-4 pt-4 border-t border-[#B7B0A5]/20 dark:border-[#414542]/20">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#B7B0A5] dark:text-[#5F625F] mb-1">Credential ID</div>
                <div className="font-mono text-xs uppercase text-[#181818] dark:text-[#F1EEE7] truncate">{cert.credentialId}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
