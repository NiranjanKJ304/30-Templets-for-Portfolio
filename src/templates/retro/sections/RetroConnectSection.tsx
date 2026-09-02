/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroConnectSection - Graphic external link and channel directory
 */

import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Mail,
  ArrowUpRight,
  Share2,
} from 'lucide-react';
import type { PortfolioData, SocialLink } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroConnectSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

const getPlatformIcon = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes('github')) return <Github className="w-5 h-5" />;
  if (p.includes('linkedin')) return <Linkedin className="w-5 h-5" />;
  if (p.includes('twitter') || p === 'x') return <Twitter className="w-5 h-5" />;
  if (p.includes('instagram')) return <Instagram className="w-5 h-5" />;
  if (p.includes('youtube')) return <Youtube className="w-5 h-5" />;
  if (p.includes('email') || p.includes('mail')) return <Mail className="w-5 h-5" />;
  return <Globe className="w-5 h-5" />;
};

export const RetroConnectSection: React.FC<RetroConnectSectionProps> = ({
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
      className="py-16 sm:py-24 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="DIRECTORY"
        title="Connect & Channels"
        subtitle="External repositories, social platforms, and publishing channels."
        accentColor="petrol"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {socials.map((link: SocialLink, idx: number) => {
          return (
            <a
              key={link.platform + idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FFF9EA] dark:bg-[#362E28] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-xl p-5 shadow-[4px_4px_0px_0px_#29231F] dark:shadow-[4px_4px_0px_0px_rgba(255,244,214,0.15)] hover:shadow-[2px_2px_0px_0px_#29231F] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#E9B949] dark:hover:bg-[#E9B949] transition-all flex items-center justify-between min-h-[44px]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="w-10 h-10 rounded-lg bg-[#FFF4D6] dark:bg-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 text-[#29231F] dark:text-[#FFF4D6] group-hover:bg-[#29231F] group-hover:text-[#FFF4D6] flex items-center justify-center shrink-0 transition-colors">
                  {getPlatformIcon(link.platform)}
                </span>
                <div className="min-w-0">
                  <h4 className="font-black uppercase tracking-tight text-sm text-[#29231F] dark:text-[#FFF4D6] group-hover:text-[#29231F] truncate">
                    {link.label || link.platform}
                  </h4>
                  {link.username && (
                    <p className="font-mono text-xs text-[#665D55] dark:text-[#A89B8E] group-hover:text-[#29231F]/80 truncate">
                      @{link.username}
                    </p>
                  )}
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-[#29231F] dark:text-[#FFF4D6] group-hover:text-[#29231F] shrink-0" />
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
