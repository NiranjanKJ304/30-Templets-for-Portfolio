/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicTestimonialsSection - Authentic peer endorsements
 */

import React from 'react';
import type { PortfolioData, Testimonial } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { Quote, ExternalLink } from 'lucide-react';

interface NeoOrganicTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NeoOrganicTestimonialsSection: React.FC<NeoOrganicTestimonialsSectionProps> = ({
  data,
  enabled = true,
}) => {
  const testimonials = data.testimonials;

  if (!enabled || !testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="Testimonials"
        subtitle="Perspectives from collaborators, mentors, and organizational leadership."
        count={testimonials.length}
        accentColor="green"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((item: Testimonial, index: number) => {
          return (
            <div
              key={item.id || index}
              className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#79A66A]/40 dark:text-[#91BD82]/30 mb-4" />
                <blockquote className="text-base sm:text-lg text-[#17211B] dark:text-[#F2F3ED] font-light leading-relaxed italic mb-6">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#17211B]/6 dark:border-[#F2F3ED]/6">
                <div className="flex items-center gap-3">
                  {item.avatarUrl ? (
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#17211B]/10">
                      <ImageWithFallback
                        src={item.avatarUrl}
                        alt={item.author}
                        aspectRatioClass="w-full h-full"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#79A66A] to-[#4169E1] flex items-center justify-center text-white font-bold text-xs shrink-0">
                      {item.author.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>
                    <div className="font-semibold text-sm text-[#17211B] dark:text-[#F2F3ED]">
                      {item.author}
                    </div>
                    {(item.role || item.company) && (
                      <div className="text-xs text-[#59635C] dark:text-[#B8C0B8]">
                        {[item.role, item.company].filter(Boolean).join(' • ')}
                      </div>
                    )}
                    {item.relationship && (
                      <div className="text-[10px] text-[#8A938C] dark:text-[#7F897F] font-mono mt-0.5">
                        {item.relationship}
                      </div>
                    )}
                  </div>
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[#F6F5EF] dark:hover:bg-[#111713] text-[#59635C] dark:text-[#B8C0B8] hover:text-[#4169E1] transition-colors"
                    aria-label={`View reference link for ${item.author}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
