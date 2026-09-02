/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoHero - Dominant profile anchor with modular 8+4/12 composition
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BentoTile } from './BentoTile';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { MapPin, Sparkles, Mail, ArrowUpRight } from 'lucide-react';

interface BentoHeroProps {
  data: PortfolioData;
}

export const BentoHero: React.FC<BentoHeroProps> = ({ data }) => {
  const profile = data.profile;
  const hasAvatar = Boolean(profile.avatarUrl);
  const email = data.contact?.email || profile.contactEmail;

  return (
    <section id="profile" className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
      {/* Primary Identity Tile */}
      <BentoTile
        span={hasAvatar ? 'col-8' : 'col-12'}
        variant="default"
        padding="lg"
        className="justify-between"
      >
        <div className="flex flex-col">
          {/* Status & Category Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#3B82F6] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// IDENTITY & PROFILE</span>
            </span>

            {profile.statusBadge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {profile.statusBadge}
              </span>
            )}
          </div>

          {/* Name Display */}
          <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-[#171A1F] dark:text-[#F4F5F7] tracking-tight leading-[1.08] mb-3">
            {profile.name}
          </h1>

          {/* Headline */}
          {profile.headline && (
            <p className="font-sans font-medium text-lg sm:text-xl lg:text-2xl text-[#5F6672] dark:text-[#9DA5B4] leading-snug max-w-2xl mb-6">
              {profile.headline}
            </p>
          )}
        </div>

        {/* Bottom Metadata & Quick Actions */}
        <div className="pt-6 border-t border-[#E2E6ED] dark:border-[#2A2E39] flex flex-wrap items-center justify-between gap-4 mt-auto">
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#5F6672] dark:text-[#9DA5B4]">
            {profile.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#3B82F6]" />
                <span>{profile.location}</span>
              </div>
            )}
          </div>

          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#3B82F6] text-white hover:bg-blue-600 transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </BentoTile>

      {/* Portrait Tile (When Avatar is Present) */}
      {hasAvatar && profile.avatarUrl && (
        <BentoTile
          span="col-4"
          variant="subtle"
          padding="none"
          className="relative min-h-[300px] overflow-hidden group"
        >
          <ImageWithFallback
            src={profile.avatarUrl}
            alt={profile.name}
            aspectRatioClass="aspect-auto h-full w-full"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <div className="font-mono text-[10px] uppercase font-bold tracking-widest text-white/80">
              PORTRAIT
            </div>
            <div className="font-sans font-bold text-sm text-white">
              {profile.name}
            </div>
          </div>
        </BentoTile>
      )}
    </section>
  );
};
