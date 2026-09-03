import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';

interface MosaicConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MosaicConnectSection: React.FC<MosaicConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="Network" />
        </div>
        
        {socials.map((social, idx) => (
          <MosaicTile 
            key={idx} 
            span="quarter" 
            mobileSpan="half" 
            padding="md" 
            surface="primary"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center gap-4 h-full group w-full min-h-[160px]"
            >
              <span className="font-heading font-black text-2xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] group-hover:text-[#D66B4D] dark:group-hover:text-[#E27A5A] transition-colors">
                {social.platform}
              </span>
            </a>
          </MosaicTile>
        ))}
      </div>
    </SectionWrapper>
  );
};
