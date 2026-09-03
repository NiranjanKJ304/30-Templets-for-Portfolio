import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { ResumeButton } from '../../../core/components/ResumeButton';

interface OrbitalHeroProps {
  data: PortfolioData;
}

export const OrbitalHero: React.FC<OrbitalHeroProps> = ({ data }) => {
  const { profile } = data;

  return (
    <section className="relative pt-24 pb-16 lg:pt-0 lg:pb-0 lg:h-screen flex items-center justify-center overflow-hidden">
      
      {/* Central Profile Core */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto px-6">
        
        {/* Core Ring Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-[#B9C9C6]/60 dark:border-[#40504D]/60 pointer-events-none opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-[#2F7C73]/20 dark:border-[#66B8A9]/20 pointer-events-none"></div>

        {profile.avatarUrl && (
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 border-4 border-[#FFFFFF] dark:border-[#182221] shadow-lg z-10">
            <ImageWithFallback src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
          </div>
        )}

        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#172326] dark:text-[#F0F4F1] tracking-tight mb-4 z-10 relative">
          {profile.name}
        </h1>

        {(profile.headline || profile.role) && (
          <p className="font-body text-lg md:text-xl text-[#526467] dark:text-[#AABAB7] mb-6 z-10 relative px-4">
            {profile.headline || profile.role}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[10px] md:text-xs text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest z-10 relative">
          {profile.location && <span>{profile.location}</span>}
          {profile.pronouns && <span className="border border-[#B9C9C6] dark:border-[#40504D] px-2 py-0.5 rounded-full">{profile.pronouns}</span>}
          {profile.statusBadge && <span>{profile.statusBadge}</span>}
          {profile.availableForHire && (
             <span className="flex items-center gap-2 text-[#2F7C73] dark:text-[#66B8A9]">
               <span className="w-1.5 h-1.5 rounded-full bg-[#2F7C73] dark:bg-[#66B8A9] animate-pulse"></span>
               Available
             </span>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 z-10 relative">
          {profile.contactEmail && (
            <a 
              href={`mailto:${profile.contactEmail}`}
              className="bg-[#172326] text-[#FFFFFF] dark:bg-[#F0F4F1] dark:text-[#101819] px-6 py-3 rounded-full font-heading font-semibold text-sm hover:bg-[#2F7C73] dark:hover:bg-[#66B8A9] hover:text-[#FFFFFF] transition-colors"
            >
              Initialize Contact
            </a>
          )}
          {profile.resumeUrl && (
            <ResumeButton url={profile.resumeUrl} className="bg-transparent text-[#172326] dark:text-[#F0F4F1] border border-[#B9C9C6] dark:border-[#40504D] px-6 py-3 rounded-full font-heading font-semibold text-sm hover:border-[#172326] dark:hover:border-[#F0F4F1] transition-colors h-auto" />
          )}
        </div>

      </div>
    </section>
  );
};
