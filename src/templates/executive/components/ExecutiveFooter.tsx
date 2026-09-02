/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveFooter - Structured closing statement and back-to-top trigger
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';

export interface ExecutiveFooterProps {
  data: PortfolioData;
}

export const ExecutiveFooter: React.FC<ExecutiveFooterProps> = ({ data }) => {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#1A1A19]/15 dark:border-neutral-800 bg-[#F4F4F2] dark:bg-[#0C0C0B] py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="font-serif font-bold text-base text-neutral-950 dark:text-neutral-50 tracking-tight">
            {profile.name}
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            © {currentYear} {profile.name}. All executive rights, patents & publications reserved.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-xs font-mono tracking-wider uppercase hover:border-neutral-900 dark:hover:border-white transition-colors cursor-pointer"
        >
          <span>Top of Record</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
