/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraContactSection - Luminous closing contact section
 */

import React from 'react';
import { Mail, Phone, MapPin, Calendar, Globe, ArrowRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraContactSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const AuroraContactSection: React.FC<AuroraContactSectionProps> = ({
  data,
  enabled,
}) => {
  const { contact, profile } = data;
  const hasData = hasSectionData('contact', data);

  if (!enabled || !hasData) return null;

  const email = contact?.email || profile.contactEmail;
  const phone = contact?.phone || profile.contactPhone;
  const location = contact?.location || profile.location;
  const website = contact?.website;
  const bookingUrl = contact?.calendlyUrl; // Canonical booking URL field in PortfolioData

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="Direct Contact"
        title="Initiate conversations and collaborations."
        subtitle="Available for consulting, advising, and technical engagements."
      />

      <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-white/80 dark:bg-neutral-900/80 border border-white/80 dark:border-neutral-800/80 shadow-xl shadow-purple-500/5 backdrop-blur-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Statement & Message Prompt (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-snug">
              Let's create something luminous together.
            </h3>

            {contact?.messagePrompt ? (
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                {contact.messagePrompt}
              </p>
            ) : (
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                Whether you have a strategic inquiry, a proposed initiative, or would like to explore a partnership, feel free to reach out directly.
              </p>
            )}

            {email && (
              <div className="pt-2">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 hover:opacity-95 shadow-md shadow-purple-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Direct Coordinates Cluster (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-4 rounded-2xl p-6 bg-neutral-50/80 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 text-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 pb-2 border-b border-neutral-200 dark:border-neutral-700">
              Direct Coordinates
            </div>

            {email && (
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Email Address</div>
                  <a
                    href={`mailto:${email}`}
                    className="font-semibold text-neutral-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>
            )}

            {phone && (
              <div className="flex items-center gap-3 pt-2 border-t border-neutral-200/60 dark:border-neutral-700/60">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Phone</div>
                  <a
                    href={`tel:${phone}`}
                    className="font-semibold text-neutral-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            )}

            {location && (
              <div className="flex items-center gap-3 pt-2 border-t border-neutral-200/60 dark:border-neutral-700/60">
                <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Base Location</div>
                  <div className="font-semibold text-neutral-900 dark:text-white">
                    {location}
                  </div>
                </div>
              </div>
            )}

            {website && (
              <div className="flex items-center gap-3 pt-2 border-t border-neutral-200/60 dark:border-neutral-700/60">
                <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Website</div>
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-neutral-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors truncate block"
                  >
                    {website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              </div>
            )}

            {bookingUrl && (
              <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-700/60">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-purple-100/70 hover:bg-purple-200/70 dark:bg-purple-950/70 dark:hover:bg-purple-900/70 text-purple-800 dark:text-purple-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment / Consultation</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
