import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ResumeButton } from '../../../core/components/ResumeButton';

interface PaperfoldHeroProps {
  data: PortfolioData;
}

export const PaperfoldHero: React.FC<PaperfoldHeroProps> = ({ data }) => {
  const { profile } = data;

  return (
    <section className="relative pt-32 pb-24 lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 w-full relative z-10 pl-6 lg:pl-32">
        
        {/* Large Unfolded Sheet */}
        <div className="bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] shadow-[0_2px_20px_rgba(0,0,0,0.03)] p-10 md:p-16 lg:p-24 relative max-w-4xl">
          
          {/* Folded paper corner top-right */}
          <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-full h-full bg-[#F3EFE7] dark:bg-[#151719] transform rotate-45 translate-x-6 -translate-y-6 shadow-[-2px_2px_4px_rgba(0,0,0,0.02)] border-l border-b border-[#E8E3D8] dark:border-[#202020]"></div>
          </div>

          {/* Subtle Crease line down the middle */}
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-[#202020]/5 dark:via-[#F3F0E8]/5 to-transparent"></div>

          <div className="relative z-10">
            {profile.role && (
              <span className="inline-block font-mono text-[10px] text-[#C86B52] dark:text-[#D47A61] uppercase tracking-widest mb-6 border-b border-[#C86B52]/30 dark:border-[#D47A61]/30 pb-1">
                {profile.role}
              </span>
            )}
            
            <h1 className="font-heading font-normal text-5xl md:text-7xl lg:text-8xl text-[#202020] dark:text-[#F3F0E8] leading-[1.1] mb-8">
              {profile.name}
            </h1>

            {profile.headline && (
              <p className="font-body text-xl md:text-2xl text-[#66717A] dark:text-[#AAB3B8] max-w-2xl font-light leading-relaxed mb-12">
                {profile.headline}
              </p>
            )}

            {/* Metadata strip */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10 pt-8 border-t border-[#E8E3D8] dark:border-[#202020]/50">
              
              {profile.location && (
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest mb-1">Located</span>
                  <span className="font-mono text-xs text-[#202020] dark:text-[#F3F0E8]">{profile.location}</span>
                </div>
              )}

              {profile.statusBadge && (
                <div className="flex flex-col border-l border-[#E8E3D8] dark:border-[#202020]/50 pl-6 md:pl-10">
                  <span className="font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest mb-1">Status</span>
                  <span className="font-mono text-xs text-[#202020] dark:text-[#F3F0E8]">{profile.statusBadge}</span>
                </div>
              )}

              {profile.availableForHire && (
                <div className="flex items-center gap-2 bg-[#D7B45A]/10 dark:bg-[#D9BD69]/10 px-3 py-1.5 border border-[#D7B45A]/20 dark:border-[#D9BD69]/20">
                  <div className="w-1.5 h-1.5 bg-[#D7B45A] dark:bg-[#D9BD69] rounded-full"></div>
                  <span className="font-mono text-[10px] text-[#202020] dark:text-[#F3F0E8] uppercase tracking-widest">Available</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              {profile.contactEmail && (
                <a href={`mailto:${profile.contactEmail}`} className="px-8 py-3 bg-[#202020] text-[#FFFDF7] dark:bg-[#F3F0E8] dark:text-[#151719] font-mono text-[10px] uppercase tracking-widest hover:bg-[#66717A] transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Connect</span>
                  <div className="absolute inset-0 bg-[#C86B52] dark:bg-[#D47A61] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
              )}
              {profile.resumeUrl && (
                <ResumeButton url={profile.resumeUrl} className="px-8 py-3 bg-transparent border border-[#E8E3D8] dark:border-[#202020] text-[#202020] dark:text-[#F3F0E8] font-mono text-[10px] uppercase tracking-widest hover:bg-[#F3EFE7] dark:hover:bg-[#202326] transition-colors rounded-none" />
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
