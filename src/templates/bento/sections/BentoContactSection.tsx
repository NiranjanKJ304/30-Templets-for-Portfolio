/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoContactSection - Direct communication and inquiry dispatch tiles
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoSectionHeader } from '../components/BentoSectionHeader';
import { Mail, Phone, MapPin, Calendar, ArrowUpRight, MessageSquare } from 'lucide-react';

interface BentoContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BentoContactSection: React.FC<BentoContactSectionProps> = ({
  data,
  enabled = true,
}) => {
  const contact = data.contact;
  const profile = data.profile;

  const email = contact?.email || profile.contactEmail;
  const phone = contact?.phone || profile.contactPhone;
  const location = contact?.address || contact?.location || profile.location;
  const calendlyUrl = contact?.calendlyUrl;
  const messagePrompt = contact?.messagePrompt;
  const customFields = contact?.customFields;

  const hasAnyContact = Boolean(
    email || phone || location || calendlyUrl || messagePrompt || (customFields && customFields.length > 0)
  );

  if (!enabled || !hasAnyContact) {
    return null;
  }

  return (
    <section id="contact" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoSectionHeader
        label="// INQUIRIES & DIRECT CONTACT"
        title="Let's Build Something Together"
        subtitle="Initiate a conversation, schedule an architectural consultation, or discuss new roles."
        icon={<Mail className="w-4 h-4 text-[#3B82F6]" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 mt-4">
        {/* Main CTA Tile */}
        {email && (
          <BentoTile
            span={calendlyUrl ? 'col-8' : 'col-12'}
            variant="default"
            padding="lg"
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[#3B82F6] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <Mail className="w-4 h-4" />
                <span>DIRECT INQUIRY</span>
              </div>

              <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#171A1F] dark:text-[#F4F5F7] tracking-tight mb-3">
                Have an upcoming project or initiative in mind?
              </h3>

              {messagePrompt && (
                <p className="font-sans text-sm text-[#5F6672] dark:text-[#9DA5B4] leading-relaxed mb-6">
                  {messagePrompt}
                </p>
              )}
            </div>

            <div className="pt-6 border-t border-[#E2E6ED] dark:border-[#2A2E39] flex flex-wrap items-center justify-between gap-4 mt-auto">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#3B82F6] text-white hover:bg-blue-600 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email ({email})</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#EEF1F5] dark:bg-[#222630] text-[#171A1F] dark:text-[#F4F5F7] hover:bg-[#E2E6ED] dark:hover:bg-[#2D3340] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {phone}</span>
                </a>
              )}
            </div>
          </BentoTile>
        )}

        {/* Calendly Booking Tile */}
        {calendlyUrl && (
          <BentoTile
            span={email ? 'col-4' : 'col-12'}
            variant="accent-blue"
            padding="lg"
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[#3B82F6] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <Calendar className="w-4 h-4" />
                <span>SCHEDULE</span>
              </div>

              <h3 className="font-sans font-bold text-xl text-[#171A1F] dark:text-[#F4F5F7] tracking-tight mb-2">
                Book a Meeting
              </h3>

              <p className="font-sans text-xs text-[#5F6672] dark:text-[#9DA5B4] leading-relaxed mb-6">
                Reserve 30 minutes on my calendar to discuss engineering architecture, technical advisory, or leadership opportunities.
              </p>
            </div>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-[#171A1F] dark:bg-[#F4F5F7] text-white dark:text-[#171A1F] hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-colors w-full"
            >
              <span>View Available Times</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </BentoTile>
        )}

        {/* Location & Custom Fields Cluster */}
        {(location || (customFields && customFields.length > 0)) && (
          <BentoTile
            span="col-12"
            variant="subtle"
            padding="md"
            className="flex flex-wrap items-center justify-between gap-4"
          >
            {location && (
              <div className="flex items-center gap-2 text-xs font-medium text-[#171A1F] dark:text-[#F4F5F7]">
                <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span className="font-semibold">Base Location:</span>
                <span className="text-[#5F6672] dark:text-[#9DA5B4]">{location}</span>
              </div>
            )}

            {customFields && customFields.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 text-xs">
                {customFields.map((field, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-1.5">
                    <span className="font-semibold text-[#171A1F] dark:text-[#F4F5F7]">{field.label}:</span>
                    <span className="text-[#5F6672] dark:text-[#9DA5B4]">{field.value}</span>
                  </div>
                ))}
              </div>
            )}
          </BentoTile>
        )}
      </div>
    </section>
  );
};
