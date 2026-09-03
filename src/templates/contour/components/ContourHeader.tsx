import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { ContourField } from './ContourField';

interface ContourHeaderProps {
  data: PortfolioData;
}

export const ContourHeader: React.FC<ContourHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <ContourField id="profile" contourVariant="strong" className="min-h-[90vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-[#C7C9B9] dark:bg-[#46504A]"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#202523] dark:text-[#EEF0E8]">
                {profile.role || 'Professional Landscape'}
              </span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[8rem] leading-[0.9] tracking-tight text-[#202523] dark:text-[#EEF0E8]">
              {profile.name}
            </h1>
          </div>
          
          {profile.headline && (
            <p className="font-body text-2xl md:text-3xl lg:text-4xl font-light text-[#6E746E] dark:text-[#A8AEA6] leading-[1.3] max-w-4xl">
              {profile.headline}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8">
            {profile.location && (
              <span className="font-mono text-xs uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#879A82] dark:bg-[#78947D]"></span>
                {profile.location}
              </span>
            )}
            {profile.availableForHire && (
              <span className="font-mono text-xs uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C57659] dark:bg-[#D17C63]"></span>
                Available for engagement
              </span>
            )}
            {profile.resumeUrl && (
              <a 
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-[#202523] dark:text-[#EEF0E8] hover:text-[#C57659] dark:hover:text-[#D17C63] transition-colors flex items-center gap-2"
              >
                View CV ↗
              </a>
            )}
          </div>
        </div>

        {profile.avatarUrl && (
          <div className="lg:col-span-4 xl:col-span-3 flex justify-start lg:justify-end">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-full lg:aspect-square rounded-full overflow-hidden shrink-0 border border-[#C7C9B9] dark:border-[#46504A] p-2 bg-[#F9F8F1]/50 dark:bg-[#1D2320]/50 backdrop-blur-sm relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden">
                <ImageWithFallback src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover grayscale opacity-90" />
              </div>
            </div>
          </div>
        )}
        
      </div>
    </ContourField>
  );
};
