import React from 'react';
import { cn } from '../../../core/utils/cn';
import { MonoformRule } from './MonoformRule';

type DepthLevel = 'canvas' | 'surface' | 'inset' | 'raised';

interface MonoformSurfaceProps {
  children: React.ReactNode;
  className?: string;
  depth?: DepthLevel;
  borderTop?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  id?: string;
}

export const MonoformSurface: React.FC<MonoformSurfaceProps> = ({
  children,
  className,
  depth = 'canvas',
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  id
}) => {
  const depthMap: Record<DepthLevel, string> = {
    canvas: 'bg-[#ECEAE4] dark:bg-[#151716]',
    surface: 'bg-[#F5F3ED] dark:bg-[#1C1F1E]',
    inset: 'bg-[#E4E2DA] dark:bg-[#242725] shadow-[inset_0_4px_12px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_4px_12px_rgba(0,0,0,0.2)]',
    raised: 'bg-[#FAF9F5] dark:bg-[#202321] shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.15)] z-10',
  };

  return (
    <div 
      id={id}
      className={cn(
        "relative transition-colors duration-500",
        depthMap[depth],
        className
      )}
    >
      {borderTop && <MonoformRule className="absolute top-0 left-0 right-0" />}
      {borderBottom && <MonoformRule className="absolute bottom-0 left-0 right-0" />}
      {borderLeft && <MonoformRule orientation="vertical" className="absolute top-0 bottom-0 left-0" />}
      {borderRight && <MonoformRule orientation="vertical" className="absolute top-0 bottom-0 right-0" />}
      
      {children}
    </div>
  );
};
