/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicAboutSection - Narrative biography & metadata cluster
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import { MapPin, User, Mail, Phone, CheckCircle2 } from 'lucide-react';

interface NeoOrganicAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NeoOrganicAboutSection: React.FC<NeoOrganicAboutSectionProps> = ({
  data,
  enabled = true,
}) => {
  const { profile } = data;
  const bioText = profile.bio || profile.summary;

  if (!enabled || !bioText) {
    return null;
  }

  // Split paragraphs
  const paragraphs = bioText
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const leadParagraph = paragraphs[0] || '';
  const supportingParagraphs = paragraphs.slice(1);

  return (
    <section id="about" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="About"
        subtitle="Background, perspective, and operational context."
        accentColor="green"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Main Narrative (Left / Center) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Highlighted Lead Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm">
            <p className="text-xl sm:text-2xl text-[#17211B] dark:text-[#F2F3ED] font-medium leading-snug">
              {leadParagraph}
            </p>
          </div>

          {/* Supporting Paragraphs */}
          {supportingParagraphs.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF]/70 dark:bg-[#1B211D]/70 border border-[#17211B]/6 dark:border-[#F2F3ED]/6 space-y-4">
              {supportingParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#59635C] dark:text-[#B8C0B8] text-base leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Summary Quote if distinct from bio */}
          {profile.summary && profile.bio && profile.summary !== leadParagraph && (
            <div className="p-6 rounded-2xl bg-[#D9E7D0]/40 dark:bg-[#1B211D]/40 border-l-4 border-[#79A66A] text-[#17211B] dark:text-[#F2F3ED] text-base italic font-light">
              "{profile.summary}"
            </div>
          )}
        </div>

        {/* Metadata Cluster (Right) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#79A66A] dark:text-[#91BD82] flex items-center gap-2">
              <User className="w-3.5 h-3.5" />
              <span>Profile Snapshot</span>
            </h3>

            <div className="space-y-3 text-sm">
              {profile.name && (
                <div>
                  <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">Name</span>
                  <span className="font-medium text-[#17211B] dark:text-[#F2F3ED]">{profile.name}</span>
                </div>
              )}

              {profile.role && (
                <div>
                  <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">Primary Focus</span>
                  <span className="font-medium text-[#17211B] dark:text-[#F2F3ED]">{profile.role}</span>
                </div>
              )}

              {profile.location && (
                <div>
                  <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">Location</span>
                  <span className="font-medium text-[#17211B] dark:text-[#F2F3ED] flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E58B5B]" />
                    {profile.location}
                  </span>
                </div>
              )}

              {profile.availableForHire !== undefined && (
                <div className="pt-2 border-t border-[#17211B]/6 dark:border-[#F2F3ED]/6">
                  <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">Availability</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#79A66A] dark:text-[#91BD82] mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {profile.statusBadge || (profile.availableForHire ? 'Available for work' : 'Engaged')}
                  </span>
                </div>
              )}

              {profile.contactEmail && (
                <div className="pt-2 border-t border-[#17211B]/6 dark:border-[#F2F3ED]/6">
                  <span className="text-xs text-[#8A938C] dark:text-[#7F897F] block">Email</span>
                  <a
                    href={`mailto:${profile.contactEmail}`}
                    className="font-medium text-[#4169E1] dark:text-[#7F9CFF] hover:underline text-xs truncate block"
                  >
                    {profile.contactEmail}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
