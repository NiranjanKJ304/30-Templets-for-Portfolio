import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../../core/utils/cn';
import type { ArchiveSectionInfo } from './ArchiveIndex';

interface ArchiveNavProps {
  sections: ArchiveSectionInfo[];
  title?: string;
}

export const ArchiveNav: React.FC<ArchiveNavProps> = ({ sections, title = 'ARCHIVE' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F3F0E8] dark:bg-[#151716] border-b border-[#C8C5BA] dark:border-[#464943]">
        <div className="flex h-12 items-center justify-between px-6 md:px-12 max-w-[2000px] mx-auto">
          <a href="#" className="font-mono text-xs uppercase tracking-widest font-bold text-[#20211F] dark:text-[#F1EEE5]">
            {title}
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="font-mono text-[10px] uppercase tracking-widest text-[#686861] dark:text-[#AAA9A0] hover:text-[#9D4937] dark:hover:text-[#D4755D] transition-colors"
              >
                <span className="opacity-50 mr-2">{section.index}</span>
                {section.title}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#20211F] dark:text-[#F1EEE5]"
            aria-label="Toggle archive index"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F2] dark:bg-[#1D201E] pt-12 lg:hidden overflow-y-auto">
          <div className="flex flex-col">
            <div className="px-6 py-4 border-b border-[#C8C5BA] dark:border-[#464943]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9D4937] dark:text-[#D4755D] font-bold">
                INDEX
              </span>
            </div>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-6 px-6 py-4 border-b border-[#C8C5BA] dark:border-[#464943] hover:bg-[#F3F0E8] dark:hover:bg-[#151716]"
              >
                <span className="font-mono text-sm text-[#686861] dark:text-[#AAA9A0] font-bold">
                  {section.index}
                </span>
                <span className="font-mono text-sm uppercase tracking-widest text-[#20211F] dark:text-[#F1EEE5] font-bold">
                  {section.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
