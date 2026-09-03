import React from 'react';
import { KinshipAnchor } from './KinshipAnchor';
import { KinshipConnector } from './KinshipConnector';

export interface KinshipSectionInfo {
  id: string;
  title: string;
}

interface KinshipNavProps {
  sections: KinshipSectionInfo[];
}

export const KinshipNav: React.FC<KinshipNavProps> = ({ sections }) => {
  return (
    <nav className="fixed right-8 lg:right-12 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-0">
      {sections.map((section, idx) => (
        <a 
          key={section.id}
          href={`#${section.id}`}
          className="group relative py-4 flex items-center justify-end"
          aria-label={`Navigate to ${section.title}`}
        >
          <div className="flex items-center gap-4 transition-transform duration-300 group-hover:-translate-x-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#737A75] dark:text-[#A7ADA7] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.title}
            </span>
            <KinshipAnchor size="sm" className="opacity-50 group-hover:opacity-100 transition-opacity bg-[#737A75] dark:bg-[#A7ADA7] group-hover:bg-[#356B63] dark:group-hover:bg-[#78A99E]" />
          </div>
          
          {idx !== sections.length - 1 && (
            <KinshipConnector 
              orientation="vertical" 
              className="absolute top-1/2 right-[3px] h-full opacity-30" 
            />
          )}
        </a>
      ))}
    </nav>
  );
};
