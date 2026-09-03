import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';

interface TerminalConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TerminalConnectSection: React.FC<TerminalConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="netstat -rn" isSectionHeader />
        
        <div className="flex flex-col gap-4 pl-0 md:pl-4 font-mono text-sm">
          {socials.map((social, idx) => {
            const index = (idx + 1).toString().padStart(2, '0');
            
            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="text-[#5F6861] dark:text-[#9CA39D] group-hover:text-[#397A4A] dark:group-hover:text-[#79C98B] transition-colors select-none">
                  [{index}]
                </span>
                <span className="text-[#18201B] dark:text-[#DCE4DC] font-bold group-hover:text-[#397A4A] dark:group-hover:text-[#79C98B] transition-colors w-24">
                  {social.platform}
                </span>
                <span className="text-[#347A84] dark:text-[#69B7C4] group-hover:text-[#18201B] dark:group-hover:text-[#DCE4DC] transition-colors truncate">
                  -{'>'} {social.username || social.url}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
