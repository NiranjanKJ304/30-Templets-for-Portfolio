/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalAboutSection - Clean biographical narrative for Minimal template
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalAboutSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const MinimalAboutSection: React.FC<MinimalAboutSectionProps> = ({ data, enabled }) => {
  const { profile } = data;
  const hasData = hasSectionData('about', data);

  if (!enabled || !hasData) return null;

  const content = profile.bio || profile.summary;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-20"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="About" />

      <div className="prose prose-neutral dark:prose-invert max-w-none text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans space-y-4">
        {content?.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="whitespace-pre-line">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
};
