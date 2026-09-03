import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';

interface ContourConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ContourConnectSection: React.FC<ContourConnectSectionProps> = ({ data, enabled = true }) => {
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
      <ContourField label="Network" contourVariant="sparse">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 py-6 border-b border-[#C7C9B9]/30 dark:border-[#46504A]/30 relative"
            >
              <div className="absolute left-0 bottom-[-1px] h-[1px] w-0 bg-[#879A82] dark:bg-[#78947D] group-hover:w-full transition-all duration-500 ease-out" />
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl text-[#202523] dark:text-[#EEF0E8] transition-colors">
                  {social.platform}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#879A82] dark:text-[#78947D]">↗</span>
              </div>
              {social.username && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6]">
                  {social.username}
                </span>
              )}
            </a>
          ))}
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
