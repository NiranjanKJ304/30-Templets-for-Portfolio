/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveConnectSection - Structured directory of verified social and external channels
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { SocialLinks } from '../../../core/components/SocialLinks';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveConnectSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const ExecutiveConnectSection: React.FC<ExecutiveConnectSectionProps> = ({
  data,
  enabled,
  indexStr = '10',
}) => {
  const { socials } = data;
  const hasData = hasSectionData('connect', data);

  if (!enabled || !hasData || !socials || socials.length === 0) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <ExecutiveSectionHeader
        index={indexStr}
        title="External Channels & Profiles"
        subtitle="Verified professional networks, public research repositories, and external media channels."
        count={socials.length}
      />

      <div className="space-y-6">
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl">
          Direct connections and profiles across recognized academic, technical, and industry platforms.
        </p>

        <div className="pt-2">
          <SocialLinks socials={socials} variant="cards" className="max-w-3xl" />
        </div>
      </div>
    </SectionWrapper>
  );
};
