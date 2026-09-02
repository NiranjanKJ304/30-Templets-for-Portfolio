/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirConnectSection - Syndicated network directory for Magazine Noir
 */

import React from 'react';
import type { PortfolioData, SocialLink } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Mail,
  Dribbble,
} from 'lucide-react';

interface NoirConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NoirConnectSection: React.FC<NoirConnectSectionProps> = ({
  data,
  enabled = true,
}) => {
  const links = data.socials;

  if (!enabled || !links || links.length === 0) {
    return null;
  }

  const getPlatformIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('github')) return <Github className="w-4 h-4" />;
    if (p.includes('linkedin')) return <Linkedin className="w-4 h-4" />;
    if (p.includes('twitter') || p.includes('x')) return <Twitter className="w-4 h-4" />;
    if (p.includes('instagram')) return <Instagram className="w-4 h-4" />;
    if (p.includes('youtube')) return <Youtube className="w-4 h-4" />;
    if (p.includes('dribbble')) return <Dribbble className="w-4 h-4" />;
    if (p.includes('mail') || p.includes('email')) return <Mail className="w-4 h-4" />;
    return <Globe className="w-4 h-4" />;
  };

  return (
    <section id="connect" className="py-16 sm:py-24 lg:py-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      <NoirSectionHeader
        index="10"
        title="Syndicated Directory"
        subtitle="Network nodes, creative registries, and public distribution channels."
        count={links.length}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {links.map((link: SocialLink, idx: number) => {
          const channelNum = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;

          return (
            <a
              key={`${link.platform}-${idx}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#171717]/15 dark:border-[#F4F1EA]/15 text-[#171717] dark:text-[#F4F1EA] group-hover:bg-[#8B5E3C] group-hover:text-white dark:group-hover:bg-[#C49A6C] dark:group-hover:text-black flex items-center justify-center transition-colors shrink-0">
                  {getPlatformIcon(link.platform)}
                </div>

                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm text-[#171717] dark:text-[#F4F1EA] group-hover:text-[#8B5E3C] dark:group-hover:text-[#C49A6C] transition-colors">
                    {link.label || link.platform}
                  </span>
                  {link.username && (
                    <span className="font-mono text-xs text-[#99938A] dark:text-[#777168] truncate max-w-[140px]">
                      {link.username}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#99938A] dark:text-[#777168]">
                <span>{channelNum}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:text-[#8B5E3C] dark:group-hover:text-[#C49A6C] transition-colors" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
