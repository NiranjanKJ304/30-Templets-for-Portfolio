import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';

interface BlueprintFooterProps {
  data: PortfolioData;
}

export const BlueprintFooter: React.FC<BlueprintFooterProps> = ({ data }) => {
  const { profile } = data;
  
  return (
    <footer className="border-t-2 border-[#2E6FBB] dark:border-[#5DA9E9] bg-[#FAFCFD] dark:bg-[#142333] relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border-2 border-[#173A5E] dark:border-[#55C6DC] flex items-center justify-center">
               <div className="w-2 h-2 bg-[#E8893A] dark:bg-[#F0A35B]"></div>
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-[#173A5E] dark:text-[#EAF2F7] uppercase tracking-wider">
                {profile.name}
              </p>
              <p className="font-mono text-[10px] text-[#73808C] uppercase tracking-widest">
                Technical Specification
              </p>
            </div>
          </div>
          
          <div className="flex gap-12 font-mono text-[10px] text-[#2E6FBB] dark:text-[#5DA9E9] uppercase tracking-widest text-center md:text-right">
             <div>
               <span className="block text-[#73808C] mb-1">Scale</span>
               1:1
             </div>
             <div>
               <span className="block text-[#73808C] mb-1">Rev</span>
               01
             </div>
             <div>
               <span className="block text-[#73808C] mb-1">Date</span>
               {new Date().getFullYear()}
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
