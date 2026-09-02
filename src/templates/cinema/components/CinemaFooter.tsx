/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaFooter - Dramatic epilogue footer with smooth return-to-top action
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';

export interface CinemaFooterProps {
  data: PortfolioData;
}

export const CinemaFooter: React.FC<CinemaFooterProps> = ({ data }) => {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-white/10 py-16 bg-neutral-100/60 dark:bg-[#090A0D]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-neutral-500 dark:text-neutral-400">
          {/* Identity & Rights */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="tracking-wide">
              © {currentYear} {profile.name}. ALL RIGHTS RESERVED.
            </span>
            {profile.pronouns && (
              <span className="text-neutral-400 dark:text-neutral-600">
                ({profile.pronouns})
              </span>
            )}
          </div>

          {/* Location & Return Action */}
          <div className="flex items-center gap-8">
            {profile.location && (
              <span className="hidden md:inline-block text-neutral-400 dark:text-neutral-500">
                {profile.location}
              </span>
            )}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 hover:text-amber-500 transition-colors uppercase tracking-widest text-[11px] cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4 text-amber-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
