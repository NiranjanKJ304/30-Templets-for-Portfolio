import React, { useEffect, useState } from 'react';
import { cn } from '../../../core/utils/cn';

export interface FolioSectionInfo {
  id: string;
  title: string;
  pageNum: string;
}

interface FolioNavProps {
  sections: FolioSectionInfo[];
}

export const FolioNav: React.FC<FolioNavProps> = ({ sections }) => {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col">
      {sections.map((section, idx) => {
        const isActive = activeId === section.id;
        
        return (
          <a 
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "group relative flex items-center justify-end py-3 px-4 border-y border-l transition-all duration-500",
              "border-[#C9C5BA] dark:border-[#444A45]",
              isActive 
                ? "bg-[#FAF8F1] dark:bg-[#1D211F] translate-x-0" 
                : "bg-[#F3F0E7] dark:bg-[#242926] translate-x-4 hover:translate-x-2",
              idx > 0 && "-mt-px" // Collapse borders
            )}
            style={{ 
              boxShadow: isActive ? '-4px 0 10px rgba(29,32,32,0.05)' : 'none',
              zIndex: isActive ? 10 : 0
            }}
            aria-label={`Navigate to ${section.title}`}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-white/40 dark:bg-white/10 pointer-events-none" />
            
            <div className="flex items-center gap-3">
              <span className={cn(
                "font-mono text-[10px] uppercase tracking-widest transition-colors",
                isActive ? "text-[#1D2020] dark:text-[#F0EEE6]" : "text-[#70736F] dark:text-[#A5AAA3]"
              )}>
                {section.pageNum}
              </span>
              <span className={cn(
                "font-mono text-[10px] uppercase tracking-widest transition-opacity duration-300 w-20 text-left",
                isActive ? "opacity-100 text-[#1D2020] dark:text-[#F0EEE6]" : "opacity-0 text-[#70736F] dark:text-[#A5AAA3] group-hover:opacity-100"
              )}>
                {section.title}
              </span>
            </div>
          </a>
        );
      })}
    </nav>
  );
};
