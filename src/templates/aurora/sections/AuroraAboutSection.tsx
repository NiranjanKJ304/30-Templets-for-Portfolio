/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraAboutSection - Airy narrative biography with authentic parameter chips
 */

import React from 'react';
import { MapPin, Mail, Sparkles } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraAboutSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const AuroraAboutSection: React.FC<AuroraAboutSectionProps> = ({
  data,
  enabled,
}) => {
  const { about, profile } = data;
  const hasData = hasSectionData('about', data);

  if (!enabled || !hasData) return null;

  const email = profile.contactEmail;
  const location = profile.location;
  const isAvailable = profile.availableForHire === true;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="About & Narrative"
        title="Perspective, focus, and craft."
        subtitle="The journey, foundational values, and technical outlook."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Main Biography Narrative (Cols 1-8) */}
        <div className="lg:col-span-8 space-y-6">
          {about?.lead && (
            <p className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
              {about.lead}
            </p>
          )}

          {about?.bio && (
            <div className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-4 font-normal">
              {about.bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>

        {/* Floating Parameter Card (Cols 9-12) */}
        <div className="lg:col-span-4 rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800/80 shadow-lg shadow-purple-500/5 backdrop-blur-xl space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Quick Parameters
          </div>

          <div className="space-y-4 text-sm">
            {location && (
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Location</div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">{location}</div>
                </div>
              </div>
            )}

            {isAvailable && (
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Status</div>
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400">Available for Opportunities</div>
                </div>
              </div>
            )}

            {email && (
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Direct Email</div>
                  <a
                    href={`mailto:${email}`}
                    className="font-semibold text-purple-600 dark:text-purple-400 hover:underline truncate block max-w-[200px]"
                  >
                    {email}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
