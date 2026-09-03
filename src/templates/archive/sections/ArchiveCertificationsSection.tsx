import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';

interface ArchiveCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
}

export const ArchiveCertificationsSection: React.FC<ArchiveCertificationsSectionProps> = ({ data, enabled = true, index }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <ArchiveEntry index={index} title="Certifications" className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col gap-4 border border-[#C8C5BA] dark:border-[#464943] p-6 bg-[#FAF8F2] dark:bg-[#1D201E]">
              <div className="flex justify-between items-start gap-4 border-b border-[#C8C5BA] dark:border-[#464943] pb-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#686861] dark:text-[#AAA9A0] font-bold">
                  {cert.issueDate} {cert.expiryDate ? `— ${cert.expiryDate}` : ''}
                </div>
                {cert.credentialId && (
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#9D4937] dark:text-[#D4755D] font-bold text-right">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-1">
                <h3 className="font-heading font-bold text-xl uppercase tracking-tighter text-[#20211F] dark:text-[#F1EEE5]">
                  {cert.name}
                </h3>
                <div className="font-mono text-xs text-[#20211F] dark:text-[#F1EEE5]">
                  {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
