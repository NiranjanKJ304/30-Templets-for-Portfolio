/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaTestimonialsSection - Peer commentary and collaborative endorsements
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaTestimonialsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
}

export const CinemaTestimonialsSection: React.FC<CinemaTestimonialsSectionProps> = ({
  data,
  enabled,
  chapterIndex = '09',
}) => {
  const { testimonials } = data;
  const hasData = hasSectionData('testimonials', data);

  if (!enabled || !hasData || !testimonials || testimonials.length === 0) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="py-24 sm:py-36"
      containerClassName="max-w-6xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Peer Endorsements & Perspectives"
        subtitle="Observations and commentary from collaborators, clients, and partners."
        count={testimonials.length}
        countLabel="TESTIMONIALS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="p-8 sm:p-10 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl flex flex-col justify-between space-y-8 hover:border-amber-500/40 transition-all relative"
          >
            <span className="text-5xl font-serif text-amber-500/40 select-none leading-none">
              “
            </span>

            <blockquote className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-serif leading-relaxed italic">
              {item.quote}
            </blockquote>

            <div className="pt-4 border-t border-neutral-200 dark:border-white/5 flex items-center gap-4">
              {item.avatarUrl && (
                <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-300 dark:border-white/10 shrink-0">
                  <ImageWithFallback
                    src={item.avatarUrl}
                    alt={item.author}
                    fallbackText={item.author.charAt(0)}
                    aspectRatioClass="aspect-square"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              )}

              <div>
                <div className="font-serif font-bold text-neutral-900 dark:text-neutral-100 text-base">
                  {item.author}
                </div>
                {(item.role || item.company) && (
                  <div className="text-xs font-mono text-amber-600 dark:text-amber-400">
                    {item.role}
                    {item.role && item.company && ' · '}
                    {item.company}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
