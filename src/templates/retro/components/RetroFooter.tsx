/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroFooter - Typographic colophon and system endplate
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';

export interface RetroFooterProps {
  data: PortfolioData;
}

export const RetroFooter: React.FC<RetroFooterProps> = ({ data }) => {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t-3 border-[#29231F] dark:border-[#FFF4D6]/20 bg-[#FFF9EA] dark:bg-[#362E28] text-[#29231F] dark:text-[#FFF4D6] transition-colors duration-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Colophon Stamp (Cols 1-6) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#E76F2E] text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 font-mono font-black text-sm flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                {profile.name.charAt(0).toUpperCase()}
              </span>
              <span className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#665D55] dark:text-[#A89B8E] max-w-md leading-relaxed">
              Designed as a modern-retro publication portfolio. Set in bold grotesque typography with high-contrast geometric color fields.
            </p>
          </div>

          {/* Center Edition Meta (Cols 7-9) */}
          <div className="md:col-span-3 space-y-1 font-mono text-xs text-[#665D55] dark:text-[#A89B8E]">
            <div className="font-bold text-[#29231F] dark:text-[#FFF4D6] uppercase">
              // ARCHIVE STATUS
            </div>
            <div>EDITION: {currentYear} REV. 10</div>
            <div>CANONICAL UNIVERSAL SYSTEM</div>
          </div>

          {/* Right Action & Back to Top (Cols 10-12) */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="px-4 py-2.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider bg-[#FFF4D6] dark:bg-[#29231F] text-[#29231F] dark:text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 shadow-[3px_3px_0px_0px_#29231F] dark:shadow-[3px_3px_0px_0px_rgba(255,244,214,0.15)] hover:shadow-[1px_1px_0px_0px_#29231F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 min-h-[44px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="mt-10 pt-6 border-t border-[#29231F]/15 dark:border-[#FFF4D6]/15 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#665D55] dark:text-[#A89B8E]">
          <div>&copy; {currentYear} {profile.name}. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E76F2E]" />
            <span className="w-2 h-2 rounded-full bg-[#E9B949]" />
            <span className="w-2 h-2 rounded-full bg-[#477A8A]" />
            <span className="uppercase font-bold tracking-wider">RETRO-01</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
