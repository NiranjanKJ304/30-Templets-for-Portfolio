import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { ChromaField } from './ChromaField';

interface ChromaHeaderProps {
  data: PortfolioData;
}

export const ChromaHeader: React.FC<ChromaHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <ChromaField color="canvas" fullscreen className="pt-24 pb-24 border-b border-black/5 dark:border-white/5" id="profile">
      <div className="flex flex-col gap-12 md:gap-24 w-full relative z-10">
        
        {/* Top Meta Area */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-6">
            {profile.avatarUrl && (
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 shadow-xl shadow-black/10">
                <ImageWithFallback src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
              </div>
            )}
            {profile.availableForHire && (
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-current opacity-70 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest opacity-70">Available</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:items-end gap-1 opacity-70">
            {profile.location && (
              <span className="font-mono text-xs uppercase tracking-widest">{profile.location}</span>
            )}
            {profile.contactEmail && (
              <a href={`mailto:${profile.contactEmail}`} className="font-mono text-xs uppercase tracking-widest hover:opacity-100 transition-opacity">
                {profile.contactEmail}
              </a>
            )}
          </div>
        </div>

        {/* Main Identity Statement */}
        <div className="flex flex-col gap-6 max-w-5xl mt-auto">
          <h1 className="font-heading font-medium text-6xl md:text-8xl lg:text-[7rem] leading-[0.95] tracking-tight">
            {profile.name}
          </h1>
          {profile.role && (
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl opacity-60 font-light tracking-tight mt-4">
              {profile.role}
            </h2>
          )}
          {profile.headline && (
            <p className="font-body text-xl md:text-3xl font-light leading-relaxed max-w-3xl opacity-80 mt-8">
              {profile.headline}
            </p>
          )}
        </div>

        {/* Action Area */}
        {profile.resumeUrl && (
          <div className="mt-12">
            <a 
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 font-mono text-xs uppercase tracking-widest px-8 py-5 border border-current rounded-full hover:bg-current hover:text-white dark:hover:text-black transition-colors duration-500"
            >
              View Document 
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        )}
      </div>
    </ChromaField>
  );
};
