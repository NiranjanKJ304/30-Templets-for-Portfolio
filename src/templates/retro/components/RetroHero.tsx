/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroHero - Bold poster masthead with asymmetric color blocking
 */

import React from 'react';
import { MapPin, Sparkles, ArrowDown, Mail, Download } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';

export interface RetroHeroProps {
  data: PortfolioData;
}

export const RetroHero: React.FC<RetroHeroProps> = ({ data }) => {
  const { profile } = data;

  const scrollToAboutOrWork = () => {
    const target = document.getElementById('work') || document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="profile"
      className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Poster Card */}
        <div className="relative bg-[#FFF9EA] dark:bg-[#362E28] border-3 border-[#29231F] dark:border-[#FFF4D6]/25 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-[8px_8px_0px_0px_#29231F] dark:shadow-[8px_8px_0px_0px_rgba(255,244,214,0.18)] transition-all">
          
          {/* Top Registration Bar / Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 mb-8 sm:mb-10 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15 font-mono text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#E76F2E] text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 shadow-[2px_2px_0px_0px_#29231F]">
                FOLIO.EDITION.2026
              </span>
              {profile.role && (
                <span className="text-[#665D55] dark:text-[#A89B8E] hidden sm:inline">
                  [{profile.role}]
                </span>
              )}
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              {profile.statusBadge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] shadow-[2px_2px_0px_0px_#29231F]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{profile.statusBadge}</span>
                </span>
              )}

              {profile.availableForHire && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#477A8A] text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 shadow-[2px_2px_0px_0px_#29231F]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Hire</span>
                </span>
              )}

              {profile.location && (
                <span className="inline-flex items-center gap-1 text-[#665D55] dark:text-[#A89B8E] px-2 py-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E76F2E]" />
                  <span>{profile.location}</span>
                </span>
              )}
            </div>
          </div>

          {/* Hero Core Content: Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Area (8 or 12 cols) */}
            <div className={`${profile.avatarUrl ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-6 sm:space-y-8`}>
              <div>
                <div className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#E76F2E] mb-2 sm:mb-3">
                  // PORTFOLIO REGISTER
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#29231F] dark:text-[#FFF4D6] leading-[0.92] break-words">
                  {profile.name}
                </h1>
              </div>

              {profile.headline && (
                <div className="p-4 sm:p-6 bg-[#FFF4D6] dark:bg-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-xl shadow-[4px_4px_0px_0px_#29231F] dark:shadow-[4px_4px_0px_0px_rgba(255,244,214,0.12)]">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#29231F] dark:text-[#FFF4D6] leading-snug">
                    {profile.headline}
                  </p>
                </div>
              )}

              {(profile.bio || profile.summary) && (
                <p className="text-base sm:text-lg text-[#665D55] dark:text-[#D8CBB7] max-w-2xl leading-relaxed">
                  {profile.summary || profile.bio}
                </p>
              )}

              {/* Action Triggers */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={scrollToAboutOrWork}
                  className="px-6 py-3.5 rounded-xl font-mono font-black text-sm uppercase tracking-wider bg-[#E76F2E] text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 shadow-[4px_4px_0px_0px_#29231F] hover:shadow-[2px_2px_0px_0px_#29231F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 min-h-[44px]"
                >
                  <span>Explore Index</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                {(data.contact?.email || profile.contactEmail) && (
                  <button
                    onClick={scrollToContact}
                    className="px-6 py-3.5 rounded-xl font-mono font-black text-sm uppercase tracking-wider bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] shadow-[4px_4px_0px_0px_#29231F] hover:shadow-[2px_2px_0px_0px_#29231F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 min-h-[44px]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get in Touch</span>
                  </button>
                )}

                {profile.resumeUrl && (
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl font-mono font-bold text-sm uppercase tracking-wider bg-[#FFF4D6] dark:bg-[#29231F] text-[#29231F] dark:text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 shadow-[4px_4px_0px_0px_#29231F] dark:shadow-[4px_4px_0px_0px_rgba(255,244,214,0.15)] hover:shadow-[2px_2px_0px_0px_#29231F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 min-h-[44px]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Curriculum Vitae</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Profile Portrait Frame (4 cols) */}
            {profile.avatarUrl && (
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                  {/* Offset Graphic Color Plate */}
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#E76F2E] border-2 border-[#29231F] dark:border-[#FFF4D6]/20" />
                  
                  {/* Avatar Container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-3 border-[#29231F] dark:border-[#FFF4D6]/30 bg-[#FFF4D6] shadow-[4px_4px_0px_0px_#29231F]">
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[15%] contrast-110"
                    />
                    
                    {/* Retro Corner Badge */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#29231F] text-[#FFF4D6] font-mono text-[9px] font-bold uppercase tracking-widest border border-[#FFF4D6]/30">
                      AUTHENTIC
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Graphic Stripe Accent */}
          <div className="mt-10 sm:mt-12 pt-6 border-t-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15 flex items-center justify-between text-xs font-mono font-bold text-[#665D55] dark:text-[#A89B8E] uppercase tracking-wider">
            <span>UNIVERSAL PORTFOLIO REGISTRY</span>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">TYPE SPEC. 70-80</span>
              <span className="w-2.5 h-2.5 bg-[#E76F2E] rounded-sm" />
              <span className="w-2.5 h-2.5 bg-[#E9B949] rounded-sm" />
              <span className="w-2.5 h-2.5 bg-[#477A8A] rounded-sm" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
