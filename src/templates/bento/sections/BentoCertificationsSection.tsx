/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoCertificationsSection - Verified industry and technical credentials
 */

import React from 'react';
import type { PortfolioData, Certification } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoSectionHeader } from '../components/BentoSectionHeader';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface BentoCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BentoCertificationsSection: React.FC<BentoCertificationsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const certs = data.certifications;

  if (!enabled || !certs || certs.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoSectionHeader
        label="// CREDENTIALS"
        title="Certifications & Licensing"
        subtitle="Standardized accreditations and technical verification."
        icon={<Award className="w-4 h-4 text-[#3B82F6]" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 mt-4">
        {certs.map((cert: Certification, idx: number) => {
          const span = certs.length === 1 ? 'col-12' : certs.length === 2 ? 'col-6' : 'col-4';

          return (
            <BentoTile
              key={cert.id || idx}
              span={span}
              variant="default"
              padding="md"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#3B82F6] uppercase">
                    {cert.issuer}
                  </span>
                  {cert.issueDate && (
                    <span className="font-mono text-xs text-[#5F6672] dark:text-[#9DA5B4] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.issueDate}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-bold text-lg text-[#171A1F] dark:text-[#F4F5F7] tracking-tight mb-2">
                  {cert.name}
                </h3>

                {cert.credentialId && (
                  <div className="font-mono text-[11px] text-[#5F6672] dark:text-[#9DA5B4] mb-3">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-3 border-t border-[#E2E6ED] dark:border-[#2A2E39] mt-2">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B82F6] hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </BentoTile>
          );
        })}
      </div>
    </section>
  );
};
