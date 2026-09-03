import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';

interface MonoformConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonoformConnectSection: React.FC<MonoformConnectSectionProps> = ({ data, enabled = true }) => {
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
      <MonoformSurface depth="surface" borderBottom>
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                10. Network
              </h2>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-col">
                <MonoformRule variant="subtle" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-12">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-2 py-10 border-b border-[#C8C7BF]/40 dark:border-[#444844]/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-2xl font-light text-[#1D1F1E] dark:text-[#F0EEE7] group-hover:text-[#A65A45] dark:group-hover:text-[#D0775E] transition-colors">
                          {social.platform}
                        </span>
                        <span className="opacity-0 group-hover:opacity-40 transition-opacity">↗</span>
                      </div>
                      {social.username && (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                          {social.username}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </MonoformSurface>
    </SectionWrapper>
  );
};
