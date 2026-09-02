/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalHero - Clean, content-centric hero header for Minimal template
 */

import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { SocialLinks } from '../../../core/components/SocialLinks';
import { ResumeButton } from '../../../core/components/ResumeButton';

export interface MinimalHeroProps {
  data: PortfolioData;
}

export const MinimalHero: React.FC<MinimalHeroProps> = ({ data }) => {
  const { profile, socials } = data;

  return (
    <header
      id="profile"
      className="w-full pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-[#1C1917]/10 dark:border-neutral-800 transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-12">
        {/* Main Text Content */}
        <div className="flex-1 space-y-4">
          {/* Status badge / availability if provided */}
          {(profile.availableForHire || profile.statusBadge) && (
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.statusBadge || 'Available for projects'}</span>
            </div>
          )}

          {/* Primary Name */}
          <div className="space-y-1">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.05]">
              {profile.name}
            </h1>
            {profile.headline && (
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
                {profile.headline}
              </p>
            )}
          </div>

          {/* Location & Pronouns if present */}
          {(profile.location || profile.pronouns) && (
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              {profile.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-neutral-400" />
                  {profile.location}
                </span>
              )}
              {profile.location && profile.pronouns && <span>·</span>}
              {profile.pronouns && <span>{profile.pronouns}</span>}
            </div>
          )}

          {/* Summary/Intro Paragraph if provided */}
          {profile.summary && (
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl pt-2 font-sans">
              {profile.summary}
            </p>
          )}

          {/* Actions & Social Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {profile.contactEmail && (
              <a
                href={`mailto:${profile.contactEmail}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs text-xs font-semibold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-85 transition-opacity cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </a>
            )}

            {profile.resumeUrl && (
              <ResumeButton resumeUrl={profile.resumeUrl} variant="outline" size="sm" />
            )}

            {socials && socials.length > 0 && (
              <div className="pl-1 flex items-center">
                <SocialLinks socials={socials.slice(0, 5)} variant="minimal" iconSize={15} />
              </div>
            )}
          </div>
        </div>

        {/* Profile Avatar if provided */}
        {profile.avatarUrl && (
          <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-sm bg-neutral-100 dark:bg-neutral-800">
            <ImageWithFallback
              src={profile.avatarUrl}
              alt={profile.name}
              fallbackText={profile.name.charAt(0)}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </header>
  );
};
