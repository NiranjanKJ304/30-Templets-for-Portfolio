/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralTestimonialsSection - Peer endorsements and testimonials
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralTestimonialsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const NeuralTestimonialsSection: React.FC<NeuralTestimonialsSectionProps> = ({
  data,
  enabled,
  indexStr = '09',
}) => {
  const { testimonials } = data;
  const hasData = hasSectionData('testimonials', data);

  if (!enabled || !hasData || !testimonials || testimonials.length === 0) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <NeuralSectionHeader
        index={indexStr}
        title="Peer Endorsements & Commentary"
        subtitle="Perspectives from colleagues, institutional collaborators, and partners."
        count={testimonials.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-colors relative"
          >
            <span className="text-3xl font-mono text-cyan-500/40 select-none">“</span>

            <blockquote className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed">
              {item.quote}
            </blockquote>

            <div className="pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center gap-3.5">
              {item.avatarUrl && (
                <div className="w-10 h-10 overflow-hidden border border-neutral-300 dark:border-white/10 shrink-0">
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
                <div className="font-sans font-bold text-neutral-900 dark:text-neutral-100 text-sm">
                  {item.author}
                </div>
                {(item.role || item.company) && (
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
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
