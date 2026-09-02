/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasConnectSection - Social channels and external broadcast profiles
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasConnectSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
}

export const CanvasConnectSection: React.FC<CanvasConnectSectionProps> = ({
  data,
  enabled,
  sectionNumber = '10',
}) => {
  const { socials } = data;
  const hasData = hasSectionData('connect', data);

  if (!enabled || !hasData || !socials || socials.length === 0) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-32"
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Network & External Transmissions"
        subtitle="Public feeds, distributed repositories, publication feeds, and community coordinates."
        count={socials.length}
        countLabel="CHANNELS"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {socials.map((item, idx) => (
          <a
            key={item.id || idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[3px_3px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] rounded-lg flex items-center justify-between hover:border-orange-600 dark:hover:border-orange-500 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all group"
          >
            <div className="space-y-1">
              <div className="font-mono text-[10px] text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest">
                NET // 0{idx + 1}
              </div>
              <div className="font-black text-lg text-neutral-900 dark:text-neutral-50 group-hover:text-orange-600 transition-colors capitalize">
                {item.platform}
              </div>
              {item.username && (
                <div className="font-mono text-xs text-neutral-500 truncate max-w-[140px]">
                  @{item.username}
                </div>
              )}
            </div>

            <div className="p-2 text-neutral-400 group-hover:text-orange-600 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};
