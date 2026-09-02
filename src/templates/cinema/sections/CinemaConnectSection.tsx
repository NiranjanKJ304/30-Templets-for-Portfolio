/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaConnectSection - Verified external network channels and portals
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { SocialLinks } from '../../../core/components/SocialLinks';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaConnectSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
}

export const CinemaConnectSection: React.FC<CinemaConnectSectionProps> = ({
  data,
  enabled,
  chapterIndex = '10',
}) => {
  const { socials } = data;
  const hasData = hasSectionData('connect', data);

  if (!enabled || !hasData || !socials || socials.length === 0) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="py-24 sm:py-36"
      containerClassName="max-w-6xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Network & External Portals"
        subtitle="Direct verified links across professional platforms, repositories, and publications."
        count={socials.length}
        countLabel="CHANNELS"
      />

      <div className="space-y-8">
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl leading-relaxed">
          Explore ongoing work, open initiatives, writing, and professional profiles across external networks.
        </p>

        <div className="pt-2">
          <SocialLinks socials={socials} variant="cards" className="max-w-4xl" />
        </div>
      </div>
    </SectionWrapper>
  );
};
