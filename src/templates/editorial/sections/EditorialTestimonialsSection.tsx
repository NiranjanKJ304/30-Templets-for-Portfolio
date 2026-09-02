/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialTestimonialsSection - Editorial pull quotes & endorsements
 */

import React from 'react';
import type { PortfolioData, Testimonial } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface EditorialTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const EditorialTestimonialsSection: React.FC<EditorialTestimonialsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const testimonials = data.testimonials;

  if (!enabled || !testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="pt-12 sm:pt-16 pb-12 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15">
      <EditorialSectionHeader
        index="09"
        title="Critical Reception & Endorsements"
        subtitle="Testimonials, collaborator statements, and peer assessments."
        count={testimonials.length}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
        {testimonials.map((item: Testimonial, idx: number) => {
          return (
            <article
              key={item.id || idx}
              className="p-8 sm:p-10 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs flex flex-col justify-between"
            >
              <div className="mb-6">
                <span className="font-serif text-4xl text-[#B42318] dark:text-[#F06A5F] leading-none block mb-2">
                  “
                </span>
                <p className="font-serif italic text-lg sm:text-xl text-[#171717] dark:text-[#F5F2EA] leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Author Metadata */}
              <div className="pt-6 border-t border-[#171717]/10 dark:border-[#F5F2EA]/10 flex items-center gap-4">
                {item.avatarUrl && (
                  <div className="w-12 h-12 overflow-hidden border border-[#171717]/15 dark:border-[#F5F2EA]/15 shrink-0">
                    <ImageWithFallback
                      src={item.avatarUrl}
                      alt={item.author}
                      aspectRatioClass="w-full h-full"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                )}

                <div className="flex flex-col">
                  <span className="font-sans font-bold text-base text-[#171717] dark:text-[#F5F2EA]">
                    {item.author}
                  </span>
                  {(item.role || item.company) && (
                    <span className="font-mono text-xs text-[#68655F] dark:text-[#B8B3AA]">
                      {[item.role, item.company].filter(Boolean).join(', ')}
                    </span>
                  )}
                  {item.relationship && (
                    <span className="font-mono text-[10px] uppercase text-[#918D85] dark:text-[#817C74]">
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
