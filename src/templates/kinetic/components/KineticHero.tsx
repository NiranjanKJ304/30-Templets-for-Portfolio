import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ResumeButton } from '../../../core/components/ResumeButton';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { KineticMarquee } from './KineticMarquee';
import { ArrowDownRight } from 'lucide-react';

interface KineticHeroProps {
  data: PortfolioData;
}

export const KineticHero: React.FC<KineticHeroProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="relative pt-32 pb-16 min-h-[90vh] flex flex-col border-b-4 border-[#171717] dark:border-[#F3F0E8] overflow-hidden">
      
      {/* Background oversized decorative text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none overflow-hidden select-none whitespace-nowrap">
        <div className="font-heading font-black text-[30vw] uppercase leading-none tracking-tighter text-[#171717] dark:text-[#F3F0E8] motion-safe:animate-[marquee_60s_linear_infinite]">
          {profile.name} • {profile.name} • {profile.name} • 
        </div>
      </div>

      <div className="flex-1 px-6 sm:px-12 flex flex-col justify-center relative z-10 max-w-[1600px] mx-auto w-full">
        
        {profile.avatarUrl && (
          <div className="mb-10 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#171717] dark:border-[#F3F0E8] shrink-0 motion-safe:hover:scale-105 transition-transform duration-500">
            <ImageWithFallback
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex flex-col">
          <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#285B63] dark:text-[#6FA9B0] mb-4 flex items-center gap-3">
            <ArrowDownRight size={16} className="motion-safe:animate-bounce" />
            Hello, I am
          </div>
          
          <h1 className="font-heading font-black text-6xl sm:text-8xl md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter uppercase text-[#171717] dark:text-[#F3F0E8] break-words">
            {profile.name}
          </h1>
          
          {(profile.role || profile.headline) && (
            <div className="mt-8 md:mt-12 flex flex-col gap-4 max-w-3xl">
              {profile.role && (
                <div className="inline-flex self-start bg-[#E84F3D] dark:bg-[#FF715D] text-white px-4 py-2 font-mono text-sm font-bold uppercase tracking-widest">
                  {profile.role}
                </div>
              )}
              
              {profile.headline && (
                <p className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#555555] dark:text-[#B4B4AE]">
                  {profile.headline}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-16 md:mt-24 flex flex-wrap gap-8 items-center border-t-2 border-[#171717] dark:border-[#F3F0E8] pt-8">
          {profile.contactEmail && (
            <a 
              href={`mailto:${profile.contactEmail}`}
              className="font-heading font-black text-2xl uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8] hover:text-[#E84F3D] dark:hover:text-[#FF715D] transition-colors flex items-center gap-2 group"
            >
              Contact Me
              <ArrowDownRight size={28} className="motion-safe:group-hover:translate-x-1 motion-safe:group-hover:translate-y-1 transition-transform" />
            </a>
          )}
          
          {profile.resumeUrl && (
            <ResumeButton 
              resumeUrl={profile.resumeUrl}
              className="px-8 py-4 bg-[#171717] text-[#F3F0E8] dark:bg-[#F3F0E8] dark:text-[#171717] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#E84F3D] dark:hover:bg-[#FF715D] hover:text-white dark:hover:text-white transition-colors"
            />
          )}

          <div className="ml-auto hidden md:flex items-center gap-6 font-mono text-xs font-bold uppercase tracking-widest text-[#555555] dark:text-[#B4B4AE]">
            {profile.location && <span>{profile.location}</span>}
            {profile.availableForHire && (
              <span className="flex items-center gap-2 text-[#285B63] dark:text-[#6FA9B0]">
                <span className="w-2 h-2 rounded-full bg-current motion-safe:animate-pulse"></span>
                Available for hire
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Decorative full-width marquee band at the bottom of hero */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#171717] dark:bg-[#F3F0E8] flex items-center overflow-hidden">
        <KineticMarquee text={`${profile.role || 'PORTFOLIO'} • ${profile.location || 'GLOBAL'} • `} speed={40} className="text-[#F3F0E8] dark:text-[#171717]" />
      </div>
    </header>
  );
};
