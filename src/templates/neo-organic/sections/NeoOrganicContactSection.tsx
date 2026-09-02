/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicContactSection - Verified direct contact channels
 */

import React from 'react';
import type { PortfolioData, ContactInfo } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import { Mail, Phone, Calendar, MapPin, Clock, ArrowUpRight, MessageSquare } from 'lucide-react';

interface NeoOrganicContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NeoOrganicContactSection: React.FC<NeoOrganicContactSectionProps> = ({
  data,
  enabled = true,
}) => {
  const contact: ContactInfo = data.contact || {
    email: data.profile.contactEmail,
    phone: data.profile.contactPhone,
    location: data.profile.location,
  };

  const hasContactData = Boolean(
    contact.email ||
      contact.phone ||
      contact.calendlyUrl ||
      contact.location ||
      contact.address ||
      contact.officeHours ||
      (contact.customFields && contact.customFields.length > 0)
  );

  if (!enabled || !hasContactData) {
    return null;
  }

  return (
    <section id="contact" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="Contact"
        subtitle="Initiate a dialogue, propose collaboration, or schedule an exchange."
        accentColor="green"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Invitation Box (Left) */}
        <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FFFFFF] to-[#F6F5EF] dark:from-[#1B211D] dark:to-[#111713] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#D9E7D0]/60 dark:bg-[#111713] flex items-center justify-center text-[#79A66A] dark:text-[#91BD82]">
            <MessageSquare className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#17211B] dark:text-[#F2F3ED]">
            Let's build something thoughtful.
          </h3>

          <p className="text-sm sm:text-base text-[#59635C] dark:text-[#B8C0B8] font-light leading-relaxed">
            {contact.messagePrompt ||
              'Open to technical consulting, creative engagements, architectural advisory, and high-impact discussions.'}
          </p>

          {contact.email && (
            <div className="pt-2">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#4169E1] text-white hover:bg-[#3354B8] text-sm font-medium shadow-sm hover:shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>
            </div>
          )}
        </div>

        {/* Channels List (Right) */}
        <div className="lg:col-span-5 space-y-4">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-2xs hover:shadow-sm hover:border-[#4169E1]/30 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F6F5EF] dark:bg-[#111713] flex items-center justify-center text-[#4169E1] dark:text-[#7F9CFF] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">Electronic Mail</span>
                  <span className="font-semibold text-sm text-[#17211B] dark:text-[#F2F3ED] group-hover:text-[#4169E1] dark:group-hover:text-[#7F9CFF] transition-colors truncate block max-w-[200px] sm:max-w-xs">
                    {contact.email}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8A938C] group-hover:text-[#4169E1] shrink-0" />
            </a>
          )}

          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-2xs hover:shadow-sm hover:border-[#79A66A]/30 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F6F5EF] dark:bg-[#111713] flex items-center justify-center text-[#79A66A] dark:text-[#91BD82] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">Telephone</span>
                  <span className="font-semibold text-sm text-[#17211B] dark:text-[#F2F3ED] group-hover:text-[#79A66A] transition-colors">
                    {contact.phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8A938C] group-hover:text-[#79A66A] shrink-0" />
            </a>
          )}

          {contact.calendlyUrl && (
            <a
              href={contact.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-2xs hover:shadow-sm hover:border-[#E58B5B]/30 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F6F5EF] dark:bg-[#111713] flex items-center justify-center text-[#E58B5B] dark:text-[#F0A078] shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">Schedule Session</span>
                  <span className="font-semibold text-sm text-[#17211B] dark:text-[#F2F3ED] group-hover:text-[#E58B5B] transition-colors">
                    Open Calendly
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8A938C] group-hover:text-[#E58B5B] shrink-0" />
            </a>
          )}

          {(contact.location || contact.address) && (
            <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F6F5EF] dark:bg-[#111713] flex items-center justify-center text-[#59635C] dark:text-[#B8C0B8] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">Operating Location</span>
                <span className="font-semibold text-sm text-[#17211B] dark:text-[#F2F3ED]">
                  {contact.address || contact.location}
                </span>
              </div>
            </div>
          )}

          {contact.officeHours && (
            <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F6F5EF] dark:bg-[#111713] flex items-center justify-center text-[#8A938C] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">Office Hours</span>
                <span className="font-medium text-sm text-[#17211B] dark:text-[#F2F3ED]">
                  {contact.officeHours}
                </span>
              </div>
            </div>
          )}

          {contact.customFields &&
            contact.customFields.map((field, fIdx) => (
              <div
                key={fIdx}
                className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-2xs flex items-center justify-between"
              >
                <div>
                  <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">{field.label}</span>
                  <span className="font-semibold text-sm text-[#17211B] dark:text-[#F2F3ED]">
                    {field.value}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
