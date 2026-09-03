import React from 'react';
import { cn } from '../../../core/utils/cn';

export interface ChromaSectionInfo {
  id: string;
  title: string;
}

interface ChromaNavProps {
  sections: ChromaSectionInfo[];
}

export const ChromaNav: React.FC<ChromaNavProps> = ({ sections }) => {
  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden 2xl:flex flex-col gap-8 mix-blend-difference text-white">
      {sections.map((section, idx) => (
        <a 
          key={section.id}
          href={`#${section.id}`}
          className="group relative flex items-center transition-all duration-500 cursor-pointer opacity-40 hover:opacity-100"
          aria-label={`Navigate to ${section.title}`}
        >
          <span className="font-mono text-xs uppercase tracking-widest pl-6">
            {section.title}
          </span>
          <div className="absolute left-0 w-2 h-2 rounded-full border border-white group-hover:bg-white transition-all duration-500" />
        </a>
      ))}
    </nav>
  );
};
