/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroCertificationsSection - Graphic credentials register
 */

import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import type { PortfolioData, Certification } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroCertificationsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const RetroCertificationsSection: React.FC<RetroCertificationsSectionProps> = ({
  data,
  enabled,
  indexNumber = '07',
}) => {
  const { certifications } = data;
  const hasData = hasSectionData('certifications', data);

  if (!enabled || !hasData || !certifications || certifications.length === 0) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="ACCREDITATION"
        title="Certifications"
        subtitle="Verified professional certifications, accreditations, and technical licenses."
        accentColor="terracotta"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert: Certification, idx: number) => {
          const numStr = String(idx + 1).padStart(2, '0');

          return (
            <div
              key={cert.id || idx}
              className="bg-[#FFF9EA] dark:bg-[#362E28] border-3 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl p-6 shadow-[5px_5px_0px_0px_#E76F2E] flex flex-col justify-between space-y-4 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-md bg-[#E76F2E] text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 font-mono font-black text-xs flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                    {numStr}
                  </span>
                  {cert.issueDate && (
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#665D55] dark:text-[#A89B8E]">
                      <Calendar className="w-3 h-3 text-[#E76F2E]" />
                      <span>{cert.issueDate}</span>
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-[#E76F2E] shrink-0 mt-0.5" />
                  <h3 className="text-lg font-black uppercase tracking-tight text-[#29231F] dark:text-[#FFF4D6]">
                    {cert.name}
                  </h3>
                </div>

                <div className="font-mono text-xs font-bold text-[#477A8A] dark:text-[#6D9AA5]">
                  ISSUER: {cert.issuer}
                </div>

                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-[#665D55] dark:text-[#A89B8E] break-all">
                    ID: {cert.credentialId}
                  </div>
                )}

                {cert.description && (
                  <p className="text-xs text-[#665D55] dark:text-[#D8CBB7] leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-3 border-t border-[#29231F]/10 dark:border-[#FFF4D6]/10">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#E76F2E] hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
