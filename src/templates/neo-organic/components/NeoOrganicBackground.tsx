/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicBackground - Flowing organic background geometries
 */

import React from 'react';

export const NeoOrganicBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* Top Right Organic Soft Blob */}
      <div
        className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-[48%_52%_68%_32%/38%_44%_56%_62%] bg-gradient-to-br from-[#79A66A]/12 to-[#4169E1]/8 dark:from-[#91BD82]/8 dark:to-[#7F9CFF]/6 blur-3xl transition-transform duration-1000 ease-out transform rotate-12"
      />

      {/* Mid Left Warm Organic Form */}
      <div
        className="absolute top-1/3 -left-40 w-[600px] h-[520px] rounded-[58%_42%_45%_55%/52%_60%_40%_48%] bg-gradient-to-tr from-[#E58B5B]/10 to-[#D9E7D0]/20 dark:from-[#F0A078]/6 dark:to-[#91BD82]/5 blur-3xl transition-transform duration-1000 ease-out transform -rotate-12"
      />

      {/* Bottom Center Blue-Green Swell */}
      <div
        className="absolute -bottom-48 left-1/4 w-[700px] h-[600px] rounded-[42%_58%_60%_40%/48%_36%_64%_52%] bg-gradient-to-t from-[#4169E1]/8 via-[#79A66A]/10 to-transparent dark:from-[#7F9CFF]/5 dark:via-[#91BD82]/6 blur-3xl transition-transform duration-1000 ease-out"
      />

      {/* Subtle organic SVG accent path */}
      <svg
        className="absolute top-20 right-10 w-96 h-96 opacity-20 dark:opacity-10 text-[#79A66A] dark:text-[#91BD82] hidden lg:block"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50,200 C 50,90 120,40 220,50 C 320,60 360,150 350,240 C 340,330 240,360 150,340 C 70,320 50,280 50,200 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
      </svg>
    </div>
  );
};
