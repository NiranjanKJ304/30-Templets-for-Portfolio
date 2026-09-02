/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalTestimonialsSection - Recommendations and peer endorsements for Minimal template
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalTestimonialsSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const MinimalTestimonialsSection: React.FC<MinimalTestimonialsSectionProps> = ({
  data,
  enabled,
}) => {
  const { testimonials } = data;
  const hasData = hasSectionData('testimonials', data);

  if (!enabled || !hasData || !testimonials || testimonials.length === 0) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-20"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="Endorsements" count={testimonials.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="p-6 border border-[#1C1917]/10 dark:border-neutral-800 rounded-sm bg-white dark:bg-[#141210] flex flex-col justify-between space-y-4"
          >
            <blockquote className="text-sm text-neutral-700 dark:text-neutral-300 font-sans italic leading-relaxed">
              "{item.quote}"
            </blockquote>

            <div className="flex items-center gap-3 pt-3 border-t border-[#1C1917]/5 dark:border-neutral-800">
              {item.avatarUrl && (
                <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-neutral-200 dark:border-neutral-700">
                  <ImageWithFallback
                    src={item.avatarUrl}
                    alt={item.author}
                    fallbackText={item.author.charAt(0)}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="text-xs">
                <div className="font-bold text-neutral-900 dark:text-neutral-100">{item.author}</div>
                {(item.role || item.company) && (
                  <div className="text-neutral-500 dark:text-neutral-400 font-mono text-[11px]">
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
