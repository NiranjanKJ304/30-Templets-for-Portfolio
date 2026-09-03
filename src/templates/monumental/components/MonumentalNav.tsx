import React from 'react';

export interface MonumentalSectionInfo {
  id: string;
  title: string;
  index: string;
}

interface MonumentalNavProps {
  sections: MonumentalSectionInfo[];
}

export const MonumentalNav: React.FC<MonumentalNavProps> = ({ sections }) => {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-2">
      {sections.map((section) => (
        <a 
          key={section.id}
          href={`#${section.id}`}
          className="group flex flex-col items-end gap-1 px-4 py-2 border-r-4 border-transparent hover:border-[#171918] dark:hover:border-[#F0EEE6] transition-all"
          aria-label={`Navigate to ${section.title}`}
        >
          <span className="font-mono text-xs text-[#686B66] dark:text-[#A5A7A1] group-hover:text-[#B94F38] dark:group-hover:text-[#D16A52] transition-colors">
            {section.index}
          </span>
          <span className="font-heading font-bold text-sm tracking-widest uppercase text-[#171918] dark:text-[#F0EEE6] opacity-0 group-hover:opacity-100 transition-opacity">
            {section.title}
          </span>
        </a>
      ))}
    </nav>
  );
};
