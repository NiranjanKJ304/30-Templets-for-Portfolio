import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { TesseraModule } from './TesseraModule';
import { TesseraSeam } from './TesseraSeam';

interface TesseraHeaderProps {
  data: PortfolioData;
}

export const TesseraHeader: React.FC<TesseraHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="w-full relative px-4 sm:px-8 md:px-16 pt-32 pb-16 md:pb-32 mx-auto max-w-[1600px] flex flex-col md:flex-row items-stretch" id="profile">
      
      {/* Decorative vertical seam for the left gutter */}
      <TesseraSeam orientation="vertical" className="hidden md:block absolute top-0 bottom-0 left-[4rem] xl:left-[8rem] z-0" />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0 relative z-10">
        
        {/* Main Identity Module */}
        <div className="md:col-span-8 lg:col-span-9 flex flex-col items-stretch">
          <TesseraModule 
            tab="top"
            accent="primary"
            elevation="inset"
            className="flex flex-col md:flex-row p-8 md:p-12 lg:p-16 gap-8 items-center md:items-stretch"
          >
            {profile.avatarUrl && (
              <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full md:rounded-none overflow-hidden ring-1 ring-[#C8C4B9] dark:ring-[#4A4D48] relative">
                <ImageWithFallback
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                {/* Decorative corner tabs on avatar */}
                <div className="hidden md:block absolute top-0 left-0 w-3 h-3 border-r border-b border-[#C8C4B9] dark:border-[#4A4D48] bg-[#F2EFE7] dark:bg-[#151716]" aria-hidden="true" />
                <div className="hidden md:block absolute bottom-0 right-0 w-3 h-3 border-l border-t border-[#C8C4B9] dark:border-[#4A4D48] bg-[#F2EFE7] dark:bg-[#151716]" aria-hidden="true" />
              </div>
            )}
            
            <div className="flex flex-col justify-center gap-4 text-center md:text-left relative">
              {profile.availableForHire && (
                <span className="font-mono text-xs text-[#315F5A] dark:text-[#6E9D94] uppercase tracking-widest font-bold">
                  ● Available for Hire
                </span>
              )}
              <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-[#242522] dark:text-[#F0EEE5] tracking-tight uppercase leading-[1.1]">
                {profile.name}
              </h1>
              {profile.role && (
                <span className="font-heading text-xl md:text-3xl text-[#315F5A] dark:text-[#6E9D94] font-medium tracking-wide">
                  {profile.role}
                </span>
              )}
              {profile.headline && (
                <p className="font-body text-lg md:text-xl text-[#73756E] dark:text-[#A5A7A0] leading-relaxed max-w-2xl mt-2">
                  {profile.headline}
                </p>
              )}
            </div>
          </TesseraModule>
        </div>

        {/* Supporting Meta Modules */}
        <div className="md:col-span-4 lg:col-span-3 flex flex-row md:flex-col items-stretch">
          
          {(profile.location || profile.contactEmail) && (
            <TesseraModule 
              elevation="flat"
              notch="left"
              accent="terracotta"
              className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-6 border-t-0 md:border-t md:border-l-0"
            >
              {profile.location && (
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest">Base</span>
                  <span className="font-body text-sm text-[#242522] dark:text-[#F0EEE5] font-medium">{profile.location}</span>
                </div>
              )}
              
              {profile.contactEmail && (
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest">Contact</span>
                  <a href={`mailto:${profile.contactEmail}`} className="font-body text-sm text-[#242522] dark:text-[#F0EEE5] font-medium hover:text-[#C6654F] dark:hover:text-[#D67A62] transition-colors truncate">
                    {profile.contactEmail}
                  </a>
                </div>
              )}
            </TesseraModule>
          )}

          {profile.resumeUrl && (
            <TesseraModule 
              elevation="raised"
              tab="right"
              accent="mustard"
              className="flex-none p-6 md:p-8 flex flex-col justify-center items-center md:items-start border-l-0 md:border-t-0 md:border-l-0"
            >
              <a 
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex flex-col gap-2 items-center md:items-start justify-center group"
              >
                <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest group-hover:text-[#C5A452] dark:group-hover:text-[#D4BC6B] transition-colors">Document</span>
                <span className="font-heading font-semibold text-lg text-[#242522] dark:text-[#F0EEE5] uppercase tracking-wide group-hover:text-[#C5A452] dark:group-hover:text-[#D4BC6B] transition-colors">
                  View Resume
                </span>
              </a>
            </TesseraModule>
          )}

        </div>

      </div>
    </header>
  );
};
