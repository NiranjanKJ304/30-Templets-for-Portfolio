import React from 'react';
import { cn } from '../../../core/utils/cn';

export interface ArchiveSectionInfo {
  id: string;
  title: string;
  index: string; // "01", "02"
}

interface ArchiveIndexProps {
  sections: ArchiveSectionInfo[];
  className?: string;
}

export const ArchiveIndex: React.FC<ArchiveIndexProps> = ({ sections, className }) => {
  return (
    <div className={cn("w-full flex flex-col gap-0 border-y border-[#C8C5BA] dark:border-[#464943] bg-[#FAF8F2] dark:bg-[#1D201E]", className)}>
      <div className="flex items-center gap-4 px-6 py-3 border-b border-[#C8C5BA] dark:border-[#464943]">
        <div className="font-mono text-xs uppercase tracking-widest text-[#9D4937] dark:text-[#D4755D] font-bold">
          INDEX
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "flex items-center gap-4 px-6 py-4 hover:bg-[#F3F0E8] dark:hover:bg-[#151716] transition-colors group",
              i % 4 !== 3 ? "lg:border-r border-[#C8C5BA] dark:border-[#464943]" : "",
              i < sections.length - 1 ? "border-b border-[#C8C5BA] dark:border-[#464943] lg:border-b-0" : "" // simpler border logic for grid
            )}
          >
            <span className="font-mono text-xs text-[#686861] dark:text-[#AAA9A0] font-bold group-hover:text-[#9D4937] dark:group-hover:text-[#D4755D] transition-colors">
              {section.index}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#20211F] dark:text-[#F1EEE5] font-bold group-hover:text-[#9D4937] dark:group-hover:text-[#D4755D] transition-colors">
              {section.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
