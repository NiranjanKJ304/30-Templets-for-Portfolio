import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface KineticConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KineticConnectSection: React.FC<KineticConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-6 sm:px-12 max-w-[1600px] mx-auto"
      className="py-16 md:py-32"
    >
      <KineticSectionHeader title="Network" align="right" showRule={false} />
      
      <div className="flex flex-col border-y-4 border-[#171717] dark:border-[#F3F0E8]">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-8 md:py-12 border-b border-[#BDB7AA]/40 dark:border-[#454846]/40 hover:bg-[#E84F3D] dark:hover:bg-[#FF715D] hover:px-8 transition-all duration-300"
          >
            <span className="font-heading font-black text-5xl sm:text-7xl uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8] group-hover:text-white transition-colors">
              {social.platform}
            </span>
            <ArrowUpRight size={48} className="text-[#171717] dark:text-[#F3F0E8] group-hover:text-white opacity-20 group-hover:opacity-100 motion-safe:group-hover:rotate-45 transition-all duration-300" />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};
