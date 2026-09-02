/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissTestimonialsSection - Structured endorsements register
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissTestimonialsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const SwissTestimonialsSection: React.FC<SwissTestimonialsSectionProps> = ({
  data,
  enabled,
  indexNumber = '09',
}) => {
  const { testimonials } = data;
  const hasData = hasSectionData('testimonials', data);

  if (!enabled || !hasData || !testimonials || testimonials.length === 0) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b border-neutral-900 dark:border-neutral-100"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Endorsements & Testimonials"
        subtitle="Verifications, stakeholder feedback, and peer assessments."
        count={testimonials.length}
        countLabel="STATEMENTS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <div
            key={item.id || idx}
            className="border border-neutral-900 dark:border-neutral-100 p-6 sm:p-8 bg-white dark:bg-neutral-950 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="font-mono text-xs text-red-600 dark:text-red-500 font-bold uppercase tracking-wider pb-2 border-b border-neutral-200 dark:border-neutral-800">
                STATEMENT // 0{idx + 1}
              </div>

              <blockquote className="text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
                "{item.quote}"
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              {item.avatarUrl && (
                <div className="w-10 h-10 border border-neutral-900 dark:border-neutral-100 overflow-hidden shrink-0">
                  <ImageWithFallback
                    src={item.avatarUrl}
                    alt={item.author}
                    fallbackText={item.author.charAt(0)}
                    aspectRatioClass="aspect-square"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              )}

              <div className="space-y-0.5 min-w-0">
                <div className="font-bold text-sm text-neutral-950 dark:text-neutral-50 truncate uppercase tracking-tight">
                  {item.author}
                </div>
                <div className="font-mono text-xs text-neutral-500 truncate">
                  {item.role}
                  {item.company ? ` / ${item.company}` : ''}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
