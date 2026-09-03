import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';

interface OrbitalConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrbitalConnectSection: React.FC<OrbitalConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="Network" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-[400px] aspect-square rounded-full border border-[#B9C9C6]/30 dark:border-[#40504D]/30 flex items-center justify-center">
          
          <div className="w-[200px] h-[200px] rounded-full border border-[#B9C9C6]/50 dark:border-[#40504D]/50 flex items-center justify-center relative">
             <span className="font-mono text-[10px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest text-center">
               Transmitting<br/>Signal
             </span>
          </div>

          {socials.map((social, idx) => {
            const total = socials.length;
            const angle = (idx / total) * 360 - 90;
            const radius = 200; // Half of 400px max-width container, approx
            const rad = (angle * Math.PI) / 180;
            
            return (
              <a 
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/60 dark:border-[#40504D]/60 rounded-full px-5 py-2 hover:border-[#2F7C73] dark:hover:border-[#66B8A9] transition-colors shadow-sm whitespace-nowrap flex flex-col items-center"
                style={{ 
                  left: `calc(50% + ${radius * Math.cos(rad)}px)`, 
                  top: `calc(50% + ${radius * Math.sin(rad)}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <span className="font-heading font-bold text-sm text-[#172326] dark:text-[#F0F4F1]">
                  {social.platform}
                </span>
                {(social.label || social.username) && (
                  <span className="font-mono text-[9px] text-[#526467] dark:text-[#AABAB7] uppercase mt-0.5">
                    {social.label || social.username}
                  </span>
                )}
              </a>
            )
          })}

        </div>
      </div>
    </SectionWrapper>
  );
};
