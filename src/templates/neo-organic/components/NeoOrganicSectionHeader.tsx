/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicSectionHeader - Section headline with organic geometry marker
 */

import React from 'react';

interface NeoOrganicSectionHeaderProps {
  title: string;
  subtitle?: string;
  count?: number;
  badge?: string;
  accentColor?: 'green' | 'blue' | 'orange';
}

export const NeoOrganicSectionHeader: React.FC<NeoOrganicSectionHeaderProps> = ({
  title,
  subtitle,
  count,
  badge,
  accentColor = 'green',
}) => {
  const getMarkerColor = () => {
    switch (accentColor) {
      case 'blue':
        return 'bg-[#4169E1] dark:bg-[#7F9CFF]';
      case 'orange':
        return 'bg-[#E58B5B] dark:bg-[#F0A078]';
      case 'green':
      default:
        return 'bg-[#79A66A] dark:bg-[#91BD82]';
    }
  };

  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`w-2.5 h-2.5 rounded-full ${getMarkerColor()} ring-4 ring-[#79A66A]/20 dark:ring-[#91BD82]/20`}
          aria-hidden="true"
        />
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#17211B] dark:text-[#F2F3ED]">
          {title}
        </h2>
        {count !== undefined && (
          <span className="px-2.5 py-0.5 rounded-full bg-[#D9E7D0]/60 dark:bg-[#1B211D] border border-[#79A66A]/20 text-[#59635C] dark:text-[#B8C0B8] text-xs font-mono font-medium">
            {count}
          </span>
        )}
        {badge && (
          <span className="px-2.5 py-0.5 rounded-full bg-[#E58B5B]/15 text-[#E58B5B] dark:text-[#F0A078] text-xs font-medium">
            {badge}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="text-[#59635C] dark:text-[#B8C0B8] text-sm sm:text-base max-w-2xl font-light leading-relaxed ml-5.5">
          {subtitle}
        </p>
      )}

      <div className="w-full h-px bg-gradient-to-r from-[#17211B]/10 via-[#79A66A]/20 to-transparent dark:from-[#F2F3ED]/10 dark:via-[#91BD82]/20 mt-4 ml-5.5" />
    </div>
  );
};
