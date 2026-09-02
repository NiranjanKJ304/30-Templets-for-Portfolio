/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalHero - Serene, organic introductory hero
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { Sprout, MapPin, Sparkles, ArrowDown, ExternalLink } from 'lucide-react';

interface BotanicalHeroProps {
  data: PortfolioData;
}

export const BotanicalHero: React.FC<BotanicalHeroProps> = ({ data }) => {
  const { profile } = data;

  const scrollToNext = () => {
    const firstSection = document.getElementById('about') || document.getElementById('work');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#D8D4C8] dark:border-[#2C3E30]">
      {/* Decorative ambient organic blur circles */}
      <div className="absolute top-1/4 right-5 w-72 h-72 bg-[#E4ECE4] dark:bg-[#1A2E20] rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-5 left-10 w-80 h-80 bg-[#F2E5DC] dark:bg-[#2A1D18] rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Availability / Botanical badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4ECE4] dark:bg-[#1F3325] border border-[#C5D7C6] dark:border-[#2D4D36] text-[#243828] dark:text-[#9ECBB0] text-xs font-serif tracking-wide mb-6">
              <Sprout className="w-3.5 h-3.5 text-[#BF6648] dark:text-[#E58A6C]" />
              <span>{profile.statusBadge || (profile.availableForHire ? 'Available for select engagements' : 'Cultivating thoughtful solutions')}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-[#1C261E] dark:text-[#F0F5F1] tracking-tight mb-6">
              {profile.headline || profile.role || `Designing with organic clarity and enduring intent.`}
            </h1>

            {/* Bio summary */}
            <p className="text-base sm:text-lg leading-relaxed text-[#586359] dark:text-[#9BB0A0] max-w-2xl font-sans mb-8">
              {profile.summary || profile.bio}
            </p>

            {/* Meta tags & Location */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#586359] dark:text-[#9BB0A0] mb-8 font-mono">
              {profile.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#BF6648] dark:text-[#E58A6C]" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.pronouns && (
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#4A6B53] dark:text-[#8EB697]" />
                  <span>{profile.pronouns}</span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full text-sm font-medium bg-[#243828] dark:bg-[#EBF2EC] text-[#F6F5F0] dark:text-[#101712] hover:bg-[#1B2C1F] dark:hover:bg-[#DCE8DE] transition-all shadow-xs"
              >
                Explore Works
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-[#D8D4C8] dark:border-[#2C3E30] bg-[#FFFFFF] dark:bg-[#18221B] text-[#1C261E] dark:text-[#F0F5F1] hover:bg-[#EBE9DF] dark:hover:bg-[#202E24] transition-all"
                >
                  <span>Curriculum Vitae</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              )}
            </div>
          </div>

          {/* Avatar / Portrait Column */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Organic framing shape */}
              <div className="w-56 h-68 sm:w-64 sm:h-76 rounded-[40px] overflow-hidden border-4 border-[#FFFFFF] dark:border-[#202E24] shadow-md bg-[#E4ECE4] dark:bg-[#1F3325]">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover grayscale-25 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-serif text-5xl font-light text-[#243828] dark:text-[#8EB697]">
                    {profile.name.charAt(0)}
                  </div>
                )}
              </div>
              {/* Botanical badge pill */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] rounded-2xl shadow-sm">
                <span className="text-xs font-serif italic text-[#BF6648] dark:text-[#E58A6C] block">
                  Rooted in craft
                </span>
                <span className="text-[11px] font-sans font-medium text-[#1C261E] dark:text-[#F0F5F1]">
                  {profile.role || profile.headline}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={scrollToNext}
            className="p-2 rounded-full border border-[#D8D4C8] dark:border-[#2C3E30] text-[#586359] dark:text-[#9BB0A0] hover:text-[#1C261E] dark:hover:text-[#F0F5F1] transition-colors cursor-pointer animate-bounce"
            aria-label="Scroll to content"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
