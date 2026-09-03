import React, { useState, useEffect } from 'react';
import { cn } from '../../../core/utils/cn';

export interface FlowSectionInfo {
  id: string;
  title: string;
}

interface FlowNavProps {
  sections: FlowSectionInfo[];
}

export const FlowNav: React.FC<FlowNavProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 300;

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
    <nav 
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 border backdrop-blur-md max-w-[90vw] overflow-x-auto scrollbar-hide",
        isScrolled 
          ? "bg-[#FBFAF5]/90 dark:bg-[#1E2321]/90 border-[#E8DED0] dark:border-[#302A26] shadow-lg" 
          : "bg-transparent border-transparent"
      )}
    >
      <ul className="flex items-center gap-6 md:gap-8 min-w-max">
        {sections.map(section => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <a 
                href={`#${section.id}`}
                className={cn(
                  "font-body text-sm transition-colors",
                  isActive 
                    ? "text-[#C87558] dark:text-[#D77F63] font-bold" 
                    : "text-[#6B706A] dark:text-[#A8ACA5] hover:text-[#202321] dark:hover:text-[#F1EFE7]"
                )}
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
