/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissCertificationsSection - Structured credentials & licensures register
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissCertificationsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const SwissCertificationsSection: React.FC<SwissCertificationsSectionProps> = ({
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
      className="py-16 sm:py-24 border-b border-neutral-900 dark:border-neutral-100"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Certifications & Licensures"
        subtitle="Accredited technical credentials, professional verifications, and licenses."
        count={certifications.length}
        countLabel="CREDENTIALS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((item, idx) => (
          <div
            key={item.id || idx}
            className="border border-neutral-900 dark:border-neutral-100 p-6 bg-white dark:bg-neutral-900 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-500 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-red-600 dark:text-red-500 font-bold">
                  // 0{idx + 1}
                </span>
                <span>{item.issueDate}</span>
              </div>

              <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50 uppercase tracking-tight">
                {item.name}
              </h3>

              <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                ISSUER: <span className="font-semibold text-neutral-900 dark:text-neutral-100">{item.issuer}</span>
              </div>

              {item.credentialId && (
                <div className="font-mono text-[11px] text-neutral-500 truncate">
                  ID: {item.credentialId}
                </div>
              )}
            </div>

            {item.credentialUrl && (
              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-red-600 dark:text-red-500 hover:underline uppercase"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
