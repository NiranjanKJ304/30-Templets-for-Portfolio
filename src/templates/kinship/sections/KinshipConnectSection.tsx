import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';

interface KinshipConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KinshipConnectSection: React.FC<KinshipConnectSectionProps> = ({ data, enabled = true }) => {
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
      <KinshipSection title="Connect" color="blue">
        <div className="flex flex-wrap gap-x-12 gap-y-8 max-w-4xl">
          {socials.map((social, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <KinshipAnchor color="blue" size="sm" className="opacity-50 group-hover:opacity-100 transition-opacity" />
              <KinshipConnector className="w-8 opacity-30 group-hover:w-12 group-hover:opacity-100 transition-all" />
              
              <div className="flex flex-col">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-medium text-xl text-[#202624] dark:text-[#EEF0EA] hover:text-[#6C8797] dark:hover:text-[#8FAAB8] transition-colors"
                >
                  {social.platform}
                </a>
                {social.username && (
                  <span className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest mt-1">
                    {social.username}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
