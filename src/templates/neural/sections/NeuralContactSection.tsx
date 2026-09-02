/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralContactSection - Futuristic closing contact portal
 */

import React from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralContactSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const NeuralContactSection: React.FC<NeuralContactSectionProps> = ({
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
      <NeuralSectionHeader
        index={indexStr}
        title="Direct Inquiries & Engagements"
        subtitle="Initiate communication for advisory roles, projects, speaking, or collaborations."
      />

      <div className="space-y-10">
        {contact?.messagePrompt ? (
          <p className="text-xl sm:text-2xl font-sans text-neutral-800 dark:text-neutral-100 max-w-3xl leading-relaxed">
            "{contact.messagePrompt}"
          </p>
        ) : (
          <p className="text-xl sm:text-2xl font-sans text-neutral-800 dark:text-neutral-200 max-w-2xl leading-relaxed">
            Available for strategic inquiries, collaborations, advisory appointments, and select projects.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-6 sm:p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all flex items-start gap-4 group"
            >
              <div className="p-3 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  DIRECT EMAIL
                </div>
                <div className="text-sm font-mono font-bold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-cyan-500 transition-colors">
                  {email}
                </div>
              </div>
            </a>
          )}

          {phone && (
            <a
              href={`tel:${phone}`}
              className="p-6 sm:p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all flex items-start gap-4 group"
            >
              <div className="p-3 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  PHONE
                </div>
                <div className="text-sm font-mono font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-cyan-500 transition-colors">
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
              className="p-6 sm:p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all flex items-start gap-4 group"
            >
              <div className="p-3 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  SCHEDULE APPOINTMENT
                </div>
                <div className="text-sm font-mono font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5 group-hover:text-cyan-500 transition-colors">
                  <span>Calendar Booking</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          )}

          {location && (
            <div className="p-6 sm:p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 flex items-start gap-4">
              <div className="p-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 shrink-0">
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
            <div className="p-6 sm:p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 flex items-start gap-4">
              <div className="p-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  AVAILABILITY WINDOW
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
