/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveTestimonialsSection - Executive recommendations and peer endorsements
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveTestimonialsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const ExecutiveTestimonialsSection: React.FC<ExecutiveTestimonialsSectionProps> = ({
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
      <ExecutiveSectionHeader
        index={indexStr}
        title="Executive Endorsements & Peer Commentary"
        subtitle="Independent perspectives and references from institutional leaders and collaborators."
        count={testimonials.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="p-8 sm:p-10 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col justify-between space-y-6"
          >
            <blockquote className="font-serif text-base sm:text-lg italic text-neutral-800 dark:text-neutral-200 leading-relaxed">
              "{item.quote}"
            </blockquote>

            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-4">
              {item.avatarUrl && (
                <div className="w-10 h-10 overflow-hidden border border-neutral-300 dark:border-neutral-700 shrink-0">
                  <ImageWithFallback
                    src={item.avatarUrl}
                    alt={item.author}
                    fallbackText={item.author.charAt(0)}
                    aspectRatioClass="aspect-square"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              )}

              <div className="text-xs">
                <div className="font-serif font-bold text-neutral-950 dark:text-neutral-50 text-sm">
                  {item.author}
                </div>
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
