/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraCertificationsSection - Luminous accredited credentials register
 */

import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import type { PortfolioData, Certification } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraCertificationsSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const AuroraCertificationsSection: React.FC<AuroraCertificationsSectionProps> = ({
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
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="Credentials"
        title="Professional certifications & licenses."
        subtitle="Accredited qualifications verified by institutional authorities."
        count={certifications.length}
        countLabel="CERTIFICATIONS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certifications.map((item: Certification, idx: number) => (
          <div
            key={item.id || idx}
            className="rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800/80 shadow-md shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-200/60 dark:border-sky-800/60">
                  <Award className="w-5 h-5" />
                </div>
                {item.issueDate && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.issueDate}</span>
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight">
                  {item.name}
                </h3>
                <div className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                  {item.issuer}
                </div>
              </div>

              {item.credentialId && (
                <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  ID: {item.credentialId}
                </div>
              )}
            </div>

            {item.credentialUrl && (
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline min-h-[44px]"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
