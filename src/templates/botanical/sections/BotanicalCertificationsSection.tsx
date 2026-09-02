/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalCertificationsSection - Verified credentials
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { Award, ExternalLink } from 'lucide-react';

interface BotanicalCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BotanicalCertificationsSection: React.FC<BotanicalCertificationsSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled || !data.certifications || data.certifications.length === 0) return null;

  return (
    <section
      id="certifications"
      className="py-20 md:py-28 border-b border-[#D8D4C8] dark:border-[#2C3E30] bg-[#EBE9DF]/50 dark:bg-[#141E17] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
            07 / Accreditations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal">
            Certified Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.certifications.map((cert, idx) => (
            <div
              key={cert.id || idx}
              className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center mb-4">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1C261E] dark:text-[#F0F5F1] mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-[#BF6648] dark:text-[#E58A6C] font-mono mb-2">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#D8D4C8]/50 dark:border-[#2C3E30]/50 text-xs">
                <span className="text-[#586359] dark:text-[#9BB0A0] font-mono">
                  Issued: {cert.issueDate}
                </span>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#243828] dark:text-[#8EB697] hover:underline"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
