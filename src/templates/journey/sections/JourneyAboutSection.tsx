/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyAboutSection - Perspective chapter framing background and narrative context
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { JourneySectionHeader } from '../components/JourneySectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface JourneyAboutSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterNumber?: string;
}

export const JourneyAboutSection: React.FC<JourneyAboutSectionProps> = ({
  data,
  enabled,
  chapterNumber = '01',
}) => {
  const { profile } = data;
  const hasData = hasSectionData('about', data);

  if (!enabled || !hasData) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800"
      containerClassName="max-w-5xl"
    >
      <JourneySectionHeader
        chapterNumber={chapterNumber}
        title="Perspective & Background"
        subtitle="The foundational context, principles, and perspective shaping my practice."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Narrative Biography Column */}
        <div className="md:col-span-8 space-y-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
          {profile.bio ? (
            profile.bio
              .split('\n\n')
              .filter(Boolean)
              .map((para, i) => (
                <p key={i} className="leading-relaxed">
                  {para}
                </p>
              ))
          ) : profile.shortBio ? (
            <p className="leading-relaxed">{profile.shortBio}</p>
          ) : (
            <p className="leading-relaxed">{profile.headline}</p>
          )}
        </div>

        {/* Anchor Summary Card */}
        <div className="md:col-span-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xs space-y-4">
          <div className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider pb-3 border-b border-neutral-100 dark:border-neutral-800">
            // Anchor Details
          </div>

          {profile.location && (
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 uppercase tracking-wide">Base Location</span>
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {profile.location}
              </p>
            </div>
          )}

          {profile.title && (
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 uppercase tracking-wide">Primary Role</span>
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {profile.title}
              </p>
            </div>
          )}

          {(profile.statusBadge || profile.availableForHire) && (
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 uppercase tracking-wide">Current Status</span>
              <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
                {profile.statusBadge || 'Available for collaboration'}
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
