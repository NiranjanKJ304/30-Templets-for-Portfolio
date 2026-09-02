/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyHero - Narrative departure point and profile milestone
 */

import React from 'react';
import { ArrowDown, MapPin, Mail, Sparkles, FileText } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

export interface JourneyHeroProps {
  data: PortfolioData;
}

export const JourneyHero: React.FC<JourneyHeroProps> = ({ data }) => {
  const { profile } = data;
  const statusText = profile.statusBadge || (profile.availableForHire ? 'Available for new ventures' : undefined);

  return (
    <section
      id="profile"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Narrative Column */}
          <div className={`${profile.avatarUrl ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-6`}>
            {/* Status & Origin Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {statusText && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{statusText}</span>
                </span>
              )}
              {profile.location && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{profile.location}</span>
                </span>
              )}
            </div>

            {/* Name & Primary Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.1]">
                {profile.name}
              </h1>
              {profile.title && (
                <p className="text-xl sm:text-2xl font-semibold text-teal-700 dark:text-teal-400">
                  {profile.title}
                </p>
              )}
              {profile.headline && (
                <p className="text-lg text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed max-w-2xl">
                  {profile.headline}
                </p>
              )}
            </div>

            {/* Introductory Narrative */}
            {(profile.shortBio || profile.bio) && (
              <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                {profile.shortBio || profile.bio}
              </p>
            )}

            {/* Actions & Waypoint Trigger */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-neutral-950 rounded-lg font-semibold text-sm transition-colors shadow-xs"
              >
                <span>Explore Journey</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {profile.contactEmail && (
                <a
                  href={`mailto:${profile.contactEmail}`}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-200 rounded-lg text-sm font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <span>Get in touch</span>
                </a>
              )}

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-200 rounded-lg text-sm font-medium transition-colors"
                >
                  <FileText className="w-4 h-4 text-neutral-500" />
                  <span>View Resume</span>
                </a>
              )}
            </div>
          </div>

          {/* Profile Image Milestone Node (When Present) */}
          {profile.avatarUrl && (
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative p-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-lg max-w-[280px] w-full">
                <div className="rounded-xl overflow-hidden aspect-4/5 bg-neutral-100 dark:bg-neutral-800">
                  <ImageWithFallback
                    src={profile.avatarUrl}
                    alt={profile.name}
                    fallbackText={profile.name.charAt(0)}
                    aspectRatioClass="aspect-4/5"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-center border-t border-neutral-100 dark:border-neutral-800">
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    // Origin Coordinates
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
