import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { VellumAnnotation } from './VellumAnnotation';
import { VellumRule } from './VellumRule';

interface VellumHeaderProps {
  data: PortfolioData;
}

export const VellumHeader: React.FC<VellumHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="w-full relative px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 pt-32 pb-24 md:pb-48 mx-auto max-w-[1400px] flex flex-col md:flex-row items-stretch" id="profile">
      
      {/* Left Margin / Gutter */}
      <div className="hidden md:flex w-24 lg:w-48 xl:w-64 shrink-0 flex-col relative pr-8">
        <VellumRule orientation="vertical" className="absolute top-0 bottom-0 right-8" />
        
        <div className="mt-8 flex flex-col items-end gap-12 pr-4 text-right">
          {profile.availableForHire && (
            <VellumAnnotation color="olive" variant="bracket" className="text-right items-end pr-4 pl-0 border-r border-l-0">
              <span className="font-mono text-xs italic">available</span>
            </VellumAnnotation>
          )}

          {profile.avatarUrl && (
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden grayscale contrast-125 sepia-[0.3]">
              <ImageWithFallback src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="flex flex-col gap-6 items-end mt-12">
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[#242522] dark:text-[#F0EDE3] hover:text-[#425C72] dark:hover:text-[#7E9CAF] transition-colors group flex items-center gap-2">
                <span className="group-hover:underline decoration-1 underline-offset-4">document</span>
                <span className="text-[#425C72] dark:text-[#7E9CAF]">↗</span>
              </a>
            )}
            {profile.contactEmail && (
              <a href={`mailto:${profile.contactEmail}`} className="font-mono text-xs text-[#242522] dark:text-[#F0EDE3] hover:text-[#A94F3E] dark:hover:text-[#D27661] transition-colors group flex items-center gap-2">
                <span className="group-hover:underline decoration-1 underline-offset-4">contact</span>
                <span className="text-[#A94F3E] dark:text-[#D27661]">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Identity Area */}
      <div className="flex-1 w-full min-w-0 relative">
        <div className="max-w-3xl">
          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* Mobile-only avatar and metadata */}
            <div className="md:hidden flex flex-wrap items-center gap-6 mb-8">
              {profile.avatarUrl && (
                <div className="w-20 h-20 rounded-full overflow-hidden grayscale contrast-125 sepia-[0.3]">
                  <ImageWithFallback src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
                </div>
              )}
              {profile.availableForHire && (
                <VellumAnnotation color="olive" variant="bracket" className="pl-3">
                  <span className="font-mono text-xs italic">available</span>
                </VellumAnnotation>
              )}
            </div>

            <VellumAnnotation 
              marker={profile.pronouns}
              color="inkBlue"
              position="left"
            >
              <h1 className="font-heading font-medium text-5xl md:text-7xl lg:text-8xl text-[#242522] dark:text-[#F0EDE3] leading-[1.1] tracking-tight">
                {profile.name}
              </h1>
            </VellumAnnotation>
            
            {(profile.role || profile.location) && (
              <div className="flex flex-col gap-4 max-w-xl">
                {profile.role && (
                  <VellumAnnotation marker="* role" color="brick" position="left">
                    <span className="font-heading italic text-3xl md:text-4xl lg:text-5xl text-[#242522] dark:text-[#F0EDE3] font-light">
                      {profile.role}
                    </span>
                  </VellumAnnotation>
                )}
                
                {profile.location && (
                  <VellumAnnotation marker="* base" color="dustRose" position="left">
                    <span className="font-mono text-sm uppercase tracking-widest text-[#6D6D66] dark:text-[#AAA99F]">
                      {profile.location}
                    </span>
                  </VellumAnnotation>
                )}
              </div>
            )}
            
            {profile.headline && (
              <div className="mt-8">
                <VellumAnnotation variant="bracket" color="ochre">
                  <p className="font-body text-xl md:text-2xl text-[#6D6D66] dark:text-[#AAA99F] leading-relaxed max-w-2xl font-light">
                    {profile.headline}
                  </p>
                </VellumAnnotation>
              </div>
            )}

            {/* Mobile-only links */}
            <div className="md:hidden flex flex-wrap gap-6 mt-8 pt-8 border-t border-[#C8C2B5] dark:border-[#4A4B46] border-dashed">
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[#242522] dark:text-[#F0EDE3] hover:text-[#425C72] dark:hover:text-[#7E9CAF] transition-colors underline decoration-1 underline-offset-4">
                  resume ↗
                </a>
              )}
              {profile.contactEmail && (
                <a href={`mailto:${profile.contactEmail}`} className="font-mono text-xs text-[#242522] dark:text-[#F0EDE3] hover:text-[#A94F3E] dark:hover:text-[#D27661] transition-colors underline decoration-1 underline-offset-4">
                  contact ↗
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};
