import React from 'react';
import { cn } from '../../../core/utils/cn';

export interface TerminalSectionInfo {
  id: string;
  title: string;
  index: string; // "01", "02"
}

interface TerminalNavProps {
  sections: TerminalSectionInfo[];
}

export const TerminalNav: React.FC<TerminalNavProps> = ({ sections }) => {
  return (
    <div className="flex flex-col gap-2 mb-8 font-mono text-sm">
      <div className="text-[#347A84] dark:text-[#69B7C4] mb-2"># Directory contents:</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex gap-2 text-[#397A4A] dark:text-[#79C98B] hover:text-[#18201B] dark:hover:text-[#DCE4DC] transition-colors"
          >
            <span className="opacity-50 select-none">[{section.index}]</span>
            <span className="underline decoration-[#C9D0C9] dark:decoration-[#303833] underline-offset-4 hover:decoration-[#18201B] dark:hover:decoration-[#DCE4DC]">{section.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
