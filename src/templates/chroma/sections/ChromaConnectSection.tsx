import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';

interface ChromaConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChromaConnectSection: React.FC<ChromaConnectSectionProps> = ({ data, enabled = true }) => {
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
      <ChromaField color="sage">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="font-mono text-sm uppercase tracking-widest opacity-60">Directory</h2>
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 hover:opacity-70 transition-opacity"
                >
                  <span className="font-heading text-3xl font-medium tracking-tight">
                    {social.platform}
                  </span>
                  {social.username && (
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">
                      {social.username}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </ChromaField>
    </SectionWrapper>
  );
};
