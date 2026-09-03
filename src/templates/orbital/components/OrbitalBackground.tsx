import React from 'react';

export const OrbitalBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#EEF2F1] dark:bg-[#101819]"
      aria-hidden="true"
    >
      {/* Central ambient glow */}
      <div className="absolute top-[20vh] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-gradient-to-b from-[#FFFFFF]/40 to-transparent dark:from-[#182221]/40 rounded-full blur-3xl opacity-50"></div>
      
      {/* Large faint background rings */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] rounded-full border-[1px] border-[#B9C9C6]/20 dark:border-[#40504D]/20"></div>
      <div className="absolute top-[10vh] left-1/2 -translate-x-1/2 w-[160vw] h-[160vw] max-w-[1600px] max-h-[1600px] rounded-full border-[1px] border-[#B9C9C6]/10 dark:border-[#40504D]/10"></div>
    </div>
  );
};
