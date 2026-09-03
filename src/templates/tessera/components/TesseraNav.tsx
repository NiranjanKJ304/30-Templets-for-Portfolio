import React from 'react';
import { cn } from '../../../core/utils/cn';

export interface TesseraSectionInfo {
  id: string;
  title: string;
}

interface TesseraNavProps {
  sections: TesseraSectionInfo[];
}

export const TesseraNav: React.FC<TesseraNavProps> = ({ sections }) => {
  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-end">
      {sections.map((section, idx) => (
        <a 
          key={section.id}
          href={`#${section.id}`}
          className="group relative flex items-center justify-end h-10 w-32 border-y border-l border-[#C8C4B9] dark:border-[#4A4D48] bg-[#FBF9F3] dark:bg-[#1E2220] -mb-px -mr-[112px] hover:-mr-0 transition-all duration-300 px-4 cursor-pointer"
          aria-label={`Navigate to ${section.title}`}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#242522] dark:text-[#F0EEE5] opacity-0 group-hover:opacity-100 transition-opacity">
            {section.title}
          </span>
          <div className="absolute left-2 w-1.5 h-1.5 bg-[#C8C4B9] dark:bg-[#4A4D48] group-hover:bg-[#315F5A] dark:group-hover:bg-[#6E9D94] transition-colors" />
        </a>
      ))}
    </nav>
  );
};
