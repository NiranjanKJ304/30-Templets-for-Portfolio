import React, { useState, useEffect } from 'react';
import { cn } from '../../../core/utils/cn';

export interface WorkspaceSectionInfo {
  id: string;
  title: string;
  index: string; // "01", "02"
}

interface WorkspaceSidebarProps {
  sections: WorkspaceSectionInfo[];
}

export const WorkspaceSidebar: React.FC<WorkspaceSidebarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 150; // offset for sticky header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          return;
        }
      }
      
      if (sections.length > 0 && window.scrollY < 100) {
        setActiveSection(sections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6 lg:sticky lg:top-8 bg-[#F8FAF7] dark:bg-[#181E1C] border border-[#CBD2CD] dark:border-[#3A4340] shadow-md z-40 p-4">
      <div className="font-heading font-bold text-xs uppercase tracking-widest text-[#68716D] dark:text-[#A6ADA8] border-b border-[#CBD2CD] dark:border-[#3A4340] pb-2 mb-2">
        WORKSPACE DIRECTORY
      </div>
      
      <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm font-body whitespace-nowrap transition-colors shrink-0 lg:shrink",
                isActive 
                  ? "bg-[#E9ECE8] dark:bg-[#111615] text-[#1D2523] dark:text-[#EEF2EC] font-bold border-l-2 border-[#356B63] dark:border-[#75A89E]" 
                  : "text-[#68716D] dark:text-[#A6ADA8] hover:bg-[#E9ECE8] dark:hover:bg-[#111615] hover:text-[#1D2523] dark:hover:text-[#EEF2EC] border-l-2 border-transparent"
              )}
            >
              <span className="font-mono text-[10px] opacity-60">
                {section.index}
              </span>
              <span>{section.title}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
