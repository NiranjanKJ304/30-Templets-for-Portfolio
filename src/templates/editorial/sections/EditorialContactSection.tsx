/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialContactSection - Publication closing spread & direct correspondence
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';
import { Mail, Phone, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

interface EditorialContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const EditorialContactSection: React.FC<EditorialContactSectionProps> = ({
  data,
  enabled = true,
}) => {
  const { contact, profile } = data;

  const email = contact?.email || profile.contactEmail;
  const phone = contact?.phone || profile.contactPhone;
  const location = contact?.location || contact?.address || profile.location;
  const calendlyUrl = contact?.calendlyUrl;
  const customFields = contact?.customFields;

  if (!enabled || (!email && !phone && !calendlyUrl && !location && (!customFields || customFields.length === 0))) {
    return null;
  }

  return (
    <section id="contact" className="pt-12 sm:pt-16 pb-12">
      <EditorialSectionHeader
        index="11"
        title="Direct Correspondence"
        subtitle="Inquiries, institutional engagements, advisory consultations, and dispatch."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6">
        {/* Left / Editorial Invitation */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#B42318] dark:text-[#F06A5F] block mb-3">
              GET IN TOUCH
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F5F2EA] font-normal leading-tight tracking-tight mb-6">
              {contact?.messagePrompt ||
                `Initiate dialogue regarding new mandates, research commissions, or advisory.`}
            </h3>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#68655F] dark:text-[#B8B3AA] leading-relaxed max-w-md">
            Direct communications are welcomed for formal commissions, speaking opportunities, and institutional advisory.
          </p>
        </div>

        {/* Right / Direct Channels Register */}
        <div className="lg:col-span-6 space-y-4">
          {email && (
            <a
              href={`mailto:${email}`}
              className="group p-6 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs hover:border-[#B42318] dark:hover:border-[#F06A5F] transition-colors flex items-center justify-between block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#171717]/15 dark:border-[#F5F2EA]/15 group-hover:bg-[#B42318] group-hover:text-white dark:group-hover:bg-[#F06A5F] text-[#171717] dark:text-[#F5F2EA] flex items-center justify-center transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74] block">
                    ELECTRONIC MAIL
                  </span>
                  <span className="font-sans font-bold text-base text-[#171717] dark:text-[#F5F2EA] group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F] transition-colors">
                    {email}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#918D85] group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F] transition-colors" />
            </a>
          )}

          {calendlyUrl && (
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs hover:border-[#B42318] dark:hover:border-[#F06A5F] transition-colors flex items-center justify-between block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#171717]/15 dark:border-[#F5F2EA]/15 group-hover:bg-[#B42318] group-hover:text-white dark:group-hover:bg-[#F06A5F] text-[#171717] dark:text-[#F5F2EA] flex items-center justify-center transition-colors shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74] block">
                    SCHEDULE APPOINTMENT
                  </span>
                  <span className="font-sans font-bold text-base text-[#171717] dark:text-[#F5F2EA] group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F] transition-colors">
                    Book Consultation Calendar
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#918D85] group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F] transition-colors" />
            </a>
          )}

          {phone && (
            <a
              href={`tel:${phone}`}
              className="group p-6 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs hover:border-[#B42318] dark:hover:border-[#F06A5F] transition-colors flex items-center justify-between block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#171717]/15 dark:border-[#F5F2EA]/15 group-hover:bg-[#B42318] group-hover:text-white dark:group-hover:bg-[#F06A5F] text-[#171717] dark:text-[#F5F2EA] flex items-center justify-center transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74] block">
                    TELEPHONE
                  </span>
                  <span className="font-sans font-bold text-base text-[#171717] dark:text-[#F5F2EA] group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F] transition-colors">
                    {phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#918D85] group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F] transition-colors" />
            </a>
          )}

          {location && (
            <div className="p-6 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs flex items-center gap-4">
              <div className="w-10 h-10 border border-[#171717]/15 dark:border-[#F5F2EA]/15 text-[#171717] dark:text-[#F5F2EA] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74] block">
                  PRIMARY LOCATION
                </span>
                <span className="font-sans font-semibold text-base text-[#171717] dark:text-[#F5F2EA]">
                  {location}
                </span>
              </div>
            </div>
          )}

          {/* Custom Fields if any */}
          {customFields && customFields.length > 0 && (
            <div className="p-6 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74] block">
                ADDITIONAL INQUIRY INFORMATION
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customFields.map((field, fIdx) => (
                  <div key={fIdx} className="font-mono text-xs">
                    <span className="text-[#918D85] dark:text-[#817C74] block uppercase">{field.label}:</span>
                    <span className="font-bold text-[#171717] dark:text-[#F5F2EA]">{field.value}</span>
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
