/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistCertificationsSection - Verified credentials index
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';
import { ExternalLink } from 'lucide-react';

interface BrutalistCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BrutalistCertificationsSection: React.FC<BrutalistCertificationsSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.certifications || data.certifications.length === 0) return null;

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="07"
          title="Accreditations"
          subtitle="CERTIFIED CREDENTIALS & LICENSES"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.certifications.map((cert, idx) => (
            <div
              key={cert.id || idx}
              className="p-6 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[4px_4px_0px_0px_#111111] dark:shadow-[4px_4px_0px_0px_#F4F1E8] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#111111]/20 dark:border-[#F4F1E8]/20">
                  <span className="font-mono text-[10px] font-bold text-[#2563EB]">
                    CERT_{String(idx + 1).padStart(2, '0')}
                  </span>
                  {cert.issueDate && (
                    <span className="font-mono text-[10px] text-[#666666] dark:text-[#999999]">
                      ISSUED: {cert.issueDate}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-black text-lg uppercase tracking-tight text-[#111111] dark:text-[#F4F1E8] mb-1">
                  {cert.name}
                </h3>
                <div className="font-mono text-xs font-bold text-[#EF4444] uppercase mb-4">
                  {cert.issuer}
                </div>
              </div>

              {cert.credentialUrl && (
                <div className="pt-3 border-t border-[#111111]/20 dark:border-[#F4F1E8]/20">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#2563EB] hover:underline"
                  >
                    <span>[ VERIFY CREDENTIAL ]</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
