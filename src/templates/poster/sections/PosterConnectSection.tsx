import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';

interface PosterConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
}

export const PosterConnectSection: React.FC<PosterConnectSectionProps> = ({ data, enabled = true, index }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="cobalt" />
          <PosterLabel className="text-[#3157D5] dark:text-[#6E8CFF] text-right mt-4 md:mt-12">NETWORK</PosterLabel>
        </div>

        <ul className="flex flex-col mt-8">
          {socials.map((social, idx) => (
            <li key={idx}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[#C9C3B7] dark:border-[#4A4A47] gap-4"
              >
                <div className="flex gap-4 md:gap-12 items-baseline">
                  <span className="font-mono text-sm text-[#65635D] dark:text-[#B4B0A7]">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter text-[#17191B] dark:text-[#F5F0E5] group-hover:text-[#3157D5] dark:group-hover:text-[#6E8CFF] transition-colors">
                    {social.platform}
                  </span>
                </div>
                <span className="font-mono text-sm md:text-lg text-[#65635D] dark:text-[#B4B0A7] md:text-right group-hover:text-[#17191B] dark:group-hover:text-[#F5F0E5] transition-colors truncate">
                  {social.username || social.label || 'VISIT'}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </PosterBlock>
    </SectionWrapper>
  );
};
