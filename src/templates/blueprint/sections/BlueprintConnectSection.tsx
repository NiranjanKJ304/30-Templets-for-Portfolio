import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';

interface BlueprintConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintConnectSection: React.FC<BlueprintConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      customHeader={<BlueprintSectionHeader title="Network Nodes" number="10" description="External Connection Endpoints" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="flex flex-wrap gap-4 md:gap-6">
        {socials.map((social, idx) => (
          <a 
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] px-6 py-4 hover:bg-[#2E6FBB] dark:hover:bg-[#5DA9E9] group transition-colors flex-grow md:flex-grow-0"
          >
            <div className="font-mono text-[#2E6FBB] dark:text-[#5DA9E9] group-hover:text-[#FAFCFD] dark:group-hover:text-[#0D1620] transition-colors">
              <span className="text-[10px] uppercase tracking-widest opacity-50 block mb-1">NODE {String(idx + 1).padStart(2, '0')}</span>
              <span className="text-sm font-bold uppercase tracking-wider">{social.label || social.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};
