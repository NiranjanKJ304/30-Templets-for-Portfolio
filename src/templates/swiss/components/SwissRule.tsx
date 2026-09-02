/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissRule - Precision grid line separator
 */

import React from 'react';

export interface SwissRuleProps {
  thick?: boolean;
  className?: string;
}

export const SwissRule: React.FC<SwissRuleProps> = ({ thick = false, className = '' }) => {
  return (
    <hr
      className={`border-0 border-t ${
        thick
          ? 'border-t-2 border-neutral-900 dark:border-neutral-100'
          : 'border-t border-neutral-200 dark:border-neutral-800'
      } ${className}`}
      aria-hidden="true"
    />
  );
};
