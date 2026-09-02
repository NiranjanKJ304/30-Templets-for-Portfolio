/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicHero - Fluid human-centered opening hero
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { MapPin, ArrowDown, FileText, Mail, Sparkles } from 'lucide-react';

interface NeoOrganicHeroProps {
  data: PortfolioData;
}

export const NeoOrganicHero: React.FC<NeoOrganicHeroProps> = ({ data }) => {
  const { profile } = data;
  const hasAvatar = Boolean(profile.avatarUrl);

  const scrollToWork = () => {
    const workElem = document.getElementById('work') || document.getElementById('about');
    if (workElem) {
      const top = workElem.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const top = contactElem.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Narrative Content */}
        <div className={`${hasAvatar ? 'lg:col-span-7' : 'lg:col-span-8'} space-y-6 sm:space-y-8`}>
          {/* Status & Location Pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            {profile.availableForHire !== undefined && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9E7D0]/70 dark:bg-[#1B211D] border border-[#79A66A]/30 text-[#17211B] dark:text-[#F2F3ED] text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#79A66A] dark:bg-[#91BD82] animate-pulse" />
                <span>{profile.statusBadge || (profile.availableForHire ? 'Available for new projects' : 'Currently engaged')}</span>
              </div>
            )}

            {profile.location && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFFFF]/80 dark:bg-[#1B211D]/80 border border-[#17211B]/10 dark:border-[#F2F3ED]/10 text-[#59635C] dark:text-[#B8C0B8] text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#E58B5B]" />
                <span>{profile.location}</span>
              </div>
            )}

            {profile.pronouns && (
              <div className="px-2.5 py-1.5 rounded-full bg-[#FFFFFF]/60 dark:bg-[#1B211D]/60 border border-[#17211B]/10 dark:border-[#F2F3ED]/10 text-[#8A938C] dark:text-[#7F897F] text-xs font-mono">
                {profile.pronouns}
              </div>
            )}
          </div>

          {/* Role pill / eyebrow */}
          {profile.role && (
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4169E1] dark:text-[#7F9CFF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{profile.role}</span>
            </div>
          )}

          {/* Primary Name Display */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#17211B] dark:text-[#F2F3ED] leading-[1.05]">
            {profile.name}
          </h1>

          {/* Headline */}
          {profile.headline && (
            <p className="text-xl sm:text-2xl md:text-3xl text-[#59635C] dark:text-[#B8C0B8] font-normal leading-snug">
              {profile.headline}
            </p>
          )}

          {/* Short Bio summary */}
          {(profile.summary || profile.bio) && (
            <p className="text-[#59635C] dark:text-[#B8C0B8] text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              {profile.summary || profile.bio?.split('\n')[0]}
            </p>
          )}

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#4169E1] hover:bg-[#3354B8] text-white font-medium text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            {(profile.contactEmail || data.contact) && (
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/15 dark:border-[#F2F3ED]/15 hover:border-[#4169E1] dark:hover:border-[#7F9CFF] text-[#17211B] dark:text-[#F2F3ED] font-medium text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#79A66A]" />
                <span>Get in Touch</span>
              </button>
            )}

            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#FFFFFF]/60 dark:bg-[#1B211D]/60 border border-[#17211B]/10 dark:border-[#F2F3ED]/10 text-[#59635C] dark:text-[#B8C0B8] hover:text-[#17211B] dark:hover:text-[#F2F3ED] text-sm font-medium transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Organic Avatar or Abstract Treatment */}
        <div className={`${hasAvatar ? 'lg:col-span-5' : 'lg:col-span-4'} flex justify-center`}>
          {hasAvatar ? (
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square">
              {/* Organic Fluid Frame */}
              <div
                className="absolute inset-0 rounded-[42%_58%_52%_48%/45%_48%_52%_55%] bg-gradient-to-tr from-[#79A66A]/20 via-[#4169E1]/20 to-[#E58B5B]/20 blur-md transform scale-105"
                aria-hidden="true"
              />
              <div className="relative w-full h-full rounded-[40%_60%_50%_50%/48%_45%_55%_52%] overflow-hidden bg-[#FFFFFF] dark:bg-[#1B211D] border-2 border-[#17211B]/8 dark:border-[#F2F3ED]/10 shadow-lg">
                <ImageWithFallback
                  src={profile.avatarUrl!}
                  alt={profile.name}
                  aspectRatioClass="w-full h-full"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small floating organic badge */}
              <div className="absolute -bottom-2 -left-2 px-4 py-2 rounded-2xl bg-[#FFFFFF]/90 dark:bg-[#1B211D]/90 backdrop-blur-xs border border-[#17211B]/10 dark:border-[#F2F3ED]/10 shadow-md text-xs font-medium text-[#17211B] dark:text-[#F2F3ED] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E58B5B]" />
                <span>{profile.role || 'Portfolio'}</span>
              </div>
            </div>
          ) : (
            /* Abstract Organic Visual Treatment (No Image Fallback) */
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-square flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-[50%_50%_40%_60%/55%_45%_55%_45%] bg-gradient-to-tr from-[#79A66A]/25 via-[#4169E1]/20 to-[#E58B5B]/25 blur-xl animate-pulse"
                aria-hidden="true"
              />
              <div className="relative w-64 h-64 rounded-[45%_55%_60%_40%/50%_60%_40%_50%] bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/10 dark:border-[#F2F3ED]/10 shadow-md flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#79A66A] to-[#4169E1] flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-xs">
                  {profile.name ? profile.name.charAt(0).toUpperCase() : '●'}
                </div>
                <span className="font-semibold text-[#17211B] dark:text-[#F2F3ED] text-base">
                  {profile.name}
                </span>
                {profile.role && (
                  <span className="text-xs text-[#59635C] dark:text-[#B8C0B8] mt-1 font-mono">
                    {profile.role}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
