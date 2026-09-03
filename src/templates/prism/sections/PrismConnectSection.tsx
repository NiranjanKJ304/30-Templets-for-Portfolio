import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismDivider } from '../components/PrismDivider';

interface PrismConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PrismConnectSection: React.FC<PrismConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <PrismSection title="Connect" align="left" colorFacet="blue">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 w-full">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-4 p-6 md:p-8 border border-[rgba(23,26,27,0.1)] dark:border-[rgba(241,240,234,0.1)] hover:border-[#4566C7] dark:hover:border-[#7187E1] bg-[#FCFBF7] dark:bg-[#1A1E1F] transition-all relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)' }}
            >
              <div className="absolute top-0 right-0 w-8 h-8 bg-[rgba(23,26,27,0.05)] dark:bg-[rgba(241,240,234,0.05)] group-hover:bg-[#4566C7] dark:group-hover:bg-[#7187E1] transition-colors" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              
              <span className="font-heading font-extrabold text-xl md:text-2xl text-[#171A1B] dark:text-[#F1F0EA] uppercase group-hover:text-[#4566C7] dark:group-hover:text-[#7187E1] transition-colors break-words w-full relative z-10">
                {social.platform}
              </span>
              <span className="font-mono text-[10px] md:text-xs text-[#6B706F] dark:text-[#A8ADA9] uppercase tracking-widest break-all">
                {social.username || 'Link ↗'}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-24 md:mt-40">
          <PrismDivider direction="right-to-left" />
        </div>
      </PrismSection>
    </SectionWrapper>
  );
};
