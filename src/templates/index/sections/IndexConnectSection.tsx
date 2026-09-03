import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';

interface IndexConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const IndexConnectSection: React.FC<IndexConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col">
        <IndexRow
          isHeader
          index="ID"
          title="NETWORK DIRECTORY"
          metadata="PLATFORM"
          description="IDENTIFIER"
        />
        
        <div className="flex flex-col">
          {socials.map((social, idx) => {
            const index = (idx + 1).toString().padStart(3, '0');
            
            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center py-6 border-b border-[#D5D6D0] dark:border-[#404440] group hover:bg-[#FFFFFF] dark:hover:bg-[#1A1E1C] px-4 -mx-4 transition-colors"
              >
                <div className="md:col-span-1 font-mono text-xs uppercase tracking-widest text-[#B9C8C3] dark:text-[#5E716C]">
                  {index}
                </div>
                <div className="md:col-span-4 font-heading font-bold text-xl lg:text-2xl text-[#181A19] dark:text-[#F2F1EA] group-hover:text-[#365F58] dark:group-hover:text-[#80A99E] transition-colors">
                  {social.platform}
                </div>
                <div className="md:col-span-7 font-mono text-xs uppercase tracking-widest text-[#696C67] dark:text-[#A8ABA4]">
                  {social.username || social.label || "VISIT PROFILE"}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
