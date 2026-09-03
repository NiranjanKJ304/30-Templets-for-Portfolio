import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';

interface ArchiveConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
}

export const ArchiveConnectSection: React.FC<ArchiveConnectSectionProps> = ({ data, enabled = true, index }) => {
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
      <ArchiveEntry index={index} title="Connect" className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-6 border border-[#C8C5BA] dark:border-[#464943] bg-[#FAF8F2] dark:bg-[#1D201E] hover:bg-[#20211F] hover:text-[#FAF8F2] dark:hover:bg-[#F1EEE5] dark:hover:text-[#151716] transition-colors group"
            >
              <span className="font-heading font-black text-xl uppercase tracking-tighter transition-colors">
                {social.platform}
              </span>
              {social.username && (
                <span className="font-mono text-[10px] tracking-widest uppercase transition-colors opacity-70">
                  {social.username}
                </span>
              )}
            </a>
          ))}
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
