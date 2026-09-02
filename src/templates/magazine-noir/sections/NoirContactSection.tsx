/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirContactSection - Direct inquiries & correspondence for Magazine Noir
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';
import { Mail, Phone, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

interface NoirContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NoirContactSection: React.FC<NoirContactSectionProps> = ({
  data,
  enabled = true,
}) => {
  const { contact, profile } = data;

  const email = contact?.email || profile.contactEmail;
  const phone = contact?.phone || profile.contactPhone;
  const location = contact?.location || contact?.address || profile.location;
  const calendlyUrl = contact?.calendlyUrl;
  const customFields = contact?.customFields;

  if (
    !enabled ||
    (!email && !phone && !calendlyUrl && !location && (!customFields || customFields.length === 0))
  ) {
    return null;
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32">
      <NoirSectionHeader
        index="11"
        title="Direct Inquiries"
        subtitle="Formal commissions, institutional advisory, advisory consultations, and dispatch."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Direct Invitation Spread */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8B5E3C] dark:text-[#C49A6C] block mb-3">
              INITIATE MANDATE
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F4F1EA] font-normal leading-tight tracking-tight mb-6">
              {contact?.messagePrompt ||
                `Initiate dialogue regarding new mandates, research commissions, or executive advisory.`}
            </h3>
          </div>

          <p className="font-sans text-base text-[#68645D] dark:text-[#B8B2A8] font-light leading-relaxed max-w-md">
            Direct communications are welcomed for formal commissions, speaking opportunities, and institutional engagements.
          </p>
        </div>

        {/* Right Column: Direct Channels Register */}
        <div className="lg:col-span-6 space-y-4">
          {email && (
            <a
              href={`mailto:${email}`}
              className="group p-6 sm:p-8 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] transition-colors flex items-center justify-between block"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 border border-[#171717]/15 dark:border-[#F4F1EA]/15 group-hover:bg-[#8B5E3C] group-hover:text-white dark:group-hover:bg-[#C49A6C] dark:group-hover:text-black text-[#171717] dark:text-[#F4F1EA] flex items-center justify-center transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#99938A] dark:text-[#777168] block">
                    ELECTRONIC MAIL
                  </span>
                  <span className="font-sans font-bold text-base sm:text-lg text-[#171717] dark:text-[#F4F1EA] group-hover:text-[#8B5E3C] dark:group-hover:text-[#C49A6C] transition-colors">
                    {email}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#99938A] group-hover:text-[#8B5E3C] dark:group-hover:text-[#C49A6C] transition-colors" />
            </a>
          )}

          {calendlyUrl && (
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] transition-colors flex items-center justify-between block"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 border border-[#171717]/15 dark:border-[#F4F1EA]/15 group-hover:bg-[#8B5E3C] group-hover:text-white dark:group-hover:bg-[#C49A6C] dark:group-hover:text-black text-[#171717] dark:text-[#F4F1EA] flex items-center justify-center transition-colors shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#99938A] dark:text-[#777168] block">
                    SCHEDULE APPOINTMENT
                  </span>
                  <span className="font-sans font-bold text-base sm:text-lg text-[#171717] dark:text-[#F4F1EA] group-hover:text-[#8B5E3C] dark:group-hover:text-[#C49A6C] transition-colors">
                    Book Consultation Calendar
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#99938A] group-hover:text-[#8B5E3C] dark:group-hover:text-[#C49A6C] transition-colors" />
            </a>
          )}

          {phone && (
            <a
              href={`tel:${phone}`}
              className="group p-6 sm:p-8 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] transition-colors flex items-center justify-between block"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 border border-[#171717]/15 dark:border-[#F4F1EA]/15 group-hover:bg-[#8B5E3C] group-hover:text-white dark:group-hover:bg-[#C49A6C] dark:group-hover:text-black text-[#171717] dark:text-[#F4F1EA] flex items-center justify-center transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#99938A] dark:text-[#777168] block">
                    TELEPHONE
                  </span>
                  <span className="font-sans font-bold text-base sm:text-lg text-[#171717] dark:text-[#F4F1EA] group-hover:text-[#8B5E3C] dark:group-hover:text-[#C49A6C] transition-colors">
                    {phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#99938A] group-hover:text-[#8B5E3C] dark:group-hover:text-[#C49A6C] transition-colors" />
            </a>
          )}

          {location && (
            <div className="p-6 sm:p-8 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 border border-[#171717]/15 dark:border-[#F4F1EA]/15 text-[#171717] dark:text-[#F4F1EA] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#99938A] dark:text-[#777168] block">
                  PRIMARY LOCATION
                </span>
                <span className="font-sans font-semibold text-base sm:text-lg text-[#171717] dark:text-[#F4F1EA]">
                  {location}
                </span>
              </div>
            </div>
          )}

          {/* Custom Fields if any */}
          {customFields && customFields.length > 0 && (
            <div className="p-6 sm:p-8 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#99938A] dark:text-[#777168] block">
                ADDITIONAL INQUIRY PARAMETERS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customFields.map((field, fIdx) => (
                  <div key={fIdx} className="font-mono text-xs">
                    <span className="text-[#99938A] dark:text-[#777168] block uppercase">{field.label}:</span>
                    <span className="font-bold text-[#171717] dark:text-[#F4F1EA]">{field.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
