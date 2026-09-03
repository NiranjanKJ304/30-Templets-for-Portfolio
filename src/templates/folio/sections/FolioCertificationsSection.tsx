import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FolioSheet } from '../components/FolioSheet';
import { FolioMeta } from '../components/FolioMeta';

interface FolioCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  pageNum: string;
}

export const FolioCertificationsSection: React.FC<FolioCertificationsSectionProps> = ({ data, enabled = true, pageNum }) => {
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
      <FolioSheet pageNum={pageNum} title="CREDENTIALS" offset="none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col gap-6 p-6 border border-[#C9C5BA]/50 dark:border-[#444A45]/50 bg-[#F3F0E7]/50 dark:bg-[#242926]/50">
              <div className="flex flex-col gap-2">
                <h4 className="font-heading text-2xl font-normal text-[#1D2020] dark:text-[#F0EEE6]">
                  {cert.name}
                </h4>
                <span className="font-body text-base text-[#70736F] dark:text-[#A5AAA3]">
                  {cert.issuer}
                </span>
              </div>
              
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#C9C5BA]/30 dark:border-[#444A45]/30">
                {cert.issueDate && <FolioMeta label="Issued" value={cert.issueDate} />}
                {cert.credentialId && <FolioMeta label="ID" value={cert.credentialId} />}
              </div>
            </div>
          ))}
        </div>
      </FolioSheet>
    </SectionWrapper>
  );
};
