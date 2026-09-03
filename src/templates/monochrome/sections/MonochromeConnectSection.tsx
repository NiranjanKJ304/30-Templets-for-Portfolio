import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';

interface MonochromeConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonochromeConnectSection: React.FC<MonochromeConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MonochromeSectionHeader title="Network" number="10" subtitle="External Directories" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="flex flex-col">
        {socials.map((social, idx) => (
          <a 
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-[#C9C6BE]/60 dark:border-[#3A3A37]/60 py-6 md:py-10 flex items-baseline gap-6 md:gap-16 group hover:border-[#151515] dark:hover:border-[#F2F0E9] transition-colors"
          >
            <span className="font-mono text-lg md:text-2xl text-[#C9C6BE] dark:text-[#3A3A37] font-light group-hover:text-[#B44A35] dark:group-hover:text-[#D06A52] transition-colors w-8">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="font-heading text-3xl md:text-5xl lg:text-7xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight leading-none group-hover:text-[#B44A35] dark:group-hover:text-[#D06A52] transition-colors">
              {social.platform}
            </span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};
