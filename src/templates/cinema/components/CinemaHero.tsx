/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaHero - Immersive wide-aperture identity stage with atmospheric lighting and typography-first fallback
 */

import React from 'react';
import { MapPin, Mail, ArrowUpRight, FileText } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { SocialLinks } from '../../../core/components/SocialLinks';

export interface CinemaHeroProps {
  data: PortfolioData;
}

export const CinemaHero: React.FC<CinemaHeroProps> = ({ data }) => {
  const { profile, socials, contact } = data;

  const email = contact?.email || profile.contactEmail;
  const roleOrHeadline = profile.role || profile.headline;

  const showStatus = Boolean(profile.statusBadge || profile.availableForHire);
  const statusLabel = profile.statusBadge || (profile.availableForHire ? 'OPEN FOR SELECT ENGAGEMENTS' : '');

  const hasAvatar = Boolean(profile.avatarUrl);

  return (
    <section id="profile" className="relative w-full pt-16 pb-24 sm:pt-28 sm:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {hasAvatar ? (
          /* =========================================================================
             1. WIDE-APERTURE SPLIT IDENTITY (WHEN PORTRAIT EXISTS)
             ========================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Telemetry and Coordinates Strip */}
              <div className="flex flex-wrap items-center gap-3">
                {showStatus && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-mono uppercase tracking-wider rounded-full">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)] animate-pulse" />
                    <span>{statusLabel}</span>
                  </div>
                )}

                {profile.location && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-200/50 dark:bg-neutral-900/60 border border-neutral-300 dark:border-white/10 text-neutral-700 dark:text-neutral-300 text-xs font-mono rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{profile.location}</span>
                  </div>
                )}
              </div>

              {/* Monumental Hero Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-serif leading-[1.05]">
                  {profile.name}
                </h1>

                {roleOrHeadline && (
                  <p className="text-xl sm:text-2xl font-sans text-amber-600 dark:text-amber-400 font-medium tracking-wide">
                    {roleOrHeadline}
                  </p>
                )}
              </div>

              {/* Narrative Summary */}
              {profile.summary && (
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans max-w-2xl leading-relaxed">
                  {profile.summary}
                </p>
              )}

              {/* Data Record Counts (Direct Array Counts Only) */}
              {((data.projects && data.projects.length > 0) ||
                (data.experience && data.experience.length > 0) ||
                (data.skills && data.skills.length > 0)) && (
                <div className="pt-2 flex flex-wrap gap-8 border-y border-neutral-200 dark:border-white/10 py-4 font-mono">
                  {data.projects && data.projects.length > 0 && (
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                        {String(data.projects.length).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-0.5">
                        Works
                      </div>
                    </div>
                  )}

                  {data.experience && data.experience.length > 0 && (
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                        {String(data.experience.length).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-0.5">
                        Appointments
                      </div>
                    </div>
                  )}

                  {data.skills && data.skills.length > 0 && (
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                        {String(data.skills.length).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-0.5">
                        Skill Domains
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-neutral-900 text-white dark:bg-amber-500 dark:text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 dark:hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  <span>Inquire / Collaborate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {profile.resumeUrl && (
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-300 dark:border-white/15 text-neutral-800 dark:text-neutral-200 font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:border-neutral-900 dark:hover:border-white/40 transition-all"
                  >
                    <FileText className="w-4 h-4 text-amber-500" />
                    <span>Bio / CV</span>
                  </a>
                )}

                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-amber-500 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-amber-500" />
                    <span>{email}</span>
                  </a>
                )}
              </div>

              {/* Social Channels Strip */}
              {socials && socials.length > 0 && (
                <div className="pt-2">
                  <SocialLinks socials={socials} variant="compact" />
                </div>
              )}
            </div>

            {/* Right Media Frame (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/10 bg-neutral-900 group">
                <ImageWithFallback
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fallbackText={profile.name.charAt(0)}
                  aspectRatioClass="aspect-[3/4]"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                />

                {/* Soft Cinematic Bottom Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 inset-x-0 p-6 text-white font-serif">
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    PROTAGONIST // {profile.name}
                  </div>
                  {roleOrHeadline && (
                    <div className="text-sm text-neutral-300 font-sans mt-0.5">
                      {roleOrHeadline}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================================================
             2. TYPOGRAPHY-LED MONUMENTAL HERO (WHEN NO PORTRAIT MEDIA EXISTS)
             ========================================================================= */
          <div className="max-w-4xl mx-auto text-center space-y-10 py-8">
            {/* Status & Coordinates */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {showStatus && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-mono uppercase tracking-wider rounded-full">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)] animate-pulse" />
                  <span>{statusLabel}</span>
                </div>
              )}

              {profile.location && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-200/50 dark:bg-neutral-900/60 border border-neutral-300 dark:border-white/10 text-neutral-700 dark:text-neutral-300 text-xs font-mono rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>

            {/* Monumental Centered Name */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-serif leading-[1.05]">
                {profile.name}
              </h1>

              {roleOrHeadline && (
                <p className="text-2xl sm:text-3xl font-sans text-amber-600 dark:text-amber-400 font-light tracking-wide max-w-2xl mx-auto">
                  {roleOrHeadline}
                </p>
              )}
            </div>

            {/* Narrative Summary */}
            {profile.summary && (
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-sans max-w-2xl mx-auto leading-relaxed">
                {profile.summary}
              </p>
            )}

            {/* Direct Array Counts Strip */}
            {((data.projects && data.projects.length > 0) ||
              (data.experience && data.experience.length > 0) ||
              (data.skills && data.skills.length > 0)) && (
              <div className="pt-2 flex flex-wrap justify-center gap-10 sm:gap-16 border-y border-neutral-200 dark:border-white/10 py-6 font-mono">
                {data.projects && data.projects.length > 0 && (
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                      {String(data.projects.length).padStart(2, '0')}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1">
                      Works
                    </div>
                  </div>
                )}

                {data.experience && data.experience.length > 0 && (
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                      {String(data.experience.length).padStart(2, '0')}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1">
                      Appointments
                    </div>
                  </div>
                )}

                {data.skills && data.skills.length > 0 && (
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                      {String(data.skills.length).padStart(2, '0')}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1">
                      Skill Domains
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Centered Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-neutral-900 text-white dark:bg-amber-500 dark:text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 dark:hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                <span>Inquire / Collaborate</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 border border-neutral-300 dark:border-white/15 text-neutral-800 dark:text-neutral-200 font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:border-neutral-900 dark:hover:border-white/40 transition-all"
                >
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span>Bio / CV</span>
                </a>
              )}
            </div>

            {/* Centered Socials */}
            {socials && socials.length > 0 && (
              <div className="pt-4 flex justify-center">
                <SocialLinks socials={socials} variant="compact" />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
