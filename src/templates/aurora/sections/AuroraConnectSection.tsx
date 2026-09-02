/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraConnectSection - Floating social constellation
 */

import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraConnectSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const AuroraConnectSection: React.FC<AuroraConnectSectionProps> = ({
  data,
  enabled,
}) => {
  const { socials } = data;
  const hasData = hasSectionData('connect', data);

  if (!enabled || !hasData || !socials || socials.length === 0) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="Connect"
        title="External profiles and transmissions."
        subtitle="Digital publications, repositories, and distributed networks."
        count={socials.length}
        countLabel="CHANNELS"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {socials.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl p-6 bg-white/80 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800/80 shadow-md shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-700 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-4 min-h-[44px]"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-200/60 dark:border-purple-800/60 group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div className="space-y-1">
              <div className="font-bold text-base text-neutral-950 dark:text-white tracking-tight">
                {item.platform}
              </div>
              {item.username && (
                <div className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
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
