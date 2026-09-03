import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';

interface MonoformCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonoformCertificationsSection: React.FC<MonoformCertificationsSectionProps> = ({ data, enabled = true }) => {
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
      <MonoformSurface depth="surface" borderBottom>
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                06. Credentials
              </h2>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-col">
                <MonoformRule variant="subtle" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="flex flex-col py-8 border-b border-[#C8C7BF]/40 dark:border-[#444844]/40">
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#1D1F1E] dark:text-[#F0EEE7]">
                          {cert.issueDate}
                        </span>
                        <h4 className="font-heading text-xl font-light text-[#1D1F1E] dark:text-[#F0EEE7]">
                          {cert.name}
                        </h4>
                        <span className="font-heading text-base font-light text-[#6C706B] dark:text-[#A7AAA4]">
                          {cert.issuer}
                        </span>
                        {cert.credentialId && (
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4] mt-2">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </MonoformSurface>
    </SectionWrapper>
  );
};
