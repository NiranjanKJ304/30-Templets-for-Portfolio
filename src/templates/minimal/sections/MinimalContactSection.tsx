/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalContactSection - Direct inquiry and booking channels for Minimal template
 */

import React from 'react';
import { Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalContactSectionProps {
  data: PortfolioData;
  enabled: boolean;
}

export const MinimalContactSection: React.FC<MinimalContactSectionProps> = ({
  data,
  enabled,
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
      className="py-16 sm:py-24"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="Get in Touch" />

      <div className="space-y-8">
        {contact?.messagePrompt ? (
          <p className="text-lg sm:text-xl font-serif text-neutral-800 dark:text-neutral-200 max-w-2xl leading-relaxed">
            {contact.messagePrompt}
          </p>
        ) : (
          <p className="text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-xl leading-relaxed">
            Have a question, collaboration inquiry, or simply want to connect? Reach out directly
            through any of the channels below.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-5 border border-[#1C1917]/10 dark:border-neutral-800 rounded-sm bg-white dark:bg-[#141210] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex items-start gap-4"
            >
              <div className="p-2 rounded-2xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                  Email
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 break-all font-mono">
                  {email}
                </div>
              </div>
            </a>
          )}

          {phone && (
            <a
              href={`tel:${phone}`}
              className="p-5 border border-[#1C1917]/10 dark:border-neutral-800 rounded-sm bg-white dark:bg-[#141210] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex items-start gap-4"
            >
              <div className="p-2 rounded-2xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                  Phone
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 font-mono">
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
              className="p-5 border border-[#1C1917]/10 dark:border-neutral-800 rounded-sm bg-white dark:bg-[#141210] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex items-start gap-4"
            >
              <div className="p-2 rounded-2xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                  Schedule
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  Book a meeting
                </div>
              </div>
            </a>
          )}

          {location && (
            <div className="p-5 border border-[#1C1917]/10 dark:border-neutral-800 rounded-sm bg-white dark:bg-[#141210] flex items-start gap-4">
              <div className="p-2 rounded-2xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                  Location
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 font-mono">
                  {location}
                </div>
              </div>
            </div>
          )}

          {contact?.officeHours && (
            <div className="p-5 border border-[#1C1917]/10 dark:border-neutral-800 rounded-sm bg-white dark:bg-[#141210] flex items-start gap-4">
              <div className="p-2 rounded-2xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                <Clock className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                  Office Hours
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 font-mono">
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
