import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';

interface VellumConnectSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const VellumConnectSection: React.FC<VellumConnectSectionProps> = ({ data, enabled = true }) => {
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
      <VellumSection title="Directory" number="10">
        <div className="flex flex-col gap-6 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {socials.map((social, idx) => (
              <VellumAnnotation 
                key={idx}
                marker="link" 
                color="brick" 
                position="left"
              >
                <div className="flex flex-col gap-1">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-xl text-[#242522] dark:text-[#F0EDE3] hover:text-[#A94F3E] dark:hover:text-[#D27661] transition-colors underline decoration-1 underline-offset-4"
                  >
                    {social.platform}
                  </a>
                  {social.username && (
                    <span className="font-mono text-[10px] text-[#6D6D66] dark:text-[#AAA99F] uppercase tracking-widest mt-2 block">
                      {social.username}
                    </span>
                  )}
                </div>
              </VellumAnnotation>
            ))}
          </div>
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
