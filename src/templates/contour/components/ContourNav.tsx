import React, { useEffect, useState } from 'react';
import { cn } from '../../../core/utils/cn';

export interface ContourSectionInfo {
  id: string;
  title: string;
}

interface ContourNavProps {
  sections: ContourSectionInfo[];
}

export const ContourNav: React.FC<ContourNavProps> = ({ sections }) => {
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
    <nav className="fixed right-6 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
      <div className="absolute right-[5px] top-0 bottom-0 w-px bg-[#C7C9B9]/30 dark:bg-[#46504A]/30 -z-10" />
      
      {sections.map((section, idx) => (
        <a 
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center justify-end gap-4"
          aria-label={`Navigate to ${section.title}`}
        >
          <span 
            className={cn(
              "font-mono text-[10px] uppercase tracking-widest transition-opacity duration-500",
              activeId === section.id 
                ? "text-[#202523] dark:text-[#EEF0E8] opacity-100" 
                : "text-[#6E746E] dark:text-[#A8AEA6] opacity-0 group-hover:opacity-100"
            )}
          >
            {section.title}
          </span>
          <div 
            className={cn(
              "rounded-full transition-all duration-500",
              activeId === section.id
                ? "bg-[#202523] dark:bg-[#EEF0E8] w-3 h-3 ring-4 ring-[#F2F0E7] dark:ring-[#151918]"
                : "bg-[#C7C9B9] dark:bg-[#46504A] w-[3px] h-[3px] mr-[4.5px] group-hover:w-2 group-hover:h-2 group-hover:mr-[2px]"
            )} 
          />
        </a>
      ))}
    </nav>
  );
};
