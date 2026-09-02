/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirHero - Visual Campaign Hero Opening for Magazine Noir
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { MapPin, ArrowDown, Sparkles } from 'lucide-react';

interface NoirHeroProps {
  data: PortfolioData;
}

export const NoirHero: React.FC<NoirHeroProps> = ({ data }) => {
  const { profile } = data;
  const hasAvatar = Boolean(profile.avatarUrl);

  const scrollToWork = () => {
    const workElem = document.getElementById('work') || document.getElementById('about');
    if (workElem) {
      const top = workElem.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-8 pb-16 sm:pb-24 lg:pb-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      {/* Top Folio Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10 mb-10 sm:mb-16 font-mono text-xs uppercase tracking-widest text-[#99938A] dark:text-[#777168]">
        <div className="flex items-center gap-3">
          <span className="text-[#8B5E3C] dark:text-[#C49A6C] font-semibold">EDITION MMXXVI</span>
          <span>—</span>
          <span>VISUAL CAMPAIGN PORTFOLIO</span>
        </div>

        <div className="flex items-center gap-4">
          {profile.location && (
            <div className="flex items-center gap-1.5 text-[#68645D] dark:text-[#B8B2A8]">
              <MapPin className="w-3.5 h-3.5 text-[#8B5E3C] dark:text-[#C49A6C]" />
              <span>{profile.location}</span>
            </div>
          )}

          {profile.availableForHire !== undefined && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5E3C] dark:bg-[#C49A6C] animate-pulse" />
              <span className="text-[#171717] dark:text-[#F4F1EA] font-medium">
                {profile.statusBadge || (profile.availableForHire ? 'AVAILABLE FOR COMMISSIONS' : 'ENGAGED')}
              </span>
            </div>
          )}
        </div>
      </div>

      {hasAvatar ? (
        /* Asymmetric Large Portrait + Typographic Spread */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Portrait Column (approx 45-50%) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-3/4 sm:aspect-4/5 overflow-hidden bg-[#EDEAE1] dark:bg-[#1A1A1A] shadow-xl border border-[#171717]/10 dark:border-[#F4F1EA]/10">
              <ImageWithFallback
                src={profile.avatarUrl!}
                alt={profile.name}
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#171717]/5 dark:bg-[#000000]/20 pointer-events-none" />
            </div>

            {/* Floating luxury label badge */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 p-4 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/15 dark:border-[#F4F1EA]/15 shadow-md font-mono text-[10px] uppercase tracking-widest text-[#68645D] dark:text-[#B8B2A8]">
              <span className="text-[#8B5E3C] dark:text-[#C49A6C] font-bold">PORTRAIT ARCHIVE</span>
              <div className="text-[#171717] dark:text-[#F4F1EA] font-semibold mt-0.5">{profile.name}</div>
            </div>
          </div>

          {/* Typography Campaign Column */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            {profile.role && (
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#8B5E3C] dark:text-[#C49A6C] font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{profile.role}</span>
              </div>
            )}

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight leading-[0.95] mb-6">
              {profile.name}
            </h1>

            {profile.headline && (
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#68645D] dark:text-[#B8B2A8] font-light leading-snug mb-8 max-w-2xl">
                {profile.headline}
              </p>
            )}

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#171717]/10 dark:border-[#F4F1EA]/10">
              <button
                onClick={scrollToWork}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#171717] text-[#FBFAF7] dark:bg-[#F4F1EA] dark:text-[#0D0D0D] font-mono text-xs uppercase tracking-widest hover:bg-[#8B5E3C] dark:hover:bg-[#C49A6C] dark:hover:text-white transition-colors cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {profile.contactEmail && (
                <a
                  href={`mailto:${profile.contactEmail}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#171717]/20 dark:border-[#F4F1EA]/20 bg-[#FBFAF7] dark:bg-[#171717] text-[#171717] dark:text-[#F4F1EA] hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] font-mono text-xs uppercase tracking-widest transition-colors"
                >
                  <span>INITIATE CONTACT</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Typographic Cover Hero (Without Avatar) */
        <div className="py-8 sm:py-16 flex flex-col justify-center">
          {profile.role && (
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B5E3C] dark:text-[#C49A6C] font-semibold mb-4">
              {profile.role}
            </div>
          )}

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight leading-[0.9] mb-8">
            {profile.name}
          </h1>

          {profile.headline && (
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#68645D] dark:text-[#B8B2A8] font-light leading-snug mb-10 max-w-4xl">
              {profile.headline}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-[#171717]/10 dark:border-[#F4F1EA]/10">
            <button
              onClick={scrollToWork}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#171717] text-[#FBFAF7] dark:bg-[#F4F1EA] dark:text-[#0D0D0D] font-mono text-xs uppercase tracking-widest hover:bg-[#8B5E3C] dark:hover:bg-[#C49A6C] dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>EXPLORE ARCHIVE</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {profile.contactEmail && (
              <a
                href={`mailto:${profile.contactEmail}`}
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#171717]/20 dark:border-[#F4F1EA]/20 bg-[#FBFAF7] dark:bg-[#171717] text-[#171717] dark:text-[#F4F1EA] hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] font-mono text-xs uppercase tracking-widest transition-colors"
              >
                <span>DIRECT INQUIRY</span>
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
