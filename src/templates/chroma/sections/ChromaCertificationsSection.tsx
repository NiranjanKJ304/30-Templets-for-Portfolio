import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';

interface ChromaCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChromaCertificationsSection: React.FC<ChromaCertificationsSectionProps> = ({ data, enabled = true }) => {
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
      <ChromaField color="blue">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="font-mono text-sm uppercase tracking-widest opacity-60">Credentials</h2>
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex flex-col gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">
                    {cert.issueDate}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-heading text-2xl font-medium tracking-tight">
                      {cert.name}
                    </h4>
                    <span className="font-body text-lg opacity-70">
                      {cert.issuer}
                    </span>
                  </div>
                  {cert.credentialId && (
                    <span className="font-mono text-xs opacity-60 mt-2">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </ChromaField>
    </SectionWrapper>
  );
};
