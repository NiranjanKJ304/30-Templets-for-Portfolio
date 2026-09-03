import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';

interface DuplexConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const DuplexConnectSection: React.FC<DuplexConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="Network" align="right" />}
      containerClassName="px-6 sm:px-12"
      className="py-16 md:py-24 bg-[#E5DED2] dark:bg-[#1B1F1E]"
    >
      <div className="flex flex-wrap gap-4 lg:gap-6">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-6 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)] aspect-square border border-[#B7B0A5]/40 dark:border-[#414542]/40 hover:border-[#181818] dark:hover:border-[#F1EEE7] transition-colors"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-[#587A72] dark:text-[#76A69C] font-bold">
              Link {(idx + 1).toString().padStart(2, '0')}
            </div>
            
            <div className="flex flex-col gap-2 mt-auto">
              <span className="font-heading font-bold text-3xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7]">
                {social.platform}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B7B0A5] dark:text-[#5F625F] truncate">
                {social.url.replace(/^https?:\/\/(www\.)?/, '')}
              </span>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};
