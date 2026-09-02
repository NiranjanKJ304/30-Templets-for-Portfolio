/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissFooter - Typographic Colophon & System Grid Footer
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SwissRule } from './SwissRule';

export interface SwissFooterProps {
  data: PortfolioData;
}

export const SwissFooter: React.FC<SwissFooterProps> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-20 bg-white dark:bg-neutral-950 border-t-2 border-neutral-900 dark:border-neutral-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Identity Colophon (Cols 1-4) */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-neutral-950 dark:text-neutral-50 font-black tracking-widest uppercase">
              <span className="text-red-600 dark:text-red-500">■</span>
              <span>{data.profile.name}</span>
            </div>
            <p className="text-neutral-500 font-sans leading-relaxed">
              {data.profile.headline || data.profile.title || 'Professional Portfolio'}
            </p>
          </div>

          {/* Type Specimen & Grid Notes (Cols 5-8) */}
          <div className="md:col-span-4 font-mono text-xs text-neutral-500 space-y-1">
            <div className="text-neutral-900 dark:text-neutral-100 font-bold uppercase tracking-wider">
              [SYSTEM SPECIFICATION]
            </div>
            <div>TYPOGRAPHY: SYSTEM GROTESK & MONOSPACE</div>
            <div>STRUCTURE: 12-COLUMN DISCIPLINED GRID</div>
            <div>STATUS: ACCREDITED CANONICAL DATA</div>
          </div>

          {/* Action / Back to Top (Cols 9-12) */}
          <div className="md:col-span-4 flex flex-col md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:bg-red-600 dark:hover:bg-red-500 dark:hover:text-white transition-colors cursor-pointer border border-neutral-950 dark:border-neutral-50"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>

            <div className="font-mono text-[11px] text-neutral-400">
              © {new Date().getFullYear()} {data.profile.name}. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
