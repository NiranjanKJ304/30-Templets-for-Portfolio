import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';

interface BlueprintOSConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintOSConnectSection: React.FC<BlueprintOSConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <WorkspaceWindow title="NETWORK_LINKS.conf" id="connect">
        <div className="flex flex-wrap gap-4">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-[#E9ECE8] dark:bg-[#111615] border border-[#CBD2CD] dark:border-[#3A4340] hover:border-[#356B63] dark:hover:border-[#75A89E] transition-colors group"
            >
              <span className="font-heading font-bold text-sm text-[#1D2523] dark:text-[#EEF2EC] group-hover:text-[#356B63] dark:group-hover:text-[#75A89E] transition-colors">
                {social.platform}
              </span>
              <span className="font-mono text-[10px] text-[#68716D] dark:text-[#A6ADA8] group-hover:text-[#1D2523] dark:group-hover:text-[#EEF2EC] transition-colors">
                {social.username || '↗'}
              </span>
            </a>
          ))}
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
