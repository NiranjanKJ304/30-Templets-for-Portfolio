import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';

interface KineticCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KineticCertificationsSection: React.FC<KineticCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-6 sm:px-12 max-w-[1600px] mx-auto"
      className="py-16 md:py-32 bg-[#171717] text-[#F3F0E8] dark:bg-[#F3F0E8] dark:text-[#171717]"
    >
      <div className="mb-12 md:mb-20 flex flex-col items-end text-right">
        <h2 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter leading-none">
          Certifications
        </h2>
        <div className="w-full h-2 bg-current mt-6 sm:mt-10"></div>
      </div>

      <div className="flex flex-col">
        {certifications.map((cert) => (
          <div key={cert.id} className="group py-8 border-b border-[#333] dark:border-[#CCC] hover:border-[#E84F3D] dark:hover:border-[#FF715D] transition-colors">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#D8C85A] dark:text-[#D8CB67] font-bold">
                  {cert.issueDate} {cert.expiryDate ? `— ${cert.expiryDate}` : ''}
                </span>
                <h3 className="font-heading font-bold text-3xl sm:text-4xl uppercase tracking-tighter">
                  {cert.name}
                </h3>
                <div className="font-mono text-sm uppercase tracking-widest text-[#B4B4AE] dark:text-[#555555]">
                  {cert.issuer}
                </div>
              </div>
              
              {cert.credentialId && (
                <div className="font-mono text-xs uppercase bg-[#333] dark:bg-[#CCC] px-4 py-2 self-start md:self-center shrink-0">
                  ID: {cert.credentialId}
                </div>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
