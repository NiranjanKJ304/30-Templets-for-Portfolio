import type { ThemeTokens } from '../../core/types/theme';

export const paperfoldTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Folded paper aesthetic
    background: '#F3EFE7',
    surface: '#FFFDF7',
    surfaceSubtle: '#FAF6EE',
    surfaceElevated: '#FFFFFF',

    primary: '#66717A', // Slate
    primaryForeground: '#FFFDF7',
    primaryMuted: 'rgba(102, 113, 122, 0.1)',

    accent: '#C86B52', // Terracotta
    accentForeground: '#FFFDF7',

    textPrimary: '#202020', // Ink
    textSecondary: '#66717A', // Slate
    textMuted: '#806879', // Muted Plum

    border: '#E8E3D8',
    borderSubtle: '#F0EBE0',
    ring: '#7D9EAF', // Dusty Blue
  },
  typography: {
    fontHeading: '"Playfair Display", "Times New Roman", serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-10 lg:px-20',
    sectionSpacing: 'py-20 md:py-32',
    elementGap: 'gap-8 md:gap-12',
  },
  radius: {
    sm: '0px', 
    md: '0px', 
    lg: '0px',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 10px rgba(0,0,0,0.03)',
    md: '0 4px 20px rgba(0,0,0,0.04)',
    lg: '0 10px 40px rgba(0,0,0,0.05)',
  },
  animation: 'subtle',
  density: 'comfortable',
};
