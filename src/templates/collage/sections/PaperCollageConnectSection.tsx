import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';
import { SocialLinks } from '../../../core/components/SocialLinks';

interface PaperCollageConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperCollageConnectSection: React.FC<PaperCollageConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperCollageSectionHeader title="Elsewhere" number="10" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {socials.map((social, idx) => {
          const rotations = ['rotate-2', '-rotate-3', 'rotate-1', '-rotate-2', 'rotate-3'];
          const rot = rotations[idx % rotations.length];

          return (
            <a 
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-4 pr-6 shadow-sm transform ${rot} hover:scale-105 hover:shadow-md transition-all`}
            >
              <div className="w-10 h-10 border border-[#171717] dark:border-white rounded-full flex items-center justify-center bg-[#F7F3EA] dark:bg-[#1A1C23] text-[#171717] dark:text-white group-hover:bg-[#315CFF] group-hover:text-white transition-colors">
                 <span className="font-heading font-black text-xl">{social.label?.[0] || social.platform[0].toUpperCase()}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold uppercase tracking-wider text-[#171717] dark:text-white text-sm">
                  {social.label || social.platform}
                </span>
                {social.username && (
                  <span className="font-mono text-[10px] text-[#737373] dark:text-[#A0A5B5]">
                    {social.username}
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
