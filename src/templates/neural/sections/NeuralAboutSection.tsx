/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralAboutSection - Structured information matrix with optical card framing
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralAboutSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const NeuralAboutSection: React.FC<NeuralAboutSectionProps> = ({
  data,
  enabled,
  indexStr = '01',
}) => {
  const { profile } = data;
  const hasData = hasSectionData('about', data);

  if (!enabled || !hasData) return null;

  const content = profile.bio || profile.summary;
  const roleOrHeadline = profile.role || profile.headline;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <NeuralSectionHeader
        index={indexStr}
        title="Background & Objectives"
        subtitle="Core philosophy, professional journey, and domain focus."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Tactical Diagnostic Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 relative group">
            {/* Corner Crosshair Accents */}
            <span className="absolute top-2 left-2 text-[10px] font-mono text-cyan-500">⌑</span>
            <span className="absolute bottom-2 right-2 text-[10px] font-mono text-cyan-500">⌑</span>

            <div className="space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
                PROFILE ATTRIBUTES
              </div>

              {roleOrHeadline && (
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Primary Specialization
                  </div>
                  <div className="font-sans text-base font-bold text-neutral-900 dark:text-neutral-100">
                    {roleOrHeadline}
                  </div>
                </div>
              )}

              {profile.location && (
                <div className="space-y-1 pt-3 border-t border-neutral-100 dark:border-white/5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Location Base
                  </div>
                  <div className="font-mono text-sm text-neutral-700 dark:text-neutral-300">
                    {profile.location}
                  </div>
                </div>
              )}

              {(profile.statusBadge || profile.availableForHire) && (
                <div className="pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
                    {profile.statusBadge || 'AVAILABLE'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Multi-paragraph Bio Narrative (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {profile.headline && (
            <p className="text-xl sm:text-2xl font-sans font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
              {profile.headline}
            </p>
          )}

          <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed space-y-4">
            {content?.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
