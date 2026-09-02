/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistFooter - Raw monolithic footer with exposed metadata
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ArrowUp } from 'lucide-react';

interface BrutalistFooterProps {
  data: PortfolioData;
}

export const BrutalistFooter: React.FC<BrutalistFooterProps> = ({ data }) => {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] dark:bg-[#0A0A0A] text-[#F4F1E8] border-t-4 border-[#111111] dark:border-[#F4F1E8] py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12 border-b-2 border-[#333333]">
          <div>
            <div className="font-mono text-xs text-[#2563EB] mb-2 tracking-widest font-bold">
              // TERMINAL STATE & ARCHIVE
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F4F1E8]">
              {profile.name}
            </h2>
            <p className="font-mono text-xs uppercase tracking-wider text-[#888888] mt-2">
              {profile.role || profile.headline || 'PORTFOLIO REGISTRY'}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#F4F1E8] text-[#111111] font-mono text-xs font-black uppercase tracking-widest hover:bg-[#2563EB] hover:text-white transition-all shadow-[4px_4px_0px_0px_#2563EB] cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>RETURN TO TOP [▲]</span>
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#888888]">
          <div>
            © {currentYear} {profile.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>BRUTALIST_SPEC_1.0</span>
            <span>•</span>
            <span className="text-[#F4F1E8]">RAW // BOLD // STRUCTURAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
