/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasHero - Asymmetric art-directed identity canvas with tactile framing and architectural metadata
 */

import React from 'react';
import { MapPin, Mail, ArrowUpRight, FileText } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { SocialLinks } from '../../../core/components/SocialLinks';

export interface CanvasHeroProps {
  data: PortfolioData;
}

export const CanvasHero: React.FC<CanvasHeroProps> = ({ data }) => {
  const { profile, socials, contact } = data;

  const email = contact?.email || profile.contactEmail;
  const roleOrHeadline = profile.role || profile.headline;

  const showStatus = Boolean(profile.statusBadge || profile.availableForHire);
  const statusLabel = profile.statusBadge || (profile.availableForHire ? 'AVAILABLE FOR COLLABORATION' : '');

  const hasAvatar = Boolean(profile.avatarUrl);

  return (
    <section id="profile" className="relative w-full pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {hasAvatar ? (
          /* =========================================================================
             1. ASYMMETRIC OVERLAPPING STUDIO COMPOSITION (WITH MEDIA)
             ========================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Broadside (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
              {/* Coordinates and Status Indicator */}
              <div className="flex flex-wrap items-center gap-3">
                {showStatus && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/10 border border-orange-600/30 text-orange-600 dark:text-orange-400 text-xs font-mono uppercase tracking-wider rounded-md">
                    <span className="w-2 h-2 rounded-sm bg-orange-600 dark:bg-orange-400 animate-pulse" />
                    <span>{statusLabel}</span>
                  </div>
                )}

                {profile.location && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-200/60 dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-mono rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                    <span>{profile.location}</span>
                  </div>
                )}
              </div>

              {/* Monumental Name & Role */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.02]">
                  {profile.name}
                </h1>

                {roleOrHeadline && (
                  <p className="text-xl sm:text-2xl font-mono text-orange-600 dark:text-orange-400 font-bold tracking-tight">
                    // {roleOrHeadline}
                  </p>
                )}
              </div>

              {/* Editorial Summary */}
              {profile.summary && (
                <div className="p-6 bg-white dark:bg-[#1C1A18] border-l-4 border-orange-600 dark:border-orange-500 border-y border-r border-neutral-300 dark:border-neutral-800 shadow-[3px_3px_0px_0px_rgba(28,25,23,0.06)] dark:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] rounded-r-lg">
                  <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                    {profile.summary}
                  </p>
                </div>
              )}

              {/* Data Record Counts (Direct Array Lengths Only) */}
              {((data.projects && data.projects.length > 0) ||
                (data.experience && data.experience.length > 0) ||
                (data.skills && data.skills.length > 0)) && (
                <div className="grid grid-cols-3 gap-4 pt-2 font-mono">
                  {data.projects && data.projects.length > 0 && (
                    <div className="p-3.5 bg-neutral-100 dark:bg-neutral-800/40 border border-neutral-300 dark:border-neutral-700/60 rounded-md">
                      <div className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-neutral-100">
                        {String(data.projects.length).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                        Works
                      </div>
                    </div>
                  )}

                  {data.experience && data.experience.length > 0 && (
                    <div className="p-3.5 bg-neutral-100 dark:bg-neutral-800/40 border border-neutral-300 dark:border-neutral-700/60 rounded-md">
                      <div className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-neutral-100">
                        {String(data.experience.length).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                        Roles
                      </div>
                    </div>
                  )}

                  {data.skills && data.skills.length > 0 && (
                    <div className="p-3.5 bg-neutral-100 dark:bg-neutral-800/40 border border-neutral-300 dark:border-neutral-700/60 rounded-md">
                      <div className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-neutral-100">
                        {String(data.skills.length).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                        Disciplines
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 text-white dark:bg-orange-600 dark:text-white font-mono text-xs font-bold uppercase tracking-wider rounded-md hover:bg-neutral-800 dark:hover:bg-orange-700 transition-all shadow-[3px_3px_0px_0px_rgba(28,25,23,0.15)]"
                >
                  <span>Initiate Contact</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {profile.resumeUrl && (
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 font-mono text-xs font-bold uppercase tracking-wider rounded-md hover:border-neutral-900 dark:hover:border-white transition-all bg-white dark:bg-[#1C1A18]"
                  >
                    <FileText className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <span>Resume / CV</span>
                  </a>
                )}

                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-3.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-orange-600" />
                    <span className="truncate max-w-[200px]">{email}</span>
                  </a>
                )}
              </div>

              {/* Social Channels */}
              {socials && socials.length > 0 && (
                <div className="pt-2">
                  <SocialLinks socials={socials} variant="compact" />
                </div>
              )}
            </div>

            {/* Right Architectural Framing Media Block (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                {/* Background Accent Offset Geometry */}
                <div className="absolute -inset-2 bg-orange-600/10 dark:bg-orange-500/10 rounded-xl transform -rotate-1 border border-orange-600/20 pointer-events-none" />

                {/* Primary Media Container */}
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border-2 border-neutral-900 dark:border-neutral-700 shadow-[6px_6px_0px_0px_rgba(28,25,23,0.12)] dark:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] bg-neutral-100 dark:bg-neutral-800">
                  <ImageWithFallback
                    src={profile.avatarUrl}
                    alt={profile.name}
                    fallbackText={profile.name.charAt(0)}
                    aspectRatioClass="aspect-[4/5]"
                    className="w-full h-full object-cover"
                  />

                  {/* Corner Accent Label */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest rounded">
                    PORTFOLIO // {profile.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================================================
             2. TYPOGRAPHY-FIRST STUDIO BROADSIDE (WHEN NO AVATAR EXISTS)
             ========================================================================= */
          <div className="max-w-5xl space-y-8 py-6">
            {/* Status & Coordinates */}
            <div className="flex flex-wrap items-center gap-3">
              {showStatus && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/10 border border-orange-600/30 text-orange-600 dark:text-orange-400 text-xs font-mono uppercase tracking-wider rounded-md">
                  <span className="w-2 h-2 rounded-sm bg-orange-600 dark:bg-orange-400 animate-pulse" />
                  <span>{statusLabel}</span>
                </div>
              )}

              {profile.location && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-200/60 dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-mono rounded-md">
                  <MapPin className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>

            {/* Monumental Headlines */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 leading-[0.98]">
                {profile.name}
              </h1>

              {roleOrHeadline && (
                <p className="text-2xl sm:text-3xl font-mono text-orange-600 dark:text-orange-400 font-bold tracking-tight">
                  // {roleOrHeadline}
                </p>
              )}
            </div>

            {/* Editorial Summary */}
            {profile.summary && (
              <div className="p-6 sm:p-8 bg-white dark:bg-[#1C1A18] border-l-4 border-orange-600 dark:border-orange-500 border-y border-r border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.06)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-r-lg max-w-3xl">
                <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                  {profile.summary}
                </p>
              </div>
            )}

            {/* Direct Array Counts */}
            {((data.projects && data.projects.length > 0) ||
              (data.experience && data.experience.length > 0) ||
              (data.skills && data.skills.length > 0)) && (
              <div className="flex flex-wrap gap-4 pt-2 font-mono">
                {data.projects && data.projects.length > 0 && (
                  <div className="px-6 py-4 bg-neutral-100 dark:bg-neutral-800/40 border border-neutral-300 dark:border-neutral-700/60 rounded-md">
                    <div className="text-3xl font-black text-neutral-900 dark:text-neutral-100">
                      {String(data.projects.length).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                      Works
                    </div>
                  </div>
                )}

                {data.experience && data.experience.length > 0 && (
                  <div className="px-6 py-4 bg-neutral-100 dark:bg-neutral-800/40 border border-neutral-300 dark:border-neutral-700/60 rounded-md">
                    <div className="text-3xl font-black text-neutral-900 dark:text-neutral-100">
                      {String(data.experience.length).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                      Roles
                    </div>
                  </div>
                )}

                {data.skills && data.skills.length > 0 && (
                  <div className="px-6 py-4 bg-neutral-100 dark:bg-neutral-800/40 border border-neutral-300 dark:border-neutral-700/60 rounded-md">
                    <div className="text-3xl font-black text-neutral-900 dark:text-neutral-100">
                      {String(data.skills.length).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                      Disciplines
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-neutral-900 text-white dark:bg-orange-600 dark:text-white font-mono text-xs font-bold uppercase tracking-wider rounded-md hover:bg-neutral-800 dark:hover:bg-orange-700 transition-all shadow-[3px_3px_0px_0px_rgba(28,25,23,0.15)]"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 font-mono text-xs font-bold uppercase tracking-wider rounded-md hover:border-neutral-900 dark:hover:border-white transition-all bg-white dark:bg-[#1C1A18]"
                >
                  <FileText className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span>Resume / CV</span>
                </a>
              )}
            </div>

            {/* Social Channels */}
            {socials && socials.length > 0 && (
              <div className="pt-2">
                <SocialLinks socials={socials} variant="compact" />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
