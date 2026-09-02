/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalConnectSection - Direct social profiles and network discovery for Minimal template
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { SocialLinks } from '../../../core/components/SocialLinks';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalConnectSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const MinimalConnectSection: React.FC<MinimalConnectSectionProps> = ({
  data,
  enabled,
}) => {
  const { socials } = data;
  const hasData = hasSectionData('connect', data);

  if (!enabled || !hasData || !socials || socials.length === 0) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-20"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="Connect" count={socials.length} />

      <div className="space-y-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans">
          Find and follow my work across various networks and channels.
        </p>

        <div className="pt-2">
          <SocialLinks socials={socials} variant="cards" className="max-w-xl" />
        </div>
      </div>
    </SectionWrapper>
  );
};
