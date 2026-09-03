import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';

interface PaperCollageAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperCollageAboutSection: React.FC<PaperCollageAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  
  const hasBio = Boolean(profile.bio && profile.bio.trim());
  const hasSummary = Boolean(profile.summary && profile.summary.trim());
  const hasData = hasBio || hasSummary;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperCollageSectionHeader title="About" number="01" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="relative max-w-4xl">
        {/* Background paper texture wrapper */}
        <div className="absolute inset-0 bg-[#EBE6DA] dark:bg-[#1A1C23] transform rotate-1 -z-10 translate-x-4 -translate-y-4"></div>
        
        <div className="flex flex-col gap-8 md:gap-12 relative z-10">
          
          {hasSummary && (
            <div className="bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-8 md:p-12 shadow-sm relative">
               <div className="absolute top-0 right-10 w-8 h-8 border-l border-b border-[#D4CFC4] dark:border-[#3A3F4C] bg-[#F7F3EA] dark:bg-[#1A1C23]"></div>
               <h3 className="font-mono text-sm text-[#F26B5B] uppercase tracking-widest mb-6">Summary</h3>
               <p className="font-heading text-xl md:text-2xl text-[#171717] dark:text-white leading-relaxed">
                 {profile.summary}
               </p>
            </div>
          )}

          {hasBio && (
            <div className={`bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-8 md:p-12 shadow-sm relative ${hasSummary ? 'md:ml-12 transform -rotate-1' : ''}`}>
               {/* Tape */}
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#315CFF]/20 backdrop-blur-sm transform rotate-2 mix-blend-multiply dark:mix-blend-screen"></div>
               
               <h3 className="font-mono text-sm text-[#315CFF] uppercase tracking-widest mb-6">Biography</h3>
               <div className="prose prose-lg dark:prose-invert max-w-none font-body text-[#4A4A4A] dark:text-[#E0E0E0] leading-relaxed">
                 {profile.bio?.split('\n').map((para, i) => para.trim() ? (
                   <p key={i} className="mb-4 last:mb-0">{para}</p>
                 ) : null)}
               </div>
            </div>
          )}

        </div>
      </div>
    </SectionWrapper>
  );
};
