import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../../core/utils/cn';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

interface PaperCollageNavProps {
  data: PortfolioData;
  sectionsConfig: SectionConfig[];
}

export const PaperCollageNav: React.FC<PaperCollageNavProps> = ({ data, sectionsConfig }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter sections using canonical visibility logic
  const configMap = sectionsConfig.reduce((acc, s) => {
    acc[s.id] = s.enabled;
    return acc;
  }, {} as Record<string, boolean>);

  const visibleSections = sectionsConfig.filter(section => 
    isSectionVisible(section.id, configMap, data)
  );

  return (
    <header 
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-500",
        isScrolled ? "-translate-y-4" : ""
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-none">
        
        {/* Brand Tag */}
        <div className="pointer-events-auto mt-4 ml-4">
          <a href="#" className="inline-block bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-3 shadow-sm transform -rotate-2 hover:rotate-0 transition-transform">
            <span className="font-heading font-bold text-xl tracking-tight text-[#171717] dark:text-white uppercase">
              {data.profile.name.split(' ')[0]}
            </span>
          </a>
        </div>

        {/* Desktop Nav Box */}
        <div className="pointer-events-auto hidden md:flex flex-col items-end mt-4 mr-4">
           {/* Tape visual */}
           <div className="w-16 h-6 bg-[#F5C84B]/40 dark:bg-[#F5C84B]/20 transform rotate-3 translate-y-3 translate-x-4 z-10 backdrop-blur-sm mix-blend-multiply dark:mix-blend-screen"></div>
           
           <nav className="bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-4 shadow-md flex items-center gap-6 relative z-0 transform rotate-1">
             {visibleSections.map((section, idx) => (
               <a
                 key={section.id}
                 href={`#${section.id}`}
                 className="relative group text-sm font-bold uppercase tracking-wider text-[#4A4A4A] dark:text-[#A0A5B5] hover:text-[#315CFF] transition-colors"
               >
                 <span className="opacity-0 group-hover:opacity-100 absolute -bottom-2 left-0 w-full h-1 bg-[#C8E64A] transform -skew-x-12 transition-all z-[-1]"></span>
                 <span className="font-mono text-[10px] text-[#A0A5B5] mr-1">{String(idx + 1).padStart(2, '0')}</span>
                 {section.id}
               </a>
             ))}
           </nav>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="pointer-events-auto md:hidden mt-4 mr-4 bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-3 shadow-sm transform rotate-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="text-[#171717] dark:text-white" /> : <Menu className="text-[#171717] dark:text-white" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 right-4 left-4 bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] shadow-lg p-6 flex flex-col gap-4 z-40 transform -rotate-1 origin-top">
          {visibleSections.map((section, idx) => (
             <a
               key={section.id}
               href={`#${section.id}`}
               onClick={() => setMobileMenuOpen(false)}
               className="text-lg font-heading font-bold uppercase text-[#171717] dark:text-white pb-2 border-b border-[#E5E1D8] dark:border-[#3A3F4C]"
             >
               <span className="font-mono text-sm text-[#F26B5B] mr-4">{String(idx + 1).padStart(2, '0')}</span>
               {section.id}
             </a>
          ))}
        </div>
      )}
    </header>
  );
};
