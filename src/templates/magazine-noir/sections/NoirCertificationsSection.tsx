/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirCertificationsSection - Verified credentials for Magazine Noir
 */

import React from 'react';
import type { PortfolioData, Certification } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';
import { ArrowUpRight, Award } from 'lucide-react';

interface NoirCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NoirCertificationsSection: React.FC<NoirCertificationsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const certifications = data.certifications;

  if (!enabled || !certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-16 sm:py-24 lg:py-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      <NoirSectionHeader
        index="07"
        title="Accreditations & Warrants"
        subtitle="Verified professional certifications, industry warrants, and technical licenses."
        count={certifications.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {certifications.map((cert: Certification, idx: number) => {
          return (
            <div
              key={cert.id || idx}
              className="p-8 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10 mb-4 font-mono text-[10px] uppercase tracking-widest text-[#99938A] dark:text-[#777168]">
                  <div className="flex items-center gap-1.5 text-[#8B5E3C] dark:text-[#C49A6C] font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>ACCREDITATION</span>
                  </div>
                  {cert.issueDate && <span>CONFERRED: {cert.issueDate}</span>}
                </div>

                <h3 className="font-serif text-2xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight mb-2">
                  {cert.name}
                </h3>

                <div className="font-sans font-semibold text-sm text-[#68645D] dark:text-[#B8B2A8] mb-4">
                  {cert.issuer}
                </div>

                {cert.description && (
                  <p className="font-sans text-xs sm:text-sm text-[#68645D] dark:text-[#B8B2A8] font-light leading-relaxed mb-6">
                    {cert.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#171717]/10 dark:border-[#F4F1EA]/10 flex items-center justify-between font-mono text-xs">
                {cert.credentialId ? (
                  <span className="text-[#99938A] dark:text-[#777168] text-[10px]">
                    REF: {cert.credentialId}
                  </span>
                ) : (
                  <span />
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#171717] dark:text-[#F4F1EA] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] font-bold transition-colors"
                  >
                    <span>VERIFY WARRANT</span>
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
