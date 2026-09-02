/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralFooter - Futuristic terminal footer with return-to-top routing
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';

export interface NeuralFooterProps {
  data: PortfolioData;
}

export const NeuralFooter: React.FC<NeuralFooterProps> = ({ data }) => {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-neutral-200/80 dark:border-white/5 py-12 bg-white/40 dark:bg-[#08090C]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-neutral-500 dark:text-neutral-400">
          {/* Identity & Copyright */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-cyan-500" />
            <span>
              © {currentYear} {profile.name}. ALL RIGHTS RESERVED.
            </span>
            {profile.pronouns && (
              <span className="text-neutral-400 dark:text-neutral-600">
                ({profile.pronouns})
              </span>
            )}
          </div>

          {/* Location & Back to Top */}
          <div className="flex items-center gap-6">
            {profile.location && (
              <span className="hidden md:inline-block text-neutral-400 dark:text-neutral-500">
                LOC // {profile.location}
              </span>
            )}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-cyan-500 transition-colors uppercase tracking-widest text-[11px] cursor-pointer"
            >
              <span>RETURN TO APEX</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
