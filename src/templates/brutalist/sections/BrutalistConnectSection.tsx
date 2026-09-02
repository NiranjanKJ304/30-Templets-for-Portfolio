/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistConnectSection - External channels & network index
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface BrutalistConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BrutalistConnectSection: React.FC<BrutalistConnectSectionProps> = ({
  data,
  enabled = true,
}) => {
  const socials = data.socials;

  if (!enabled || !socials || socials.length === 0) return null;

  return (
    <section
      id="connect"
      className="py-16 md:py-24 border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="10"
          title="Network Index"
          subtitle="AUTHORIZED EXTERNAL CHANNELS & PROFILES"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[4px_4px_0px_0px_#111111] dark:shadow-[4px_4px_0px_0px_#F4F1E8] hover:bg-[#111111] hover:text-[#F4F1E8] dark:hover:bg-[#F4F1E8] dark:hover:text-[#111111] transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <div className="font-mono text-[10px] font-bold opacity-60 uppercase">
                  NODE_{String(idx + 1).padStart(2, '0')}
                </div>
                <div className="font-sans font-black text-lg uppercase tracking-tight">
                  {link.label || link.platform}
                </div>
                {link.username && (
                  <div className="font-mono text-xs opacity-70">
                    @{link.username}
                  </div>
                )}
              </div>

              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
