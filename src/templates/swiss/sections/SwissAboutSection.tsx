/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissAboutSection - Structured narrative & context register
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissAboutSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const SwissAboutSection: React.FC<SwissAboutSectionProps> = ({
  data,
  enabled,
  indexNumber = '01',
}) => {
  const { profile } = data;
  const hasData = hasSectionData('about', data);

  if (!enabled || !hasData) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b border-neutral-900 dark:border-neutral-100"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Background & Context"
        subtitle="Professional background, core focus areas, and operational philosophy."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Specification Rail (Cols 1-4) */}
        <div className="md:col-span-4 border border-neutral-900 dark:border-neutral-100 p-6 bg-neutral-50 dark:bg-neutral-900 space-y-4 font-mono text-xs">
          <div className="text-red-600 dark:text-red-500 font-bold uppercase tracking-wider">
            // PARAMETERS
          </div>

          <div className="space-y-2">
            <div className="flex justify-between py-1.5 border-b border-neutral-200 dark:border-neutral-800">
              <span className="text-neutral-500 uppercase">SUBJECT:</span>
              <span className="font-bold text-neutral-950 dark:text-neutral-50 text-right truncate max-w-[140px]">
                {profile.name}
              </span>
            </div>

            {profile.title && (
              <div className="flex justify-between py-1.5 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-neutral-500 uppercase">ROLE:</span>
                <span className="font-bold text-neutral-950 dark:text-neutral-50 text-right truncate max-w-[140px]">
                  {profile.title}
                </span>
              </div>
            )}

            {profile.location && (
              <div className="flex justify-between py-1.5 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-neutral-500 uppercase">LOCATION:</span>
                <span className="font-bold text-neutral-950 dark:text-neutral-50 text-right truncate max-w-[140px]">
                  {profile.location}
                </span>
              </div>
            )}

            {profile.statusBadge && (
              <div className="flex justify-between py-1.5 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-neutral-500 uppercase">DISPOSITION:</span>
                <span className="font-bold text-neutral-950 dark:text-neutral-50 text-right truncate max-w-[140px]">
                  {profile.statusBadge}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Narrative Text Block (Cols 5-12) */}
        <div className="md:col-span-8 space-y-6">
          {profile.bio ? (
            <div className="prose dark:prose-invert max-w-none text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-normal leading-relaxed whitespace-pre-line">
              {profile.bio}
            </div>
          ) : profile.shortBio ? (
            <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
              {profile.shortBio}
            </p>
          ) : null}
        </div>
      </div>
    </SectionWrapper>
  );
};
