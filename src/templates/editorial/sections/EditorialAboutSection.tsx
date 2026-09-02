/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialAboutSection - Magazine profile narrative and biographical statement
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';
import { MapPin, Briefcase, UserCheck } from 'lucide-react';

interface EditorialAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const EditorialAboutSection: React.FC<EditorialAboutSectionProps> = ({
  data,
  enabled = true,
}) => {
  const { profile } = data;
  const bioContent = profile.bio || profile.summary;

  if (!enabled || !bioContent) {
    return null;
  }

  return (
    <section id="about" className="pt-12 sm:pt-16 pb-12 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15">
      <EditorialSectionHeader
        index="01"
        title="Biographical Profile"
        subtitle="Background, perspective, and core domain focus."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6">
        {/* Left / Lead Editorial Intro */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#B42318] dark:text-[#F06A5F] block mb-3">
              STATEMENT & PERSPECTIVE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171717] dark:text-[#F5F2EA] font-normal leading-tight tracking-tight">
              {profile.headline || `A dedicated study of practice and craft by ${profile.name}.`}
            </h3>
          </div>

          {/* Canonical metadata panel */}
          <div className="mt-8 pt-6 border-t border-[#171717]/10 dark:border-[#F5F2EA]/10 space-y-3 font-mono text-xs text-[#68655F] dark:text-[#B8B3AA]">
            {profile.role && (
              <div className="flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-[#B42318] dark:text-[#F06A5F]" />
                <span className="uppercase text-[#918D85] dark:text-[#817C74]">Role:</span>
                <span className="text-[#171717] dark:text-[#F5F2EA]">{profile.role}</span>
              </div>
            )}
            {profile.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B42318] dark:text-[#F06A5F]" />
                <span className="uppercase text-[#918D85] dark:text-[#817C74]">Location:</span>
                <span className="text-[#171717] dark:text-[#F5F2EA]">{profile.location}</span>
              </div>
            )}
            {profile.availableForHire !== undefined && (
              <div className="flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-[#B42318] dark:text-[#F06A5F]" />
                <span className="uppercase text-[#918D85] dark:text-[#817C74]">Status:</span>
                <span className="text-[#171717] dark:text-[#F5F2EA]">
                  {profile.availableForHire ? 'Available for commissions' : 'Currently engaged'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right / Editorial Reading Measure */}
        <div className="lg:col-span-7 lg:pl-6 lg:border-l border-[#171717]/10 dark:border-[#F5F2EA]/10">
          <div className="font-sans text-base sm:text-lg text-[#171717]/90 dark:text-[#F5F2EA]/90 leading-relaxed sm:leading-loose space-y-4">
            {bioContent.split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx}>
                {pIdx === 0 && (
                  <span className="float-left font-serif text-5xl sm:text-6xl text-[#171717] dark:text-[#F5F2EA] leading-none pr-3 pt-1 font-bold">
                    {paragraph.charAt(0)}
                  </span>
                )}
                {pIdx === 0 ? paragraph.slice(1) : paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
