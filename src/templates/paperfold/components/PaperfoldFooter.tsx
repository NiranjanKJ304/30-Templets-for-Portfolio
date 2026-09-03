import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';

interface PaperfoldFooterProps {
  data: PortfolioData;
}

export const PaperfoldFooter: React.FC<PaperfoldFooterProps> = ({ data }) => {
  const { profile } = data;
  
  return (
    <footer className="bg-[#FFFDF7] dark:bg-[#202326] border-t border-[#E8E3D8] dark:border-[#202020] relative z-10 pt-16 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 relative">
        
        {/* Subtle bottom fold corner */}
        <div className="absolute bottom-4 right-6 w-8 h-8 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-full h-full bg-[#F3EFE7] dark:bg-[#151719] transform -rotate-45 translate-x-4 translate-y-4 shadow-[-2px_-2px_4px_rgba(0,0,0,0.02)] border-t border-l border-[#E8E3D8] dark:border-[#202020]"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <p className="font-heading font-normal text-2xl text-[#202020] dark:text-[#F3F0E8] mb-2">
              {profile.name}
            </p>
            {profile.role && (
              <p className="font-mono text-xs text-[#66717A] dark:text-[#AAB3B8] uppercase tracking-widest">
                {profile.role}
              </p>
            )}
          </div>
          
          <div className="flex gap-8 font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest">
             <div className="flex flex-col text-right">
               <span className="mb-1 text-[#66717A] dark:text-[#AAB3B8]">Folio</span>
               {new Date().getFullYear()}
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
