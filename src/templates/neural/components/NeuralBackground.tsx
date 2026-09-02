/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralBackground - Subtle digital grid and atmospheric light diffusion
 */

import React from 'react';

export const NeuralBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Precision Micro Grid (pure CSS) */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Atmospheric Ambient Light Fields */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/8 blur-[120px] rounded-full" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-blue-600/10 dark:bg-sky-500/6 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-cyan-600/6 blur-[140px] rounded-full" />
    </div>
  );
};
