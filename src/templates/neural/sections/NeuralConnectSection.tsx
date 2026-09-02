/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralConnectSection - Verified external network channels
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { SocialLinks } from '../../../core/components/SocialLinks';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralConnectSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const NeuralConnectSection: React.FC<NeuralConnectSectionProps> = ({
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
      <NeuralSectionHeader
        index={indexStr}
        title="Network & External Channels"
        subtitle="Verified professional profiles, code repositories, creative platforms, and publications."
        count={socials.length}
      />

      <div className="space-y-6">
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl leading-relaxed">
          Direct verified links across recognized technical, research, creative, and professional platforms.
        </p>

        <div className="pt-2">
          <SocialLinks socials={socials} variant="cards" className="max-w-4xl" />
        </div>
      </div>
    </SectionWrapper>
  );
};
