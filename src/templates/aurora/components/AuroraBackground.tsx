/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraBackground - Atmospheric diffuse luminous ambient color fields
 */

import React from 'react';

export const AuroraBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Primary Lavender light field (top right) */}
      <div className="absolute -top-[15%] -right-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-purple-300/30 via-indigo-200/25 to-transparent dark:from-purple-900/20 dark:via-indigo-950/20 blur-3xl" />

      {/* Sky Blue soft field (mid left) */}
      <div className="absolute top-[30%] -left-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr from-sky-300/30 via-teal-100/20 to-transparent dark:from-sky-900/15 dark:via-cyan-950/15 blur-3xl" />

      {/* Coral & Sun amber subtle field (bottom right) */}
      <div className="absolute top-[65%] -right-[12%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-bl from-rose-200/25 via-amber-100/20 to-transparent dark:from-rose-950/15 dark:via-amber-950/10 blur-3xl" />

      {/* Mint subtle glow (bottom left) */}
      <div className="absolute -bottom-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-t from-emerald-200/20 to-transparent dark:from-emerald-950/10 blur-3xl" />
    </div>
  );
};
