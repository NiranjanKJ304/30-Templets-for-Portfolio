/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasAboutSection - Architectural dossier index and narrative editorial canvas
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasAboutSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
}

export const CanvasAboutSection: React.FC<CanvasAboutSectionProps> = ({
  data,
  enabled,
  sectionNumber = '01',
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
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Perspective & Dossier"
        subtitle="Foundational background, strategic discipline, and operational focus."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Dossier Index Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-8 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg space-y-5 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider">
              <span>INDEX SPEC</span>
              <span>// 01</span>
            </div>

            {roleOrHeadline && (
              <div className="space-y-1">
                <div className="text-neutral-400 uppercase tracking-widest text-[10px]">
                  Discipline
                </div>
                <div className="font-sans text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  {roleOrHeadline}
                </div>
              </div>
            )}

            {profile.location && (
              <div className="space-y-1 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <div className="text-neutral-400 uppercase tracking-widest text-[10px]">
                  Base Coordinates
                </div>
                <div className="text-neutral-800 dark:text-neutral-200">
                  {profile.location}
                </div>
              </div>
            )}

            {(profile.statusBadge || profile.availableForHire) && (
              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-orange-600 dark:bg-orange-400" />
                <span className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider text-[11px]">
                  {profile.statusBadge || 'ACTIVE COLLABORATION'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Long-Form Narrative (8 cols) */}
        <div className="lg:col-span-8 p-8 sm:p-10 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg space-y-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
          {content?.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
