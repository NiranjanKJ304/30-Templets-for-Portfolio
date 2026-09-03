import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';

interface MonoformAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonoformAboutSection: React.FC<MonoformAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <MonoformSurface depth="inset" borderBottom>
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                01. Prologue
              </h2>
            </div>

            <div className="lg:col-span-9 flex flex-col gap-12 lg:gap-16">
              {profile.summary && (
                <div className="relative">
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] text-[#1D1F1E] dark:text-[#F0EEE7] tracking-tight">
                    {profile.summary}
                  </h3>
                </div>
              )}

              {profile.bio && (
                <div className="pl-0 lg:pl-12 border-l-0 lg:border-l border-[#C8C7BF]/40 dark:border-[#444844]/40">
                  <p className="font-body text-lg md:text-xl font-light leading-relaxed text-[#6C706B] dark:text-[#A7AAA4] max-w-4xl whitespace-pre-wrap">
                    {profile.bio}
                  </p>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </MonoformSurface>
    </SectionWrapper>
  );
};
