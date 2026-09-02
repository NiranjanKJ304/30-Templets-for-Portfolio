/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaBackground - Atmospheric depth lighting, subtle radial vignette, and cinematic glow fields
 */

import React from 'react';

export const CinemaBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Deep Radial Vignette Overlay */}
      <div
        className="absolute inset-0 opacity-70 dark:opacity-90"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 50% -10%, rgba(245, 158, 11, 0.08), transparent 70%),
            radial-gradient(ellipse 60% 60% at 80% 50%, rgba(217, 119, 6, 0.05), transparent 60%),
            radial-gradient(ellipse 70% 70% at 20% 90%, rgba(245, 158, 11, 0.04), transparent 70%)
          `,
        }}
      />

      {/* Top & Bottom Cinematic Falloff Masks */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
};
