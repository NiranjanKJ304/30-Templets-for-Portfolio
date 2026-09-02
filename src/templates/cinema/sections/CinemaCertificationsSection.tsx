/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaCertificationsSection - Verified credentials and professional designations
 */

import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaCertificationsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
}

export const CinemaCertificationsSection: React.FC<CinemaCertificationsSectionProps> = ({
  data,
  enabled,
  chapterIndex = '07',
}) => {
  const { certifications } = data;
  const hasData = hasSectionData('certifications', data);

  if (!enabled || !hasData || !certifications || certifications.length === 0) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="py-24 sm:py-36"
      containerClassName="max-w-6xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Certifications & Accreditations"
        subtitle="Verified professional designations, credentials, and institutional licenses."
        count={certifications.length}
        countLabel="CREDENTIALS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((item) => (
          <article
            key={item.id}
            className="p-8 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl space-y-4 hover:border-amber-500/40 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <Award className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold font-serif text-neutral-900 dark:text-neutral-50">
                    {item.name}
                  </h3>
                  <div className="text-xs font-mono text-amber-600 dark:text-amber-400 mt-1">
                    {item.issuer}
                    {item.issueDate && ` · ${item.issueDate}`}
                  </div>
                </div>
              </div>

              {item.credentialUrl && (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500 p-1"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {item.credentialId && (
              <div className="text-xs font-mono text-neutral-500 pl-9">
                CREDENTIAL ID: {item.credentialId}
              </div>
            )}

            {item.description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans pl-9 leading-relaxed">
                {item.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
