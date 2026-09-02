/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalFooter - Clean, understated footer for Minimal template
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';

export interface MinimalFooterProps {
  data: PortfolioData;
}

export const MinimalFooter: React.FC<MinimalFooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#1C1917]/10 dark:border-neutral-800 py-12 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
        <p>
          © {currentYear} {data.profile.name}. All rights reserved.
        </p>

        <button
          onClick={handleScrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
