/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalTestimonialsSection - Endorsements & collaborative resonance
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { Quote } from 'lucide-react';

interface BotanicalTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BotanicalTestimonialsSection: React.FC<BotanicalTestimonialsSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.testimonials || data.testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 border-b border-[#D8D4C8] dark:border-[#2C3E30] bg-[#EBE9DF]/50 dark:bg-[#141E17] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
            09 / Resonance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal">
            Voices of Collaboration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.testimonials.map((t, idx) => (
            <div
              key={t.id || idx}
              className="p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#BF6648] dark:text-[#E58A6C] opacity-60 mb-6" />
                <p className="font-serif text-base sm:text-lg text-[#1C261E] dark:text-[#F0F5F1] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-[#D8D4C8]/60 dark:border-[#2C3E30]/60">
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover border border-[#D8D4C8] dark:border-[#2C3E30]"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center font-serif font-bold text-sm">
                    {t.author.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-serif font-medium text-sm text-[#1C261E] dark:text-[#F0F5F1]">
                    {t.author}
                  </h4>
                  <p className="text-xs font-mono text-[#586359] dark:text-[#9BB0A0]">
                    {t.role} {t.company && `at ${t.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
