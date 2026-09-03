import React from 'react';

export interface PrismSectionInfo {
  id: string;
  title: string;
}

interface PrismNavProps {
  sections: PrismSectionInfo[];
}

export const PrismNav: React.FC<PrismNavProps> = ({ sections }) => {
  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col">
      {sections.map((section, idx) => (
        <a 
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center gap-4 pl-4 py-3 relative"
          aria-label={`Navigate to ${section.title}`}
        >
          {/* Active indicator placeholder (CSS hover handles visual) */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4566C7] dark:bg-[#7187E1] scale-y-0 group-hover:scale-y-100 transition-transform origin-center" />
          
          <div className="w-8 h-[1px] bg-[#6B706F] dark:bg-[#A8ADA9] opacity-50 group-hover:w-12 group-hover:opacity-100 group-hover:bg-[#4566C7] dark:group-hover:bg-[#7187E1] transition-all" />
          
          <span className="font-mono text-xs uppercase tracking-widest text-[#6B706F] dark:text-[#A8ADA9] group-hover:text-[#171A1B] dark:group-hover:text-[#F1F0EA] transition-colors">
            {section.title}
          </span>
        </a>
      ))}
    </nav>
  );
};
