/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoFooter - Clean bottom metadata and navigation anchor
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ArrowUp } from 'lucide-react';

interface BentoFooterProps {
  data: PortfolioData;
}

export const BentoFooter: React.FC<BentoFooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();
  const profile = data.profile;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-12 py-8 border-t border-[#E2E6ED] dark:border-[#2D3340] text-[#5F6672] dark:text-[#9DA5B4] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
          <span className="font-semibold text-[#171A1F] dark:text-[#F4F5F7]">
            {profile.name}
          </span>
          <span className="text-[#8E95A3]">© {currentYear}</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white dark:hover:bg-[#191C22] border border-transparent hover:border-[#E2E6ED] dark:hover:border-[#2D3340] text-xs font-medium transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
