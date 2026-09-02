/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaContactSection - Dramatic closing communication portal
 */

import React from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaContactSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
}

export const CinemaContactSection: React.FC<CinemaContactSectionProps> = ({
  data,
  enabled,
  chapterIndex = '11',
}) => {
  const { contact, profile } = data;
  const hasData = hasSectionData('contact', data);

  if (!enabled || !hasData) return null;

  const email = contact?.email || profile.contactEmail;
  const phone = contact?.phone || profile.contactPhone;
  const location = contact?.location || contact?.address || profile.location;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="py-28 sm:py-40"
      containerClassName="max-w-6xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Direct Inquiries & Engagements"
        subtitle="Initiate dialogue for strategic opportunities, advisory appointments, or collaborations."
      />

      <div className="space-y-12">
        {contact?.messagePrompt ? (
          <p className="text-2xl sm:text-4xl font-serif text-neutral-900 dark:text-neutral-100 max-w-3xl leading-snug">
            "{contact.messagePrompt}"
          </p>
        ) : (
          <p className="text-2xl sm:text-4xl font-serif text-neutral-900 dark:text-neutral-100 max-w-3xl leading-snug">
            Available for strategic inquiries, leadership appointments, and collaborative initiatives.
          </p>
        )}

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-8 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all flex items-start gap-4 group"
            >
              <div className="p-3.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  DIRECT EMAIL
                </div>
                <div className="text-sm font-mono font-bold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-amber-500 transition-colors">
                  {email}
                </div>
              </div>
            </a>
          )}

          {phone && (
            <a
              href={`tel:${phone}`}
              className="p-8 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all flex items-start gap-4 group"
            >
              <div className="p-3.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  TELEPHONE
                </div>
                <div className="text-sm font-mono font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-amber-500 transition-colors">
                  {phone}
                </div>
              </div>
            </a>
          )}

          {contact?.calendlyUrl && (
            <a
              href={contact.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all flex items-start gap-4 group"
            >
              <div className="p-3.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  CALENDAR APPOINTMENT
                </div>
                <div className="text-sm font-mono font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5 group-hover:text-amber-500 transition-colors">
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          )}

          {location && (
            <div className="p-8 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl flex items-start gap-4">
              <div className="p-3.5 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-xl shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  LOCATION
                </div>
                <div className="text-sm font-mono text-neutral-800 dark:text-neutral-200">
                  {location}
                </div>
              </div>
            </div>
          )}

          {contact?.officeHours && (
            <div className="p-8 bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl flex items-start gap-4">
              <div className="p-3.5 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-xl shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  OFFICE HOURS
                </div>
                <div className="text-sm font-mono text-neutral-800 dark:text-neutral-200">
                  {contact.officeHours}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
