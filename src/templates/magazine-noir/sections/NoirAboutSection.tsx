/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirAboutSection - Biographical dossier for Magazine Noir
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';
import { MapPin, User, CheckCircle2 } from 'lucide-react';

interface NoirAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const NoirAboutSection: React.FC<NoirAboutSectionProps> = ({
  data,
  enabled = true,
}) => {
  const { profile } = data;
  const bioContent = profile.bio || profile.summary;

  if (!enabled || !bioContent) {
    return null;
  }

  // Split bio paragraphs if multiple exist
  const paragraphs = bioContent
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const leadParagraph = paragraphs[0] || '';
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      <NoirSectionHeader
        index="01"
        title="Biographical Dossier"
        subtitle="Curated profile, operational philosophy, and professional narrative."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Large Statement Pull Quote & Lead */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="border-l-2 border-[#8B5E3C] dark:border-[#C49A6C] pl-6 py-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B5E3C] dark:text-[#C49A6C] block mb-2">
              IDENTITY PROFILE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171717] dark:text-[#F4F1EA] font-normal leading-snug tracking-tight">
              {leadParagraph}
            </h3>
          </div>

          {/* Profile metadata register */}
          <div className="p-6 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs space-y-3 font-mono text-xs">
            <div className="font-bold text-[#8B5E3C] dark:text-[#C49A6C] tracking-widest text-[10px] uppercase pb-2 border-b border-[#171717]/5 dark:border-[#F4F1EA]/5">
              CANONICAL REGISTRY
            </div>

            {profile.name && (
              <div className="flex items-center justify-between">
                <span className="text-[#99938A] dark:text-[#777168]">SUBJECT:</span>
                <span className="text-[#171717] dark:text-[#F4F1EA] font-semibold">{profile.name}</span>
              </div>
            )}

            {profile.role && (
              <div className="flex items-center justify-between">
                <span className="text-[#99938A] dark:text-[#777168]">DISCIPLINE:</span>
                <span className="text-[#171717] dark:text-[#F4F1EA]">{profile.role}</span>
              </div>
            )}

            {profile.location && (
              <div className="flex items-center justify-between">
                <span className="text-[#99938A] dark:text-[#777168]">STATION:</span>
                <span className="text-[#171717] dark:text-[#F4F1EA]">{profile.location}</span>
              </div>
            )}

            {profile.pronouns && (
              <div className="flex items-center justify-between">
                <span className="text-[#99938A] dark:text-[#777168]">PRONOUNS:</span>
                <span className="text-[#171717] dark:text-[#F4F1EA]">{profile.pronouns}</span>
              </div>
            )}

            {profile.availableForHire !== undefined && (
              <div className="flex items-center justify-between pt-2 border-t border-[#171717]/5 dark:border-[#F4F1EA]/5">
                <span className="text-[#99938A] dark:text-[#777168]">STATUS:</span>
                <span className="text-[#8B5E3C] dark:text-[#C49A6C] font-bold">
                  {profile.statusBadge || (profile.availableForHire ? 'ACTIVE' : 'RESERVED')}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Narrative Reading Column */}
        <div className="lg:col-span-7 space-y-6 font-sans text-base sm:text-lg text-[#68645D] dark:text-[#B8B2A8] font-light leading-relaxed">
          {remainingParagraphs.length > 0 ? (
            remainingParagraphs.map((p, idx) => (
              <p key={idx} className="first-of-type:text-[#171717] dark:first-of-type:text-[#F4F1EA]">
                {p}
              </p>
            ))
          ) : (
            <p>
              {bioContent}
            </p>
          )}

          {profile.summary && profile.summary !== profile.bio && (
            <div className="mt-8 p-6 border-t border-b border-[#171717]/10 dark:border-[#F4F1EA]/10 font-serif italic text-lg sm:text-xl text-[#171717] dark:text-[#F4F1EA]">
              “{profile.summary}”
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
