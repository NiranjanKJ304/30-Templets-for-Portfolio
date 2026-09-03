import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ResumeButton } from '../../../core/components/ResumeButton';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { MosaicTile } from './MosaicTile';

interface MosaicHeroProps {
  data: PortfolioData;
}

export const MosaicHero: React.FC<MosaicHeroProps> = ({ data }) => {
  const { profile } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full pt-16 lg:pt-0">
      
      {/* Primary Identity Tile */}
      <MosaicTile span="two-thirds" mobileSpan="full" padding="lg" surface="canvas" className="flex flex-col justify-between min-h-[500px]">
        <div className="font-mono text-sm uppercase tracking-widest text-[#4E7772] dark:text-[#70A49C] font-bold mb-8">
          Identity
        </div>
        
        <div className="flex flex-col gap-6 relative z-10">
          <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-[7rem] uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] leading-[0.85] break-words">
            {profile.name}
          </h1>
          
          {(profile.role || profile.headline) && (
            <div className="flex flex-col gap-4 max-w-2xl mt-4">
              {profile.role && (
                <div className="inline-flex self-start bg-[#1B1B1A] text-[#FFFDF8] dark:bg-[#F1EEE7] dark:text-[#121414] px-4 py-2 font-mono text-xs uppercase tracking-widest font-bold">
                  {profile.role}
                </div>
              )}
              {profile.headline && (
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#65645F] dark:text-[#B3B1AA] leading-snug">
                  {profile.headline}
                </h2>
              )}
            </div>
          )}
        </div>
        
        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 border-t border-l border-[#CBC5BB] dark:border-[#444744] bg-[#FFFDF8] dark:bg-[#1B1E1E] -mr-8 -mb-8 rotate-45 pointer-events-none" aria-hidden="true"></div>
      </MosaicTile>

      {/* Avatar / Visual Tile */}
      <MosaicTile span="third" mobileSpan="half" padding="none" surface="none" className="min-h-[300px] md:min-h-[500px]">
        {profile.avatarUrl ? (
          <ImageWithFallback
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-full h-full object-cover grayscale motion-safe:hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full bg-[#E9DED0] dark:bg-[#302925] border border-[#CBC5BB] dark:border-[#444744] flex items-center justify-center p-8">
            <span className="font-heading text-4xl font-black uppercase tracking-tighter text-[#1B1B1A]/10 dark:text-[#F1EEE7]/10">
              M
            </span>
          </div>
        )}
      </MosaicTile>

      {/* Contact / Metadata Tile */}
      <MosaicTile span="half" mobileSpan="full" padding="md" surface="primary" className="flex flex-col justify-between">
        <div className="flex flex-col gap-6 font-mono text-sm uppercase tracking-widest font-bold text-[#65645F] dark:text-[#B3B1AA]">
          {profile.location && (
            <div className="flex justify-between border-b border-[#CBC5BB] dark:border-[#444744] pb-4">
              <span>Location</span>
              <span className="text-[#1B1B1A] dark:text-[#F1EEE7] text-right">{profile.location}</span>
            </div>
          )}
          {profile.contactEmail && (
            <div className="flex justify-between border-b border-[#CBC5BB] dark:border-[#444744] pb-4">
              <span>Email</span>
              <a href={`mailto:${profile.contactEmail}`} className="text-[#1B1B1A] dark:text-[#F1EEE7] hover:text-[#D66B4D] dark:hover:text-[#E27A5A] transition-colors text-right break-all">
                {profile.contactEmail}
              </a>
            </div>
          )}
          {profile.contactPhone && (
            <div className="flex justify-between border-b border-[#CBC5BB] dark:border-[#444744] pb-4">
              <span>Phone</span>
              <a href={`tel:${profile.contactPhone}`} className="text-[#1B1B1A] dark:text-[#F1EEE7] hover:text-[#D66B4D] dark:hover:text-[#E27A5A] transition-colors text-right">
                {profile.contactPhone}
              </a>
            </div>
          )}
        </div>
      </MosaicTile>

      {/* Availability / Actions Tile */}
      <MosaicTile span="half" mobileSpan="full" padding="md" surface="warm" className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#4E7772] dark:text-[#70A49C] font-bold">Status</span>
          {profile.availableForHire ? (
            <div className="font-heading font-black text-2xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] flex items-center gap-3">
              <span className="w-3 h-3 rounded-none bg-[#D66B4D] dark:bg-[#E27A5A] motion-safe:animate-pulse"></span>
              Available for Hire
            </div>
          ) : (
            <div className="font-heading font-black text-2xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] opacity-50">
              Not Available
            </div>
          )}
        </div>

        {profile.resumeUrl && (
          <ResumeButton 
            resumeUrl={profile.resumeUrl}
            className="w-full md:w-auto px-8 py-5 bg-[#D66B4D] dark:bg-[#E27A5A] text-[#FFFDF8] dark:text-[#121414] font-mono text-sm uppercase tracking-widest font-bold hover:bg-[#1B1B1A] dark:hover:bg-[#F1EEE7] hover:text-[#FFFDF8] dark:hover:text-[#121414] transition-colors text-center"
          />
        )}
      </MosaicTile>

    </div>
  );
};
