import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ResumeButton } from '../../../core/components/ResumeButton';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface IndexHeaderProps {
  data: PortfolioData;
}

export const IndexHeader: React.FC<IndexHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="w-full pt-12 pb-16 flex flex-col gap-12">
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
        
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-[6rem] uppercase tracking-tighter text-[#181A19] dark:text-[#F2F1EA] leading-[0.9]">
            {profile.name}
          </h1>
          
          {(profile.role || profile.headline) && (
            <div className="flex flex-col gap-4 mt-2 max-w-2xl">
              {profile.role && (
                <div className="inline-flex self-start bg-[#181A19] text-[#FFFFFF] dark:bg-[#F2F1EA] dark:text-[#121514] px-4 py-1.5 font-mono text-xs uppercase tracking-widest font-bold">
                  {profile.role}
                </div>
              )}
              {profile.headline && (
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#696C67] dark:text-[#A8ABA4] leading-snug">
                  {profile.headline}
                </h2>
              )}
            </div>
          )}
        </div>

        {profile.avatarUrl && (
          <div className="w-48 h-48 sm:w-64 sm:h-64 shrink-0 bg-[#FFFFFF] dark:bg-[#1A1E1C] border border-[#D5D6D0] dark:border-[#404440] p-2">
            <ImageWithFallback
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-full h-full object-cover grayscale motion-safe:hover:grayscale-0 transition-all duration-700"
            />
          </div>
        )}
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 pt-12 border-t border-[#D5D6D0] dark:border-[#404440]">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C] font-bold">STATUS</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#181A19] dark:text-[#F2F1EA] font-bold flex items-center gap-2">
            {profile.availableForHire ? (
              <><span className="w-2 h-2 rounded-full bg-[#365F58] dark:bg-[#80A99E]"></span> AVAILABLE FOR HIRE</>
            ) : (
              <><span className="w-2 h-2 rounded-full bg-[#696C67] dark:bg-[#A8ABA4]"></span> NOT AVAILABLE</>
            )}
          </span>
        </div>
        
        {profile.location && (
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C] font-bold">LOCATION</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#181A19] dark:text-[#F2F1EA] font-bold">{profile.location}</span>
          </div>
        )}

        {profile.contactEmail && (
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C] font-bold">EMAIL</span>
            <a href={`mailto:${profile.contactEmail}`} className="font-mono text-xs uppercase tracking-widest text-[#181A19] dark:text-[#F2F1EA] font-bold hover:text-[#365F58] dark:hover:text-[#80A99E] transition-colors truncate">
              {profile.contactEmail}
            </a>
          </div>
        )}

        {profile.resumeUrl && (
          <div className="flex flex-col gap-2 items-start">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C] font-bold">RESUME</span>
            <ResumeButton 
              resumeUrl={profile.resumeUrl}
              className="font-mono text-xs uppercase tracking-widest text-[#365F58] dark:text-[#80A99E] font-bold hover:text-[#181A19] dark:hover:text-[#F2F1EA] transition-colors"
            />
          </div>
        )}
      </div>
    </header>
  );
};
