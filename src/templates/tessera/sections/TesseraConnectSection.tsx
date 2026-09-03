import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';

interface TesseraConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TesseraConnectSection: React.FC<TesseraConnectSectionProps> = ({ data, enabled = true }) => {
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
      <TesseraSection title="Connect" accent="blue">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-[#C8C4B9] dark:border-[#4A4D48] relative w-full">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block z-0" />
          
          {socials.map((social, idx) => (
            <TesseraModule 
              key={idx}
              elevation="flat"
              className="flex flex-col p-6 md:p-8 border-b border-[#C8C4B9] dark:border-[#4A4D48] border-r"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-medium text-lg text-[#242522] dark:text-[#F0EEE5] hover:text-[#718B98] dark:hover:text-[#91A9B4] transition-colors"
              >
                {social.platform}
              </a>
              {social.username && (
                <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest mt-2 block">
                  {social.username}
                </span>
              )}
            </TesseraModule>
          ))}
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
