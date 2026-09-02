/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissHero - Precision 12-column typographic masthead & profile block
 */

import React from 'react';
import { ArrowDown, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SwissRule } from './SwissRule';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

export interface SwissHeroProps {
  data: PortfolioData;
}

export const SwissHero: React.FC<SwissHeroProps> = ({ data }) => {
  const { profile } = data;

  return (
    <section
      id="profile"
      className="pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-neutral-900 dark:border-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Rail: Status & Location */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400 pb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 dark:bg-red-500 inline-block" />
            <span className="font-bold text-neutral-950 dark:text-neutral-50">
              {profile.statusBadge || (profile.availableForHire ? 'AVAILABLE FOR COMMISSIONS' : 'INDEX / ACTIVE')}
            </span>
          </div>

          {profile.location && (
            <div className="flex items-center gap-1.5 text-neutral-900 dark:text-neutral-100 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
              <span>{profile.location}</span>
            </div>
          )}
        </div>

        <SwissRule thick className="mb-8 sm:mb-12" />

        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Typographic Identity Block (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
                // PORTFOLIO SPECIMEN
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-neutral-950 dark:text-neutral-50 uppercase leading-none break-words">
                {profile.name}
              </h1>
            </div>

            {profile.headline && (
              <div className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-neutral-800 dark:text-neutral-200 leading-snug">
                {profile.headline}
              </div>
            )}

            {profile.title && !profile.headline && (
              <div className="text-xl sm:text-2xl font-medium text-neutral-800 dark:text-neutral-200">
                {profile.title}
              </div>
            )}

            {/* Quick Action Button Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#work"
                className="px-5 py-3 bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 font-mono text-xs font-bold uppercase tracking-widest hover:bg-red-600 dark:hover:bg-red-500 dark:hover:text-white transition-colors flex items-center gap-2 border border-neutral-950 dark:border-neutral-50"
              >
                <span>Explore Catalog</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 bg-white dark:bg-neutral-900 text-neutral-950 dark:text-neutral-50 font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2 border border-neutral-900 dark:border-neutral-100"
              >
                <Mail className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Secondary Structural Metadata / Avatar Box (Cols 9-12) */}
          <div className="lg:col-span-4 border border-neutral-900 dark:border-neutral-100 p-6 bg-neutral-50 dark:bg-neutral-900 space-y-6">
            {profile.avatarUrl && (
              <div className="aspect-square border border-neutral-900 dark:border-neutral-100 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <ImageWithFallback
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fallbackText={profile.name.charAt(0)}
                  aspectRatioClass="aspect-square"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            )}

            <div className="space-y-3 font-mono text-xs leading-relaxed">
              <div className="text-red-600 dark:text-red-500 font-bold uppercase tracking-wider">
                [SPECIFICATION SHEET]
              </div>

              {profile.title && (
                <div className="flex justify-between py-1 border-b border-neutral-200 dark:border-neutral-800">
                  <span className="text-neutral-500 uppercase">TITLE:</span>
                  <span className="font-bold text-neutral-950 dark:text-neutral-50 text-right truncate max-w-[160px]">
                    {profile.title}
                  </span>
                </div>
              )}

              {profile.contactEmail && (
                <div className="flex justify-between py-1 border-b border-neutral-200 dark:border-neutral-800">
                  <span className="text-neutral-500 uppercase">EMAIL:</span>
                  <span className="font-bold text-neutral-950 dark:text-neutral-50 text-right truncate max-w-[160px]">
                    {profile.contactEmail}
                  </span>
                </div>
              )}

              {profile.availableForHire !== undefined && (
                <div className="flex justify-between py-1 border-b border-neutral-200 dark:border-neutral-800">
                  <span className="text-neutral-500 uppercase">STATUS:</span>
                  <span className="font-bold text-neutral-950 dark:text-neutral-50 text-right">
                    {profile.availableForHire ? 'ACTIVE' : 'ENGAGED'}
                  </span>
                </div>
              )}

              {profile.shortBio && (
                <p className="font-sans text-xs text-neutral-700 dark:text-neutral-300 pt-2 leading-relaxed">
                  {profile.shortBio}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
