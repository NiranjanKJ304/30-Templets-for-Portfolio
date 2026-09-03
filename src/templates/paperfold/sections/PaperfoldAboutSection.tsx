import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';

interface PaperfoldAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperfoldAboutSection: React.FC<PaperfoldAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperfoldSectionHeader title="Background" number="01" subtitle="Narrative & Context" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="max-w-5xl relative">
        <div className="flex flex-col lg:flex-row gap-0 lg:items-start">
          
          {profile.bio && (
            <div className="bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative z-10 flex-1">
              <span className="block font-mono text-[10px] text-[#C86B52] dark:text-[#D47A61] uppercase tracking-widest mb-6">
                Biography
              </span>
              <p className="font-body text-lg leading-[1.8] text-[#202020] dark:text-[#F3F0E8] whitespace-pre-wrap font-light">
                {profile.bio}
              </p>
            </div>
          )}

          {profile.summary && (
            <div className="bg-[#FAF6EE] dark:bg-[#1A1C1E] border border-[#E8E3D8] dark:border-[#202020] p-8 md:p-10 shadow-sm relative z-0 lg:-ml-8 lg:mt-16 flex-1 min-w-[280px]">
              
              {/* Fold overlap shadow effect */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/5 to-transparent"></div>
              
              <span className="block font-mono text-[10px] text-[#7D9EAF] dark:text-[#8EADBD] uppercase tracking-widest mb-4">
                Executive Summary
              </span>
              <p className="font-body text-base leading-[1.7] text-[#66717A] dark:text-[#AAB3B8] whitespace-pre-wrap">
                {profile.summary}
              </p>
            </div>
          )}
          
        </div>
      </div>
    </SectionWrapper>
  );
};
