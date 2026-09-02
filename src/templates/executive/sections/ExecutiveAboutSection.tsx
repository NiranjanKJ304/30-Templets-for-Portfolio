/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveAboutSection - 2-Column editorial narrative with strategic highlights
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveAboutSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const ExecutiveAboutSection: React.FC<ExecutiveAboutSectionProps> = ({
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
      <ExecutiveSectionHeader
        index={indexStr}
        title="Executive Summary & Strategic Vision"
        subtitle="Institutional track record, strategic philosophy, and operating principles."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Column: Quick Strategic Bio card (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              OPERATIONAL SCOPE
            </div>

            {roleOrHeadline && (
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Specialization
                </div>
                <div className="font-serif text-lg font-bold text-neutral-950 dark:text-neutral-50">
                  {roleOrHeadline}
                </div>
              </div>
            )}

            {profile.location && (
              <div className="space-y-1 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Headquarters
                </div>
                <div className="font-serif text-sm text-neutral-800 dark:text-neutral-200">
                  {profile.location}
                </div>
              </div>
            )}

            {profile.availableForHire && (
              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                  ● ACTIVE FOR ENGAGEMENTS
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Multi-paragraph Editorial Narrative (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {profile.headline && (
            <p className="font-serif text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100 font-medium leading-relaxed">
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
