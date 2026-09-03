import React from 'react';

export interface VellumSectionInfo {
  id: string;
  title: string;
}

interface VellumNavProps {
  sections: VellumSectionInfo[];
}

export const VellumNav: React.FC<VellumNavProps> = ({ sections }) => {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden 2xl:flex flex-col gap-6 items-end">
      <div className="absolute right-0 top-0 bottom-0 w-px bg-[#C8C2B5] dark:bg-[#4A4B46] opacity-30 pointer-events-none" aria-hidden="true" />
      {sections.map((section, idx) => (
        <a 
          key={section.id}
          href={`#${section.id}`}
          className="group relative pr-6 flex items-center justify-end text-right transition-all duration-300 cursor-pointer"
          aria-label={`Navigate to ${section.title}`}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#6D6D66] dark:text-[#AAA99F] group-hover:text-[#A94F3E] dark:group-hover:text-[#D27661] transition-colors">
            {section.title}
          </span>
          <div className="absolute right-[-2px] w-[5px] h-[5px] rounded-full bg-[#C8C2B5] dark:bg-[#4A4B46] group-hover:bg-[#A94F3E] dark:group-hover:bg-[#D27661] transition-all duration-300 scale-50 group-hover:scale-100" />
        </a>
      ))}
    </nav>
  );
};
