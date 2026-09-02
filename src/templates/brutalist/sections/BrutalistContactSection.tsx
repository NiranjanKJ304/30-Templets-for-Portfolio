/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistContactSection - Raw direct inquiry & canonical communication terminal
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';
import { Mail, Phone, MapPin, Calendar, Clock, ArrowUpRight } from 'lucide-react';

interface BrutalistContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BrutalistContactSection: React.FC<BrutalistContactSectionProps> = ({
  data,
  enabled = true,
}) => {
  if (!enabled) return null;

  const email = data.contact?.email || data.profile.contactEmail;
  const phone = data.contact?.phone || data.profile.contactPhone;
  const location = data.contact?.location || data.profile.location;
  const address = data.contact?.address;
  const calendlyUrl = data.contact?.calendlyUrl;
  const officeHours = data.contact?.officeHours;
  const messagePrompt = data.contact?.messagePrompt;
  const customFields = data.contact?.customFields;

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="11"
          title="Direct Inquiries"
          subtitle="COMMUNICATION CHANNELS & TRANSMISSION TERMINAL"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Directive */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[6px_6px_0px_0px_#2563EB]">
              <div className="font-mono text-xs font-black uppercase text-[#2563EB] dark:text-[#2563EB] mb-2">
                // DIRECTIVE & COMMISSION
              </div>
              <h3 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-tight mb-4">
                INITIATE DIALOGUE.
              </h3>
              <p className="font-mono text-xs sm:text-sm leading-relaxed opacity-80 mb-6">
                {messagePrompt ||
                  'Directly accessible for strategic consults, engineering architecture, and technical commissions.'}
              </p>

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-[#2563EB] text-white font-mono text-xs font-black uppercase tracking-widest hover:bg-[#1D4ED8] transition-all border-2 border-[#111111] dark:border-[#F4F1E8] shadow-[3px_3px_0px_0px_#111111] dark:shadow-[3px_3px_0px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span>TRANSMIT VIA EMAIL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Canonical Channel Manifest */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[6px_6px_0px_0px_#111111] dark:shadow-[6px_6px_0px_0px_#F4F1E8]">
              <div className="font-mono text-xs font-bold uppercase text-[#111111] dark:text-[#F4F1E8] pb-3 mb-6 border-b-2 border-[#111111] dark:border-[#F4F1E8] flex items-center justify-between">
                <span>// CANONICAL DISPATCH REGISTRY</span>
                <span className="text-[#2563EB]">STATUS: OPEN</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {email && (
                  <div className="p-4 bg-[#F4F1E8] dark:bg-[#111111] border-2 border-[#111111] dark:border-[#F4F1E8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[10px] text-[#777777] dark:text-[#999999] uppercase">
                          [01] PRIMARY EMAIL
                        </div>
                        <a
                          href={`mailto:${email}`}
                          className="font-bold text-sm text-[#111111] dark:text-[#F4F1E8] hover:text-[#2563EB] transition-colors underline"
                        >
                          {email}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="px-3 py-1 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] font-bold text-[10px] uppercase tracking-wider inline-flex items-center gap-1 self-start sm:self-center hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#2563EB] dark:hover:text-white transition-colors"
                    >
                      <span>DISPATCH</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {phone && (
                  <div className="p-4 bg-[#F4F1E8] dark:bg-[#111111] border-2 border-[#111111] dark:border-[#F4F1E8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#EF4444] text-white flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[10px] text-[#777777] dark:text-[#999999] uppercase">
                          [02] TELEPHONE LINE
                        </div>
                        <a
                          href={`tel:${phone}`}
                          className="font-bold text-sm text-[#111111] dark:text-[#F4F1E8] hover:text-[#EF4444] transition-colors"
                        >
                          {phone}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`tel:${phone}`}
                      className="px-3 py-1 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] font-bold text-[10px] uppercase tracking-wider inline-flex items-center gap-1 self-start sm:self-center hover:bg-[#EF4444] hover:text-white dark:hover:bg-[#EF4444] dark:hover:text-white transition-colors"
                    >
                      <span>CONNECT</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {calendlyUrl && (
                  <div className="p-4 bg-[#F4F1E8] dark:bg-[#111111] border-2 border-[#111111] dark:border-[#F4F1E8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#EAB308] text-[#111111] flex items-center justify-center shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[10px] text-[#777777] dark:text-[#999999] uppercase">
                          [03] CALENDAR APPOINTMENTS
                        </div>
                        <div className="font-bold text-sm text-[#111111] dark:text-[#F4F1E8]">
                          Schedule Direct Consultation
                        </div>
                      </div>
                    </div>
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] font-bold text-[10px] uppercase tracking-wider inline-flex items-center gap-1 self-start sm:self-center hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#2563EB] dark:hover:text-white transition-colors"
                    >
                      <span>BOOK</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {location && (
                  <div className="p-4 bg-[#F4F1E8] dark:bg-[#111111] border-2 border-[#111111] dark:border-[#F4F1E8] flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-[10px] text-[#777777] dark:text-[#999999] uppercase">
                        [04] LOCATION / JURISDICTION
                      </div>
                      <div className="font-bold text-sm text-[#111111] dark:text-[#F4F1E8]">
                        {location} {address && `(${address})`}
                      </div>
                    </div>
                  </div>
                )}

                {officeHours && (
                  <div className="p-4 bg-[#F4F1E8] dark:bg-[#111111] border-2 border-[#111111] dark:border-[#F4F1E8] flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-[10px] text-[#777777] dark:text-[#999999] uppercase">
                        [05] OPERATIONAL HOURS
                      </div>
                      <div className="font-bold text-sm text-[#111111] dark:text-[#F4F1E8]">
                        {officeHours}
                      </div>
                    </div>
                  </div>
                )}

                {customFields && customFields.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {customFields.map((field, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 bg-[#F4F1E8] dark:bg-[#111111] border border-[#111111] dark:border-[#F4F1E8]"
                      >
                        <div className="text-[10px] uppercase font-bold text-[#777777] dark:text-[#999999]">
                          {field.label}
                        </div>
                        <div className="text-xs font-bold text-[#111111] dark:text-[#F4F1E8] mt-0.5">
                          {field.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

