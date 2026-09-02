/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraFooter - Luminous closing colophon
 */

import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';

export interface AuroraFooterProps {
  data: PortfolioData;
}

export const AuroraFooter: React.FC<AuroraFooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md py-12 sm:py-16 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 via-sky-400 to-rose-400 flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              {data.profile.name}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              &copy; {currentYear} &bull; All rights reserved.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:text-purple-600 dark:hover:text-purple-400 border border-neutral-200 dark:border-neutral-700 shadow-xs transition-colors cursor-pointer min-h-[44px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
