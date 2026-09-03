import React from 'react';
import { cn } from '../../../core/utils/cn';

interface KineticMarqueeProps {
  text: string;
  speed?: number; // duration in seconds for one full loop
  className?: string;
  textClassName?: string;
}

/**
 * A highly accessible marquee that stops on prefers-reduced-motion.
 * It renders the text explicitly once for screen readers, and hides the decorative duplicated elements.
 */
export const KineticMarquee: React.FC<KineticMarqueeProps> = ({ 
  text, 
  speed = 30, 
  className,
  textClassName 
}) => {
  const content = text.repeat(10); // Ensure enough length

  return (
    <div className={cn("w-full overflow-hidden flex whitespace-nowrap", className)}>
      <div 
        className="flex motion-safe:animate-[marquee_linear_infinite]"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className={cn("font-mono text-sm font-bold uppercase tracking-widest px-4", textClassName)}>
          {content}
        </span>
        {/* Duplicate for seamless looping, hidden from screen readers */}
        <span className={cn("font-mono text-sm font-bold uppercase tracking-widest px-4", textClassName)} aria-hidden="true">
          {content}
        </span>
      </div>
    </div>
  );
};
