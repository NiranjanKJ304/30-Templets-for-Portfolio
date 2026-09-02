/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicCertificationsSection - Verified credentials and technical licenses
 */

import React from 'react';
import type { PortfolioData, Certification } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import { ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

interface NeoOrganicCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NeoOrganicCertificationsSection: React.FC<NeoOrganicCertificationsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const certs = data.certifications;

  if (!enabled || !certs || certs.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="Certifications & Credentials"
        subtitle="Formal accreditations, verified specializations, and professional licenses."
        count={certs.length}
        accentColor="blue"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {certs.map((cert: Certification, index: number) => {
          return (
            <div
              key={cert.id || index}
              className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-[#D9E7D0]/60 dark:bg-[#111713] flex items-center justify-center text-[#4169E1] dark:text-[#7F9CFF]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  {cert.issueDate && (
                    <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8A938C] dark:text-[#7F897F]">
                      <Calendar className="w-3 h-3 text-[#4169E1]" />
                      <span>{cert.issueDate}</span>
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-base text-[#17211B] dark:text-[#F2F3ED] mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-[#59635C] dark:text-[#B8C0B8] font-medium mb-3">
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-[#8A938C] dark:text-[#7F897F] mb-3">
                    ID: {cert.credentialId}
                  </div>
                )}

                {cert.description && (
                  <p className="text-xs text-[#59635C] dark:text-[#B8C0B8] font-light leading-relaxed mb-4">
                    {cert.description}
                  </p>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-3 border-t border-[#17211B]/6 dark:border-[#F2F3ED]/6">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4169E1] dark:text-[#7F9CFF] hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
