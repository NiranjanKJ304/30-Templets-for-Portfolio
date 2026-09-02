/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirTestimonialsSection - Critical endorsements for Magazine Noir
 */

import React from 'react';
import type { PortfolioData, Testimonial } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface NoirTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NoirTestimonialsSection: React.FC<NoirTestimonialsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const testimonials = data.testimonials;

  if (!enabled || !testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      <NoirSectionHeader
        index="09"
        title="Critical Endorsements"
        subtitle="Collaborator assessments, executive testimonials, and peer critique."
        count={testimonials.length}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {testimonials.map((item: Testimonial, idx: number) => {
          return (
            <article
              key={item.id || idx}
              className="p-8 sm:p-12 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs flex flex-col justify-between"
            >
              <div className="mb-8">
                <span className="font-serif text-5xl text-[#8B5E3C] dark:text-[#C49A6C] leading-none block mb-4">
                  “
                </span>
                <p className="font-serif italic text-xl sm:text-2xl text-[#171717] dark:text-[#F4F1EA] font-normal leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-6 border-t border-[#171717]/10 dark:border-[#F4F1EA]/10 flex items-center gap-4">
                {item.avatarUrl && (
                  <div className="w-14 h-14 overflow-hidden border border-[#171717]/10 dark:border-[#F4F1EA]/10 shrink-0">
                    <ImageWithFallback
                      src={item.avatarUrl}
                      alt={item.author}
                      aspectRatioClass="w-full h-full"
                      className="w-full h-full object-cover grayscale contrast-110"
                    />
                  </div>
                )}

                <div className="flex flex-col">
                  <span className="font-sans font-bold text-base text-[#171717] dark:text-[#F4F1EA]">
                    {item.author}
                  </span>
                  {(item.role || item.company) && (
                    <span className="font-mono text-xs text-[#68645D] dark:text-[#B8B2A8]">
                      {[item.role, item.company].filter(Boolean).join(', ')}
                    </span>
                  )}
                  {item.relationship && (
                    <span className="font-mono text-[10px] uppercase text-[#99938A] dark:text-[#777168]">
                      {item.relationship}
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
