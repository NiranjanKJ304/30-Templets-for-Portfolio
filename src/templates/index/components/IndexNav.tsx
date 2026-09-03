import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export interface IndexSectionInfo {
  id: string;
  title: string;
  index: string; // "01", "02"
}

interface IndexNavProps {
  sections: IndexSectionInfo[];
  title?: string;
}

export const IndexNav: React.FC<IndexNavProps> = ({ sections, title = 'INDEX' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F6F5F1] dark:bg-[#121514] border-b border-[#D5D6D0] dark:border-[#404440]">
        <div className="flex h-14 items-center justify-between px-6 md:px-12 lg:px-16 max-w-[2000px] mx-auto">
          <a href="#" className="font-heading font-bold text-sm uppercase tracking-tight text-[#181A19] dark:text-[#F2F1EA]">
            {title}
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#696C67] dark:text-[#A8ABA4] hover:text-[#365F58] dark:hover:text-[#80A99E] transition-colors"
              >
                <span className="opacity-50">{section.index}</span>
                <span>{section.title}</span>
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#181A19] dark:text-[#F2F1EA]"
            aria-label="Toggle directory index"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#FFFFFF] dark:bg-[#1A1E1C] pt-14 lg:hidden overflow-y-auto">
          <div className="flex flex-col">
            <div className="px-6 py-4 border-b border-[#D5D6D0] dark:border-[#404440]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D9A441] dark:text-[#D7B96C] font-bold">
                DIRECTORY INDEX
              </span>
            </div>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-6 px-6 py-4 border-b border-[#D5D6D0] dark:border-[#404440] hover:bg-[#F6F5F1] dark:hover:bg-[#121514]"
              >
                <span className="font-mono text-xs text-[#696C67] dark:text-[#A8ABA4]">
                  {section.index}
                </span>
                <span className="font-heading font-bold text-sm uppercase tracking-tight text-[#181A19] dark:text-[#F2F1EA]">
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
