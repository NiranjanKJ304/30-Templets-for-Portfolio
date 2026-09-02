/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialRule - Thin 1px publication hairline divider with optional editorial label
 */

import React from 'react';

interface EditorialRuleProps {
  className?: string;
  label?: string;
  index?: string;
}

export const EditorialRule: React.FC<EditorialRuleProps> = ({
  className = '',
  label,
  index,
}) => {
  if (!label && !index) {
    return (
      <hr
        className={`border-t border-[#171717]/15 dark:border-[#F5F2EA]/15 my-8 ${className}`}
      />
    );
  }

  return (
    <div className={`relative flex items-center gap-4 my-8 ${className}`}>
      <div className="flex-1 border-t border-[#171717]/15 dark:border-[#F5F2EA]/15" />
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74]">
        {index && <span className="font-bold text-[#B42318] dark:text-[#F06A5F]">{index}</span>}
        {label && <span>{label}</span>}
      </div>
      <div className="flex-1 border-t border-[#171717]/15 dark:border-[#F5F2EA]/15" />
    </div>
  );
};
