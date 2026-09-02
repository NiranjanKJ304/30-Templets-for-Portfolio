/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralHero - Commanding futuristic identity portal with optical HUD framing
 */

import React from 'react';
import { MapPin, Mail, ArrowUpRight, FileText } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { SocialLinks } from '../../../core/components/SocialLinks';

export interface NeuralHeroProps {
  data: PortfolioData;
}

export const NeuralHero: React.FC<NeuralHeroProps> = ({ data }) => {
  const { profile, socials, contact } = data;

  const email = contact?.email || profile.contactEmail;
  const roleOrHeadline = profile.role || profile.headline;

  const showStatus = Boolean(profile.statusBadge || profile.availableForHire);
  const statusLabel = profile.statusBadge || (profile.availableForHire ? 'AVAILABLE FOR OPPORTUNITIES' : '');

  return (
    <section id="profile" className="relative w-full pt-16 pb-20 sm:pt-24 sm:pb-32 border-b border-neutral-200/80 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Digital Identity & Manifesto (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Telemetry & Availability Strip */}
            <div className="flex flex-wrap items-center gap-3">
              {showStatus && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-[11px] font-mono uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.9)] animate-pulse" />
                  <span>{statusLabel}</span>
                </div>
              )}

              {profile.location && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-[11px] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>

            {/* Monumental Modern Typography */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 font-sans leading-[1.05]">
                {profile.name}
              </h1>

              {roleOrHeadline && (
                <div className="text-lg sm:text-2xl font-mono text-cyan-600 dark:text-cyan-400 font-medium tracking-wide">
                  {roleOrHeadline}
                </div>
              )}
            </div>

            {/* Executive Bio / Narrative Summary */}
            {profile.summary && (
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl leading-relaxed">
                {profile.summary}
              </p>
            )}

            {/* Authentic Data Metrics Strip (when genuine records exist) */}
            {((data.projects && data.projects.length > 0) ||
              (data.experience && data.experience.length > 0) ||
              (data.skills && data.skills.length > 0)) && (
              <div className="pt-2 flex flex-wrap gap-8 border-y border-neutral-200 dark:border-white/5 py-4 font-mono">
                {data.projects && data.projects.length > 0 && (
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                      {String(data.projects.length).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Initiatives
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
                      Domains
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-900 text-white dark:bg-cyan-500 dark:text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-cyan-400 transition-all shadow-[0_0_16px_rgba(6,182,212,0.3)]"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-neutral-300 dark:border-white/15 text-neutral-800 dark:text-neutral-200 font-mono text-xs font-bold uppercase tracking-wider hover:border-neutral-900 dark:hover:border-white/40 hover:bg-neutral-100/50 dark:hover:bg-white/5 transition-all"
                >
                  <FileText className="w-4 h-4 text-cyan-500" />
                  <span>Resume / Bio</span>
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-500" />
                  <span>{email}</span>
                </a>
              )}
            </div>

            {/* Social Links Matrix */}
            {socials && socials.length > 0 && (
              <div className="pt-2">
                <SocialLinks socials={socials} variant="compact" />
              </div>
            )}
          </div>

          {/* Right Column: Optical HUD Portrait Matrix (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] p-2 bg-neutral-100 dark:bg-[#0F1117] border border-neutral-200 dark:border-white/10 shadow-2xl">
              {/* Decorative Corner Reticles */}
              <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-500" />
              <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-500" />
              <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-500" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-500" />

              <div className="relative w-full h-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-white/5">
                <ImageWithFallback
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fallbackText={profile.name.charAt(0)}
                  aspectRatioClass="aspect-[4/5]"
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                />

                {/* Sub-bar Identifier */}
                <div className="absolute bottom-0 inset-x-0 bg-neutral-950/90 backdrop-blur-xs text-white p-3.5 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <div>
                    <div className="text-[10px] text-cyan-400 uppercase tracking-widest">
                      IDENTITY NODE
                    </div>
                    <div className="font-bold truncate text-neutral-100">
                      {profile.name}
                    </div>
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    // 001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
