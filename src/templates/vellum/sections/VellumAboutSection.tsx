import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';

interface VellumAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const VellumAboutSection: React.FC<VellumAboutSectionProps> = ({ data, enabled = true }) => {
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
      <VellumSection title="Introduction" number="01">
        <div className="flex flex-col gap-12 pt-4">
          
          {profile.summary && (
            <VellumAnnotation marker="synopsis" color="inkBlue" position="left">
              <h3 className="font-heading font-medium text-2xl md:text-3xl text-[#242522] dark:text-[#F0EDE3] leading-relaxed">
                {profile.summary}
              </h3>
            </VellumAnnotation>
          )}

          {profile.bio && (
            <div className="pl-0 md:pl-8 lg:pl-16">
              <VellumAnnotation variant="bracket" color="rule">
                <p className="font-body text-lg text-[#6D6D66] dark:text-[#AAA99F] leading-relaxed whitespace-pre-wrap font-light">
                  {profile.bio}
                </p>
              </VellumAnnotation>
            </div>
          )}
          
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
