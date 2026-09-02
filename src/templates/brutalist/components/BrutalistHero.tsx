/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistHero - Monumental typography & constructivist layout
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ArrowDown, ExternalLink, MapPin, Sparkles } from 'lucide-react';

interface BrutalistHeroProps {
  data: PortfolioData;
}

export const BrutalistHero: React.FC<BrutalistHeroProps> = ({ data }) => {
  const { profile } = data;

  const scrollToNext = () => {
    const firstSection = document.getElementById('about') || document.getElementById('work');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden transition-colors">
      {/* Structural crosshair markers */}
      <div className="absolute top-4 left-4 font-mono text-xs font-bold text-[#111111]/30 dark:text-[#F4F1E8]/30 select-none">
        + + 00_HERO_INDEX
      </div>
      <div className="absolute top-4 right-4 font-mono text-xs font-bold text-[#111111]/30 dark:text-[#F4F1E8]/30 select-none">
        STRUCTURE_ACTIVE + +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Availability / Status Strip */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] dark:bg-[#191919] border-2 border-[#111111] dark:border-[#F4F1E8] shadow-[3px_3px_0px_0px_#111111] dark:shadow-[3px_3px_0px_0px_#F4F1E8]">
            <span className="w-2.5 h-2.5 bg-[#2563EB] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F4F1E8]">
              {profile.statusBadge || (profile.availableForHire ? 'AVAILABLE FOR COMMISSION / FULLTIME' : 'ACTIVE DISCIPLINE')}
            </span>
          </div>

          {profile.location && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFFFF] dark:bg-[#191919] border-2 border-[#111111] dark:border-[#F4F1E8] shadow-[3px_3px_0px_0px_#111111] dark:shadow-[3px_3px_0px_0px_#F4F1E8]">
              <MapPin className="w-3.5 h-3.5 text-[#EF4444]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F4F1E8]">
                {profile.location}
              </span>
            </div>
          )}

          {profile.pronouns && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFFFF] dark:bg-[#191919] border-2 border-[#111111] dark:border-[#F4F1E8] shadow-[3px_3px_0px_0px_#111111] dark:shadow-[3px_3px_0px_0px_#F4F1E8]">
              <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F4F1E8]">
                {profile.pronouns}
              </span>
            </div>
          )}
        </div>

        {/* Monumental Name Header */}
        <div className="mb-10">
          <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-[#111111] dark:text-[#F4F1E8] leading-[0.88] break-words">
            {profile.name}
          </h1>
        </div>

        {/* Structural 2-column or Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info Box */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Role & Headline Block */}
            <div className="p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[6px_6px_0px_0px_#111111] dark:shadow-[6px_6px_0px_0px_#F4F1E8]">
              <div className="font-mono text-xs font-bold uppercase text-[#2563EB] mb-2 tracking-widest">
                // EXECUTIVE DIRECTIVE
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#111111] dark:text-[#F4F1E8] leading-tight mb-4">
                {profile.headline || profile.role || 'Digital Architect & Creative Engineer'}
              </h2>
              {(profile.summary || profile.bio) && (
                <p className="font-sans text-base sm:text-lg text-[#333333] dark:text-[#CCCCCC] leading-relaxed">
                  {profile.summary || profile.bio}
                </p>
              )}
            </div>

            {/* CTA Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] font-mono text-xs font-black uppercase tracking-widest hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#2563EB] dark:hover:text-white transition-all border-2 border-[#111111] dark:border-[#F4F1E8] shadow-[4px_4px_0px_0px_#2563EB] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                [ EXPLORE WORKS ↓ ]
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFFFFF] dark:bg-[#191919] text-[#111111] dark:text-[#F4F1E8] font-mono text-xs font-black uppercase tracking-widest hover:bg-[#EAE6DA] dark:hover:bg-[#252525] transition-all border-2 border-[#111111] dark:border-[#F4F1E8] shadow-[4px_4px_0px_0px_#111111] dark:shadow-[4px_4px_0px_0px_#F4F1E8]"
                >
                  <span>RESUME / CV</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Avatar / Portrait Block (if available) */}
          {profile.avatarUrl && (
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative border-3 border-[#111111] dark:border-[#F4F1E8] bg-[#FFFFFF] dark:bg-[#191919] p-3 shadow-[8px_8px_0px_0px_#111111] dark:shadow-[8px_8px_0px_0px_#F4F1E8]">
                <div className="w-60 h-72 sm:w-68 sm:h-80 overflow-hidden bg-[#111111]">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-2.5 pt-2 border-t-2 border-[#111111] dark:border-[#F4F1E8] flex items-center justify-between font-mono text-[10px] uppercase font-bold text-[#111111] dark:text-[#F4F1E8]">
                  <span>FIG. 01 — IDENTITY</span>
                  <span className="text-[#2563EB]">ACT_VERIFIED</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Scroll anchor */}
        <div className="mt-14 flex justify-start">
          <button
            onClick={scrollToNext}
            className="flex items-center gap-2 font-mono text-xs uppercase font-black text-[#111111] dark:text-[#F4F1E8] hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
            <span>CONTINUE TO DOSSIER</span>
          </button>
        </div>
      </div>
    </section>
  );
};
