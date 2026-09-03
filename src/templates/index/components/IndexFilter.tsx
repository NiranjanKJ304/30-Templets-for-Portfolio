import React from 'react';

interface IndexFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const IndexFilter: React.FC<IndexFilterProps> = ({ categories, activeCategory, onSelectCategory }) => {
  if (!categories || categories.length <= 1) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      <div className="font-mono text-[10px] uppercase tracking-widest text-[#696C67] dark:text-[#A8ABA4] font-bold mr-4">
        FILTER:
      </div>
      
      {['ALL', ...categories].map(category => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            aria-selected={isActive}
            className={`
              font-mono text-xs uppercase tracking-widest px-3 py-1.5 transition-colors border
              ${isActive 
                ? 'bg-[#181A19] text-[#FFFFFF] border-[#181A19] dark:bg-[#F2F1EA] dark:text-[#121514] dark:border-[#F2F1EA]' 
                : 'bg-transparent text-[#696C67] border-[#D5D6D0] hover:border-[#181A19] hover:text-[#181A19] dark:text-[#A8ABA4] dark:border-[#404440] dark:hover:border-[#F2F1EA] dark:hover:text-[#F2F1EA]'}
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
