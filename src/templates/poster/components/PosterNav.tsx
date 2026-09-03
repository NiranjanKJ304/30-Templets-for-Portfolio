import React from 'react';

export interface PosterSectionInfo {
  id: string;
  title: string;
  index: string; // "01", "02"
}

interface PosterNavProps {
  sections: PosterSectionInfo[];
}

export const PosterNav: React.FC<PosterNavProps> = ({ sections }) => {
  return (
    <nav className="w-full border-y border-[#C9C3B7] dark:border-[#4A4A47] py-4 md:py-8 mt-12 md:mt-24 mb-12 md:mb-32">
      <ul className="grid grid-cols-2 md:flex md:flex-wrap gap-x-8 gap-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`}
              className="flex gap-2 group items-baseline"
            >
              <span className="font-mono text-[10px] md:text-xs text-[#3157D5] dark:text-[#6E8CFF] font-bold">
                {section.index}
              </span>
              <span className="font-heading font-bold text-sm md:text-xl text-[#17191B] dark:text-[#F5F0E5] uppercase tracking-wide group-hover:text-[#D94B36] dark:group-hover:text-[#F07761] transition-colors">
                {section.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
