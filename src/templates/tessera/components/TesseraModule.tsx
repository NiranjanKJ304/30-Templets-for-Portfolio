import React from 'react';
import { cn } from '../../../core/utils/cn';

interface TesseraModuleProps {
  children: React.ReactNode;
  className?: string;
  tab?: 'top' | 'bottom' | 'left' | 'right' | 'none';
  notch?: 'top' | 'bottom' | 'left' | 'right' | 'none';
  accent?: 'primary' | 'teal' | 'terracotta' | 'mustard' | 'blue' | 'plum' | 'none';
  elevation?: 'flat' | 'raised' | 'inset';
}

export const TesseraModule: React.FC<TesseraModuleProps> = ({ 
  children,
  className,
  tab = 'none',
  notch = 'none',
  accent = 'none',
  elevation = 'flat'
}) => {
  const accentMap = {
    none: '',
    primary: 'after:bg-[#242522] dark:after:bg-[#F0EEE5]',
    teal: 'after:bg-[#315F5A] dark:after:bg-[#6E9D94]',
    terracotta: 'after:bg-[#C6654F] dark:after:bg-[#D67A62]',
    mustard: 'after:bg-[#C5A452] dark:after:bg-[#D4BC6B]',
    blue: 'after:bg-[#718B98] dark:after:bg-[#91A9B4]',
    plum: 'after:bg-[#8D7180] dark:after:bg-[#B39AA7]',
  };

  const elevationMap = {
    flat: 'bg-[#FBF9F3] dark:bg-[#1E2220] ring-1 ring-[#C8C4B9] dark:ring-[#4A4D48]',
    raised: 'bg-[#FBF9F3] dark:bg-[#1E2220] shadow-[4px_4px_0px_rgba(200,196,185,0.4)] dark:shadow-[4px_4px_0px_rgba(74,77,72,0.4)] ring-1 ring-[#C8C4B9] dark:ring-[#4A4D48]',
    inset: 'bg-[#F2EFE7] dark:bg-[#151716] ring-1 ring-[#C8C4B9] dark:ring-[#4A4D48] shadow-[inset_2px_2px_4px_rgba(36,37,34,0.05)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]',
  };

  return (
    <div 
      className={cn(
        "relative",
        elevationMap[elevation],
        accent !== 'none' && "after:absolute after:content-[''] after:pointer-events-none",
        accent !== 'none' && tab === 'top' && "after:top-0 after:left-4 after:w-16 after:h-1",
        accent !== 'none' && tab === 'left' && "after:top-4 after:left-0 after:w-1 after:h-16",
        accent !== 'none' && (tab === 'none' || tab === 'bottom' || tab === 'right') && "after:top-0 after:left-0 after:w-full after:h-1", // Fallback accent
        accentMap[accent],
        className
      )}
    >
      {/* Tab Decoration (Decorative pseudo-element) */}
      {tab === 'top' && (
        <div className="absolute -top-3 left-4 w-12 h-3 bg-[#FBF9F3] dark:bg-[#1E2220] border-t border-l border-r border-[#C8C4B9] dark:border-[#4A4D48] rounded-t-sm" aria-hidden="true" />
      )}
      {tab === 'bottom' && (
        <div className="absolute -bottom-3 right-4 w-12 h-3 bg-[#FBF9F3] dark:bg-[#1E2220] border-b border-l border-r border-[#C8C4B9] dark:border-[#4A4D48] rounded-b-sm" aria-hidden="true" />
      )}
      {tab === 'left' && (
        <div className="absolute top-4 -left-3 w-3 h-12 bg-[#FBF9F3] dark:bg-[#1E2220] border-t border-l border-b border-[#C8C4B9] dark:border-[#4A4D48] rounded-l-sm" aria-hidden="true" />
      )}
      {tab === 'right' && (
        <div className="absolute bottom-4 -right-3 w-3 h-12 bg-[#FBF9F3] dark:bg-[#1E2220] border-t border-r border-b border-[#C8C4B9] dark:border-[#4A4D48] rounded-r-sm" aria-hidden="true" />
      )}

      {/* Notch Decoration (Decorative cut-in using clip path or borders) */}
      {notch === 'top' && (
        <div className="absolute top-0 left-16 w-8 h-2 bg-[#F2EFE7] dark:bg-[#151716] border-b border-l border-r border-[#C8C4B9] dark:border-[#4A4D48]" aria-hidden="true" />
      )}
      {notch === 'bottom' && (
        <div className="absolute bottom-0 left-16 w-8 h-2 bg-[#F2EFE7] dark:bg-[#151716] border-t border-l border-r border-[#C8C4B9] dark:border-[#4A4D48]" aria-hidden="true" />
      )}
      {notch === 'left' && (
        <div className="absolute top-16 left-0 w-2 h-8 bg-[#F2EFE7] dark:bg-[#151716] border-t border-b border-r border-[#C8C4B9] dark:border-[#4A4D48]" aria-hidden="true" />
      )}
      {notch === 'right' && (
        <div className="absolute top-16 right-0 w-2 h-8 bg-[#F2EFE7] dark:bg-[#151716] border-t border-b border-l border-[#C8C4B9] dark:border-[#4A4D48]" aria-hidden="true" />
      )}

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
