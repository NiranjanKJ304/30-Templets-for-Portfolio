/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistAboutSection - Raw editorial dossier & bio registry
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';

interface BrutalistAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BrutalistAboutSection: React.FC<BrutalistAboutSectionProps> = ({
  data,
  enabled = true,
}) => {
  const { profile } = data;
  const aboutText = profile.bio || profile.summary;

  if (!enabled || !aboutText) return null;

  return (
    <section
      id="about"
      className="py-16 md:py-24 border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="01"
          title="About & Dossier"
          subtitle="PRIMARY BIOGRAPHY & OPERATIONAL PERSPECTIVE"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement Box */}
          <div className="lg:col-span-8 p-6 sm:p-10 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[6px_6px_0px_0px_#111111] dark:shadow-[6px_6px_0px_0px_#F4F1E8]">
            {profile.headline && (
              <div className="mb-6 pb-6 border-b-2 border-[#111111] dark:border-[#F4F1E8]">
                <span className="font-mono text-xs font-bold uppercase text-[#2563EB] block mb-2">
                  [CORE FOCUS]
                </span>
                <p className="font-sans text-xl sm:text-2xl font-black uppercase text-[#111111] dark:text-[#F4F1E8] leading-snug">
                  {profile.headline}
                </p>
              </div>
            )}

            <div className="font-sans text-base sm:text-lg leading-relaxed text-[#222222] dark:text-[#DDDDDD] whitespace-pre-line">
              {aboutText}
            </div>
          </div>

          {/* Side Structural Registry Index */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-5 bg-[#FFFFFF] dark:bg-[#191919] border-2 border-[#111111] dark:border-[#F4F1E8] shadow-[4px_4px_0px_0px_#111111] dark:shadow-[4px_4px_0px_0px_#F4F1E8]">
              <div className="font-mono text-xs font-bold uppercase text-[#EF4444] mb-1">
                // JURISDICTION & BASE
              </div>
              <div className="font-sans font-bold text-sm text-[#111111] dark:text-[#F4F1E8]">
                {profile.location || 'GLOBAL REMOTE'}
              </div>
            </div>

            {profile.role && (
              <div className="p-5 bg-[#FFFFFF] dark:bg-[#191919] border-2 border-[#111111] dark:border-[#F4F1E8] shadow-[4px_4px_0px_0px_#111111] dark:shadow-[4px_4px_0px_0px_#F4F1E8]">
                <div className="font-mono text-xs font-bold uppercase text-[#2563EB] mb-1">
                  // DISCIPLINE
                </div>
                <div className="font-sans font-bold text-sm text-[#111111] dark:text-[#F4F1E8]">
                  {profile.role}
                </div>
              </div>
            )}

            <div className="p-5 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] border-2 border-[#111111] dark:border-[#F4F1E8]">
              <div className="font-mono text-xs font-bold uppercase mb-1">
                // SYSTEM_STATUS
              </div>
              <div className="font-mono text-xs font-bold">
                {profile.availableForHire ? 'OPEN_FOR_COMMISSION' : 'ACTIVE_DEPLOYMENT'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
