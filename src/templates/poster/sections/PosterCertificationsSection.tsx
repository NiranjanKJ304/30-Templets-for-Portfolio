import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';

interface PosterCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
}

export const PosterCertificationsSection: React.FC<PosterCertificationsSectionProps> = ({ data, enabled = true, index }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="mint" />
          <PosterLabel className="text-[#9DB9A6] dark:text-[#9FC2AD] text-right mt-4 md:mt-12">CREDENTIALS</PosterLabel>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col gap-4 border border-[#C9C3B7] dark:border-[#4A4A47] p-8">
              <PosterLabel className="text-[#3157D5] dark:text-[#6E8CFF]">{cert.issuer}</PosterLabel>
              <h4 className="font-heading font-bold text-xl md:text-2xl text-[#17191B] dark:text-[#F5F0E5] uppercase leading-tight">
                {cert.name}
              </h4>
              <div className="flex flex-col gap-1 font-mono text-xs text-[#65635D] dark:text-[#B4B0A7] mt-4">
                <span>ISSUED: {cert.issueDate}</span>
                {cert.credentialId && <span>ID: {cert.credentialId}</span>}
              </div>
            </div>
          ))}
        </div>
      </PosterBlock>
    </SectionWrapper>
  );
};
