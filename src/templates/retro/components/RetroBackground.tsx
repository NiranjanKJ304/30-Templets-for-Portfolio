/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroBackground - Tactile warm paper surface with geometric print accents
 */

import React from 'react';

export const RetroBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Warm paper gradient field */}
      <div className="absolute inset-0 bg-[#FFF4D6] dark:bg-[#29231F] transition-colors duration-300" />

      {/* Retro decorative halftone / grid texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#29231F 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient warm color blocks in corners */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E76F2E]/10 dark:bg-[#F08A45]/10 blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#E9B949]/15 dark:bg-[#E9B949]/10 blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-[#477A8A]/10 dark:bg-[#6D9AA5]/10 blur-3xl" />

      {/* Retro geometric print registration lines (margin guidelines) */}
      <div className="absolute left-6 top-0 bottom-0 w-px border-l border-dashed border-[#29231F]/10 dark:border-[#FFF4D6]/10 hidden xl:block" />
      <div className="absolute right-6 top-0 bottom-0 w-px border-r border-dashed border-[#29231F]/10 dark:border-[#FFF4D6]/10 hidden xl:block" />
    </div>
  );
};
