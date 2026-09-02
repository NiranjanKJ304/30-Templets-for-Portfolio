/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroAboutSection - Graphic editorial narrative & parameters
 */

import React from 'react';
import { MapPin, Mail, Sparkles, User } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroAboutSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
}

export const RetroAboutSection: React.FC<RetroAboutSectionProps> = ({
  data,
  enabled,
  indexNumber = '01',
}) => {
  const { profile } = data;
  const hasData = hasSectionData('about', data);

  if (!enabled || !hasData) return null;

  const aboutText = profile.summary || profile.bio;
  const email = data.contact?.email || profile.contactEmail;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="BIOGRAPHY"
        title="Background & Focus"
        subtitle="Professional context, career narrative, and strategic orientation."
        accentColor="terracotta"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Main Narrative Column (Cols 1-8) */}
        <div className="lg:col-span-8 space-y-6">
          {profile.headline && (
            <div className="p-6 sm:p-8 bg-[#FFF9EA] dark:bg-[#362E28] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl shadow-[6px_6px_0px_0px_#29231F] dark:shadow-[6px_6px_0px_0px_rgba(255,244,214,0.15)]">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E76F2E] block mb-2">
                // EXECUTIVE SUMMARY
              </span>
              <p className="text-xl sm:text-2xl font-black text-[#29231F] dark:text-[#FFF4D6] leading-snug">
                &ldquo;{profile.headline}&rdquo;
              </p>
            </div>
          )}

          {aboutText && (
            <div className="p-6 sm:p-8 bg-[#FFF9EA] dark:bg-[#362E28] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl shadow-[6px_6px_0px_0px_#E9B949] dark:shadow-[6px_6px_0px_0px_rgba(233,185,73,0.25)] space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#665D55] dark:text-[#A89B8E] block">
                // BIOGRAPHICAL OVERVIEW
              </span>
              <div className="text-base sm:text-lg text-[#29231F] dark:text-[#FFF4D6] leading-relaxed whitespace-pre-line">
                {aboutText}
              </div>
            </div>
          )}
        </div>

        {/* Specification Rail / Meta Box (Cols 9-12) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#FFF4D6] dark:bg-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl p-6 shadow-[6px_6px_0px_0px_#477A8A] dark:shadow-[6px_6px_0px_0px_rgba(71,122,138,0.3)] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15 font-mono text-xs font-bold uppercase tracking-wider text-[#477A8A] dark:text-[#6D9AA5]">
              <span>PARAMETERS</span>
              <span>[REGISTER]</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-[#665D55] dark:text-[#A89B8E] uppercase tracking-wider block mb-1">
                  FULL NAME:
                </span>
                <span className="font-bold text-sm text-[#29231F] dark:text-[#FFF4D6] block">
                  {profile.name}
                </span>
              </div>

              {profile.role && (
                <div>
                  <span className="text-[#665D55] dark:text-[#A89B8E] uppercase tracking-wider block mb-1">
                    PRIMARY ROLE:
                  </span>
                  <span className="font-bold text-sm text-[#29231F] dark:text-[#FFF4D6] block">
                    {profile.role}
                  </span>
                </div>
              )}

              {profile.pronouns && (
                <div>
                  <span className="text-[#665D55] dark:text-[#A89B8E] uppercase tracking-wider block mb-1">
                    PRONOUNS:
                  </span>
                  <span className="font-bold text-sm text-[#29231F] dark:text-[#FFF4D6] block">
                    {profile.pronouns}
                  </span>
                </div>
              )}

              {profile.location && (
                <div>
                  <span className="text-[#665D55] dark:text-[#A89B8E] uppercase tracking-wider block mb-1">
                    LOCATION:
                  </span>
                  <span className="font-bold text-sm text-[#29231F] dark:text-[#FFF4D6] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E76F2E]" />
                    <span>{profile.location}</span>
                  </span>
                </div>
              )}

              {email && (
                <div>
                  <span className="text-[#665D55] dark:text-[#A89B8E] uppercase tracking-wider block mb-1">
                    DISPATCH CHANNEL:
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="font-bold text-sm text-[#E76F2E] hover:underline flex items-center gap-1.5 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{email}</span>
                  </a>
                </div>
              )}

              {profile.statusBadge && (
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] font-bold text-xs shadow-[2px_2px_0px_0px_#29231F]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{profile.statusBadge}</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
