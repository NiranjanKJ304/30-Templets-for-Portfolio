import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ResumeButton } from '../../../core/components/ResumeButton';

interface MonochromeHeroProps {
  data: PortfolioData;
}

export const MonochromeHero: React.FC<MonochromeHeroProps> = ({ data }) => {
  const { profile } = data;

  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-32 lg:min-h-[90vh] flex items-center">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 w-full">
        
        <div className="flex flex-col">
          {/* Identity Numeral */}
          <div className="font-mono text-xs md:text-sm text-[#8A8A84] dark:text-[#777770] mb-6 md:mb-10">
            01 — INDEX
          </div>
          
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] text-[#151515] dark:text-[#F2F0E9] leading-[0.9] tracking-tighter mb-8 md:mb-12 uppercase break-words">
            {profile.name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-[#C9C6BE] dark:border-[#3A3A37] pt-8 md:pt-12">
            
            <div className="md:col-span-5 lg:col-span-4">
              <p className="font-body text-xl md:text-2xl text-[#151515] dark:text-[#F2F0E9] font-medium uppercase tracking-wide leading-snug">
                {profile.headline || profile.role}
              </p>
            </div>

            <div className="md:col-span-7 lg:col-span-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10">
              
              <div className="flex flex-col gap-6">
                {(profile.location || profile.statusBadge) && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest">Profile Metrics</span>
                    {profile.location && <span className="font-body text-sm text-[#555555] dark:text-[#B5B3AC] uppercase tracking-wider">{profile.location}</span>}
                    {profile.statusBadge && <span className="font-body text-sm text-[#555555] dark:text-[#B5B3AC] uppercase tracking-wider">{profile.statusBadge}</span>}
                  </div>
                )}
                
                {profile.availableForHire && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#B44A35] dark:bg-[#D06A52]"></div>
                    <span className="font-mono text-xs text-[#151515] dark:text-[#F2F0E9] uppercase tracking-widest">Available</span>
                  </div>
                )}
              </div>

              <div className="flex gap-6">
                {profile.resumeUrl && (
                  <ResumeButton url={profile.resumeUrl} className="font-body text-xs font-medium uppercase tracking-widest text-[#151515] dark:text-[#F2F0E9] border-b border-[#151515] dark:border-[#F2F0E9] pb-0.5 hover:text-[#B44A35] dark:hover:text-[#D06A52] hover:border-[#B44A35] dark:hover:border-[#D06A52] transition-colors bg-transparent rounded-none px-0 py-0 h-auto" />
                )}
                {profile.contactEmail && (
                  <a href={`mailto:${profile.contactEmail}`} className="font-body text-xs font-medium uppercase tracking-widest text-[#151515] dark:text-[#F2F0E9] border-b border-[#151515] dark:border-[#F2F0E9] pb-0.5 hover:text-[#B44A35] dark:hover:text-[#D06A52] hover:border-[#B44A35] dark:hover:border-[#D06A52] transition-colors">
                    Contact
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
