import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FolioSheet } from '../components/FolioSheet';

interface FolioConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  pageNum: string;
}

export const FolioConnectSection: React.FC<FolioConnectSectionProps> = ({ data, enabled = true, pageNum }) => {
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
      <FolioSheet pageNum={pageNum} title="NETWORK" offset="left">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 p-8 border border-[#C9C5BA] dark:border-[#444A45] bg-[#F3F0E7]/50 dark:bg-[#242926]/50 hover:bg-[#FAF8F1] dark:hover:bg-[#1D211F] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-2xl text-[#1D2020] dark:text-[#F0EEE6]">
                  {social.platform}
                </span>
                <span className="text-[#B85F49] dark:text-[#D07961] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
              {social.username && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#70736F] dark:text-[#A5AAA3]">
                  {social.username}
                </span>
              )}
            </a>
          ))}
        </div>
      </FolioSheet>
    </SectionWrapper>
  );
};
