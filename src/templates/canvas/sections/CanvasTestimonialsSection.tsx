/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasTestimonialsSection - Partner endorsements and client testimonials
 */

import React from 'react';
import { Quote } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasTestimonialsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
}

export const CanvasTestimonialsSection: React.FC<CanvasTestimonialsSectionProps> = ({
  data,
  enabled,
  sectionNumber = '09',
}) => {
  const { testimonials } = data;
  const hasData = hasSectionData('testimonials', data);

  if (!enabled || !hasData || !testimonials || testimonials.length === 0) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-32"
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Endorsements & Collaborative Feedback"
        subtitle="Direct observations and partner assessments from executive leadership and stakeholders."
        count={testimonials.length}
        countLabel="QUOTES"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item, idx) => (
          <article
            key={item.id}
            className="p-8 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg flex flex-col justify-between space-y-6 hover:border-orange-600 dark:hover:border-orange-500 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                <span className="text-orange-600 dark:text-orange-400 font-bold">
                  // TESTIMONIAL 0{idx + 1}
                </span>
                <Quote className="w-5 h-5 text-orange-600 dark:text-orange-400 opacity-60" />
              </div>

              <p className="text-base text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              {item.avatarUrl && (
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-neutral-300 dark:border-neutral-700">
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
                <div className="font-mono text-xs text-neutral-500 truncate">
                  {item.role}
                  {item.company ? ` · ${item.company}` : ''}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
