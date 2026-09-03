import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { ResumeButton } from '../../../core/components/ResumeButton';

interface PaperCollageHeroProps {
  data: PortfolioData;
}

export const PaperCollageHero: React.FC<PaperCollageHeroProps> = ({ data }) => {
  const { profile } = data;

  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-center">
        
        {/* Main Content Collage */}
        <div className="flex-1 w-full relative max-w-2xl">
          {/* Background offset paper sheet */}
          <div className="absolute inset-0 bg-[#315CFF] transform -rotate-2 translate-x-4 translate-y-4 opacity-10 dark:opacity-20 hidden md:block"></div>
          <div className="absolute inset-0 bg-[#F5C84B] transform rotate-1 -translate-x-2 translate-y-6 opacity-20 dark:opacity-10 hidden md:block"></div>
          
          {/* Main Paper Sheet */}
          <div className="relative bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-8 md:p-12 lg:p-16 shadow-[4px_4px_16px_rgba(0,0,0,0.05)] dark:shadow-[4px_4px_16px_rgba(0,0,0,0.2)]">
            
            {/* Taped label */}
            {profile.role && (
              <div className="absolute -top-4 -right-4 bg-[#171717] dark:bg-white text-[#FFFDF8] dark:text-[#171717] px-4 py-2 transform rotate-6 shadow-sm">
                <span className="font-mono text-xs uppercase tracking-widest">{profile.role}</span>
              </div>
            )}

            {/* Registration marks inner */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#D4CFC4] dark:border-[#3A3F4C]"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#D4CFC4] dark:border-[#3A3F4C]"></div>

            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#171717] dark:text-white leading-[0.9] tracking-tighter mb-8 break-words">
              {profile.name}
            </h1>

            {profile.headline && (
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-[#C8E64A] transform -skew-x-12 opacity-30 dark:opacity-20 -z-10 translate-y-2"></div>
                <p className="font-body font-bold text-xl md:text-2xl text-[#4A4A4A] dark:text-[#E0E0E0] leading-snug">
                  {profile.headline}
                </p>
              </div>
            )}

            {/* Info Strip */}
            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-[#E5E1D8] dark:border-[#3A3F4C]">
              {profile.statusBadge && (
                <div className="bg-[#F26B5B] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest transform -rotate-2">
                  {profile.statusBadge}
                </div>
              )}
              {profile.availableForHire && (
                <div className="border border-[#171717] dark:border-white px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#171717] dark:text-white transform rotate-1">
                  Available For Hire
                </div>
              )}
              {profile.location && (
                <div className="flex items-center text-sm font-mono text-[#737373] dark:text-[#A0A5B5] ml-auto">
                  <span className="w-2 h-2 rounded-full bg-[#315CFF] mr-2"></span>
                  {profile.location}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              {profile.contactEmail && (
                <a href={`mailto:${profile.contactEmail}`} className="inline-flex items-center justify-center bg-[#171717] dark:bg-white text-[#FFFDF8] dark:text-[#171717] px-8 py-4 font-heading font-bold uppercase tracking-widest hover:-translate-y-1 transition-transform shadow-md">
                  Contact Me
                </a>
              )}
              {profile.resumeUrl && (
                <ResumeButton url={profile.resumeUrl} className="inline-flex items-center justify-center bg-transparent border border-[#171717] dark:border-white text-[#171717] dark:text-white px-8 py-4 font-heading font-bold uppercase tracking-widest hover:bg-[#F7F3EA] dark:hover:bg-[#1A1C23] transition-colors rounded-none" />
              )}
            </div>
          </div>
        </div>

        {/* Media Collage */}
        {profile.avatarUrl && (
          <div className="w-full md:w-5/12 max-w-sm relative mt-12 md:mt-0 flex-shrink-0">
             {/* Random background sheets */}
             <div className="absolute inset-0 bg-[#F7F3EA] dark:bg-[#1A1C23] border border-[#D4CFC4] dark:border-[#3A3F4C] transform rotate-6 translate-x-4 -translate-y-4"></div>
             <div className="absolute inset-0 bg-[#315CFF] opacity-10 dark:opacity-20 transform -rotate-3 -translate-x-4 translate-y-4"></div>
             
             {/* Image container */}
             <div className="relative bg-[#FFFDF8] dark:bg-[#242730] p-4 pb-12 border border-[#D4CFC4] dark:border-[#3A3F4C] shadow-lg transform -rotate-1">
                {/* Top Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/50 dark:bg-black/30 backdrop-blur-sm transform rotate-2 mix-blend-overlay"></div>
                
                <div className="aspect-[3/4] overflow-hidden bg-[#EBE6DA] dark:bg-[#1A1C23]">
                  <ImageWithFallback src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="absolute bottom-4 right-6 font-mono text-xs text-[#737373] dark:text-[#A0A5B5] transform -rotate-2">
                  FIG. 1 — {new Date().getFullYear()}
                </div>
             </div>
          </div>
        )}

      </div>
    </section>
  );
};
