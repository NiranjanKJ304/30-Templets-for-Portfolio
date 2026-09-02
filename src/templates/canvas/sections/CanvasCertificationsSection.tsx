/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasCertificationsSection - Professional credentials and verified licensures
 */

import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasCertificationsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
}

export const CanvasCertificationsSection: React.FC<CanvasCertificationsSectionProps> = ({
  data,
  enabled,
  sectionNumber = '07',
}) => {
  const { certifications } = data;
  const hasData = hasSectionData('certifications', data);

  if (!enabled || !hasData || !certifications || certifications.length === 0) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-32"
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Certifications & Verified Credentials"
        subtitle="Accredited standards, technical licensures, and specialized industry endorsements."
        count={certifications.length}
        countLabel="CREDENTIALS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certifications.map((item, idx) => (
          <article
            key={item.id}
            className="p-8 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg space-y-4 hover:border-orange-600 dark:hover:border-orange-500 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                <span className="text-orange-600 dark:text-orange-400 font-bold">
                  // CERT-0{idx + 1}
                </span>
                {item.issueDate && <span>{item.issueDate}</span>}
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-orange-600 dark:text-orange-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-neutral-900 dark:text-neutral-50 leading-snug">
                    {item.name}
                  </h3>
                  <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    {item.issuer}
                  </div>
                </div>
              </div>

              {item.credentialId && (
                <div className="font-mono text-[11px] text-neutral-500 truncate pt-2">
                  ID: {item.credentialId}
                </div>
              )}
            </div>

            {item.credentialUrl && (
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 hover:underline"
                >
                  <span>Verify Record</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
