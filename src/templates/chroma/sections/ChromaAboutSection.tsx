import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';

interface ChromaAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChromaAboutSection: React.FC<ChromaAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <ChromaField color="clay">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="font-mono text-sm uppercase tracking-widest opacity-60">About</h2>
          </div>

          <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-12 lg:gap-16">
            {profile.summary && (
              <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                {profile.summary}
              </h3>
            )}

            {profile.bio && (
              <p className="font-body text-xl md:text-2xl font-light leading-relaxed max-w-4xl opacity-80 whitespace-pre-wrap">
                {profile.bio}
              </p>
            )}
          </div>
          
        </div>
      </ChromaField>
    </SectionWrapper>
  );
};
