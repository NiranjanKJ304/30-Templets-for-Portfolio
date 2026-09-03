import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';

interface MemphisConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MemphisConnectSection: React.FC<MemphisConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  const bgColors = ['bg-[#2563EB]', 'bg-[#EC4899]', 'bg-[#FACC15]', 'bg-[#34D399]', 'bg-[#F97316]', 'bg-[#8B5CF6]'];

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MemphisSectionHeader title="Connect" number="10" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
        {socials.map((social, idx) => {
          const bgColor = bgColors[idx % bgColors.length];
          const isYellow = bgColor === 'bg-[#FACC15]' || bgColor === 'bg-[#34D399]';
          const textColor = isYellow ? 'text-neutral-900' : 'text-white';
          
          return (
            <a 
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-6 py-4 ${bgColor} ${textColor} border-4 border-neutral-900 dark:border-white shadow-[6px_6px_0_0_#202124] hover:-translate-y-2 hover:translate-x-1 hover:shadow-[4px_4px_0_0_#202124] transition-all`}
            >
               <span className="font-heading font-black uppercase tracking-widest text-lg">
                 {social.label || social.platform}
               </span>
               {social.username && (
                 <span className={`opacity-80 text-sm font-bold border-l-2 ${isYellow ? 'border-neutral-900' : 'border-white'} pl-3`}>
                   {social.username}
                 </span>
               )}
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
