/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaAboutSection - Narrative biography chapter with wide typographic statements
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaAboutSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
}

export const CinemaAboutSection: React.FC<CinemaAboutSectionProps> = ({
  data,
  enabled,
  chapterIndex = '01',
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
      className="py-24 sm:py-32"
      containerClassName="max-w-6xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Origins & Perspective"
        subtitle="Professional ethos, core principles, and narrative background."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side: Editorial Quote & Coordinates (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {profile.headline && (
            <blockquote className="text-2xl sm:text-3xl font-serif text-neutral-900 dark:text-neutral-100 leading-snug border-l-2 border-amber-500 pl-6 italic">
              "{profile.headline}"
            </blockquote>
          )}

          {/* Real Coordinates & Information */}
          <div className="p-6 sm:p-8 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-xl space-y-4 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
              DOSSIER SUMMARY
            </div>

            {roleOrHeadline && (
              <div className="space-y-1">
                <div className="text-neutral-400 dark:text-neutral-500 uppercase tracking-wider text-[10px]">
                  Focus Discipline
                </div>
                <div className="font-sans text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  {roleOrHeadline}
                </div>
              </div>
            )}

            {profile.location && (
              <div className="space-y-1 pt-3 border-t border-neutral-200 dark:border-white/5">
                <div className="text-neutral-400 dark:text-neutral-500 uppercase tracking-wider text-[10px]">
                  Current Base
                </div>
                <div className="text-neutral-800 dark:text-neutral-200">
                  {profile.location}
                </div>
              </div>
            )}

            {(profile.statusBadge || profile.availableForHire) && (
              <div className="pt-3 border-t border-neutral-200 dark:border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                <span className="text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
                  {profile.statusBadge || 'AVAILABLE FOR COLLABORATION'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Multi-Paragraph Biography (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
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
