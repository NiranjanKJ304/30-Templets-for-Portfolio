/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalCertificationsSection - Verified licenses and credentials for Minimal template
 */

import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalCertificationsSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const MinimalCertificationsSection: React.FC<MinimalCertificationsSectionProps> = ({
  data,
  enabled,
}) => {
  const { certifications } = data;
  const hasData = hasSectionData('certifications', data);

  if (!enabled || !hasData || !certifications || certifications.length === 0) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-20"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="Certifications & Credentials" count={certifications.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((item) => (
          <article
            key={item.id}
            className="p-5 border border-[#1C1917]/10 dark:border-neutral-800 rounded-sm bg-white dark:bg-[#141210] space-y-2"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-neutral-400 shrink-0" />
                <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 font-sans">
                  {item.name}
                </h3>
              </div>

              {item.credentialUrl && (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              <span>{item.issuer}</span>
              {item.issueDate && <span> · Issued {item.issueDate}</span>}
              {item.credentialId && <div>ID: {item.credentialId}</div>}
            </div>

            {item.description && (
              <p className="text-xs text-neutral-600 dark:text-neutral-400 pt-1">
                {item.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
