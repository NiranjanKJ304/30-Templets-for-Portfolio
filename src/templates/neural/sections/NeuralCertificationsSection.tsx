/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralCertificationsSection - Verified credentials and accreditations
 */

import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralCertificationsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const NeuralCertificationsSection: React.FC<NeuralCertificationsSectionProps> = ({
  data,
  enabled,
  indexStr = '07',
}) => {
  const { certifications } = data;
  const hasData = hasSectionData('certifications', data);

  if (!enabled || !hasData || !certifications || certifications.length === 0) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <NeuralSectionHeader
        index={indexStr}
        title="Certifications & Accreditations"
        subtitle="Verified professional credentials, licenses, and domain designations."
        count={certifications.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((item) => (
          <article
            key={item.id}
            className="p-6 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 space-y-3 hover:border-cyan-500/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold font-sans text-neutral-900 dark:text-neutral-50">
                    {item.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-0.5">
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
                  className="text-neutral-400 hover:text-cyan-500 p-1"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {item.credentialId && (
              <div className="text-[11px] font-mono text-neutral-400 pl-8">
                ID: {item.credentialId}
              </div>
            )}

            {item.description && (
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans pl-8">
                {item.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
