import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalDivider } from '../components/MonumentalDivider';

interface MonumentalConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonumentalConnectSection: React.FC<MonumentalConnectSectionProps> = ({ data, enabled = true }) => {
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
      <MonumentalSection title="NETWORK" index="10" align="left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-8 border-l-8 border-[#171918] dark:border-[#F0EEE6]">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-8 p-16 border-r-8 border-b-8 border-[#171918] dark:border-[#F0EEE6] hover:bg-[#171918] dark:hover:bg-[#F0EEE6] transition-colors"
            >
              <span className="font-heading font-black text-3xl md:text-4xl text-[#171918] dark:text-[#F0EEE6] uppercase group-hover:text-[#F8F6F0] dark:group-hover:text-[#121514] transition-colors break-words w-full">
                {social.platform}
              </span>
              <span className="font-mono text-sm text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest group-hover:text-[#D8D4C9] dark:group-hover:text-[#303430] transition-colors">
                {social.username || 'LINK ↗'}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-16 md:mt-32">
          <MonumentalDivider thickness="thick" />
        </div>
      </MonumentalSection>
    </SectionWrapper>
  );
};
