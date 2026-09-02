/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissConnectSection - External channels directory
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissConnectSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const SwissConnectSection: React.FC<SwissConnectSectionProps> = ({
  data,
  enabled,
  indexNumber = '10',
}) => {
  const { socials } = data;
  const hasData = hasSectionData('connect', data);

  if (!enabled || !hasData || !socials || socials.length === 0) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b border-neutral-900 dark:border-neutral-100"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Network & External Transmissions"
        subtitle="Distributed repositories, digital publications, and external profiles."
        count={socials.length}
        countLabel="CHANNELS"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {socials.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-neutral-900 dark:border-neutral-100 p-5 bg-white dark:bg-neutral-900 hover:bg-neutral-950 hover:text-white dark:hover:bg-neutral-50 dark:hover:text-neutral-950 transition-colors group flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-red-600 dark:text-red-500 font-bold group-hover:text-red-400 dark:group-hover:text-red-600">
                // 0{idx + 1}
              </span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white dark:group-hover:text-neutral-950" />
            </div>

            <div className="space-y-1">
              <div className="font-bold text-base uppercase tracking-tight">
                {item.platform}
              </div>
              {item.username && (
                <div className="font-mono text-xs text-neutral-500 group-hover:text-neutral-300 dark:group-hover:text-neutral-600 truncate">
                  @{item.username}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};
