/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyConnectSection - External coordinates and distributed channels
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { JourneySectionHeader } from '../components/JourneySectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface JourneyConnectSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterNumber?: string;
}

export const JourneyConnectSection: React.FC<JourneyConnectSectionProps> = ({
  data,
  enabled,
  chapterNumber = '10',
}) => {
  const { socials } = data;
  const hasData = hasSectionData('connect', data);

  if (!enabled || !hasData || !socials || socials.length === 0) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800"
      containerClassName="max-w-5xl"
    >
      <JourneySectionHeader
        chapterNumber={chapterNumber}
        title="Network & External Transmissions"
        subtitle="Distributed repositories, publication streams, and digital networks."
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
            className="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xs flex items-center justify-between hover:border-teal-500 hover:-translate-y-0.5 transition-all group"
          >
            <div className="space-y-0.5">
              <div className="font-mono text-[10px] text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wider">
                WAYPOINT // 0{idx + 1}
              </div>
              <div className="font-bold text-base text-neutral-900 dark:text-neutral-50 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors capitalize">
                {item.platform}
              </div>
              {item.username && (
                <div className="text-xs text-neutral-500 truncate max-w-[130px]">
                  @{item.username}
                </div>
              )}
            </div>

            <div className="p-2 text-neutral-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};
