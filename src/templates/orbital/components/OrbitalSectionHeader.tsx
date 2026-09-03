import React from 'react';

interface OrbitalSectionHeaderProps {
  title: string;
}

export const OrbitalSectionHeader: React.FC<OrbitalSectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-12 md:mb-20 flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-[#2F7C73] dark:border-[#66B8A9] rotate-45 mb-6"></div>
      <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#172326] dark:text-[#F0F4F1] uppercase tracking-wide">
        {title}
      </h2>
    </div>
  );
};
