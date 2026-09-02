/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraHero - Bright, expressive, luminous masthead
 */

import React from 'react';
import { MapPin, Sparkles, ArrowDown, FileText, ArrowRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';

export interface AuroraHeroProps {
  data: PortfolioData;
}

export const AuroraHero: React.FC<AuroraHeroProps> = ({ data }) => {
  const { profile } = data;
  const avatarUrl = profile.avatarUrl;
  const hasStatusBadge = Boolean(profile.statusBadge);
  const isAvailable = profile.availableForHire === true;

  return (
    <section
      id="profile"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left / Primary Column: Typography & Narrative */}
        <div className={`space-y-8 ${avatarUrl ? 'lg:col-span-7' : 'lg:col-span-12 max-w-4xl'}`}>
          {/* Status & Availability Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {hasStatusBadge && (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-neutral-900/90 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60 shadow-xs backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                <span>{profile.statusBadge}</span>
              </div>
            )}

            {isAvailable && (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for New Projects</span>
              </div>
            )}

            {profile.location && (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 dark:bg-neutral-800/80 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{profile.location}</span>
              </div>
            )}
          </div>

          {/* Name & Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
              {profile.name}
            </h1>

            {(profile.headline || profile.title) && (
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent leading-snug">
                {profile.headline || profile.title}
              </p>
            )}
          </div>

          {/* Short Bio Introduction */}
          {profile.bio && (
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl font-normal">
              {profile.bio}
            </p>
          )}

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 hover:opacity-95 shadow-md shadow-purple-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
            >
              <span>Explore Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-white/90 dark:bg-neutral-900/90 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200/90 dark:border-neutral-700 shadow-xs backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
            >
              <span>Get in Touch</span>
            </a>

            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            )}
          </div>
        </div>

        {/* Right / Secondary Column: Portrait Frame (when avatar exists) */}
        {avatarUrl && (
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Luminous atmospheric halo behind image */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-tr from-purple-400 via-sky-300 to-rose-300 dark:from-purple-900/40 dark:via-sky-800/40 dark:to-rose-900/40 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />

              {/* Translucent crystalline picture container */}
              <div className="relative rounded-3xl p-3 bg-white/70 dark:bg-neutral-900/70 border border-white/80 dark:border-neutral-800/80 shadow-xl shadow-purple-500/10 backdrop-blur-xl overflow-hidden">
                <div className="aspect-4/5 w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Subtle indicator to scroll */}
      <div className="pt-16 sm:pt-20 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to next section"
          onClick={(e) => {
            e.preventDefault();
            const nextEl = document.querySelector('section:not(#profile)');
            nextEl?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-2 rounded-full text-neutral-400 dark:text-neutral-500 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-colors"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
