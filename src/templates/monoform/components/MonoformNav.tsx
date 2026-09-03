import React, { useEffect, useState } from 'react';
import { cn } from '../../../core/utils/cn';

export interface MonoformSectionInfo {
  id: string;
  title: string;
}

interface MonoformNavProps {
  sections: MonoformSectionInfo[];
}

export const MonoformNav: React.FC<MonoformNavProps> = ({ sections }) => {
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
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col">
      <div className="absolute right-3 top-0 bottom-0 w-px bg-[#C8C7BF]/40 dark:bg-[#444844]/40" aria-hidden="true" />
      
      {sections.map((section) => (
        <a 
          key={section.id}
          href={`#${section.id}`}
          className="group relative flex items-center justify-end py-3 pr-8 w-32"
          aria-label={`Navigate to ${section.title}`}
        >
          <span 
            className={cn(
              "font-mono text-[10px] uppercase tracking-widest transition-all duration-300",
              activeId === section.id 
                ? "text-[#1D1F1E] dark:text-[#F0EEE7] opacity-100 translate-x-0" 
                : "text-[#6C706B] dark:text-[#A7AAA4] opacity-0 -translate-x-4 group-hover:opacity-60 group-hover:translate-x-0"
            )}
          >
            {section.title}
          </span>
          <div 
            className={cn(
              "absolute right-2.5 w-1.5 h-1.5 rounded-full transition-all duration-300",
              activeId === section.id
                ? "bg-[#1D1F1E] dark:bg-[#F0EEE7] scale-100"
                : "bg-[#C8C7BF] dark:bg-[#444844] scale-50 group-hover:scale-75"
            )} 
          />
        </a>
      ))}
    </nav>
  );
};
