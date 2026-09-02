/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoTestimonialsSection - Colleague and client recommendation tiles
 */

import React from 'react';
import type { PortfolioData, Testimonial } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoSectionHeader } from '../components/BentoSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { MessageSquareQuote, Quote } from 'lucide-react';

interface BentoTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BentoTestimonialsSection: React.FC<BentoTestimonialsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const testimonials = data.testimonials;

  if (!enabled || !testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoSectionHeader
        label="// ENDORSEMENTS"
        title="Testimonials & Recommendations"
        subtitle="Feedback from engineering leads, founders, and project collaborators."
        icon={<MessageSquareQuote className="w-4 h-4 text-[#3B82F6]" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 mt-4">
        {testimonials.map((test: Testimonial, idx: number) => {
          const span = testimonials.length === 1 ? 'col-12' : 'col-6';

          return (
            <BentoTile
              key={test.id || idx}
              span={span}
              variant="subtle"
              padding="lg"
              className="flex flex-col justify-between relative overflow-hidden"
            >
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-[#3B82F6]/30 mb-3" />

                <p className="font-sans text-base sm:text-lg italic text-[#171A1F] dark:text-[#F4F5F7] leading-relaxed mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E2E6ED] dark:border-[#2D3340] relative z-10">
                {test.avatarUrl && (
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#E2E6ED] dark:border-[#2D3340]">
                    <ImageWithFallback
                      src={test.avatarUrl}
                      alt={test.author}
                      aspectRatioClass="aspect-square"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#171A1F] dark:text-[#F4F5F7]">
                    {test.author}
                  </h4>
                  {(test.role || test.company) && (
                    <p className="text-xs text-[#5F6672] dark:text-[#9DA5B4]">
                      {test.role}
                      {test.role && test.company && ' · '}
                      {test.company}
                    </p>
                  )}
                </div>
              </div>
            </BentoTile>
          );
        })}
      </div>
    </section>
  );
};
