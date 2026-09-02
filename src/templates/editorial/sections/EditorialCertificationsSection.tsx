/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialCertificationsSection - Verified credentials & licensing index
 */

import React from 'react';
import type { PortfolioData, Certification } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';
import { ArrowUpRight, Award } from 'lucide-react';

interface EditorialCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const EditorialCertificationsSection: React.FC<EditorialCertificationsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const certifications = data.certifications;

  if (!enabled || !certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="pt-12 sm:pt-16 pb-12 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15">
      <EditorialSectionHeader
        index="07"
        title="Credentials & Accreditations"
        subtitle="Verified professional certifications, technical licenses, and domain warrants."
        count={certifications.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {certifications.map((cert: Certification, idx: number) => {
          return (
            <div
              key={cert.id || idx}
              className="p-6 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74] mb-3">
                  <div className="flex items-center gap-1.5 text-[#B42318] dark:text-[#F06A5F]">
                    <Award className="w-3.5 h-3.5" />
                    <span>CREDENTIAL</span>
                  </div>
                  {cert.issueDate && <span>ISSUED: {cert.issueDate}</span>}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#171717] dark:text-[#F5F2EA] font-normal tracking-tight mb-1">
                  {cert.name}
                </h3>

                <div className="font-sans font-semibold text-sm text-[#68655F] dark:text-[#B8B3AA] mb-4">
                  {cert.issuer}
                </div>

                {cert.description && (
                  <p className="font-sans text-xs sm:text-sm text-[#68655F] dark:text-[#B8B3AA] leading-relaxed mb-4">
                    {cert.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#171717]/10 dark:border-[#F5F2EA]/10 flex items-center justify-between font-mono text-xs">
                {cert.credentialId ? (
                  <span className="text-[#918D85] dark:text-[#817C74] text-[11px]">
                    ID: {cert.credentialId}
                  </span>
                ) : (
                  <span />
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#171717] dark:text-[#F5F2EA] hover:text-[#B42318] dark:hover:text-[#F06A5F] font-bold transition-colors"
                  >
                    <span>VERIFY RECORD</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
