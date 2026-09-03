import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PrismFacetProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'solid' | 'outline' | 'overlay';
  colorHint?: 'blue' | 'coral' | 'violet' | 'cyan' | 'gold' | 'rose' | 'neutral';
  cut?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'both-right' | 'both-left' | 'none';
}

export const PrismFacet: React.FC<PrismFacetProps> = ({ 
  children, 
  className, 
  variant = 'solid',
  colorHint = 'neutral',
  cut = 'top-right'
}) => {
  const getClipPath = () => {
    switch (cut) {
      case 'top-left': return 'polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)';
      case 'top-right': return 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)';
      case 'bottom-left': return 'polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))';
      case 'bottom-right': return 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)';
      case 'both-right': return 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)';
      case 'both-left': return 'polygon(40px 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px), 0 40px)';
      case 'none':
      default: return 'none';
    }
  };

  const getVariantStyles = () => {
    const isDark = document.documentElement.classList.contains('dark');
    
    const colors = {
      blue: isDark ? '#7187E1' : '#4566C7',
      coral: isDark ? '#E17A63' : '#D46750',
      violet: isDark ? '#A28AC7' : '#8069AA',
      cyan: isDark ? '#82B0B5' : '#6C9CA3',
      gold: isDark ? '#D9C276' : '#D2B45C',
      rose: isDark ? '#C29FAA' : '#B58D9B',
      neutral: isDark ? '#1A1E1F' : '#FCFBF7',
    };

    const activeColor = colors[colorHint];

    if (variant === 'solid') {
      return {
        backgroundColor: colorHint === 'neutral' ? activeColor : activeColor,
        color: colorHint === 'neutral' ? (isDark ? '#F1F0EA' : '#171A1B') : (isDark ? '#111415' : '#FCFBF7')
      };
    }
    
    if (variant === 'outline') {
      return {
        backgroundColor: 'transparent',
        border: `2px solid ${activeColor}`,
      };
    }

    if (variant === 'overlay') {
      return {
        backgroundColor: activeColor,
        opacity: 0.1,
      };
    }

    return {};
  };

  if (variant === 'overlay') {
    return (
      <div 
        className={cn("absolute inset-0 pointer-events-none", className)}
        style={{ ...getVariantStyles(), clipPath: getClipPath() }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div 
      className={cn("relative p-6 md:p-12 overflow-hidden", className)}
      style={{ ...getVariantStyles(), clipPath: getClipPath() }}
    >
      {children}
    </div>
  );
};
