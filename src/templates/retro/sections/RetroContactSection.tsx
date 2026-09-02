/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroContactSection - Graphic contact terminal & coordinates
 */

import React from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroContactSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const RetroContactSection: React.FC<RetroContactSectionProps> = ({
  data,
  enabled,
  indexNumber = '11',
}) => {
  const { contact, profile } = data;
  const hasData = hasSectionData('contact', data);

  if (!enabled || !hasData) return null;

  const email = contact?.email || profile.contactEmail;
  const phone = contact?.phone || profile.contactPhone;
  const location = contact?.location || profile.location || contact?.address;
  const calendlyUrl = contact?.calendlyUrl;
  const officeHours = contact?.officeHours;
  const customMessage = contact?.messagePrompt;

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="TERMINAL"
        title="Get in Touch"
        subtitle="Direct communication channels, inquiries, and collaborative engagements."
        accentColor="terracotta"
      />

      <div className="bg-[#FFF9EA] dark:bg-[#362E28] border-3 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-[8px_8px_0px_0px_#29231F] dark:shadow-[8px_8px_0px_0px_rgba(255,244,214,0.15)] space-y-10">
        
        {/* Main Callout */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E76F2E]">
            // INQUIRY DISPATCH
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#29231F] dark:text-[#FFF4D6] leading-[1.05]">
            Let&apos;s build something bold and enduring together.
          </h3>
          {customMessage && (
            <p className="text-base sm:text-lg text-[#665D55] dark:text-[#D8CBB7] leading-relaxed">
              {customMessage}
            </p>
          )}
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15">
          {email && (
            <a
              href={`mailto:${email}`}
              className="group bg-[#FFF4D6] dark:bg-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-xl p-6 shadow-[4px_4px_0px_0px_#E76F2E] hover:shadow-[2px_2px_0px_0px_#E76F2E] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col justify-between space-y-4 min-h-[44px]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E76F2E] text-[#FFF4D6] border-2 border-[#29231F] flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#665D55] dark:text-[#A89B8E] block">
                  EMAIL DIRECT
                </span>
                <span className="font-bold text-base sm:text-lg text-[#29231F] dark:text-[#FFF4D6] group-hover:text-[#E76F2E] transition-colors truncate block mt-1">
                  {email}
                </span>
              </div>
            </a>
          )}

          {phone && (
            <a
              href={`tel:${phone}`}
              className="group bg-[#FFF4D6] dark:bg-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-xl p-6 shadow-[4px_4px_0px_0px_#E9B949] hover:shadow-[2px_2px_0px_0px_#E9B949] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col justify-between space-y-4 min-h-[44px]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#665D55] dark:text-[#A89B8E] block">
                  TELEPHONE
                </span>
                <span className="font-bold text-base sm:text-lg text-[#29231F] dark:text-[#FFF4D6] group-hover:text-[#E76F2E] transition-colors truncate block mt-1">
                  {phone}
                </span>
              </div>
            </a>
          )}

          {calendlyUrl && (
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FFF4D6] dark:bg-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-xl p-6 shadow-[4px_4px_0px_0px_#477A8A] hover:shadow-[2px_2px_0px_0px_#477A8A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col justify-between space-y-4 min-h-[44px]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#477A8A] text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#665D55] dark:text-[#A89B8E] block">
                  SCHEDULE SESSION
                </span>
                <span className="font-bold text-base sm:text-lg text-[#29231F] dark:text-[#FFF4D6] group-hover:text-[#477A8A] transition-colors flex items-center gap-1 mt-1">
                  <span>Book on Calendar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          )}

          {location && (
            <div className="bg-[#FFF4D6] dark:bg-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-xl p-6 shadow-[4px_4px_0px_0px_#29231F] flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#29231F] text-[#FFF4D6] dark:bg-[#FFF4D6] dark:text-[#29231F] border-2 border-[#29231F] flex items-center justify-center shadow-[2px_2px_0px_0px_#E76F2E]">
                <MapPin className="w-5 h-5 text-[#E76F2E]" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#665D55] dark:text-[#A89B8E] block">
                  PRIMARY BASE
                </span>
                <span className="font-bold text-base sm:text-lg text-[#29231F] dark:text-[#FFF4D6] block mt-1">
                  {location}
                </span>
              </div>
            </div>
          )}

          {officeHours && (
            <div className="bg-[#FFF4D6] dark:bg-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-xl p-6 shadow-[4px_4px_0px_0px_#29231F] flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#665D55] dark:text-[#A89B8E] block">
                  OFFICE HOURS
                </span>
                <span className="font-bold text-base sm:text-lg text-[#29231F] dark:text-[#FFF4D6] block mt-1">
                  {officeHours}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
