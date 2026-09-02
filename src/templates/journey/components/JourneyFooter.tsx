/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyFooter - Final destination marker and colophon
 */

import React from 'react';
import { ArrowUp, Compass } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';

export interface JourneyFooterProps {
  data: PortfolioData;
}

export const JourneyFooter: React.FC<JourneyFooterProps> = ({ data }) => {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-neutral-900 dark:text-neutral-100">
                {profile.name}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                © {currentYear} · Narrative Record & Portfolio
              </div>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full transition-colors cursor-pointer shadow-xs"
            aria-label="Return to top of journey"
          >
            <span>Back to Origin</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
