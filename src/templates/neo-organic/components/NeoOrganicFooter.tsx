/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicFooter - Organic colophon and back to top
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ArrowUp } from 'lucide-react';

interface NeoOrganicFooterProps {
  data: PortfolioData;
}

export const NeoOrganicFooter: React.FC<NeoOrganicFooterProps> = ({ data }) => {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 sm:mt-28 border-t border-[#17211B]/10 dark:border-[#F2F3ED]/10 bg-[#FFFFFF]/50 dark:bg-[#1B211D]/40 backdrop-blur-xs py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#79A66A] to-[#4169E1] flex items-center justify-center text-white text-xs font-bold shadow-xs">
            {profile.name ? profile.name.charAt(0).toUpperCase() : '●'}
          </div>
          <div>
            <div className="font-semibold text-[#17211B] dark:text-[#F2F3ED] text-sm sm:text-base">
              {profile.name}
            </div>
            <div className="text-xs text-[#8A938C] dark:text-[#7F897F] font-light">
              © {currentYear} • All rights reserved.
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/10 dark:border-[#F2F3ED]/10 text-[#59635C] dark:text-[#B8C0B8] hover:text-[#17211B] dark:hover:text-[#F2F3ED] hover:border-[#4169E1] dark:hover:border-[#7F9CFF] text-xs font-medium shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          aria-label="Return to top of page"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
