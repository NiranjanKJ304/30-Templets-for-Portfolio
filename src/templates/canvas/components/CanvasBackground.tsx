/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasBackground - Subtle studio grid marks, architectural corner crosses, and paper grain tone
 */

import React from 'react';

export const CanvasBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Subtle Studio Canvas Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative Perimeter Registration Crosshairs */}
      <div className="absolute top-6 left-6 text-neutral-400 dark:text-neutral-600 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute top-6 right-6 text-neutral-400 dark:text-neutral-600 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute bottom-6 left-6 text-neutral-400 dark:text-neutral-600 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute bottom-6 right-6 text-neutral-400 dark:text-neutral-600 font-mono text-xs select-none">
        +
      </div>
    </div>
  );
};
