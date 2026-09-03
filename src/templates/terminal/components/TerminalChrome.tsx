import React from 'react';

interface TerminalChromeProps {
  title?: string;
  children: React.ReactNode;
}

export const TerminalChrome: React.FC<TerminalChromeProps> = ({ title = 'portfolio ~ bash', children }) => {
  return (
    <div className="min-h-screen bg-[#F0F2EC] dark:bg-[#0D1110] text-[#18201B] dark:text-[#DCE4DC] font-mono selection:bg-[#79C98B] selection:text-[#0D1110] relative z-0 flex flex-col pt-2 pb-2 px-2 sm:pt-4 sm:pb-4 sm:px-4 md:pt-8 md:pb-8 md:px-8">
      
      {/* Background Texture - Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20 mix-blend-overlay dark:mix-blend-screen" aria-hidden="true" 
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%)',
          backgroundSize: '100% 4px',
        }}
      />
      
      {/* Terminal Window */}
      <div className="flex-1 w-full max-w-[1200px] mx-auto bg-[#FAFBF7] dark:bg-[#151A18] border border-[#C9D0C9] dark:border-[#303833] shadow-lg flex flex-col relative z-10 overflow-hidden">
        
        {/* Terminal Top Bar */}
        <div className="h-8 w-full bg-[#E7ECE5] dark:bg-[#1B211E] border-b border-[#C9D0C9] dark:border-[#303833] flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#9B463F] dark:bg-[#C97065]" />
            <div className="w-3 h-3 rounded-full bg-[#967126] dark:bg-[#D4AD68]" />
            <div className="w-3 h-3 rounded-full bg-[#397A4A] dark:bg-[#79C98B]" />
          </div>
          <div className="font-mono text-[10px] text-[#5F6861] dark:text-[#9CA39D] absolute left-1/2 -translate-x-1/2 select-none">
            {title}
          </div>
          <div className="w-16" /> {/* Spacer for centering */}
        </div>
        
        {/* Terminal Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col">
          {children}
        </div>
        
      </div>
    </div>
  );
};
