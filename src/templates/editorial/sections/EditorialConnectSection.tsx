/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialConnectSection - Public registry & network directory
 */

import React from 'react';
import type { PortfolioData, SocialLink } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Mail,
  Share2,
} from 'lucide-react';

interface EditorialConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const EditorialConnectSection: React.FC<EditorialConnectSectionProps> = ({
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
    if (p.includes('mail') || p.includes('email')) return <Mail className="w-4 h-4" />;
    return <Globe className="w-4 h-4" />;
  };

  return (
    <section id="connect" className="pt-12 sm:pt-16 pb-12 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15">
      <EditorialSectionHeader
        index="10"
        title="Public Index & Channels"
        subtitle="Network nodes, source code registries, and syndicated publication channels."
        count={links.length}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {links.map((link: SocialLink, idx: number) => {
          const channelNumber = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;

          return (
            <a
              key={`${link.platform}-${idx}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs hover:border-[#B42318] dark:hover:border-[#F06A5F] transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-[#171717]/15 dark:border-[#F5F2EA]/15 text-[#171717] dark:text-[#F5F2EA] group-hover:bg-[#B42318] group-hover:text-[#FFFDF8] dark:group-hover:bg-[#F06A5F] dark:group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  {getPlatformIcon(link.platform)}
                </div>

                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm text-[#171717] dark:text-[#F5F2EA] group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F] transition-colors">
                    {link.label || link.platform}
                  </span>
                  {link.username && (
                    <span className="font-mono text-xs text-[#918D85] dark:text-[#817C74] truncate max-w-[140px]">
                      {link.username}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#918D85] dark:text-[#817C74]">
                <span>{channelNumber}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F] transition-colors" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
