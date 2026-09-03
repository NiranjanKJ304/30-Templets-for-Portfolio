import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { KinshipAnchor } from './KinshipAnchor';
import { KinshipConnector } from './KinshipConnector';

interface KinshipHeaderProps {
  data: PortfolioData;
}

export const KinshipHeader: React.FC<KinshipHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="w-full relative min-h-[85vh] flex flex-col pt-32 pb-20" id="profile">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-24 flex-1 flex flex-col justify-center relative">
        
        {/* Main relation grid */}
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-12 lg:gap-24 relative z-10">
          
          {/* Avatar Anchor */}
          {profile.avatarUrl && (
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 relative group">
              <div className="absolute inset-0 rounded-[2rem] bg-[#356B63] dark:bg-[#78A99E] opacity-10 blur-xl group-hover:blur-2xl transition-all duration-700" aria-hidden="true" />
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative z-10 ring-1 ring-[rgba(168,178,172,0.3)] dark:ring-[rgba(89,98,93,0.3)] bg-[#FCFBF7] dark:bg-[#1D211F] p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Connector to main content */}
              <KinshipConnector orientation="horizontal" className="absolute top-1/2 left-full w-12 lg:w-24 hidden lg:block" />
              <KinshipConnector orientation="vertical" className="absolute top-full left-1/2 h-12 block lg:hidden" />
            </div>
          )}

          {/* Primary Identity Node */}
          <div className="flex flex-col gap-8 flex-1 relative">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <KinshipAnchor color="primary" pulse />
                {profile.availableForHire && (
                  <span className="font-mono text-xs text-[#356B63] dark:text-[#78A99E] uppercase tracking-wider">
                    Available for Hire
                  </span>
                )}
              </div>
              
              <h1 className="font-heading font-medium text-5xl md:text-7xl lg:text-8xl text-[#202624] dark:text-[#EEF0EA] tracking-tight leading-[1.05] break-words max-w-4xl">
                {profile.name}
              </h1>
              
              {(profile.role || profile.headline) && (
                <div className="flex flex-col gap-3 mt-4">
                  {profile.role && (
                    <span className="font-body text-2xl md:text-3xl text-[#202624] dark:text-[#EEF0EA] font-medium">
                      {profile.role}
                    </span>
                  )}
                  {profile.headline && (
                    <h2 className="font-body text-xl md:text-2xl text-[#737A75] dark:text-[#A7ADA7] font-normal leading-relaxed max-w-3xl">
                      {profile.headline}
                    </h2>
                  )}
                </div>
              )}
            </div>

            {/* Meta Connectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 pt-8 relative">
              <KinshipConnector orientation="horizontal" className="absolute top-0 left-0 w-full opacity-50" />
              
              {profile.location && (
                <div className="flex items-start gap-3">
                  <KinshipAnchor size="sm" color="blue" className="mt-1.5" />
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest">Base</span>
                    <span className="font-body text-sm text-[#202624] dark:text-[#EEF0EA]">{profile.location}</span>
                  </div>
                </div>
              )}

              {profile.contactEmail && (
                <div className="flex items-start gap-3">
                  <KinshipAnchor size="sm" color="coral" className="mt-1.5" />
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest">Contact</span>
                    <a href={`mailto:${profile.contactEmail}`} className="font-body text-sm text-[#202624] dark:text-[#EEF0EA] hover:text-[#C86D57] dark:hover:text-[#DD8068] transition-colors truncate">
                      {profile.contactEmail}
                    </a>
                  </div>
                </div>
              )}

              {profile.resumeUrl && (
                <div className="flex items-start gap-3">
                  <KinshipAnchor size="sm" color="gold" className="mt-1.5" />
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest">Document</span>
                    <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-[#202624] dark:text-[#EEF0EA] hover:text-[#C7A85D] dark:hover:text-[#D3BA70] transition-colors">
                      View Resume
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
