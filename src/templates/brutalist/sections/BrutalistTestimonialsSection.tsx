/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistTestimonialsSection - Oversized quote ledger
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';

interface BrutalistTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BrutalistTestimonialsSection: React.FC<BrutalistTestimonialsSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.testimonials || data.testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="09"
          title="Endorsements"
          subtitle="COLLABORATIVE WITNESS & TESTIMONIALS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.testimonials.map((item, idx) => (
            <div
              key={item.id || idx}
              className="p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[6px_6px_0px_0px_#111111] dark:shadow-[6px_6px_0px_0px_#F4F1E8] flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-[#EF4444] mb-4">
                  // TESTIMONY_{String(idx + 1).padStart(2, '0')}
                </div>
                <blockquote className="font-sans font-black text-lg sm:text-xl uppercase text-[#111111] dark:text-[#F4F1E8] leading-snug mb-6 border-l-4 border-[#2563EB] pl-4">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t-2 border-[#111111] dark:border-[#F4F1E8] flex items-center gap-3.5">
                {item.avatarUrl ? (
                  <img
                    src={item.avatarUrl}
                    alt={item.author}
                    className="w-10 h-10 object-cover border-2 border-[#111111] dark:border-[#F4F1E8] grayscale"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] flex items-center justify-center font-mono font-black text-sm">
                    {item.author.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-sans font-black text-sm uppercase text-[#111111] dark:text-[#F4F1E8]">
                    {item.author}
                  </h4>
                  <p className="font-mono text-[11px] text-[#666666] dark:text-[#A0A0A0]">
                    {item.role} {item.company && `// ${item.company}`}
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
