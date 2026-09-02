/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicConnectSection - Dynamic network and directory links
 */

import React from 'react';
import type { PortfolioData, SocialLink } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Globe,
  ArrowUpRight,
  Share2,
} from 'lucide-react';

interface NeoOrganicConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NeoOrganicConnectSection: React.FC<NeoOrganicConnectSectionProps> = ({
  data,
  enabled = true,
}) => {
  const socials = data.socials;

  if (!enabled || !socials || socials.length === 0) {
    return null;
  }

  const getSocialIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('github')) return <Github className="w-5 h-5" />;
    if (p.includes('linkedin')) return <Linkedin className="w-5 h-5" />;
    if (p.includes('twitter') || p.includes('x')) return <Twitter className="w-5 h-5" />;
    if (p.includes('instagram')) return <Instagram className="w-5 h-5" />;
    if (p.includes('youtube')) return <Youtube className="w-5 h-5" />;
    if (p.includes('email') || p.includes('mail')) return <Mail className="w-5 h-5" />;
    return <Globe className="w-5 h-5" />;
  };

  return (
    <section id="connect" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="Directory & Presence"
        subtitle="Public profiles, repositories, open channels, and networks."
        count={socials.length}
        accentColor="blue"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {socials.map((link: SocialLink, index: number) => {
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-xs hover:shadow-md hover:border-[#4169E1]/30 dark:hover:border-[#7F9CFF]/30 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#F6F5EF] dark:bg-[#111713] flex items-center justify-center text-[#59635C] dark:text-[#B8C0B8] group-hover:text-[#4169E1] dark:group-hover:text-[#7F9CFF] group-hover:scale-105 transition-all shrink-0">
                  {getSocialIcon(link.platform)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-[#17211B] dark:text-[#F2F3ED] capitalize truncate">
                    {link.label || link.platform}
                  </div>
                  {link.username && (
                    <div className="text-xs text-[#8A938C] dark:text-[#7F897F] font-mono truncate">
                      @{link.username}
                    </div>
                  )}
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-[#8A938C] group-hover:text-[#4169E1] dark:group-hover:text-[#7F9CFF] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          );
        })}
      </div>
    </section>
  );
};
