/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalConnectSection - Social channels & external networks
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { Globe, ArrowUpRight, Github, Linkedin, Twitter, Dribbble, Mail } from 'lucide-react';

interface BotanicalConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BotanicalConnectSection: React.FC<BotanicalConnectSectionProps> = ({
  data,
  enabled = true,
}) => {
  const socials = data.socials;

  if (!enabled || !socials || socials.length === 0) return null;

  const getPlatformIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('github')) return Github;
    if (p.includes('linkedin')) return Linkedin;
    if (p.includes('twitter') || p.includes('x')) return Twitter;
    if (p.includes('dribbble')) return Dribbble;
    if (p.includes('mail') || p.includes('email')) return Mail;
    return Globe;
  };

  return (
    <section
      id="connect"
      className="py-20 md:py-28 border-b border-[#D8D4C8] dark:border-[#2C3E30] bg-[#F6F5F0] dark:bg-[#101712] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
            10 / Channels
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal">
            Ecosystem & Network
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((link, idx) => {
            const Icon = getPlatformIcon(link.platform);
            return (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] flex items-center justify-between group hover:shadow-md hover:border-[#4A6B53] dark:hover:border-[#8EB697] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-serif font-medium text-sm text-[#1C261E] dark:text-[#F0F5F1] block capitalize">
                      {link.label || link.platform}
                    </span>
                    {link.username && (
                      <span className="text-[11px] font-mono text-[#586359] dark:text-[#9BB0A0]">
                        @{link.username}
                      </span>
                    )}
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#586359] dark:text-[#9BB0A0] group-hover:text-[#243828] dark:group-hover:text-[#8EB697] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
