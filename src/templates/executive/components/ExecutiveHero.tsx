/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveHero - Commanding 2-column asymmetric hero with monumental typography
 */

import React from 'react';
import { MapPin, Mail, ArrowDown, FileText, ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { SocialLinks } from '../../../core/components/SocialLinks';

export interface ExecutiveHeroProps {
  data: PortfolioData;
}

export const ExecutiveHero: React.FC<ExecutiveHeroProps> = ({ data }) => {
  const { profile, socials, contact } = data;

  const email = contact?.email || profile.contactEmail;
  const roleOrHeadline = profile.role || profile.headline;

  return (
    <section id="profile" className="relative w-full pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-[#1A1A19]/15 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Command Narrative & Monumental Title (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Status & Context Pill */}
            <div className="flex flex-wrap items-center gap-3">
              {profile.statusBadge ? (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-[11px] font-mono uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-600 animate-pulse" />
                  <span>{profile.statusBadge}</span>
                </div>
              ) : profile.availableForHire ? (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-[11px] font-mono uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-600 animate-pulse" />
                  <span>Available for Advisory & Engagements</span>
                </div>
              ) : null}

              {profile.location && (
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>

            {/* Monumental Name & Role */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.08]">
                {profile.name}
              </h1>

              {roleOrHeadline && (
                <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-neutral-700 dark:text-neutral-300 font-normal leading-snug">
                  {roleOrHeadline}
                </p>
              )}
            </div>

            {/* Executive Summary */}
            {profile.summary && (
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl leading-relaxed">
                {profile.summary}
              </p>
            )}

            {/* Quick Metrics Strip if available */}
            {((data.experience && data.experience.length > 0) ||
              (data.projects && data.projects.length > 0) ||
              (data.achievements && data.achievements.length > 0)) && (
              <div className="pt-2 flex flex-wrap gap-8 border-y border-neutral-200 dark:border-neutral-800 py-4">
                {data.experience && data.experience.length > 0 && (
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-neutral-50">
                      {data.experience.length}
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Career Appointments
                    </div>
                  </div>
                )}

                {data.projects && data.projects.length > 0 && (
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-neutral-50">
                      {data.projects.length}
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Case Engagements
                    </div>
                  </div>
                )}

                {data.achievements && data.achievements.length > 0 && (
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-neutral-50">
                      {data.achievements.length}
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Honors & Distinctions
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Primary Command Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                <span>Initiate Engagement</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 font-mono text-xs font-bold uppercase tracking-wider hover:border-neutral-900 dark:hover:border-white transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Executive Bio & CV</span>
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{email}</span>
                </a>
              )}
            </div>

            {/* Social channels preview */}
            {socials && socials.length > 0 && (
              <div className="pt-2">
                <SocialLinks socials={socials} variant="compact" />
              </div>
            )}
          </div>

          {/* Right Column: Architectural Framed Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] p-3 border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
              <div className="relative w-full h-full overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800">
                <ImageWithFallback
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fallbackText={profile.name.charAt(0)}
                  aspectRatioClass="aspect-[4/5]"
                  className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />

                {/* Subtitle bottom banner */}
                <div className="absolute bottom-0 inset-x-0 bg-neutral-950/85 backdrop-blur-xs text-white p-4 border-t border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      LEADERSHIP PROFILE
                    </div>
                    <div className="font-serif text-sm font-bold truncate">
                      {profile.name}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-neutral-400">
                    DOSSIER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="mt-16 flex items-center gap-2 text-neutral-400 dark:text-neutral-500 text-xs font-mono tracking-widest uppercase">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span>Explore Key Competencies & History</span>
        </div>
      </div>
    </section>
  );
};
