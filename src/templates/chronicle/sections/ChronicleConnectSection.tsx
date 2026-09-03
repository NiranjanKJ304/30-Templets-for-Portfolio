import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';

interface ChronicleConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChronicleConnectSection: React.FC<ChronicleConnectSectionProps> = ({ data, enabled = true }) => {
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
      <ChronicleBand label="Network">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 py-6 border-b border-[#C9C5BB]/30 dark:border-[#474B47]/30"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl text-[#202321] dark:text-[#F0EEE6] group-hover:text-[#B96852] dark:group-hover:text-[#D07861] transition-colors">
                  {social.platform}
                </span>
                <span className="opacity-0 group-hover:opacity-40 transition-opacity">↗</span>
              </div>
              {social.username && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
                  {social.username}
                </span>
              )}
            </a>
          ))}
        </div>
      </ChronicleBand>
    </SectionWrapper>
  );
};
