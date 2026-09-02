/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalAboutSection - Philosophy, Manifesto, & Core Values
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { Feather, Sun, Compass } from 'lucide-react';

interface BotanicalAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BotanicalAboutSection: React.FC<BotanicalAboutSectionProps> = ({
  data,
  enabled = true,
}) => {
  const { profile } = data;
  const aboutText = profile.bio || profile.summary;

  if (!enabled || !aboutText) return null;

  return (
    <section
      id="about"
      className="py-20 md:py-28 border-b border-[#D8D4C8] dark:border-[#2C3E30] bg-[#F6F5F0] dark:bg-[#101712] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Heading */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
              01 / Manifesto & Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal leading-snug">
              Rooted in thoughtful craft & purposeful growth.
            </h2>
          </div>

          {/* Body Content */}
          <div className="lg:col-span-8 space-y-8">
            {profile.headline && (
              <div className="text-lg sm:text-xl font-serif text-[#1C261E] dark:text-[#F0F5F1] leading-relaxed border-l-2 border-[#BF6648] dark:border-[#E58A6C] pl-6 italic">
                {profile.headline}
              </div>
            )}

            <div className="text-sm sm:text-base leading-relaxed text-[#586359] dark:text-[#9BB0A0] space-y-4 font-sans whitespace-pre-line">
              {aboutText}
            </div>

            {/* Values Grid */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] flex items-start gap-3.5 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#586359] dark:text-[#9BB0A0] block mb-1">
                    Orientation
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#1C261E] dark:text-[#F0F5F1]">
                    Systemic Clarity & Natural Balance
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] flex items-start gap-3.5 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#586359] dark:text-[#9BB0A0] block mb-1">
                    Philosophy
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#1C261E] dark:text-[#F0F5F1]">
                    Sustainable, Long-Horizon Craft
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
