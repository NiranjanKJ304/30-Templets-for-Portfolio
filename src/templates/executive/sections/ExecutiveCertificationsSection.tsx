/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveCertificationsSection - Verified credentials and licenses
 */

import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveCertificationsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const ExecutiveCertificationsSection: React.FC<ExecutiveCertificationsSectionProps> = ({
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
      <ExecutiveSectionHeader
        index={indexStr}
        title="Certifications & Verified Credentials"
        subtitle="Verified professional certifications, accreditations, and technical designations."
        count={certifications.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((item) => (
          <article
            key={item.id}
            className="p-6 sm:p-8 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-neutral-950 dark:text-neutral-50">
                    {item.name}
                  </h3>
                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
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
                  className="p-1 text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {item.credentialId && (
              <div className="text-[11px] font-mono text-neutral-400 pl-8">
                CREDENTIAL ID: {item.credentialId}
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
