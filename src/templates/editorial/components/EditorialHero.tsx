/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialHero - Magazine cover opening with editorial typography & asymmetric spread
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { MapPin, ArrowDown, Sparkles, Mail } from 'lucide-react';

interface EditorialHeroProps {
  data: PortfolioData;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ data }) => {
  const { profile, contact } = data;
  const email = contact?.email || profile.contactEmail;

  return (
    <section
      id="profile"
      className="pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15"
    >
      {/* Top Folio Line */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 sm:mb-12 border-b border-[#171717]/10 dark:border-[#F5F2EA]/10 font-mono text-xs uppercase tracking-widest text-[#918D85] dark:text-[#817C74]">
        <div className="flex items-center gap-2">
          <span className="text-[#B42318] dark:text-[#F06A5F] font-bold">●</span>
          <span>CURATED MONOGRAPH</span>
        </div>
        {profile.location && (
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#68655F] dark:text-[#B8B3AA]" />
            <span>{profile.location}</span>
          </div>
        )}
      </div>

      {/* Main Cover Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left / Primary Typographic Masthead */}
        <div className={profile.avatarUrl ? 'lg:col-span-8' : 'lg:col-span-12'}>
          {/* Status badge if present */}
          {profile.statusBadge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#F0ECE1] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 font-mono text-[11px] uppercase tracking-wider text-[#171717] dark:text-[#F5F2EA]">
              <Sparkles className="w-3.5 h-3.5 text-[#B42318] dark:text-[#F06A5F]" />
              <span>{profile.statusBadge}</span>
            </div>
          )}

          {/* Large Editorial Name Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-[#171717] dark:text-[#F5F2EA] tracking-tighter leading-[0.92] mb-6 sm:mb-8">
            {profile.name}
          </h1>

          {/* Headline & Subtitle */}
          {profile.headline && (
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#68655F] dark:text-[#B8B3AA] font-normal leading-snug tracking-tight mb-8 max-w-3xl">
              {profile.headline}
            </p>
          )}

          {/* Quick Summary or Role */}
          {profile.role && (
            <div className="font-mono text-xs uppercase tracking-widest text-[#171717] dark:text-[#F5F2EA] mb-6 flex items-center gap-2">
              <span className="text-[#B42318] dark:text-[#F06A5F]">APPOINTMENT:</span>
              <span className="font-bold">{profile.role}</span>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#171717]/10 dark:border-[#F5F2EA]/10 font-mono text-xs uppercase tracking-wider">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-[#FFFDF8] dark:bg-[#F5F2EA] dark:text-[#111111] hover:bg-[#B42318] dark:hover:bg-[#F06A5F] dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>INITIATE CORRESPONDENCE</span>
              </a>
            )}

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#171717]/20 dark:border-[#F5F2EA]/20 text-[#171717] dark:text-[#F5F2EA] hover:border-[#171717] dark:hover:border-[#F5F2EA] transition-colors"
            >
              <span>READ MONOGRAPH</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#918D85] dark:text-[#817C74]" />
            </a>
          </div>
        </div>

        {/* Right / Editorial Portrait Frame (if avatarUrl exists) */}
        {profile.avatarUrl && (
          <div className="lg:col-span-4 flex flex-col mt-4 lg:mt-0">
            <div className="relative p-2 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F0ECE1] dark:bg-[#222]">
                <ImageWithFallback
                  src={profile.avatarUrl}
                  alt={profile.name}
                  aspectRatioClass="w-full h-full"
                  className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="pt-2 px-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74]">
                <span>FIG. 01 — PORTRAIT</span>
                {profile.pronouns && <span>[{profile.pronouns}]</span>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
