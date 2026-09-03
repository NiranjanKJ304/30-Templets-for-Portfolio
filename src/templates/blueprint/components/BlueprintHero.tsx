import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ResumeButton } from '../../../core/components/ResumeButton';

interface BlueprintHeroProps {
  data: PortfolioData;
}

export const BlueprintHero: React.FC<BlueprintHeroProps> = ({ data }) => {
  const { profile } = data;

  return (
    <section className="relative pt-32 pb-24 lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full relative z-10">
        
        {/* Architectural Title Block */}
        <div className="bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] shadow-sm max-w-4xl">
          
          {/* Top Metadata Strip */}
          <div className="flex flex-wrap border-b-2 border-[#2E6FBB] dark:border-[#5DA9E9]">
            <div className="flex-1 p-3 border-r-2 border-[#2E6FBB] dark:border-[#5DA9E9] min-w-[200px]">
              <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest">Project</span>
              <span className="font-mono text-sm text-[#173A5E] dark:text-[#5DA9E9] font-bold uppercase tracking-wider">
                {profile.name} — Profile
              </span>
            </div>
            {profile.location && (
              <div className="flex-1 p-3 border-r-2 border-[#2E6FBB] dark:border-[#5DA9E9] min-w-[150px]">
                <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest">Location</span>
                <span className="font-mono text-xs text-[#17202A] dark:text-[#EAF2F7] uppercase">{profile.location}</span>
              </div>
            )}
            <div className="flex-1 p-3 min-w-[120px]">
              <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest">Date</span>
              <span className="font-mono text-xs text-[#17202A] dark:text-[#EAF2F7] uppercase">{new Date().toISOString().split('T')[0]}</span>
            </div>
          </div>

          {/* Main Title Area */}
          <div className="p-8 md:p-12 border-b-2 border-[#2E6FBB] dark:border-[#5DA9E9] relative overflow-hidden">
            {/* Construction Lines */}
            <div className="absolute top-12 left-0 right-0 h-px border-t border-dashed border-[#2E6FBB]/20 dark:border-[#5DA9E9]/20"></div>
            <div className="absolute bottom-12 left-0 right-0 h-px border-t border-dashed border-[#2E6FBB]/20 dark:border-[#5DA9E9]/20"></div>
            
            {profile.role && (
              <span className="inline-block font-mono text-xs font-bold text-[#E8893A] dark:text-[#F0A35B] uppercase tracking-widest mb-4">
                [{profile.role}]
              </span>
            )}
            
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-[#173A5E] dark:text-[#EAF2F7] uppercase tracking-tighter leading-none mb-6">
              {profile.name}
            </h1>

            {profile.headline && (
              <p className="font-body text-xl md:text-2xl text-[#17202A] dark:text-[#55C6DC] max-w-2xl">
                {profile.headline}
              </p>
            )}
          </div>

          {/* Action / Status Bar */}
          <div className="flex flex-wrap items-stretch">
            {profile.statusBadge && (
              <div className="p-4 border-r-2 border-[#2E6FBB] dark:border-[#5DA9E9] bg-[#E8893A]/10 flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-[#E8893A] dark:text-[#F0A35B] uppercase tracking-widest">
                  {profile.statusBadge}
                </span>
              </div>
            )}
            {profile.availableForHire && (
              <div className="p-4 border-r-2 border-[#2E6FBB] dark:border-[#5DA9E9] flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3DA9C9] rounded-full animate-pulse"></div>
                  <span className="font-mono text-[10px] font-bold text-[#173A5E] dark:text-[#5DA9E9] uppercase tracking-widest">Available for Hire</span>
                </div>
              </div>
            )}

            <div className="flex-1 flex justify-end">
              {profile.contactEmail && (
                <a href={`mailto:${profile.contactEmail}`} className="px-6 md:px-10 py-4 border-l-2 border-[#2E6FBB] dark:border-[#5DA9E9] font-mono text-xs font-bold uppercase tracking-widest text-[#17202A] dark:text-[#EAF2F7] hover:bg-[#2E6FBB] hover:text-white dark:hover:bg-[#5DA9E9] dark:hover:text-[#0D1620] transition-colors flex items-center justify-center">
                  Initialize Contact
                </a>
              )}
              {profile.resumeUrl && (
                <ResumeButton url={profile.resumeUrl} className="px-6 md:px-10 py-4 border-l-2 border-[#2E6FBB] dark:border-[#5DA9E9] font-mono text-xs font-bold uppercase tracking-widest bg-[#173A5E] text-[#FAFCFD] dark:bg-[#5DA9E9] dark:text-[#0D1620] hover:bg-[#17202A] dark:hover:bg-[#EAF2F7] transition-colors rounded-none flex items-center justify-center" />
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
