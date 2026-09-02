/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyTestimonialsSection - Partner endorsements and feedback
 */

import React from 'react';
import { Quote } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { JourneySectionHeader } from '../components/JourneySectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface JourneyTestimonialsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterNumber?: string;
}

export const JourneyTestimonialsSection: React.FC<JourneyTestimonialsSectionProps> = ({
  data,
  enabled,
  chapterNumber = '09',
}) => {
  const { testimonials } = data;
  const hasData = hasSectionData('testimonials', data);

  if (!enabled || !hasData || !testimonials || testimonials.length === 0) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800"
      containerClassName="max-w-5xl"
    >
      <JourneySectionHeader
        chapterNumber={chapterNumber}
        title="Endorsements & Testimonials"
        subtitle="Direct observations and peer assessments from collaborators and leadership."
        count={testimonials.length}
        countLabel="QUOTES"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item, idx) => (
          <div
            key={item.id || idx}
            className="p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xs flex flex-col justify-between space-y-6 hover:border-teal-500 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                <span className="text-teal-700 dark:text-teal-400 font-semibold">
                  // TESTIMONIAL 0{idx + 1}
                </span>
                <Quote className="w-5 h-5 text-teal-600 dark:text-teal-400 opacity-50" />
              </div>

              <p className="text-base text-neutral-800 dark:text-neutral-200 leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              {item.avatarUrl && (
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-neutral-200 dark:border-neutral-700">
                  <ImageWithFallback
                    src={item.avatarUrl}
                    alt={item.author}
                    fallbackText={item.author.charAt(0)}
                    aspectRatioClass="aspect-square"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="space-y-0.5 min-w-0">
                <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100 truncate">
                  {item.author}
                </div>
                <div className="text-xs text-neutral-500 truncate">
                  {item.role}
                  {item.company ? ` · ${item.company}` : ''}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
