import React, { useEffect, useState } from 'react';
import { cn } from '../../../core/utils/cn';

export interface ChronicleSectionInfo {
  id: string;
  title: string;
}

interface ChronicleNavProps {
  sections: ChronicleSectionInfo[];
}

export const ChronicleNav: React.FC<ChronicleNavProps> = ({ sections }) => {
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
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4">
      {sections.map((section) => (
        <a 
          key={section.id}
          href={`#${section.id}`}
          className="group flex flex-col items-end gap-1"
          aria-label={`Navigate to ${section.title}`}
        >
          <span 
            className={cn(
              "font-mono text-[10px] uppercase tracking-widest transition-opacity duration-300",
              activeId === section.id 
                ? "text-[#202321] dark:text-[#F0EEE6] opacity-100" 
                : "text-[#6F746F] dark:text-[#A6ABA5] opacity-0 group-hover:opacity-100"
            )}
          >
            {section.title}
          </span>
          <div 
            className={cn(
              "h-[2px] transition-all duration-300",
              activeId === section.id
                ? "bg-[#202321] dark:bg-[#F0EEE6] w-8"
                : "bg-[#C9C5BB] dark:bg-[#474B47] w-4 group-hover:w-6"
            )} 
          />
        </a>
      ))}
    </nav>
  );
};
