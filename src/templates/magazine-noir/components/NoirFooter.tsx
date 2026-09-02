/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirFooter - Luxury Colophon and Closing Spread for Magazine Noir
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ArrowUp } from 'lucide-react';

interface NoirFooterProps {
  data: PortfolioData;
}

export const NoirFooter: React.FC<NoirFooterProps> = ({ data }) => {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FBFAF7] dark:bg-[#171717] border-t border-[#171717]/10 dark:border-[#F4F1EA]/10 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8B5E3C] dark:text-[#C49A6C] block mb-2">
              COLOPHON
            </span>
            <div className="font-serif text-3xl sm:text-4xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight">
              {profile.name}
            </div>
            {profile.headline && (
              <p className="font-sans text-sm text-[#68645D] dark:text-[#B8B2A8] mt-2 max-w-md">
                {profile.headline}
              </p>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 border border-[#171717]/20 dark:border-[#F4F1EA]/20 bg-[#F4F1EA] dark:bg-[#0D0D0D] text-[#171717] dark:text-[#F4F1EA] hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] font-mono text-[11px] uppercase tracking-widest transition-colors cursor-pointer"
          >
            <span>RETURN TO MASTHEAD</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#99938A] dark:text-[#777168]">
          <div>
            © {currentYear} {profile.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="uppercase tracking-widest text-[10px]">
            MAGAZINE NOIR VISUAL CAMPAIGN
          </div>
        </div>
      </div>
    </footer>
  );
};
