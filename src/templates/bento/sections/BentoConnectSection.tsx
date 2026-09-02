/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoConnectSection - Dynamic constellation of external network tiles
 */

import React from 'react';
import type { PortfolioData, SocialLink } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoSectionHeader } from '../components/BentoSectionHeader';
import {
  Share2,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Mail,
} from 'lucide-react';

interface BentoConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BentoConnectSection: React.FC<BentoConnectSectionProps> = ({
  data,
  enabled = true,
}) => {
  const links = data.socials;

  if (!enabled || !links || links.length === 0) {
    return null;
  }

  // Dynamic icon resolver based on platform name
  const getPlatformIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('github')) return <Github className="w-5 h-5" />;
    if (p.includes('linkedin')) return <Linkedin className="w-5 h-5" />;
    if (p.includes('twitter') || p.includes('x')) return <Twitter className="w-5 h-5" />;
    if (p.includes('instagram')) return <Instagram className="w-5 h-5" />;
    if (p.includes('youtube')) return <Youtube className="w-5 h-5" />;
    if (p.includes('mail') || p.includes('email')) return <Mail className="w-5 h-5" />;
    return <Globe className="w-5 h-5" />;
  };

  return (
    <section id="connect" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoSectionHeader
        label="// NETWORKS & CHANNELS"
        title="Connect & Follow"
        subtitle="Social profiles, code registries, and public writing channels."
        icon={<Share2 className="w-4 h-4 text-[#3B82F6]" />}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {links.map((link: SocialLink, idx: number) => {
          return (
            <a
              key={`${link.platform}-${idx}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-2xl"
            >
              <BentoTile
                span="col-12"
                variant="default"
                padding="md"
                className="h-full flex-row items-center justify-between group-hover:border-[#3B82F6] dark:group-hover:border-[#3B82F6] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF1F5] dark:bg-[#222630] text-[#171A1F] dark:text-[#F4F5F7] group-hover:bg-[#3B82F6] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    {getPlatformIcon(link.platform)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm text-[#171A1F] dark:text-[#F4F5F7] group-hover:text-[#3B82F6] transition-colors">
                      {link.label || link.platform}
                    </span>
                    {link.username && (
                      <span className="text-xs text-[#5F6672] dark:text-[#9DA5B4] truncate max-w-[140px]">
                        {link.username}
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-6 h-6 rounded-full text-[#8E95A3] group-hover:text-[#3B82F6] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </BentoTile>
            </a>
          );
        })}
      </div>
    </section>
  );
};
