/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraTestimonialsSection - Luminous stakeholder citations
 */

import React from 'react';
import { Quote } from 'lucide-react';
import type { PortfolioData, Testimonial } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraTestimonialsSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const AuroraTestimonialsSection: React.FC<AuroraTestimonialsSectionProps> = ({
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
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="Endorsements"
        title="Recommendations and stakeholder statements."
        subtitle="Citations from engineering peers, executive partners, and collaborators."
        count={testimonials.length}
        countLabel="ENDORSEMENTS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item: Testimonial, idx: number) => (
          <div
            key={item.id || idx}
            className="rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800/80 shadow-md shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-200/60 dark:border-purple-800/60">
                <Quote className="w-5 h-5" />
              </div>

              <blockquote className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                "{item.quote}"
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              {item.avatarUrl && (
                <img
                  src={item.avatarUrl}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border border-neutral-200 dark:border-neutral-700 shrink-0"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="min-w-0">
                <div className="font-bold text-sm text-neutral-950 dark:text-white truncate">
                  {item.author}
                </div>
                {(item.role || item.company) && (
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                    {item.role}
                    {item.role && item.company && ' • '}
                    {item.company}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
