import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';
import { TerminalRow } from '../components/TerminalRow';

interface TerminalCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TerminalCertificationsSection: React.FC<TerminalCertificationsSectionProps> = ({ data, enabled = true }) => {
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
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="grep 'cert' ~/.credentials" isSectionHeader />
        
        <div className="flex flex-col gap-6 pl-0 md:pl-4">
          {certifications.map((cert, idx) => {
            const index = (idx + 1).toString().padStart(2, '0');
            
            return (
              <TerminalRow
                key={cert.id}
                index={`[${index}]`}
                title={cert.name}
                metadata={
                  <div className="flex gap-2">
                    <span className="text-[#347A84] dark:text-[#69B7C4]">{cert.issuer}</span>
                    <span className="text-[#397A4A] dark:text-[#79C98B]">{cert.issueDate}</span>
                  </div>
                }
              >
                {cert.credentialId && (
                  <div className="font-mono text-[10px] text-[#967126] dark:text-[#D4AD68]">
                    id: {cert.credentialId}
                  </div>
                )}
              </TerminalRow>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
