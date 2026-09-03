import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { MonoformSurface } from './MonoformSurface';
import { MonoformRule } from './MonoformRule';

interface MonoformHeaderProps {
  data: PortfolioData;
}

export const MonoformHeader: React.FC<MonoformHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <MonoformSurface depth="canvas" id="profile" className="min-h-[85vh] flex flex-col justify-end">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-32 pb-16 relative">
        
        <div className="flex flex-col gap-8 md:gap-12">
          
          <div className="flex items-center gap-6">
            {profile.avatarUrl && (
              <div className="w-16 h-16 rounded-sm overflow-hidden grayscale">
                <ImageWithFallback src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
              </div>
            )}
            
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                Identity Reference
              </span>
              {(profile.location || profile.availableForHire) && (
                <div className="font-mono text-xs text-[#1D1F1E] dark:text-[#F0EEE7]">
                  {[
                    profile.location, 
                    profile.availableForHire ? 'Available for engagement' : null
                  ].filter(Boolean).join(' • ')}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col max-w-4xl">
            <h1 className="font-heading font-light text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-tight text-[#1D1F1E] dark:text-[#F0EEE7]">
              {profile.name}
            </h1>
            {profile.role && (
              <h2 className="font-heading text-2xl md:text-3xl text-[#6C706B] dark:text-[#A7AAA4] font-light mt-4">
                {profile.role}
              </h2>
            )}
            {profile.headline && (
              <p className="font-body text-xl md:text-2xl font-light text-[#1D1F1E] dark:text-[#F0EEE7] leading-relaxed max-w-2xl mt-8">
                {profile.headline}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-8 mt-8">
            {profile.resumeUrl && (
              <a 
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-[#1D1F1E] dark:text-[#F0EEE7] hover:text-[#A65A45] dark:hover:text-[#D0775E] transition-colors flex items-center gap-2 group"
              >
                <span>Curriculum Vitae</span>
                <span className="opacity-40 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            )}
            {profile.contactEmail && (
              <a 
                href={`mailto:${profile.contactEmail}`}
                className="font-mono text-xs uppercase tracking-widest text-[#1D1F1E] dark:text-[#F0EEE7] hover:text-[#A65A45] dark:hover:text-[#D0775E] transition-colors flex items-center gap-2 group"
              >
                <span>Initiate Contact</span>
                <span className="opacity-40 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            )}
          </div>
          
        </div>
        
      </div>
      <MonoformRule />
    </MonoformSurface>
  );
};
