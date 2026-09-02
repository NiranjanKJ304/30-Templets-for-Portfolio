/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalFooter - Serene, grounded footer
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { Leaf, ArrowUp } from 'lucide-react';

interface BotanicalFooterProps {
  data: PortfolioData;
}

export const BotanicalFooter: React.FC<BotanicalFooterProps> = ({ data }) => {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#EBE9DF] dark:bg-[#0D140F] border-t border-[#D8D4C8] dark:border-[#2C3E30] py-14 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#D8D4C8] dark:border-[#2C3E30]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <p className="font-serif text-lg font-medium text-[#1C261E] dark:text-[#F0F5F1]">
                {profile.name}
              </p>
              <p className="text-xs text-[#586359] dark:text-[#9BB0A0] font-sans">
                {profile.title || profile.role} • Designed with intentional harmony
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D8D4C8] dark:border-[#2C3E30] text-xs font-medium text-[#586359] dark:text-[#9BB0A0] hover:text-[#1C261E] dark:hover:text-[#F0F5F1] hover:bg-[#FFFFFF] dark:hover:bg-[#18221B] transition-all cursor-pointer"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#586359] dark:text-[#9BB0A0] gap-4">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="font-serif italic">Nurtured with care & sustainable design systems.</p>
        </div>
      </div>
    </footer>
  );
};
