import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { cn } from '../../../core/utils/cn';

interface MemphisHeroProps {
  data: PortfolioData;
}

export const MemphisHero: React.FC<MemphisHeroProps> = ({ data }) => {
  const { profile } = data;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex-1 w-full relative">
            {/* Playful status sticker */}
            {profile.statusBadge && (
              <div className="absolute -top-12 -left-6 md:-top-16 md:-left-8 z-20">
                <div className="relative animate-bounce" style={{ animationDuration: '3s' }}>
                  <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-[2px_2px_0px_#202124]">
                    <path d="M50 0L64.6946 35.3054L100 50L64.6946 64.6946L50 100L35.3054 64.6946L0 50L35.3054 35.3054L50 0Z" fill="#FACC15" stroke="#202124" strokeWidth="3"/>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-heading font-bold text-[10px] uppercase text-center leading-tight rotate-12 text-neutral-900 px-4">
                    {profile.statusBadge}
                  </span>
                </div>
              </div>
            )}

            <div className="relative">
              {profile.role && (
                <div className="inline-block bg-[#34D399] border-2 border-neutral-900 dark:border-white px-4 py-1 mb-6 shadow-[4px_4px_0_0_#202124] dark:shadow-[4px_4px_0_0_#FFFFFF] transform -rotate-2">
                  <span className="font-heading font-black uppercase text-neutral-900 tracking-wider">
                    {profile.role}
                  </span>
                </div>
              )}
              
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black uppercase leading-[0.9] tracking-tighter text-neutral-900 dark:text-white relative z-10">
                {profile.name}
              </h1>

              {/* Decorative block behind title */}
              <div className="absolute top-1/2 -left-4 w-1/3 h-1/2 bg-[#EC4899] -z-10 mix-blend-multiply dark:mix-blend-screen opacity-50 transform -rotate-3" />
            </div>

            {profile.headline && (
              <p className="mt-8 text-2xl md:text-3xl font-heading font-bold text-neutral-800 dark:text-neutral-200 max-w-2xl border-l-8 border-[#2563EB] pl-6">
                {profile.headline}
              </p>
            )}

            <div className="mt-12 flex flex-wrap items-center gap-6">
              {data.socials && data.socials.length > 0 && (
                <a href="#connect" className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white font-heading font-black uppercase text-neutral-900 dark:text-white shadow-[8px_8px_0_0_#EC4899] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#EC4899] transition-all">
                  Let's Connect
                </a>
              )}
              {profile.contactEmail && (
                <a href={`mailto:${profile.contactEmail}`} className="inline-flex items-center justify-center px-8 py-4 bg-[#FACC15] border-4 border-neutral-900 dark:border-white font-heading font-black uppercase text-neutral-900 shadow-[8px_8px_0_0_#202124] dark:shadow-[8px_8px_0_0_#FFFFFF] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#202124] dark:hover:shadow-[4px_4px_0_0_#FFFFFF] transition-all">
                  Email Me
                </a>
              )}
            </div>
          </div>

          {/* Right Column / Media */}
          <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            {profile.avatarUrl ? (
              <div className="relative w-full max-w-md aspect-[3/4]">
                {/* Decorative offset frames */}
                <div className="absolute inset-0 bg-[#2563EB] border-4 border-neutral-900 dark:border-white translate-x-8 translate-y-8 rotate-3" />
                <div className="absolute inset-0 bg-[#EC4899] border-4 border-neutral-900 dark:border-white translate-x-4 translate-y-4 -rotate-3" />
                
                {/* Main image container */}
                <div className="absolute inset-0 bg-white border-4 border-neutral-900 dark:border-white overflow-hidden z-10">
                  <ImageWithFallback
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-full max-w-md aspect-[3/4] flex items-center justify-center bg-white dark:bg-neutral-900 border-4 border-neutral-900 dark:border-white shadow-[16px_16px_0_0_#34D399]">
                <div className="absolute inset-0 opacity-10">
                   <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="checkers" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <rect x="0" y="0" width="20" height="20" fill="currentColor" />
                          <rect x="20" y="20" width="20" height="20" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect x="0" y="0" width="100%" height="100%" fill="url(#checkers)" className="text-neutral-900 dark:text-white" />
                    </svg>
                </div>
                <div className="text-center z-10 bg-white dark:bg-neutral-900 border-4 border-neutral-900 dark:border-white p-8 rotate-12">
                   <span className="font-heading font-black text-6xl text-neutral-900 dark:text-white uppercase leading-none">
                     {profile.name.charAt(0)}
                   </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
