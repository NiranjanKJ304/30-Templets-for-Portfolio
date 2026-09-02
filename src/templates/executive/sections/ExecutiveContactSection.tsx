/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveContactSection - High-impact closing statement and direct communication channels
 */

import React from 'react';
import { Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveContactSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const ExecutiveContactSection: React.FC<ExecutiveContactSectionProps> = ({
  data,
  enabled,
  indexStr = '11',
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
      className="py-24 sm:py-32"
      containerClassName="max-w-6xl"
    >
      <ExecutiveSectionHeader
        index={indexStr}
        title="Direct Inquiries & Engagements"
        subtitle="Confidential communications, strategic advisory requests, and formal inquiries."
      />

      <div className="space-y-10">
        {contact?.messagePrompt ? (
          <p className="font-serif text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-100 max-w-3xl leading-relaxed">
            "{contact.messagePrompt}"
          </p>
        ) : (
          <p className="font-serif text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 max-w-2xl leading-relaxed">
            Available for executive advisory, board appointments, speaking engagements, and select collaborations.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-6 sm:p-8 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-900 dark:hover:border-neutral-400 transition-colors flex items-start gap-4 group"
            >
              <div className="p-2.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  CONFIDENTIAL EMAIL
                </div>
                <div className="text-sm font-mono font-bold text-neutral-900 dark:text-neutral-100 truncate">
                  {email}
                </div>
              </div>
            </a>
          )}

          {phone && (
            <a
              href={`tel:${phone}`}
              className="p-6 sm:p-8 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-900 dark:hover:border-neutral-400 transition-colors flex items-start gap-4 group"
            >
              <div className="p-2.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  TELEPHONE
                </div>
                <div className="text-sm font-mono font-bold text-neutral-900 dark:text-neutral-100">
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
              className="p-6 sm:p-8 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-900 dark:hover:border-neutral-400 transition-colors flex items-start gap-4 group"
            >
              <div className="p-2.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  DIRECT CALENDAR
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  Schedule an Appointment
                </div>
              </div>
            </a>
          )}

          {location && (
            <div className="p-6 sm:p-8 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-start gap-4">
              <div className="p-2.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  PRIMARY LOCATION
                </div>
                <div className="text-sm font-mono text-neutral-800 dark:text-neutral-200">
                  {location}
                </div>
              </div>
            </div>
          )}

          {contact?.officeHours && (
            <div className="p-6 sm:p-8 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-start gap-4">
              <div className="p-2.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  OFFICE AVAILABILITY
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
