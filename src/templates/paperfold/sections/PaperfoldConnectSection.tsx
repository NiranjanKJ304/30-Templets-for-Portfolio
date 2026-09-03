import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';
import { ExternalLink } from 'lucide-react';

interface PaperfoldConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperfoldConnectSection: React.FC<PaperfoldConnectSectionProps> = ({ data, enabled = true }) => {
  const { socials } = data;
  const hasData = Array.isArray(socials) && socials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="connect"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperfoldSectionHeader title="Network" number="10" subtitle="External Links" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="flex flex-wrap gap-6 md:gap-8 max-w-4xl">
        {socials.map((social, idx) => (
          <a 
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] px-8 py-5 shadow-sm hover:shadow-[0_4px_15px_rgba(0,0,0,0.04)] group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Subtle corner fold hover effect */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-[#F3EFE7] dark:bg-[#151719] transform translate-x-3 -translate-y-3 rotate-45 border-l border-b border-[#E8E3D8] dark:border-[#202020] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest mb-1 group-hover:text-[#C86B52] dark:group-hover:text-[#D47A61] transition-colors">
                {social.platform}
              </span>
              <span className="font-heading text-xl text-[#202020] dark:text-[#F3F0E8] group-hover:text-[#66717A] dark:group-hover:text-[#AAB3B8] transition-colors">
                {social.label || social.username || social.platform}
              </span>
            </div>
            
            <ExternalLink size={16} className="text-[#66717A] dark:text-[#AAB3B8] opacity-50 group-hover:opacity-100 transition-opacity ml-2" />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};
