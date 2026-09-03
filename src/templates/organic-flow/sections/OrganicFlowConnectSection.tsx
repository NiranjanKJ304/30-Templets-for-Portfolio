import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';

interface OrganicFlowConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrganicFlowConnectSection: React.FC<OrganicFlowConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative z-0 pt-24 md:pt-48 pb-24"
      containerClassName="px-0 py-0"
    >
      <FlowSection title="CONNECT" align="center">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 md:mt-24">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-[3rem] bg-[#FBFAF5] dark:bg-[#1E2321] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#E8DED0] dark:group-hover:bg-[#302A26] transition-all duration-300">
                <span className="font-heading font-black text-2xl md:text-3xl text-[#202321] dark:text-[#F1EFE7] group-hover:text-[#C87558] dark:group-hover:text-[#D77F63] transition-colors lowercase">
                  {social.platform}
                </span>
              </div>
              <span className="font-mono text-xs text-[#6B706A] dark:text-[#A8ACA5] group-hover:text-[#202321] dark:group-hover:text-[#F1EFE7] transition-colors">
                {social.username || 'Visit Profile ↗'}
              </span>
            </a>
          ))}
        </div>
      </FlowSection>
    </SectionWrapper>
  );
};
