/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroTestimonialsSection - Typographic editorial quote panels
 */

import React from 'react';
import { Quote } from 'lucide-react';
import type { PortfolioData, Testimonial } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroTestimonialsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const RetroTestimonialsSection: React.FC<RetroTestimonialsSectionProps> = ({
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
      className="py-16 sm:py-24 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="ENDORSEMENTS"
        title="Testimonials"
        subtitle="Verifications, peer citations, and professional recommendations."
        accentColor="terracotta"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item: Testimonial, idx: number) => {
          return (
            <div
              key={item.id || idx}
              className="relative bg-[#FFF9EA] dark:bg-[#362E28] border-3 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_#29231F] dark:shadow-[6px_6px_0px_0px_rgba(255,244,214,0.15)] flex flex-col justify-between space-y-6"
            >
              {/* Retro Quote Icon */}
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-[#E76F2E] text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                  <Quote className="w-5 h-5" />
                </span>
                {item.relationship && (
                  <span className="font-mono text-xs font-bold uppercase text-[#665D55] dark:text-[#A89B8E]">
                    // {item.relationship}
                  </span>
                )}
              </div>

              {/* Quote Body */}
              <p className="text-base sm:text-lg font-medium text-[#29231F] dark:text-[#FFF4D6] leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t-2 border-[#29231F]/10 dark:border-[#FFF4D6]/10 flex items-center gap-3.5">
                {item.avatarUrl && (
                  <img
                    src={item.avatarUrl}
                    alt={item.author}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#29231F] dark:border-[#FFF4D6]/20 shadow-[2px_2px_0px_0px_#29231F]"
                  />
                )}
                <div>
                  <h4 className="font-black uppercase tracking-tight text-[#29231F] dark:text-[#FFF4D6] text-sm sm:text-base">
                    {item.author}
                  </h4>
                  {(item.role || item.company) && (
                    <p className="font-mono text-xs font-bold text-[#E76F2E]">
                      {item.role}{item.role && item.company ? ' at ' : ''}{item.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
