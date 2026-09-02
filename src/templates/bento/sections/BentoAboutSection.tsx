/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoAboutSection - Narrative biography tile within the Bento grid
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoTileHeader } from '../components/BentoTileHeader';
import { BookOpen } from 'lucide-react';

interface BentoAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BentoAboutSection: React.FC<BentoAboutSectionProps> = ({
  data,
  enabled = true,
}) => {
  const bio = data.profile.bio;

  if (!enabled || !bio || !bio.trim()) {
    return null;
  }

  return (
    <section id="about" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoTile span="col-12" variant="subtle" padding="lg">
        <BentoTileHeader
          label="// BIOGRAPHY"
          title="About & Background"
          icon={<BookOpen className="w-4 h-4 text-[#3B82F6]" />}
        />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="font-sans text-base sm:text-lg text-[#171A1F]/90 dark:text-[#F4F5F7]/90 leading-relaxed whitespace-pre-line">
            {bio}
          </p>
        </div>
      </BentoTile>
    </section>
  );
};
