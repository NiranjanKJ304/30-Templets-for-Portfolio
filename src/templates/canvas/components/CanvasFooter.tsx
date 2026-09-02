/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasFooter - Colophon style studio footer with crisp coordinates and back-to-top trigger
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';

export interface CanvasFooterProps {
  data: PortfolioData;
}

export const CanvasFooter: React.FC<CanvasFooterProps> = ({ data }) => {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-neutral-300 dark:border-neutral-800 py-12 bg-[#F0ECE4]/60 dark:bg-[#151413]/90">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-neutral-600 dark:text-neutral-400">
          {/* Identity & Legal */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-orange-600 dark:bg-orange-500 rounded-sm" />
            <span className="tracking-tight">
              © {currentYear} {profile.name}. ALL RIGHTS RESERVED.
            </span>
            {profile.pronouns && (
              <span className="text-neutral-400 dark:text-neutral-500">
                [{profile.pronouns}]
              </span>
            )}
          </div>

          {/* Location & Back To Top */}
          <div className="flex items-center gap-8">
            {profile.location && (
              <span className="hidden md:inline-block text-neutral-500">
                LOC: {profile.location}
              </span>
            )}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-orange-600 dark:hover:text-orange-400 transition-colors uppercase tracking-wider text-[11px] cursor-pointer"
            >
              <span>TOP OF CANVAS</span>
              <ArrowUp className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
