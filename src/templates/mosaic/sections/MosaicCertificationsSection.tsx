import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';

interface MosaicCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MosaicCertificationsSection: React.FC<MosaicCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="Certifications" />
        </div>
        
        {certifications.map((cert) => (
          <MosaicTile 
            key={cert.id} 
            span="half" 
            padding="md" 
            surface="primary"
            className="flex flex-col md:flex-row justify-between md:items-center gap-6 group hover:border-[#D66B4D] dark:hover:border-[#E27A5A] transition-colors"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7B65A] dark:text-[#D8C16D] font-bold">
                {cert.issueDate} {cert.expiryDate ? `— ${cert.expiryDate}` : ''}
              </span>
              <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7]">
                {cert.name}
              </h3>
              <div className="font-mono text-xs uppercase tracking-widest text-[#65645F] dark:text-[#B3B1AA]">
                {cert.issuer}
              </div>
            </div>
            
            {cert.credentialId && (
              <div className="font-mono text-[10px] uppercase bg-[#F5F2EC] dark:bg-[#121414] px-3 py-2 shrink-0 border border-[#CBC5BB] dark:border-[#444744] text-[#1B1B1A] dark:text-[#F1EEE7]">
                ID: {cert.credentialId}
              </div>
            )}
          </MosaicTile>
        ))}
      </div>
    </SectionWrapper>
  );
};
