import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { TerminalPrompt } from './TerminalPrompt';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface TerminalHeaderProps {
  data: PortfolioData;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="w-full flex flex-col gap-6 pb-12 mb-12 border-b border-[#C9D0C9] dark:border-[#303833]">
      <TerminalPrompt label="guest" command="whoami" className="mb-2" />
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {profile.avatarUrl && (
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 border border-[#C9D0C9] dark:border-[#303833] p-1 bg-[#F0F2EC] dark:bg-[#0D1110]">
            <ImageWithFallback
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-full h-full object-cover grayscale motion-safe:hover:grayscale-0 transition-all duration-700"
            />
          </div>
        )}
        
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col">
            <h1 className="font-heading font-bold text-3xl md:text-5xl tracking-tighter text-[#18201B] dark:text-[#DCE4DC]">
              {profile.name}
            </h1>
            {(profile.role || profile.headline) && (
              <h2 className="font-mono text-sm md:text-base text-[#347A84] dark:text-[#69B7C4] mt-2">
                {[profile.role, profile.headline].filter(Boolean).join(' // ')}
              </h2>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs text-[#5F6861] dark:text-[#9CA39D] mt-2">
            <div className="flex gap-2">
              <span className="text-[#967126] dark:text-[#D4AD68]">STATUS:</span>
              <span className="text-[#18201B] dark:text-[#DCE4DC]">
                {profile.availableForHire ? 'ACTIVE' : 'IDLE'}
              </span>
            </div>
            
            {profile.location && (
              <div className="flex gap-2">
                <span className="text-[#967126] dark:text-[#D4AD68]">LOC:</span>
                <span className="text-[#18201B] dark:text-[#DCE4DC]">{profile.location}</span>
              </div>
            )}
            
            {profile.contactEmail && (
              <div className="flex gap-2">
                <span className="text-[#967126] dark:text-[#D4AD68]">MAIL:</span>
                <a href={`mailto:${profile.contactEmail}`} className="text-[#18201B] dark:text-[#DCE4DC] hover:text-[#397A4A] dark:hover:text-[#79C98B] transition-colors truncate">
                  {profile.contactEmail}
                </a>
              </div>
            )}
            
            {profile.resumeUrl && (
              <div className="flex gap-2">
                <span className="text-[#967126] dark:text-[#D4AD68]">DOC:</span>
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-[#18201B] dark:text-[#DCE4DC] hover:text-[#397A4A] dark:hover:text-[#79C98B] transition-colors">
                  resume.pdf
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
