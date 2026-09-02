/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialFooter - Publication colophon & back-to-top masthead anchor
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ArrowUp } from 'lucide-react';

interface EditorialFooterProps {
  data: PortfolioData;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-20 border-t border-[#171717]/15 dark:border-[#F5F2EA]/15 bg-[#FFFDF8] dark:bg-[#191817] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline pb-8 border-b border-[#171717]/10 dark:border-[#F5F2EA]/10">
          <div className="md:col-span-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B42318] dark:text-[#F06A5F] block mb-2">
              COLOPHON
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] dark:text-[#F5F2EA] font-normal tracking-tight">
              {data.profile.name}
            </h3>
            {data.profile.headline && (
              <p className="font-serif italic text-sm text-[#68655F] dark:text-[#B8B3AA] mt-1 max-w-md">
                {data.profile.headline}
              </p>
            )}
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-4 font-mono text-xs text-[#918D85] dark:text-[#817C74]">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#171717]/15 dark:border-[#F5F2EA]/15 text-[#171717] dark:text-[#F5F2EA] hover:bg-[#171717] hover:text-[#FFFDF8] dark:hover:bg-[#F5F2EA] dark:hover:text-[#111111] transition-colors cursor-pointer"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-[#918D85] dark:text-[#817C74]">
          <div>
            <span>ALL RIGHTS RESERVED — </span>
            <span className="text-[#171717] dark:text-[#F5F2EA]">{data.profile.name}</span>
          </div>

          <div>
            <span>COMPOSED IN EDITORIAL GRID FORMAT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
